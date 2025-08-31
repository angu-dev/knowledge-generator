const vocabularies = [
    { english: "all", german: "alle" },
    { english: "and", german: "und" },
    { english: "boy", german: "Junge" },
    { english: "car", german: "Auto" },
    { english: "cat", german: "Katze" },
    { english: "day", german: "Tag" },
    { english: "end", german: "Ende" },
    { english: "family", german: "Familie" },
    { english: "home", german: "Zuhause" },
    { english: "it", german: "es" },
    { english: "man", german: "Mann" },
    { english: "name", german: "Name" },
    { english: "one", german: "einer" },
    { english: "people", german: "Menschen" },
    { english: "read", german: "lesen" },
    { english: "school", german: "Schule" },
    { english: "speak", german: "sprechen" },
    { english: "the", german: "das" },
    { english: "this", german: "diese" },
    { english: "you", german: "Sie" },
    { english: "ask", german: "Fragen" },
    { english: "book", german: "Buch" },
    { english: "can", german: "können" },
    { english: "dog", german: "Hund" },
    { english: "eye", german: "Auge" },
    { english: "first", german: "zuerst" },
    { english: "go", german: "gehen" },
    { english: "he", german: "er" },
    { english: "child", german: "Kind" },
    { english: "in", german: "im" },
    { english: "learn", german: "lernen" },
    { english: "morning", german: "Morgen" },
    { english: "open", german: "öffnen" },
    { english: "play", german: "abspielen" },
    { english: "question", german: "Frage" },
    { english: "room", german: "Zimmer" },
    { english: "say", german: "sagen" },
    { english: "start", german: "Start" },
    { english: "today", german: "heute" },
    { english: "word", german: "Wort" },
    { english: "about", german: "Über" },
    { english: "at", german: "beim" },
    { english: "brother", german: "Bruder" },
    { english: "drink", german: "trinken" },
    { english: "easy", german: "einfach" },
    { english: "father", german: "Vater" },
    { english: "girl", german: "Mädchen" },
    { english: "help", german: "Hilfe" },
    { english: "chair", german: "Stuhl" },
    { english: "know", german: "kennt" },
    { english: "my", german: "meine" },
    { english: "new", german: "Neu" },
    { english: "paper", german: "Papier" },
    { english: "please", german: "Bitte" },
    { english: "rich", german: "Reich" },
    { english: "she", german: "sie" },
    { english: "show", german: "Show" },
    { english: "son", german: "Sohn" },
    { english: "they", german: "Sie" },
    { english: "what", german: "Was" },
    { english: "always", german: "immer" },
    { english: "be", german: "Sein" },
    { english: "body", german: "Körper" },
    { english: "careful", german: "Vorsichtig" },
    { english: "cry", german: "Schrei" },
    { english: "door", german: "Tür" },
    { english: "everything", german: "alles" },
    { english: "face", german: "Gesicht" },
    { english: "her", german: "ihr" },
    { english: "if", german: "wenn" },
    { english: "many", german: "viele" },
    { english: "no", german: "Nein" },
    { english: "pen", german: "Stift" },
    { english: "place", german: "Ort" },
    { english: "road", german: "Straße" },
    { english: "stop", german: "halt" },
    { english: "student", german: "Student" },
    { english: "two", german: "zwei" },
    { english: "want", german: "wollen" },
    { english: "where", german: "wo" },
    { english: "answer", german: "Antworten" },
    { english: "between", german: "zwischen" },
    { english: "clear", german: "klar" },
    { english: "country", german: "Land" },
    { english: "dance", german: "tanzen" },
    { english: "do", german: "tun" },
    { english: "each", german: "jeder" },
    { english: "friend", german: "Freund" },
    { english: "his", german: "seine" },
    { english: "job", german: "Job" },
    { english: "life", german: "Leben" },
    { english: "more", german: "Mehr" },
    { english: "park", german: "Park" },
    { english: "person", german: "Person" },
    { english: "ready", german: "bereit" },
    { english: "second", german: "zweite" },
    { english: "soon", german: "demnächst" },
    { english: "that", german: "Das" },
    { english: "we", german: "wir" },
    { english: "why", german: "Warum" },
    { english: "able", german: "imstande" },
    { english: "before", german: "Vor" },
    { english: "but", german: "aber" },
    { english: "clean", german: "reinigen" },
    { english: "close", german: "schließen" },
    { english: "dream", german: "Traum" },
    { english: "eight", german: "acht" },
    { english: "for", german: "zum" },
    { english: "hand", german: "Hand" },
    { english: "inside", german: "Innerhalb" },
    { english: "now", german: "jetzt" },
    { english: "or", german: "oder" },
    { english: "picture", german: "Bild" },
    { english: "river", german: "Fluss" },
    { english: "ship", german: "Schiff" },
    { english: "shop", german: "Geschäft" },
    { english: "sit", german: "sitzen" },
    { english: "table", german: "Tabelle" },
    { english: "very", german: "sehr" },
    { english: "write", german: "schreiben" },
    { english: "air", german: "Luft" },
    { english: "black", german: "schwarz" },
    { english: "cinema", german: "Kino" },
    { english: "daughter", german: "Tochter" },
    { english: "eat", german: "Essen" },
    { english: "from", german: "von" },
    { english: "good", german: "gut" },
    { english: "head", german: "Kopf" },
    { english: "cheese", german: "Käse" },
    { english: "important", german: "wichtig" },
    { english: "land", german: "Land" },
    { english: "money", german: "Geld" },
    { english: "pay", german: "Zahlen" },
    { english: "problem", german: "Problem" },
    { english: "run", german: "Lauf" },
    { english: "same", german: "gleich" },
    { english: "see", german: "sehen" },
    { english: "send", german: "senden" },
    { english: "thing", german: "Sache" },
    { english: "work", german: "Arbeit" },
    { english: "any", german: "irgendein" },
    { english: "as", german: "wie" },
    { english: "better", german: "besser" },
    { english: "cold", german: "kalt" },
    { english: "come", german: "Kommen Sie" },
    { english: "doctor", german: "Arzt" },
    { english: "find", german: "finden" },
    { english: "game", german: "Spiel" },
    { english: "idea", german: "Idee" },
    { english: "kind", german: "nett" },
    { english: "live", german: "(v) Leben" },
    { english: "make", german: "machen" },
    { english: "peace", german: "Frieden" },
    { english: "popular", german: "Beliebt" },
    { english: "right", german: "Recht" },
    { english: "small", german: "klein" },
    { english: "so", german: "damit" },
    { english: "some", german: "etwas" },
    { english: "there", german: "Dort" },
    { english: "wait", german: "warten" },
    { english: "again", german: "nochmal" },
    { english: "back", german: "zurück" },
    { english: "could", german: "könnten" },
    { english: "document", german: "Dokument" },
    { english: "egg", german: "Ei" },
    { english: "fire", german: "Feuer" },
    { english: "give", german: "geben" },
    { english: "chance", german: "Chance" },
    { english: "information", german: "Information" },
    { english: "light", german: "Licht" },
    { english: "may", german: "kann" },
    { english: "often", german: "häufig" },
    { english: "prefer", german: "bevorzugen" },
    { english: "put", german: "stellen" },
    { english: "red", german: "rot" },
    { english: "stone", german: "Stein" },
    { english: "such", german: "eine solche" },
    { english: "think", german: "Überlegen" },
    { english: "understand", german: "verstehen" },
    { english: "visit", german: "Besuch" },
    { english: "around", german: "um" },
    { english: "best", german: "Beste" },
    { english: "call", german: "Anruf" },
    { english: "cut", german: "Schnitt" },
    { english: "dinner", german: "Abendessen" },
    { english: "down", german: "Nieder" },
    { english: "explain", german: "erklären" },
    { english: "get", german: "bekommen" },
    { english: "interesting", german: "interessant" },
    { english: "long", german: "lange" },
    { english: "move", german: "Bewegung" },
    { english: "out", german: "aus" },
    { english: "page", german: "Seite" },
    { english: "reach", german: "erreichen" },
    { english: "rest", german: "sich ausruhen" },
    { english: "set", german: "einstellen" },
    { english: "should", german: "sollte" },
    { english: "stand", german: "Stand" },
    { english: "time", german: "Zeit" },
    { english: "up", german: "oben" },
    { english: "age", german: "Alter" },
    { english: "because", german: "weil" },
    { english: "big", german: "groß" },
    { english: "camera", german: "Kamera" },
    { english: "city", german: "Stadt" },
    { english: "dress", german: "Kleid" },
    { english: "evening", german: "Abend" },
    { english: "free", german: "kostenlos" },
    { english: "have", german: "haben" },
    { english: "ill", german: "krank" },
    { english: "like", german: "mögen" },
    { english: "mother", german: "Mutter" },
    { english: "old", german: "alt" },
    { english: "police", german: "Polizei" },
    { english: "remember", german: "merken" },
    { english: "street", german: "Straße" },
    { english: "study", german: "Studie" },
    { english: "teacher", german: "Lehrer" },
    { english: "voice", german: "Stimme" },
    { english: "water", german: "Wasser" },
    { english: "also", german: "ebenfalls" },
    { english: "box", german: "Box" },
    { english: "class", german: "Klasse" },
    { english: "difficult", german: "schwierig" },
    { english: "drive", german: "Fahrt" },
    { english: "food", german: "Lebensmittel" },
    { english: "great", german: "großartig" },
    { english: "happy", german: "glücklich" },
    { english: "change", german: "Veränderung" },
    { english: "juice", german: "Saft" },
    { english: "meet", german: "Treffen" },
    { english: "need", german: "brauchen" },
    { english: "pretty", german: "ziemlich" },
    { english: "quite", german: "ziemlich" },
    { english: "real", german: "echt" },
    { english: "sad", german: "traurig" },
    { english: "spring", german: "Frühling" },
    { english: "star", german: "Star" },
    { english: "take", german: "nehmen" },
    { english: "yes", german: "Ja" },
    { english: "action", german: "Aktion" },
    { english: "alone", german: "allein" },
    { english: "breakfast", german: "Frühstück" },
    { english: "continue", german: "fortsetzen" },
    { english: "dead", german: "tot" },
    { english: "enjoy", german: "genießen" },
    { english: "full", german: "voll" },
    { english: "garden", german: "Garten" },
    { english: "house", german: "Haus" },
    { english: "journey", german: "Reise" },
    { english: "much", german: "viel" },
    { english: "nothing", german: "nichts" },
    { english: "phone", german: "Telefon" },
    { english: "price", german: "Preis" },
    { english: "result", german: "Ergebnis" },
    { english: "sister", german: "Schwester" },
    { english: "sun", german: "Sonne" },
    { english: "tell", german: "sagen" },
    { english: "view", german: "Aussicht" },
    { english: "with", german: "mit" },
    { english: "against", german: "gegen" },
    { english: "bus", german: "Bus" },
    { english: "company", german: "Unternehmen" },
    { english: "desert", german: "(n) Wüste" },
    { english: "expensive", german: "teuer" },
    { english: "flower", german: "Blume" },
    { english: "green", german: "Grün" },
    { english: "church", german: "Kirche" },
    { english: "impossible", german: "unmöglich" },
    { english: "leave", german: "verlassen" },
    { english: "month", german: "Monat" },
    { english: "on", german: "auf" },
    { english: "plan", german: "planen" },
    { english: "possible", german: "möglich" },
    { english: "return", german: "Rückkehr" },
    { english: "save", german: "sparen" },
    { english: "sea", german: "Meer" },
    { english: "something", german: "etwas" },
    { english: "together", german: "zusammen" },
    { english: "woman", german: "Frau" },
    { english: "anything", german: "etwas" },
    { english: "army", german: "Heer" },
    { english: "bad", german: "Schlecht" },
    { english: "cover", german: "Startseite" },
    { english: "culture", german: "Kultur" },
    { english: "decision", german: "Entscheidung" },
    { english: "example", german: "Beispiel" },
    { english: "feel", german: "Gefühl" },
    { english: "how", german: "Wie" },
    { english: "island", german: "Insel" },
    { english: "member", german: "Mitglied" },
    { english: "next", german: "Nächster" },
    { english: "position", german: "Position" },
    { english: "present", german: "(adj) Geschenk" },
    { english: "record", german: "(n) Aufzeichnung" },
    { english: "sleep", german: "Schlaf" },
    { english: "sweet", german: "Süss" },
    { english: "try", german: "Versuchen" },
    { english: "under", german: "unter" },
    { english: "world", german: "Welt" },
    { english: "after", german: "nach" },
    { english: "bed", german: "Bett" },
    { english: "buy", german: "Kaufen" },
    { english: "catch", german: "Fang" },
    { english: "corner", german: "Ecke" },
    { english: "distance", german: "Entfernung" },
    { english: "education", german: "Bildung" },
    { english: "fast", german: "schnell" },
    { english: "here", german: "Hier" },
    { english: "interest", german: "Interesse" },
    { english: "letter", german: "Brief" },
    { english: "never", german: "noch nie" },
    { english: "part", german: "Teil" },
    { english: "president", german: "Präsident" },
    { english: "round", german: "runden" },
    { english: "several", german: "mehrere" },
    { english: "sound", german: "Klang" },
    { english: "story", german: "Geschichte" },
    { english: "talk", german: "sich unterhalten" },
    { english: "week", german: "Woche" },
    { english: "almost", german: "fast" },
    { english: "bread", german: "Brot" },
    { english: "control", german: "Steuerung" },
    { english: "dear", german: "sehr geehrter" },
    { english: "every", german: "jeder" },
    { english: "few", german: "wenige" },
    { english: "gold", german: "Gold" },
    { english: "chief", german: "Chef" },
    { english: "invite", german: "einladen" },
    { english: "late", german: "spät" },
    { english: "most", german: "die meisten" },
    { english: "only", german: "nur" },
    { english: "product", german: "Produkt" },
    { english: "public", german: "Öffentlichkeit" },
    { english: "receive", german: "erhalten" },
    { english: "sorry", german: "Es tut uns leid" },
    { english: "strong", german: "stark" },
    { english: "then", german: "dann" },
    { english: "too", german: "auch" },
    { english: "way", german: "Weg" },
    { english: "across", german: "über" },
    { english: "art", german: "Kunst" },
    { english: "bring", german: "bringen" },
    { english: "carry", german: "tragen" },
    { english: "confirm", german: "bestätigen" },
    { english: "die", german: "sterben" },
    { english: "east", german: "Osten" },
    { english: "group", german: "Gruppe" },
    { english: "hope", german: "Hoffnung" },
    { english: "industry", german: "Industrie" },
    { english: "look", german: "aussehen" },
    { english: "must", german: "Muss" },
    { english: "own", german: "besitzen" },
    { english: "personal", german: "persönlich" },
    { english: "reason", german: "Grund" },
    { english: "service", german: "Bedienung" },
    { english: "shall", german: "soll" },
    { english: "stay", german: "bleibe" },
    { english: "their", german: "ihr" },
    { english: "wife", german: "Ehefrau" },
    { english: "away", german: "Weg" },
    { english: "beautiful", german: "schön" },
    { english: "care", german: "Pflege" },
    { english: "cost", german: "Kosten" },
    { english: "deep", german: "tief" },
    { english: "enough", german: "genug" },
    { english: "fight", german: "kämpfen" },
    { english: "garage", german: "Garage" },
    { english: "into", german: "in" },
    { english: "keep", german: "behalten" },
    { english: "miss", german: "Fräulein" },
    { english: "other", german: "andere" },
    { english: "player", german: "Spieler" },
    { english: "rather", german: "lieber" },
    { english: "remain", german: "bleiben übrig" },
    { english: "side", german: "Seite" },
    { english: "south", german: "Süd" },
    { english: "true", german: "wahr" },
    { english: "use", german: "verwenden" },
    { english: "who", german: "wer" },
    { english: "already", german: "bereits" },
    { english: "become", german: "werden" },
    { english: "cause", german: "Ursache" },
    { english: "certain", german: "sicher" },
    { english: "describe", german: "beschreiben" },
    { english: "dry", german: "trocken" },
    { english: "expect", german: "erwarten von" },
    { english: "fact", german: "Tatsache" },
    { english: "hard", german: "schwer" },
    { english: "include", german: "einschließen" },
    { english: "let", german: "Lassen" },
    { english: "moment", german: "Moment" },
    { english: "power", german: "Leistung" },
    { english: "provide", german: "zur Verfügung stellen" },
    { english: "report", german: "Bericht" },
    { english: "seat", german: "Sitz" },
    { english: "single", german: "Single" },
    { english: "system", german: "System" },
    { english: "through", german: "durch" },
    { english: "which", german: "welche" },
    { english: "apple", german: "Apfel" },
    { english: "blue", german: "Blau" },
    { english: "clock", german: "Uhr" },
    { english: "colour", german: "Farbe" },
    { english: "different", german: "anders" },
    { english: "earth", german: "Erde" },
    { english: "film", german: "Film" },
    { english: "glad", german: "froh" },
    { english: "hour", german: "Stunde" },
    { english: "just", german: "gerade" },
    { english: "love", german: "Liebe" },
    { english: "number", german: "Nummer" },
    { english: "pencil", german: "Bleistift" },
    { english: "quick", german: "schnell" },
    { english: "rain", german: "Regen" },
    { english: "simple", german: "einfach" },
    { english: "summer", german: "Sommer" },
    { english: "town", german: "Stadt" },
    { english: "tree", german: "Baum" },
    { english: "window", german: "Fenster" },
    { english: "address", german: "Adresse" },
    { english: "building", german: "Gebäude" },
    { english: "computer", german: "Computer" },
    { english: "cross", german: "Kreuz" },
    { english: "desk", german: "Schreibtisch" },
    { english: "ear", german: "Ohr" },
    { english: "fish", german: "Fisch" },
    { english: "glass", german: "Glas" },
    { english: "ice", german: "Eis" },
    { english: "key", german: "Schlüssel" },
    { english: "minute", german: "(n) Minute" },
    { english: "office", german: "Büro" },
    { english: "parent", german: "Elternteil" },
    { english: "post", german: "Post" },
    { english: "rock", german: "Felsen" },
    { english: "search", german: "Suche" },
    { english: "sport", german: "Sport" },
    { english: "tea", german: "Tee" },
    { english: "valley", german: "Senke" },
    { english: "walk", german: "gehen" },
    { english: "airport", german: "Flughafen" },
    { english: "baby", german: "Baby" },
    { english: "card", german: "Karte" },
    { english: "central", german: "zentral" },
    { english: "direction", german: "Richtung" },
    { english: "dollar", german: "Dollar" },
    { english: "fruit", german: "Obst" },
    { english: "gift", german: "Geschenk" },
    { english: "high", german: "hoch" },
    { english: "illness", german: "Erkrankung" },
    { english: "milk", german: "Milch" },
    { english: "not", german: "nicht" },
    { english: "piece", german: "Stück" },
    { english: "protect", german: "schützen" },
    { english: "race", german: "Rennen" },
    { english: "since", german: "schon seit" },
    { english: "slow", german: "schleppend" },
    { english: "smile", german: "Lächeln" },
    { english: "ticket", german: "Fahrkarte" },
    { english: "well", german: "Gut" },
    { english: "accident", german: "Unfall" },
    { english: "blood", german: "Blut" },
    { english: "business", german: "Geschäft" },
    { english: "during", german: "während" },
    { english: "even", german: "sogar" },
    { english: "floor", german: "Fußboden" },
    { english: "general", german: "Allgemeines" },
    { english: "choose", german: "wählen" },
    { english: "inform", german: "informieren" },
    { english: "little", german: "wenig" },
    { english: "meeting", german: "Treffen" },
    { english: "order", german: "Auftrag" },
    { english: "party", german: "Party" },
    { english: "pink", german: "Rosa" },
    { english: "reply", german: "Antworten" },
    { english: "snow", german: "Schnee" },
    { english: "sugar", german: "Zucker" },
    { english: "travel", german: "Reise" },
    { english: "virus", german: "Virus" },
    { english: "watch", german: "Uhr" },
    { english: "another", german: "Ein weiterer" },
    { english: "believe", german: "glauben" },
    { english: "both", german: "beide" },
    { english: "crazy", german: "verrückt" },
    { english: "cup", german: "Tasse" },
    { english: "decide", german: "entscheiden" },
    { english: "ever", german: "je" },
    { english: "field", german: "Feld" },
    { english: "heart", german: "Herz" },
    { english: "imagine", german: "vorstellen" },
    { english: "line", german: "Linie" },
    { english: "meat", german: "Fleisch" },
    { english: "over", german: "Über" },
    { english: "pull", german: "ziehen" },
    { english: "ring", german: "Ring" },
    { english: "sell", german: "verkaufen" },
    { english: "similar", german: "ähnlich" },
    { english: "speed", german: "Geschwindigkeit" },
    { english: "than", german: "als" },
    { english: "your", german: "Ihre" },
    { english: "above", german: "über" },
    { english: "begin", german: "Start" },
    { english: "century", german: "Jahrhundert" },
    { english: "consider", german: "Erwägen" },
    { english: "dangerous", german: "gefährlich" },
    { english: "dark", german: "dunkel" },
    { english: "exchange", german: "Austausch" },
    { english: "government", german: "Regierung" },
    { english: "hear", german: "hören" },
    { english: "jump", german: "springen" },
    { english: "material", german: "Material" },
    { english: "near", german: "in der Nähe von" },
    { english: "past", german: "Vergangenheit" },
    { english: "produce", german: "produzieren" },
    { english: "remove", german: "entfernen" },
    { english: "secret", german: "Geheimnis" },
    { english: "song", german: "Lied" },
    { english: "television", german: "Fernsehen" },
    { english: "value", german: "Wert" },
    { english: "when", german: "wann" },
    { english: "arm", german: "Arm" },
    { english: "behind", german: "hinter" },
    { english: "case", german: "Fall" },
    { english: "collect", german: "sammeln" },
    { english: "draw", german: "zeichnen" },
    { english: "examine", german: "untersuchen" },
    { english: "fall", german: "fallen" },
    { english: "grow", german: "wachsen" },
    { english: "immediately", german: "sofort" },
    { english: "low", german: "niedrig" },
    { english: "mind", german: "Verstand" },
    { english: "off", german: "aus" },
    { english: "pass", german: "bestehen" },
    { english: "radio", german: "Radio" },
    { english: "shoe", german: "Schuh" },
    { english: "station", german: "Bahnhof" },
    { english: "sure", german: "sicher" },
    { english: "test", german: "Prüfung" },
    { english: "usual", german: "üblich" },
    { english: "while", german: "während" },
    { english: "ago", german: "vor" },
    { english: "along", german: "entlang" },
    { english: "bear", german: "Bär" },
    { english: "condition", german: "Bedingung" },
    { english: "direct", german: "Direkte" },
    { english: "edge", german: "Kante" },
    { english: "fine", german: "fein" },
    { english: "half", german: "halb" },
    { english: "chicken", german: "Hähnchen" },
    { english: "increase", german: "erhöhen" },
    { english: "magazine", german: "Zeitschrift" },
    { english: "nature", german: "Natur" },
    { english: "plate", german: "Teller" },
    { english: "poor", german: "Arm" },
    { english: "respect", german: "Respekt" },
    { english: "sharp", german: "Scharf" },
    { english: "sometimes", german: "manchmal" },
    { english: "still", german: "immer noch" },
    { english: "tall", german: "hoch" },
    { english: "would", german: "würde" },
    { english: "add", german: "hinzufügen" },
    { english: "among", german: "unter" },
    { english: "built", german: "gebaut" },
    { english: "common", german: "verbreitet" },
    { english: "depend", german: "abhängen" },
    { english: "early", german: "früh" },
    { english: "fly", german: "Fliege" },
    { english: "happen", german: "geschehen" },
    { english: "check", german: "prüfen" },
    { english: "introduce", german: "vorstellen" },
    { english: "less", german: "weniger" },
    { english: "mark", german: "Kennzeichen" },
    { english: "patient", german: "geduldig" },
    { english: "perhaps", german: "vielleicht" },
    { english: "rise", german: "erhebt euch" },
    { english: "sense", german: "Sinn" },
    { english: "short", german: "kurz" },
    { english: "state", german: "Zustand" },
    { english: "turn", german: "Wende" },
    { english: "will", german: "werden" },
    { english: "act", german: "Handlung" },
    { english: "appear", german: "erscheinen" },
    { english: "break", german: "Unterbrechung" },
    { english: "course", german: "Kurs" },
    { english: "court", german: "Gericht" },
    { english: "discuss", german: "diskutieren" },
    { english: "effect", german: "bewirken" },
    { english: "form", german: "bilden" },
    { english: "hold", german: "halt" },
    { english: "insect", german: "Insekt" },
    { english: "mean", german: "bedeuten" },
    { english: "once", german: "Einmal" },
    { english: "purpose", german: "Zweck" },
    { english: "really", german: "Ja wirklich" },
    { english: "ride", german: "Reiten" },
    { english: "situation", german: "Situation" },
    { english: "success", german: "Erfolg" },
    { english: "though", german: "obwohl" },
    { english: "upon", german: "auf" },
    { english: "war", german: "Krieg" },
    { english: "afternoon", german: "Nachmittag" },
    { english: "busy", german: "beschäftigt" },
    { english: "coffee", german: "Kaffee" },
    { english: "detail", german: "Detail" },
    { english: "especially", german: "insbesondere" },
    { english: "finish", german: "Fertig" },
    { english: "ground", german: "Boden" },
    { english: "holiday", german: "Urlaub" },
    { english: "choice", german: "Wahl" },
    { english: "kitchen", german: "Küche" },
    { english: "lesson", german: "Lektion" },
    { english: "music", german: "Musik" },
    { english: "orange", german: "Orange" },
    { english: "perfect", german: "perfekt" },
    { english: "request", german: "Anfrage" },
    { english: "season", german: "Jahreszeit" },
    { english: "sick", german: "krank" },
    { english: "tomorrow", german: "Morgen" },
    { english: "welcome", german: "herzlich willkommen" },
    { english: "yesterday", german: "gestern" },
    { english: "agree", german: "zustimmen" },
    { english: "bridge", german: "Brücke" },
    { english: "cake", german: "Kuchen" },
    { english: "customer", german: "Kunde" },
    { english: "date", german: "Datum" },
    { english: "enter", german: "eingeben" },
    { english: "future", german: "Zukunft" },
    { english: "gentleman", german: "Gentleman" },
    { english: "hair", german: "Haar" },
    { english: "image", german: "Bild" },
    { english: "language", german: "Sprache" },
    { english: "market", german: "Markt" },
    { english: "plane", german: "Flugzeug" },
    { english: "private", german: "Privat" },
    { english: "restaurant", german: "Restaurant" },
    { english: "size", german: "Größe" },
    { english: "sky", german: "Himmel" },
    { english: "smart", german: "Clever" },
    { english: "thank", german: "danken" },
    { english: "weather", german: "Wetter" },
    { english: "actor", german: "Darsteller" },
    { english: "bottle", german: "Flasche" },
    { english: "cloth", german: "Stoff" },
    { english: "coat", german: "Mantel" },
    { english: "destroy", german: "zerstören" },
    { english: "everywhere", german: "überall" },
    { english: "finger", german: "Finger" },
    { english: "guide", german: "leiten" },
    { english: "improve", german: "verbessern" },
    { english: "knife", german: "Messer" },
    { english: "large", german: "groß" },
    { english: "mistake", german: "Fehler" },
    { english: "ocean", german: "Ozean" },
    { english: "plant", german: "Pflanze" },
    { english: "repeat", german: "wiederholen" },
    { english: "salt", german: "Salz" },
    { english: "special", german: "Besondere" },
    { english: "teach", german: "lehren" },
    { english: "uncle", german: "Onkel" },
    { english: "winter", german: "Winter" },
    { english: "angry", german: "wütend" },
    { english: "article", german: "Artikel" },
    { english: "build", german: "bauen" },
    { english: "dirty", german: "dreckig" },
    { english: "except", german: "außer" },
    { english: "famous", german: "berühmt" },
    { english: "gas", german: "Gas" },
    { english: "hotel", german: "Hotel" },
    { english: "cheap", german: "billig" },
    { english: "interview", german: "Interview" },
    { english: "moon", german: "Mond" },
    { english: "nice", german: "nett" },
    { english: "prepare", german: "bereiten" },
    { english: "prison", german: "Gefängnis" },
    { english: "rice", german: "Reis" },
    { english: "seem", german: "scheinen" },
    { english: "skirt", german: "Rock" },
    { english: "strange", german: "seltsam" },
    { english: "train", german: "Zug" },
    { english: "warm", german: "warm" },
    { english: "account", german: "Konto" },
    { english: "bird", german: "Vogel" },
    { english: "cloud", german: "Wolke" },
    { english: "comfortable", german: "gemütlich" },
    { english: "damage", german: "Schaden" },
    { english: "dust", german: "Staub" },
    { english: "exercise", german: "Übung" },
    { english: "favourite", german: "Lieblings" },
    { english: "hospital", german: "Krankenhaus" },
    { english: "joke", german: "Scherz" },
    { english: "message", german: "Botschaft" },
    { english: "night", german: "Nacht" },
    { english: "paint", german: "Farbe" },
    { english: "pleasure", german: "Vergnügen" },
    { english: "relationship", german: "Beziehung" },
    { english: "science", german: "Wissenschaft" },
    { english: "serious", german: "ernst" },
    { english: "spend", german: "verbringen" },
    { english: "tired", german: "müde" },
    { english: "wrong", german: "falsch" },
    { english: "amount", german: "Menge" },
    { english: "bank", german: "Bank" },
    { english: "brown", german: "braun" },
    { english: "crowd", german: "Menge" },
    { english: "deal", german: "Deal" },
    { english: "engine", german: "Motor" },
    { english: "follow", german: "Folgen" },
    { english: "chocolate", german: "Schokolade" },
    { english: "individual", german: "Individuell" },
    { english: "left", german: "links" },
    { english: "meal", german: "Mahlzeit" },
    { english: "oil", german: "Öl" },
    { english: "pain", german: "Schmerzen" },
    { english: "probably", german: "wahrscheinlich" },
    { english: "replace", german: "ersetzen" },
    { english: "society", german: "Gesellschaft" },
    { english: "square", german: "Quadrat" },
    { english: "step", german: "Schritt" },
    { english: "temperature", german: "Temperatur" },
    { english: "university", german: "Universität" },
    { english: "accept", german: "akzeptieren" },
    { english: "advance", german: "voraus" },
    { english: "bag", german: "Tasche" },
    { english: "captain", german: "Kapitän" },
    { english: "centre", german: "Center" },
    { english: "demand", german: "Nachfrage" },
    { english: "enemy", german: "Feind" },
    { english: "factory", german: "Fabrik" },
    { english: "hungry", german: "hungrig" },
    { english: "illegal", german: "illegal" },
    { english: "law", german: "Recht" },
    { english: "nose", german: "Nase" },
    { english: "petrol", german: "Benzin" },
    { english: "proud", german: "stolz" },
    { english: "responsible", german: "verantwortlich" },
    { english: "store", german: "Geschäft" },
    { english: "successful", german: "erfolgreich" },
    { english: "swim", german: "schwimmen" },
    { english: "top", german: "oben" },
    { english: "win", german: "Sieg" },
    { english: "available", german: "verfügbar" },
    { english: "boat", german: "Boot" },
    { english: "borrow", german: "leihen" },
    { english: "coast", german: "Küste" },
    { english: "cream", german: "Sahne" },
    { english: "design", german: "Design" },
    { english: "expression", german: "Ausdruck" },
    { english: "farm", german: "Bauernhof" },
    { english: "history", german: "Geschichte" },
    { english: "injure", german: "verletzen" },
    { english: "map", german: "Karte" },
    { english: "obtain", german: "erhalten" },
    { english: "peaceful", german: "friedlich" },
    { english: "practise", german: "trainieren" },
    { english: "recently", german: "vor kurzem" },
    { english: "shape", german: "gestalten" },
    { english: "silver", german: "Silber" },
    { english: "smoke", german: "Rauch" },
    { english: "touch", german: "berühren" },
    { english: "wash", german: "waschen" },
    { english: "advantage", german: "Vorteil" },
    { english: "attack", german: "Attacke" },
    { english: "butter", german: "Butter" },
    { english: "club", german: "Verein" },
    { english: "college", german: "Hochschule" },
    { english: "degree", german: "Grad" },
    { english: "escape", german: "Flucht" },
    { english: "gate", german: "Tor" },
    { english: "independent", german: "unabhängig" },
    { english: "listen", german: "Hör mal zu" },
    { english: "marry", german: "heiraten" },
    { english: "object", german: "Objekt" },
    { english: "path", german: "Pfad" },
    { english: "quiet", german: "ruhig" },
    { english: "refuse", german: "sich weigern" },
    { english: "subject", german: "Gegenstand" },
    { english: "supply", german: "liefern" },
    { english: "taste", german: "Geschmack" },
    { english: "usually", german: "meistens" },
    { english: "vegetable", german: "Gemüse" },
    { english: "arrange", german: "ordnen" },
    { english: "below", german: "unten" },
    { english: "cigarette", german: "Zigarette" },
    { english: "cottage", german: "Hütte" },
    { english: "department", german: "Abteilung" },
    { english: "earn", german: "verdienen" },
    { english: "front", german: "Vorderseite" },
    { english: "gentle", german: "sanft" },
    { english: "hat", german: "Hut" },
    { english: "instrument", german: "Instrument" },
    { english: "machine", german: "Maschine" },
    { english: "newspaper", german: "Zeitung" },
    { english: "parcel", german: "Paket" },
    { english: "religion", german: "Religion" },
    { english: "repair", german: "Reparatur" },
    { english: "serve", german: "Dienen" },
    { english: "shoulder", german: "Schulter" },
    { english: "trip", german: "Ausflug" },
    { english: "village", german: "Dorf" },
    { english: "wall", german: "Wand" },
    { english: "arrive", german: "ankommen" },
    { english: "born", german: "geboren" },
    { english: "clothes", german: "Kleider" },
    { english: "correct", german: "richtig" },
    { english: "double", german: "doppelt" },
    { english: "English", german: "Englisch" },
    { english: "forget", german: "vergessen" },
    { english: "goal", german: "Tor" },
    { english: "hate", german: "Hass" },
    { english: "kill", german: "töten" },
    { english: "last", german: "zuletzt" },
    { english: "main", german: "Main" },
    { english: "pair", german: "Paar" },
    { english: "promise", german: "versprechen" },
    { english: "regular", german: "regulär" },
    { english: "somewhere", german: "irgendwo" },
    { english: "space", german: "Raum" },
    { english: "these", german: "diese" },
    { english: "useful", german: "nützlich" },
    { english: "without", german: "ohne" },
    { english: "animal", german: "Tier" },
    { english: "beer", german: "Bier" },
    { english: "calm", german: "Ruhe" },
    { english: "copy", german: "Kopieren" },
    { english: "dish", german: "Gericht" },
    { english: "express", german: "ausdrücken" },
    { english: "foreign", german: "fremd" },
    { english: "guess", german: "vermuten" },
    { english: "husband", german: "Mann" },
    { english: "lie", german: "Lüge" },
    { english: "mine", german: "Bergwerk" },
    { english: "opinion", german: "Meinung" },
    { english: "passenger", german: "Passagier" },
    { english: "press", german: "Drücken Sie" },
    { english: "rule", german: "Regel" },
    { english: "sign", german: "Zeichen" },
    { english: "support", german: "Unterstützung" },
    { english: "those", german: "jene" },
    { english: "wonderful", german: "wunderbar" },
    { english: "year", german: "Jahr" },
    { english: "afraid", german: "Angst" },
    { english: "board", german: "Tafel" },
    { english: "circle", german: "Kreis" },
    { english: "count", german: "Anzahl" },
    { english: "death", german: "Tod" },
    { english: "discover", german: "entdecken" },
    { english: "funny", german: "lustig" },
    { english: "guest", german: "Gast" },
    { english: "horse", german: "Pferd" },
    { english: "lake", german: "See" },
    { english: "modern", german: "modern" },
    { english: "necessary", german: "notwendig" },
    { english: "plenty", german: "viel" },
    { english: "profit", german: "profitieren" },
    { english: "reduce", german: "reduzieren" },
    { english: "share", german: "Aktie" },
    { english: "steal", german: "stehlen" },
    { english: "trust", german: "Vertrauen" },
    { english: "wish", german: "Wunsch" },
    { english: "young", german: "jung" },
    { english: "admire", german: "bewundern" },
    { english: "allow", german: "ermöglichen" },
    { english: "battle", german: "Schlacht" },
    { english: "climb", german: "steigen" },
    { english: "complete", german: "Komplett" },
    { english: "divide", german: "Teilen" },
    { english: "effort", german: "Anstrengung" },
    { english: "fresh", german: "frisch" },
    { english: "hole", german: "Loch" },
    { english: "indeed", german: "tatsächlich" },
    { english: "marriage", german: "Ehe" },
    { english: "outside", german: "draußen" },
    { english: "pleasant", german: "angenehm" },
    { english: "point", german: "Punkt" },
    { english: "recent", german: "kürzlich" },
    { english: "secretary", german: "Sekretär" },
    { english: "sing", german: "singen" },
    { english: "soft", german: "Sanft" },
    { english: "third", german: "dritte" },
    { english: "various", german: "verschiedene" },
    { english: "adventure", german: "Abenteuer" },
    { english: "although", german: "obwohl" },
    { english: "bottom", german: "Unterseite" },
    { english: "coin", german: "Münze" },
    { english: "comfort", german: "Komfort" },
    { english: "drop", german: "fallen" },
    { english: "equal", german: "gleich" },
    { english: "gun", german: "Gewehr" },
    { english: "intelligent", german: "intelligent" },
    { english: "join", german: "beitreten" },
    { english: "laugh", german: "Lachen" },
    { english: "middle", german: "Mitte" },
    { english: "perform", german: "ausführen" },
    { english: "plain", german: "einfach" },
    { english: "row", german: "Reihe" },
    { english: "soldier", german: "Soldat" },
    { english: "surface", german: "Oberfläche" },
    { english: "thick", german: "dick" },
    { english: "until", german: "bis um" },
    { english: "wild", german: "wild" },
    { english: "attempt", german: "Versuch" },
    { english: "bill", german: "Rechnung" },
    { english: "breathe", german: "atmen" },
    { english: "cook", german: "Koch" },
    { english: "defend", german: "verteidigen" },
    { english: "fat", german: "Fett" },
    { english: "grey", german: "grau" },
    { english: "hot", german: "heiß" },
    { english: "character", german: "Charakter" },
    { english: "import", german: "importieren" },
    { english: "lose", german: "verlieren" },
    { english: "mountain", german: "Berg" },
    { english: "operation", german: "Betrieb" },
    { english: "prize", german: "Preis" },
    { english: "risk", german: "Risiko" },
    { english: "safe", german: "sicher" },
    { english: "suddenly", german: "plötzlich" },
    { english: "suit", german: "passen" },
    { english: "type", german: "Art" },
    { english: "wood", german: "Holz" }
];

