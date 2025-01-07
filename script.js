const corsEnabler = 'https://cors.janniksohn.dev/';
// const corsEnabler = 'http://127.0.0.1:8080/';

const loader = document.querySelector('#loader');
const modal = document.querySelector('#modal');
const modalContent = modal.querySelector('div');
const factRepeat = document.querySelector('#fact-repeat');
const wordRepeat = document.querySelector('#word-repeat');
modal.querySelector('button').addEventListener('click', _ => modal.classList.remove('open'));
document.querySelector('#fact-btn').addEventListener('click', getFact);
document.querySelector('#word-btn').addEventListener('click', getWord);
document.querySelector('#remove-repeat').addEventListener('click', clearCaches);
factRepeat.addEventListener('click', getKnownFact);
wordRepeat.addEventListener('click', getKnownWord);

document.body.style.height = window.innerHeight;

let words = localStorage.getItem('words');
if (words === null) {
    words = localStorage.setItem('words', JSON.stringify([]));
}

let facts = localStorage.getItem('facts');
if (facts === null) {
    facts = localStorage.setItem('facts', JSON.stringify([]));
}

checkRepeats();

function checkRepeats() {
    let words = localStorage.getItem('words');
    wordRepeat.disabled = JSON.parse(words).length === 0;

    let facts = localStorage.getItem('facts');
    factRepeat.disabled = JSON.parse(facts).length === 0;
}

function getFact() {
    const sitemap = corsEnabler + 'https://www.taschenhirn.de/page-sitemap.xml'

    const linksPromise = [];
    const info = [];

    loader.classList.add('open');

    fetch(sitemap)
        .then(sitemap => sitemap.text())
        .then(text => {
            text.split('<loc>').forEach((item, index) => {
                if (index === 0)
                    return;

                const link = item.split('</loc>')[0];
                const slashCount = (link.match(/\//g) || []).length;

                if (slashCount < 5)
                    return;

                linksPromise.push(
                    fetch(corsEnabler + link).then(site => site.text()).then(content => {
                        const doc = new DOMParser().parseFromString(content, "text/html");
                        const dataTables = doc.querySelectorAll('table.dataList');

                        if (dataTables === null)
                            return;

                        dataTables.forEach(table => {
                            const headers = table.querySelectorAll('thead tr th');
                            const contentRows = table.querySelectorAll('tbody tr');

                            contentRows.forEach(rows => {
                                const cols = rows.querySelectorAll('td');

                                let res = {};

                                cols.forEach((col, ind) => {
                                    if (col.innerText.length === 0)
                                        return;

                                    res[headers[ind].innerText.replaceAll('\n', ' ').trim()] = col.innerText.replaceAll('\n', '').trim();
                                });

                                if (Object.keys(res).length > 0)
                                    info.push(res);
                            });
                        });
                    })
                );
            });
        })
        .then(_ => {
            Promise.all(linksPromise).then(_ => {
                if (info.length === 0)
                    return;

                const randomIndex = Math.floor(Math.random() * info.length);

                Array.from(modalContent.children).forEach(child => {
                    if (child instanceof HTMLButtonElement)
                        return;

                    child.remove();
                });

                const items = [];

                const facts = JSON.parse(localStorage.getItem('facts'));
                facts.push(info[randomIndex]);
                localStorage.setItem('facts', JSON.stringify(facts));

                checkRepeats();

                Object.entries(info[randomIndex]).forEach(([key, value]) => {
                    const para = document.createElement('p');
                    para.innerHTML = `<b>${key}:</b> ${value}`;
                    items.push(para);
                });

                items.reverse().forEach(item => {
                    modalContent.prepend(item);
                });

                loader.classList.remove('open');
                modal.classList.add('open');
            });
        });
}

function getWord() {
    const link = corsEnabler + 'https://neueswort.de/fremdwoerter-liste/';

    loader.classList.add('open');

    fetch(link).then(site => site.text()).then(content => {
        const doc = new DOMParser().parseFromString(content, "text/html");
        
        const links = doc.querySelectorAll('.tagindex li a');

        if (links.length === 0)
            return;

        const randomIndex = Math.floor(Math.random() * links.length);
        const href = links[randomIndex].getAttribute('href');

        loader.classList.remove('open');

        const words = JSON.parse(localStorage.getItem('words'));
        words.push(href);
        localStorage.setItem('words', JSON.stringify(words));
        checkRepeats();

        window.location.assign(href);
    });
}

function getKnownFact() {
    const facts = JSON.parse(localStorage.getItem('facts'));
    const randomIndex = Math.floor(Math.random() * facts.length);

    Array.from(modalContent.children).forEach(child => {
        if (child instanceof HTMLButtonElement)
            return;

        child.remove();
    });

    const items = [];

    Object.entries(facts[randomIndex]).forEach(([key, value]) => {
        const para = document.createElement('p');
        para.innerHTML = `<b>${key}:</b> ${value}`;
        items.push(para);
    });

    items.reverse().forEach(item => {
        modalContent.prepend(item);
    });

    loader.classList.remove('open');
    modal.classList.add('open');
}

function getKnownWord() {
    const words = JSON.parse(localStorage.getItem('words'));
    const randomIndex = Math.floor(Math.random() * words.length);
    window.location.assign(words[randomIndex]);
}

function clearCaches() {
    localStorage.setItem('facts', JSON.stringify([]));
    localStorage.setItem('words', JSON.stringify([]));
    checkRepeats();
}