const corsEnabler = 'https://cors.janniksohn.dev/';
// const corsEnabler = 'http://127.0.0.1:8080/';

const loader = document.querySelector('#loader');
const modal = document.querySelector('#modal');
const modalContent = modal.querySelector('div');

modal.querySelector('button').addEventListener('click', _ => modal.classList.remove('open'));
document.querySelector('#remove-repeat').addEventListener('click', clearCaches);

document.querySelector('#fact-btn').addEventListener('click', getFact);
document.querySelector('#word-btn').addEventListener('click', getWord);
document.querySelector('#vocabulary-btn').addEventListener('click', getVocabulary);

const factRepeat = document.querySelector('#fact-repeat');
const wordRepeat = document.querySelector('#word-repeat');
const vocabularyRepeat = document.querySelector('#vocabulary-repeat');

factRepeat.addEventListener('click', getKnownFact);
wordRepeat.addEventListener('click', getKnownWord);
vocabularyRepeat.addEventListener('click', getKnownVocabulary);

document.body.style.height = window.innerHeight;

localStorageCleaner();
checkRepeats();

function localStorageCleaner() {
    if (localStorage.getItem('vocabulary') === null) {
        localStorage.setItem('vocabulary', JSON.stringify([]));
    }

    if (localStorage.getItem('words') === null) {
        localStorage.setItem('words', JSON.stringify([]));
    }

    if (localStorage.getItem('facts') === null) {
        localStorage.setItem('facts', JSON.stringify([]));
    }
}

function checkRepeats() {
    let vocabulary = localStorage.getItem('vocabulary');
    vocabularyRepeat.disabled = JSON.parse(vocabulary).length === 0;

    let words = localStorage.getItem('words');
    wordRepeat.disabled = JSON.parse(words).length === 0;

    let facts = localStorage.getItem('facts');
    factRepeat.disabled = JSON.parse(facts).length === 0;
}

function getVocabulary() {
    loader.classList.add('open');

    const randomIndex = Math.floor(Math.random() * vocabularies.length);

    Array.from(modalContent.children).forEach(child => {
        if (child instanceof HTMLButtonElement)
            return;

        child.remove();
    });

    const item = vocabularies[randomIndex];
    const para = document.createElement('p');
    para.innerHTML = `<b>${item.english}:</b> ${item.german}`;
    modalContent.prepend(para);

    const vocabulary = JSON.parse(localStorage.getItem('vocabulary'));
    if (!vocabularies.includes(randomIndex)) vocabulary.push(randomIndex);
    localStorage.setItem('vocabulary', JSON.stringify(vocabulary));
    checkRepeats();

    loader.classList.remove('open');
    modal.classList.add('open');
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
                if (!facts.includes(info[randomIndex])) facts.push(info[randomIndex]);
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
        if (!words.includes(href)) words.push(href);
        localStorage.setItem('words', JSON.stringify(words));
        checkRepeats();

        window.location.assign(href);
    });
}

function getKnownFact() {
    loader.classList.add('open');

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

function getKnownVocabulary() {
    loader.classList.add('open');

    const vocabIndexes = JSON.parse(localStorage.getItem('vocabulary'));
    const randomIndex = Math.floor(Math.random() * vocabIndexes.length);

    Array.from(modalContent.children).forEach(child => {
        if (child instanceof HTMLButtonElement)
            return;

        child.remove();
    });

    const item = vocabularies[vocabIndexes[randomIndex]];
    const para = document.createElement('p');
    para.innerHTML = `<b>${item.english}:</b> ${item.german}`;
    modalContent.prepend(para);

    loader.classList.remove('open');
    modal.classList.add('open');
}

function clearCaches() {
    localStorage.setItem('facts', JSON.stringify([]));
    localStorage.setItem('words', JSON.stringify([]));
    localStorage.setItem('vocabulary', JSON.stringify([]));
    checkRepeats();
}
