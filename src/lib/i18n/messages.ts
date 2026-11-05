export type HomeMessages = {
  brand: string;
  heroBefore: string;
  heroAccent: string;
  heroSubPrefix: string;
  freeMeta: string;
  ratingsLabel: string;
  toolTitle: string;
  inputLabel: string;
  inputPlaceholder: string;
  lettersHint: string;
  shuffle: string;
  help: string;
  tryPrefix: string;
  exactOnly: string;
  multiWord: string;
  loadingDict: string;
  loadError: string;
  exactFound: string;
  wordsFromLetters: string;
  noMatches: string;
  shorterWords: string;
  multiWordHeading: string;
  sameLetters: string;
  copied: string;
  updating: string;
  whatTitle: string;
  whatBody: string;
  toolExplainerTitle: string;
  toolExplainerBody: string;
  controlsTitle: string;
  controls: { t: string; d: string }[];
  whoTitle: string;
  whoIntro: string;
  whoItems: { t: string; d: string }[];
  modesTitle: string;
  modesIntro: string;
  modes: { t: string; d: string }[];
  tryIdeasTitle: string;
  tryIdeasBody: string;
  tryIdeas: string[];
  cardExactTitle: string;
  cardExactBody: string;
  cardSolverTitle: string;
  cardSolverBody: string;
  cardNameTitle: string;
  cardNameBody: string;
  howTitle: string;
  howIntroBefore: string;
  howIntroLink: string;
  howIntroAfter: string;
  howSteps: { name: string; text: string }[];
  vsTitle: string;
  vsBody: string;
  vsNeed: string;
  vsTool: string;
  vsWhy: string;
  vsRow1Need: string;
  vsRow1Tool: string;
  vsRow1Why: string;
  vsRow2Need: string;
  vsRow2Tool: string;
  vsRow2Why: string;
  vsRow3Need: string;
  vsRow3Tool: string;
  vsRow3Why: string;
  famousTitle: string;
  famousBodyBefore: string;
  famousBodyLink: string;
  famousBodyAfter: string;
  whyEyebrow: string;
  whyTitle: string;
  whyBody: string;
  tryWord: string;
  tipsTitle: string;
  tips: { t: string; d: string }[];
  tipsFooterBefore: string;
  tipsFooterMid: string;
  tipsFooterAfter: string;
  trustTitle: string;
  trustItems: string[];
  trustLink: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  navGenerator: string;
  navSolver: string;
  navNames: string;
  navWhat: string;
  navBlog: string;
  navAbout: string;
  makeAnagrams: string;
  languageLabel: string;
  footerTools: string;
  footerGuides: string;
  footerCtaTitle: string;
  footerCtaBody: string;
  footerRights: string;
  footerNote: string;
  metaTitle: string;
  metaDescription: string;
};

const enUS: HomeMessages = {
  brand: "Anagram Generator",
  heroBefore: "Rearrange letters ",
  heroAccent: "into new words.",
  heroSubPrefix: "Type any word and see every anagram instantly — free.",
  freeMeta: "Free · Web · Dictionary updated",
  ratingsLabel: "ratings",
  toolTitle: "Anagram generator",
  inputLabel: "Enter a word or letters",
  inputPlaceholder: "TYPE HERE",
  lettersHint: "Letters appear here…",
  shuffle: "Shuffle",
  help: "Spaces and punctuation are ignored. Results run in your browser.",
  tryPrefix: "Try",
  exactOnly: "Exact anagrams only (same letter count)",
  multiWord: "Include multi-word phrases",
  loadingDict: "Loading dictionary…",
  loadError: "Could not load the word list. Refresh the page to try again.",
  exactFound: "exact anagrams found",
  wordsFromLetters: "words from these letters",
  noMatches: "No matches yet — try another word or turn off exact-only.",
  shorterWords: "Shorter words from these letters",
  multiWordHeading: "Multi-word anagrams",
  sameLetters: "same letters",
  copied: "copied",
  updating: "Updating…",
  whatTitle: "Features of Anagram Generator",
  whatBody:
    "This free anagram generator is built around the tool above — not a thin landing page with a form bolted on. Type letters once and get exact anagrams, optional shorter words from the same rack, and multi-word phrases for names. Letter tiles show your inventory, Shuffle refreshes the view, and one click copies any result. That is the full workflow people mean when they search for an anagram maker, word anagram generator, or anagram finder.",
  toolExplainerTitle: "What this anagram generator tool actually does",
  toolExplainerBody:
    "Under the hood the tool loads a large English word list in your browser, builds a letter signature for whatever you type, then matches dictionary words that fit those letters. Exact mode keeps the same letter count (LISTEN → SILENT). Turn exact-only off and you also see shorter words you can make from the rack — the same idea as an anagram solver or unscrambler. Multi-word mode searches readable phrases, which is how most name anagrams work. Nothing you type is required to leave your device for the search itself.",
  controlsTitle: "Anagram generator controls explained",
  controls: [
    { t: "Letter tiles + text field", d: "Every A–Z character you enter becomes a tile so you can see the exact pool being rearranged. Spaces and punctuation are ignored automatically, which keeps full names and quoted phrases easy to paste." },
    { t: "Shuffle", d: "Shuffle never changes your letter inventory — it only reorders tiles. Use it when you want a fresh visual prompt while results stay accurate to the same letters." },
    { t: "Exact anagrams only", d: "On by default for generator intent. You get true same-length anagrams first. Switch it off when you need every shorter playable word from the letters, like a solver rack." },
    { t: "Multi-word phrases", d: "Turn this on for names and longer inputs. A single dictionary word is rare for full names; two-to-four-word phrases are usually the useful, memorable results." },
    { t: "One-click copy", d: "Tap any word or phrase to copy it. Paste into a username field, puzzle draft, story alias, or chat without retyping." },
  ],
  whoTitle: "Who this anagram generator is for",
  whoIntro: "The same tool covers creative wordplay and practical unscrambling — pick the mode that matches your job.",
  whoItems: [
    { t: "Writers & worldbuilders", d: "Hunt character aliases, spell names, and hidden reveals (the classic Tom Marvolo Riddle pattern) without leaving the browser." },
    { t: "Puzzle & crossword fans", d: "Unscramble letter racks, check cryptic indicators, and verify whether a rearrangement is a real word before you ink it in." },
    { t: "Gamers & streamers", d: "Brainstorm gamertags and channel names from your real name or a brand phrase using multi-word mode." },
    { t: "Teachers & word-game nights", d: "Drop in LISTEN, CINEMA, or a classroom word and show exact anagrams live — free, no account, works on phones." },
  ],
  modesTitle: "Three result modes inside one generator",
  modesIntro: "Most competitors bury options or force you onto a separate Scrabble cheat. Here the homepage tool exposes the three intents people actually search for.",
  modes: [
    { t: "Exact anagrams", d: "Same letters, same count, new order. Best when you typed a single word and want true anagrams such as CINEMA → ICEMAN or ELVIS → LIVES." },
    { t: "Sub-words / solver list", d: "Disable exact-only to list shorter words sorted by length. Ideal for “unscramble letters” and casual word-game racks." },
    { t: "Multi-word name phrases", d: "Enable phrases for full names and long strings. This is the mode behind searches like name anagram generator and anagram of my name." },
  ],
  tryIdeasTitle: "Words worth pasting into the tool",
  tryIdeasBody: "Use the Try chips above the results, or paste any of these classics to see how exact vs multi-word mode behaves.",
  tryIdeas: ["LISTEN", "CINEMA", "DORMITORY", "ASTRONOMER", "THE EYES", "CLINT EASTWOOD", "BRITNEY SPEARS", "CONVERSATION"],
  cardExactTitle: "Exact anagrams",
  cardExactBody:
    "Same letters, new order. The generator prioritizes true anagrams like LISTEN → SILENT or CINEMA → ICEMAN so creative wordplay stays honest to the definition — not a dump of unrelated short words.",
  cardSolverTitle: "Solver-ready sub-words",
  cardSolverBody:
    "Turn off exact-only to unscramble every shorter word hiding in your letters. Results are ranked by length and common usage — handy for crosswords, Wordle-adjacent racks, and casual games without installing an app.",
  cardNameTitle: "Name & phrase mode",
  cardNameBody:
    "Enable multi-word phrases to anagram full names into memorable lines. That is the workflow behind “anagram of my name” searches — and why a single-word-only tool feels broken for real names.",
  howTitle: "How to use this anagram generator",
  howIntroBefore: "Six practical steps from blank field to copy-ready results using the live tool on this page. A longer walkthrough lives on the",
  howIntroLink: "how to use Anagram Generator",
  howIntroAfter: "page.",
  howSteps: [
    { name: "Type a word, name, or letters", text: "Paste anything from LISTEN to your full name. Spaces are fine — only A–Z letters feed the engine." },
    { name: "Watch the letter tiles update", text: "Tiles mirror your inventory so you always know which letters are in play before you judge a result." },
    { name: "Keep exact-only for true anagrams", text: "Leave the checkbox on when you want same-length matches. This is the classic anagram generator behavior." },
    { name: "Turn exact-only off to unscramble", text: "Need every shorter word from the rack? Disable exact-only and scan the length-sorted list like a solver." },
    { name: "Enable multi-word phrases for names", text: "Full names rarely become one dictionary word. Phrase mode is what makes name anagrams useful." },
    { name: "Shuffle, browse, and copy", text: "Shuffle reshuffles tiles for inspiration. Click any word or phrase once to copy it to your clipboard." },
  ],
  vsTitle: "Anagram generator vs anagram solver",
  vsBody: "Search results mix both intents. We keep them clear so you land on the right tool without wading through ads.",
  vsNeed: "Need",
  vsTool: "Best tool here",
  vsWhy: "Why",
  vsRow1Need: "Creative rearrangements of a word",
  vsRow1Tool: "Anagram generator",
  vsRow1Why: "Exact same-letter matches first",
  vsRow2Need: "Unscramble a letter rack into many words",
  vsRow2Tool: "Anagram solver",
  vsRow2Why: "Lists shorter playable words by length",
  vsRow3Need: "Anagram of a person's name",
  vsRow3Tool: "Name anagram generator",
  vsRow3Why: "Multi-word phrases tuned for names",
  famousTitle: "Famous anagrams you can verify in seconds",
  famousBodyBefore: "Classic examples still delight because they feel inevitable once you see them. Try them in the generator above, or browse a longer collection in our",
  famousBodyLink: "anagram examples",
  famousBodyAfter: "guide.",
  whyEyebrow: "Why people search this",
  whyTitle: "Wordplay for puzzles, usernames, and writing",
  whyBody:
    "Crossword fans unscramble racks. Novelists hunt aliases. Streamers invent tags. Teachers build warm-up games. One generator covers the creative side; the solver covers the competitive side.",
  tryWord: "Try a word now",
  tipsTitle: "Tips for better results from this tool",
  tips: [
    { t: "Start with common letter patterns", d: "Prefixes, suffixes, and vowel placement shrink the search space when you solve by hand — and help you judge which generator hits feel natural." },
    { t: "Prefer fewer, longer words in phrases", d: "The cleanest name anagrams usually use two or three solid words instead of a spray of tiny ones. Scan the multi-word list from the top." },
    { t: "Add letters carefully for names", d: "A middle initial or maiden name can unlock better phrases, but too many letters slows exploration. Stay near 8–16 letters when possible." },
    { t: "Toggle exact-only intentionally", d: "Exact-only = true anagrams. Off = every shorter word in the rack. Mixing those intents is why many tools feel noisy." },
    { t: "Use Shuffle for inspiration", d: "Same letters, new visual order — helpful when brainstorming usernames without changing your inventory." },
    { t: "Learn the solving craft", d: "If you enjoy doing it without a tool sometimes, read our guide on how to solve anagrams for pattern tricks used by puzzle champions." },
  ],
  tipsFooterBefore: "New to the concept? Start with",
  tipsFooterMid: ", then compare",
  tipsFooterAfter: "if you are studying combinatorics or coding interviews.",
  trustTitle: "Built for speed, clarity, and trust",
  trustItems: [
    "Runs entirely in your browser after dictionary load",
    "Letter-tile UI that makes your letter inventory obvious",
    "Exact, sub-word, and multi-word modes in one generator",
    "One-click copy for every word and phrase",
    "Separate solver and name pages when you want a focused workflow",
    "Custom Privacy, About, and Disclaimer — not generator boilerplate",
  ],
  trustLink: "See all Anagram Generator features →",
  faqTitle: "Anagram generator FAQs",
  faqs: [
    { question: "What is an anagram generator?", answer: "An anagram generator rearranges the letters of a word, name, or phrase into other valid words or phrases that use the same letters. On this page you type your letters once and see exact anagrams, optional shorter words, and multi-word phrases instantly." },
    { question: "Is this anagram generator free?", answer: "Yes. The tool runs free in your browser with no account, no download, and no paywall. You can generate word anagrams and name anagrams as often as you like." },
    { question: "What is the difference between an anagram generator and an anagram solver?", answer: "A generator focuses on creative rearrangements — especially exact and multi-word anagrams of a word or name. A solver emphasizes every playable word you can form from a rack of letters. Toggle exact-only off in this tool for solver-style lists, or open the dedicated Anagram Solver page." },
    { question: "Can I make an anagram of my name?", answer: "Yes. Enter your full name and turn on multi-word phrases. Names rarely collapse into a single dictionary word, but they often produce memorable phrases. The Name Anagrams page walks through famous examples too." },
    { question: "Do spaces and punctuation count?", answer: "No. Spaces, hyphens, and punctuation are ignored. Only A–Z letters are rearranged, so “the eyes” and “THE EYES” behave the same." },
    { question: "What does “exact anagram” mean?", answer: "An exact anagram uses every letter from your input exactly once — same letters, same counts, new order. LISTEN → SILENT is exact. That is what the Exact anagrams only checkbox protects." },
    { question: "What does the Shuffle button do?", answer: "Shuffle only reorders the letter tiles for inspiration. It does not change your inventory — results stay tied to the same letters." },
    { question: "Why are there no results for my name?", answer: "Turn on multi-word phrases. A full legal name almost never matches one dictionary word. If phrases are on and the list is still thin, try a nickname or drop a middle name to change the letter mix." },
    { question: "Does this work offline after the first load?", answer: "After the dictionary finishes loading, anagram search runs locally in the browser tab. A hard refresh may need to fetch the word list again." },
    { question: "Is my text stored on a server?", answer: "Anagram search runs in your browser after the dictionary loads. See the Privacy page for analytics and contact form details." },
  ],
  ctaTitle: "Ready to rearrange something?",
  ctaBody: "Open the free anagram generator, drop in a word or name, and copy the best result in one tap.",
  ctaButton: "Make anagrams",
  navGenerator: "Generator",
  navSolver: "Solver",
  navNames: "Name Anagrams",
  navWhat: "What is an Anagram",
  navBlog: "Blog",
  navAbout: "About",
  makeAnagrams: "Make anagrams",
  languageLabel: "Language",
  footerTools: "Tools",
  footerGuides: "Guides",
  footerCtaTitle: "Start rearranging",
  footerCtaBody: "Free in your browser — no signup, no install. Generate word and name anagrams in seconds.",
  footerRights: "All rights reserved.",
  footerNote: "Free online wordplay toolkit. Not affiliated with Scrabble, Words With Friends, or any dictionary publisher.",
  metaTitle: "Anagram Generator — Make Word & Name Anagrams Free",
  metaDescription: "Free anagram generator online. Rearrange any word, name, or letters into new words and multi-word phrases instantly — no signup required.",
};

const enGB: HomeMessages = {
  ...enUS,
  heroSubPrefix: "Type any word and see every anagram instantly — free.",
  metaTitle: "Anagram Generator UK — Make Word & Name Anagrams Free",
  metaDescription: "Free UK anagram generator and maker online. Rearrange any word, name, or letters into new words and phrases instantly.",
};

const de: HomeMessages = {
  brand: "Anagramm-Generator",
  heroBefore: "Buchstaben ",
  heroAccent: "zu neuen Wörtern ordnen.",
  heroSubPrefix: "Gib ein Wort ein und sieh sofort jedes Anagramm — kostenlos.",
  freeMeta: "Kostenlos · Web · Wörterbuch aktualisiert",
  ratingsLabel: "Bewertungen",
  toolTitle: "Anagramm-Generator",
  inputLabel: "Wort oder Buchstaben eingeben",
  inputPlaceholder: "HIER TIPPEN",
  lettersHint: "Buchstaben erscheinen hier…",
  shuffle: "Mischen",
  help: "Leerzeichen und Satzzeichen werden ignoriert. Die Ergebnisse laufen in Ihrem Browser.",
  tryPrefix: "Probieren",
  exactOnly: "Nur exakte Anagramme (gleiche Buchstabenzahl)",
  multiWord: "Mehrwort-Phrasen einschließen",
  loadingDict: "Wörterbuch wird geladen…",
  loadError: "Wortliste konnte nicht geladen werden. Bitte Seite neu laden.",
  exactFound: "exakte Anagramme gefunden",
  wordsFromLetters: "Wörter aus diesen Buchstaben",
  noMatches: "Noch keine Treffer — anderes Wort versuchen oder „nur exakt“ deaktivieren.",
  shorterWords: "Kürzere Wörter aus diesen Buchstaben",
  multiWordHeading: "Mehrwort-Anagramme",
  sameLetters: "gleiche Buchstaben",
  copied: "kopiert",
  updating: "Aktualisiere…",
  whatTitle: "Funktionen des Anagramm-Generators",
  whatBody:
    "Dieser kostenlose Anagramm-Generator dreht sich um das Tool oben: Tippen Sie Buchstaben einmal und erhalten Sie exakte Anagramme, optionale kürzere Wörter und Mehrwort-Phrasen für Namen. Kacheln zeigen Ihren Vorrat, Mischen aktualisiert die Ansicht, ein Klick kopiert jedes Ergebnis.",
  toolExplainerTitle: "Was dieses Anagramm-Generator-Tool wirklich tut",
  toolExplainerBody:
    "Das Tool lädt eine große englische Wortliste im Browser, baut eine Buchstabensignatur und findet passende Wörter. Exakt-Modus hält die gleiche Buchstabenzahl. Ohne „nur exakt“ sehen Sie kürzere Wörter wie bei einem Solver. Mehrwort-Modus sucht lesbare Phrasen — typisch für Namensanagramme. Die Suche selbst muss Ihr Gerät nicht verlassen.",
  controlsTitle: "Steuerung des Anagramm-Generators erklärt",
  controls: [
    { t: "Buchstabenkacheln + Textfeld", d: "Jedes A–Z-Zeichen wird zur Kachel. Leerzeichen und Satzzeichen werden ignoriert — ideal zum Einfügen ganzer Namen." },
    { t: "Mischen", d: "Mischen ändert nicht Ihren Buchstabenvorrat — nur die Reihenfolge der Kacheln. Gut für frische Inspiration." },
    { t: "Nur exakte Anagramme", d: "Standard für Generator-Absicht: echte Anagramme gleicher Länge. Ausschalten für jedes kürzere spielbare Wort." },
    { t: "Mehrwort-Phrasen", d: "Für Namen und längere Eingaben. Ein einzelnes Wörterbuchwort ist bei vollen Namen selten; zwei bis vier Wörter sind nützlich." },
    { t: "Ein-Klick-Kopieren", d: "Tippen Sie ein Wort oder eine Phrase an, um sie zu kopieren — ohne Abtippen." },
  ],
  whoTitle: "Für wen dieser Anagramm-Generator ist",
  whoIntro: "Dasselbe Tool deckt kreatives Wortspiel und praktisches Entschlüsseln ab — wählen Sie den passenden Modus.",
  whoItems: [
    { t: "Autoren & Weltenbauer", d: "Charakteraliase, Zaubernamen und versteckte Enthüllungen finden, ohne den Browser zu verlassen." },
    { t: "Rätsel- & Kreuzworträtsel-Fans", d: "Buchstabenregale lösen und prüfen, ob eine Umordnung ein echtes Wort ist." },
    { t: "Gamer & Streamer", d: "Gamertags und Kanalnamen aus dem echten Namen oder einer Markenphrase brainstormen." },
    { t: "Lehrer & Spieleabende", d: "LISTEN oder ein Klassenwort eingeben und exakte Anagramme live zeigen — kostenlos, ohne Konto." },
  ],
  modesTitle: "Drei Ergebnismodi in einem Generator",
  modesIntro: "Viele Wettbewerber verstecken Optionen. Hier zeigt das Homepage-Tool die drei Absichten, nach denen wirklich gesucht wird.",
  modes: [
    { t: "Exakte Anagramme", d: "Gleiche Buchstaben, gleiche Anzahl, neue Reihenfolge — ideal für echte Anagramme wie CINEMA → ICEMAN." },
    { t: "Teilwörter / Solver-Liste", d: "„Nur exakt“ aus: kürzere Wörter nach Länge — ideal zum Entschlüsseln." },
    { t: "Mehrwort-Namensphrasen", d: "Phrasen für volle Namen — der Modus hinter „Anagramm meines Namens“." },
  ],
  tryIdeasTitle: "Wörter, die sich lohnen einzufügen",
  tryIdeasBody: "Nutzen Sie die Try-Chips oben oder fügen Sie diese Klassiker ein, um Exakt- und Mehrwort-Modus zu vergleichen.",
  tryIdeas: ["LISTEN", "CINEMA", "DORMITORY", "ASTRONOMER", "THE EYES", "CLINT EASTWOOD", "BRITNEY SPEARS", "CONVERSATION"],
  cardExactTitle: "Exakte Anagramme",
  cardExactBody: "Gleiche Buchstaben, neue Reihenfolge. Der Generator priorisiert echte Anagramme wie LISTEN → SILENT — kein Haufen unzusammenhängender Kurzörter.",
  cardSolverTitle: "Solver-fähige Teilwörter",
  cardSolverBody: "Schalten Sie „nur exakt“ aus, um jedes kürzere Wort aus Ihren Buchstaben zu finden — praktisch für Kreuzworträtsel und Casual Games.",
  cardNameTitle: "Namen- & Phrasenmodus",
  cardNameBody: "Aktivieren Sie Mehrwort-Phrasen, um aus ganzen Namen einprägsame Zeilen zu machen — genau der Workflow hinter Namensanagramm-Suchen.",
  howTitle: "So nutzen Sie diesen Anagramm-Generator",
  howIntroBefore: "Sechs praktische Schritte vom leeren Feld zu kopierfertigen Ergebnissen. Eine längere Anleitung finden Sie auf der Seite",
  howIntroLink: "Anagramm-Generator verwenden",
  howIntroAfter: ".",
  howSteps: [
    { name: "Wort, Name oder Buchstaben eingeben", text: "Alles von LISTEN bis zum vollen Namen. Leerzeichen sind erlaubt — nur A–Z zählen." },
    { name: "Buchstabenkacheln beobachten", text: "Kacheln spiegeln Ihren Vorrat, bevor Sie Ergebnisse bewerten." },
    { name: "Nur exakt für echte Anagramme", text: "Checkbox an für Treffer gleicher Länge — klassisches Generator-Verhalten." },
    { name: "Nur exakt aus zum Entschlüsseln", text: "Jedes kürzere Wort aus dem Regal — wie ein Solver." },
    { name: "Mehrwort-Phrasen für Namen", text: "Volle Namen werden selten ein Wörterbuchwort. Phrasenmodus macht Namensanagramme nützlich." },
    { name: "Mischen, browsen und kopieren", text: "Mischen ordnet Kacheln neu. Ein Tippen kopiert Wort oder Phrase." },
  ],
  vsTitle: "Anagramm-Generator vs. Anagramm-Solver",
  vsBody: "Suchergebnisse vermischen beide Absichten. Wir trennen sie klar, damit Sie ohne Werbung das richtige Tool finden.",
  vsNeed: "Bedarf",
  vsTool: "Bestes Tool hier",
  vsWhy: "Warum",
  vsRow1Need: "Kreative Umordnungen eines Wortes",
  vsRow1Tool: "Anagramm-Generator",
  vsRow1Why: "Zuerst exakte Treffer mit gleichen Buchstaben",
  vsRow2Need: "Buchstabenregal in viele Wörter auflösen",
  vsRow2Tool: "Anagramm-Solver",
  vsRow2Why: "Listet kürzere spielbare Wörter nach Länge",
  vsRow3Need: "Anagramm eines Personennamens",
  vsRow3Tool: "Namen-Anagramm-Generator",
  vsRow3Why: "Mehrwort-Phrasen für Namen",
  famousTitle: "Berühmte Anagramme in Sekunden prüfen",
  famousBodyBefore: "Klassiker begeistern, weil sie unvermeidlich wirken. Probieren Sie sie oben aus oder lesen Sie unsere",
  famousBodyLink: "Anagramm-Beispiele",
  famousBodyAfter: ".",
  whyEyebrow: "Warum danach gesucht wird",
  whyTitle: "Wortspiel für Rätsel, Nutzernamen und Texte",
  whyBody: "Kreuzworträtsel-Fans lösen Buchstaben. Autoren suchen Aliasse. Streamer erfinden Tags. Ein Generator deckt Kreatives ab; der Solver das Wettbewerbliche.",
  tryWord: "Jetzt ein Wort testen",
  tipsTitle: "Tipps für bessere Anagramme",
  tips: [
    { t: "Mit häufigen Mustern starten", d: "Präfixe, Suffixe und Vokale verkleinern den Suchraum und helfen, natürliche Treffer zu erkennen." },
    { t: "Weniger, längere Wörter bevorzugen", d: "Die besten Namensanagramme nutzen zwei oder drei starke Wörter statt vieler kleiner." },
    { t: "Buchstaben bei Namen dosieren", d: "Ein Mittelname hilft oft; zu viele Buchstaben verlangsamen die Suche. Ideal: 8–16 Buchstaben." },
    { t: "Lösetechnik lernen", d: "Lesen Sie unseren Leitfaden zum Lösen von Anagrammen für bewährte Mustertricks." },
  ],
  tipsFooterBefore: "Neu beim Thema? Starten Sie mit",
  tipsFooterMid: " und vergleichen Sie dann",
  tipsFooterAfter: ", wenn Sie Kombinatorik oder Coding-Interviews üben.",
  trustTitle: "Gebaut für Tempo, Klarheit und Vertrauen",
  trustItems: [
    "Läuft nach dem Wörterbuch-Laden komplett im Browser",
    "Buchstabenkachel-UI für schnelles Scannen",
    "Ein-Klick-Kopieren für jedes Wort und jede Phrase",
    "Getrennte Solver- und Namens-Workflows",
    "Bildungsseiten für echte Suchintentionen",
    "Eigene Privacy-, About- und Disclaimer-Seiten",
  ],
  trustLink: "Alle Funktionen des Anagramm-Generators →",
  faqTitle: "Häufige Fragen zum Anagramm-Generator",
  faqs: [
    { question: "Was ist ein Anagramm-Generator?", answer: "Ein Anagramm-Generator ordnet die Buchstaben eines Wortes, Namens oder einer Phrase zu anderen gültigen Wörtern oder Phrasen um. Auf anagramgenerator.app tippen Sie einmal und sehen sofort Treffer." },
    { question: "Ist dieser Anagramm-Generator kostenlos?", answer: "Ja. Das Tool läuft kostenlos im Browser — ohne Konto, Download oder Paywall." },
    { question: "Unterschied zwischen Generator und Solver?", answer: "Der Generator betont kreative, exakte und Mehrwort-Anagramme. Der Solver listet alle spielbaren kürzeren Wörter aus einem Buchstabenregal." },
    { question: "Kann ich mein Namen anagrammieren?", answer: "Ja. Geben Sie den vollen Namen ein und aktivieren Sie Mehrwort-Phrasen." },
    { question: "Zählen Leerzeichen und Satzzeichen?", answer: "Nein. Nur die Buchstaben A–Z werden umgeordnet." },
    { question: "Was bedeutet „exaktes Anagramm“?", answer: "Jedes Zeichen der Eingabe wird genau einmal verwendet — gleiche Buchstaben, neue Reihenfolge. Das schützt die Checkbox „nur exakt“." },
    { question: "Was macht die Schaltfläche Mischen?", answer: "Mischen ordnet nur die Kacheln neu. Ihr Buchstabenvorrat und die Wörterbuchtreffer bleiben gleich." },
    { question: "Warum keine Treffer für meinen Namen?", answer: "Aktivieren Sie Mehrwort-Phrasen. Ein voller Name wird fast nie ein einzelnes Wörterbuchwort." },
    { question: "Funktioniert es offline nach dem ersten Laden?", answer: "Nach dem Wörterbuch-Laden läuft die Suche lokal im Tab. Ein Hard-Refresh lädt die Liste ggf. erneut." },
    { question: "Wird mein Text auf einem Server gespeichert?", answer: "Die Suche läuft im Browser. Details stehen in der Datenschutzerklärung." },
  ],
  ctaTitle: "Bereit, etwas umzuordnen?",
  ctaBody: "Öffnen Sie den kostenlosen Anagramm-Generator, geben Sie ein Wort oder einen Namen ein und kopieren Sie das beste Ergebnis.",
  ctaButton: "Anagramme erstellen",
  navGenerator: "Generator",
  navSolver: "Solver",
  navNames: "Namens-Anagramme",
  navWhat: "Was ist ein Anagramm",
  navBlog: "Blog",
  navAbout: "Über uns",
  makeAnagrams: "Anagramme erstellen",
  languageLabel: "Sprache",
  footerTools: "Tools",
  footerGuides: "Ratgeber",
  footerCtaTitle: "Jetzt umordnen",
  footerCtaBody: "Kostenlos im Browser — ohne Anmeldung. Wort- und Namensanagramme in Sekunden.",
  footerRights: "Alle Rechte vorbehalten.",
  footerNote: "Kostenloses Online-Wortspiel-Toolkit. Nicht verbunden mit Scrabble oder Wörterbuchverlagen.",
  metaTitle: "Anagramm-Generator — Wörter & Namen kostenlos umordnen",
  metaDescription: "Kostenloser Anagramm-Generator online. Ordnen Sie Wörter, Namen und Buchstaben sofort zu neuen Wörtern und Phrasen um.",
};

const da: HomeMessages = {
  brand: "Anagram-generator",
  heroBefore: "Omarranger bogstaver ",
  heroAccent: "til nye ord.",
  heroSubPrefix: "Skriv et hvilket som helst ord og se hvert anagram med det samme — gratis.",
  freeMeta: "Gratis · Web · Ordbog opdateret",
  ratingsLabel: "anmeldelser",
  toolTitle: "Anagram-generator",
  inputLabel: "Indtast et ord eller bogstaver",
  inputPlaceholder: "SKRIV HER",
  lettersHint: "Bogstaver vises her…",
  shuffle: "Bland",
  help: "Mellemrum og tegnsætning ignoreres. Resultaterne kører i din browser.",
  tryPrefix: "Prøv",
  exactOnly: "Kun eksakte anagrammer (samme bogstavantal)",
  multiWord: "Inkluder flerordsfraser",
  loadingDict: "Indlæser ordbog…",
  loadError: "Kunne ikke indlæse ordlisten. Genindlæs siden.",
  exactFound: "eksakte anagrammer fundet",
  wordsFromLetters: "ord fra disse bogstaver",
  noMatches: "Ingen resultater endnu — prøv et andet ord eller slå kun-eksakt fra.",
  shorterWords: "Kortere ord fra disse bogstaver",
  multiWordHeading: "Flerords-anagrammer",
  sameLetters: "samme bogstaver",
  copied: "kopieret",
  updating: "Opdaterer…",
  whatTitle: "Funktioner i Anagram-generator",
  whatBody:
    "Denne gratis anagram-generator er bygget omkring værktøjet ovenfor: skriv bogstaver én gang og få eksakte anagrammer, valgfrie kortere ord og flerordsfraser til navne. Fliser viser dit lager, Bland opdaterer synet, ét klik kopierer ethvert resultat.",
  toolExplainerTitle: "Hvad dette anagram-generator-værktøj faktisk gør",
  toolExplainerBody:
    "Værktøjet indlæser en stor engelsk ordliste i browseren, bygger en bogstavsignatur og matcher ordbogsord. Eksakt-tilstand beholder samme bogstavantal. Slå kun-eksakt fra for kortere ord som en solver. Flerords-tilstand søger læsbare fraser — typisk for navneanagrammer. Selve søgningen behøver ikke forlade din enhed.",
  controlsTitle: "Anagram-generatorens knapper forklaret",
  controls: [
    { t: "Bogstavfliser + tekstfelt", d: "Hvert A–Z-tegn bliver en flise. Mellemrum og tegnsætning ignoreres — nemt at indsætte fulde navne." },
    { t: "Bland", d: "Bland ændrer ikke dit bogstavlager — kun flisernes rækkefølge. Brug det til frisk inspiration." },
    { t: "Kun eksakte anagrammer", d: "Standard for generator-intent: ægte anagrammer af samme længde. Slå fra for hvert kortere spilbart ord." },
    { t: "Flerordsfraser", d: "Til navne og længere input. Ét ordbogsord er sjældent for fulde navne; to til fire ord er nyttige." },
    { t: "Kopiér med ét klik", d: "Tryk på et ord eller en frase for at kopiere uden at taste om." },
  ],
  whoTitle: "Hvem denne anagram-generator er til",
  whoIntro: "Samme værktøj dækker kreativt ordspil og praktisk afkodning — vælg den tilstand, der matcher jobbet.",
  whoItems: [
    { t: "Forfattere & worldbuilders", d: "Find karakteraliasser og skjulte afsløringer uden at forlade browseren." },
    { t: "Gåde- & krydsordsfans", d: "Afkod bogstavstativer og tjek om en omrokering er et rigtigt ord." },
    { t: "Gamere & streamere", d: "Brainstorm gamertags og kanalnavne fra dit rigtige navn eller et brandudtryk." },
    { t: "Lærere & spilleaftener", d: "Indsæt LISTEN eller et klasseord og vis eksakte anagrammer live — gratis, uden konto." },
  ],
  modesTitle: "Tre resultattilstande i én generator",
  modesIntro: "Mange konkurrenter gemmer valgmuligheder. Her viser startsidens værktøj de tre intents, folk faktisk søger efter.",
  modes: [
    { t: "Eksakte anagrammer", d: "Samme bogstaver, samme antal, ny rækkefølge — bedst til ægte anagrammer som CINEMA → ICEMAN." },
    { t: "Underord / solver-liste", d: "Slå kun-eksakt fra for kortere ord sorteret efter længde — ideelt til afkodning." },
    { t: "Flerords-navnefraser", d: "Aktiver fraser til fulde navne — tilstanden bag «anagram af mit navn»." },
  ],
  tryIdeasTitle: "Ord der er værd at indsætte i værktøjet",
  tryIdeasBody: "Brug Try-chips ovenfor, eller indsæt disse klassikere for at se forskellen mellem eksakt og flerords-tilstand.",
  tryIdeas: ["LISTEN", "CINEMA", "DORMITORY", "ASTRONOMER", "THE EYES", "CLINT EASTWOOD", "BRITNEY SPEARS", "CONVERSATION"],
  cardExactTitle: "Eksakte anagrammer",
  cardExactBody: "Samme bogstaver, ny rækkefølge. Generatoren prioriterer ægte anagrammer som LISTEN → SILENT — ikke et rod af korte ord.",
  cardSolverTitle: "Solver-klar underord",
  cardSolverBody: "Slå kun-eksakt fra for at finde hvert kortere ord i dine bogstaver — nyttigt til krydsord og casual spil.",
  cardNameTitle: "Navne- og frasesætning",
  cardNameBody: "Aktiver flerordsfraser for at lave mindeværdige linjer af fulde navne — workflowet bag navneanagram-søgninger.",
  howTitle: "Sådan bruger du denne anagram-generator",
  howIntroBefore: "Seks praktiske trin fra tomt felt til klar-til-kopiering. En længere guide findes på",
  howIntroLink: "sådan bruger du Anagram-generator",
  howIntroAfter: ".",
  howSteps: [
    { name: "Skriv et ord, navn eller bogstaver", text: "Alt fra LISTEN til dit fulde navn. Mellemrum er fine — kun A–Z tæller." },
    { name: "Se bogstavfliserne opdatere", text: "Fliser spejler dit lager, før du vurderer resultater." },
    { name: "Behold kun-eksakt til ægte anagrammer", text: "Checkbox på for samme længde — klassisk generator-adfærd." },
    { name: "Slå kun-eksakt fra for at afkode", text: "Hvert kortere ord fra stativet — som en solver." },
    { name: "Aktiver flerordsfraser til navne", text: "Fulde navne bliver sjældent ét ordbogsord. Frasetilstand gør navneanagrammer nyttige." },
    { name: "Bland, gennemse og kopiér", text: "Bland omrokerer fliser. Ét klik kopierer ord eller frase." },
  ],
  vsTitle: "Anagram-generator vs anagram-solver",
  vsBody: "Søgeresultater blander begge intentioner. Vi holder dem adskilt, så du finder det rigtige værktøj uden reklamer.",
  vsNeed: "Behov",
  vsTool: "Bedste værktøj her",
  vsWhy: "Hvorfor",
  vsRow1Need: "Kreative omrokeringer af et ord",
  vsRow1Tool: "Anagram-generator",
  vsRow1Why: "Eksakte match med samme bogstaver først",
  vsRow2Need: "Omsæt et bogstavstativ til mange ord",
  vsRow2Tool: "Anagram-solver",
  vsRow2Why: "Lister kortere spillbare ord efter længde",
  vsRow3Need: "Anagram af et personnavn",
  vsRow3Tool: "Navne-anagram-generator",
  vsRow3Why: "Flerordsfraser tilpasset navne",
  famousTitle: "Berømte anagrammer du kan tjekke på sekunder",
  famousBodyBefore: "Klassiske eksempler fascinerer, fordi de føles uundgåelige. Prøv dem ovenfor, eller læs vores",
  famousBodyLink: "anagram-eksempler",
  famousBodyAfter: ".",
  whyEyebrow: "Hvorfor folk søger dette",
  whyTitle: "Ordspil til gåder, brugernavne og skrivning",
  whyBody: "Krydsordsfans løser stativer. Forfattere jagter aliaser. Streamere opfinder tags. Én generator dækker det kreative; solveren det konkurrencemæssige.",
  tryWord: "Prøv et ord nu",
  tipsTitle: "Tips til bedre anagrammer",
  tips: [
    { t: "Start med almindelige bogstavmønstre", d: "Præfikser, suffikser og vokaler indsnævrer søgerummet og hjælper dig med at vurdere naturlige resultater." },
    { t: "Foretræk færre, længere ord i fraser", d: "De bedste navneanagrammer bruger to eller tre solide ord i stedet for mange små." },
    { t: "Tilføj bogstaver forsigtigt til navne", d: "Et mellemnavn kan låse bedre fraser op; for mange bogstaver gør det langsommere. Sigte efter 8–16 bogstaver." },
    { t: "Lær løsekunsten", d: "Læs vores guide til at løse anagrammer for mønstre brugt af gådemestre." },
  ],
  tipsFooterBefore: "Ny på emnet? Start med",
  tipsFooterMid: ", og sammenlign derefter",
  tipsFooterAfter: ", hvis du studerer kombinatorik eller coding-interviews.",
  trustTitle: "Bygget til hastighed, klarhed og tillid",
  trustItems: [
    "Kører helt i browseren efter ordbogsindlæsning",
    "Bogstavflise-UI der er nem at scanne",
    "Ét-klik-kopi af hvert ord og hver frase",
    "Separate solver- og navne-workflows",
    "Guides der matcher rigtig søgeefterspørgsel",
    "Egne Privacy-, About- og Disclaimer-sider",
  ],
  trustLink: "Se alle Anagram-generator-funktioner →",
  faqTitle: "Ofte stillede spørgsmål om anagram-generator",
  faqs: [
    { question: "Hvad er en anagram-generator?", answer: "En anagram-generator omarrangerer bogstaverne i et ord, navn eller frase til andre gyldige ord eller fraser med de samme bogstaver." },
    { question: "Er denne anagram-generator gratis?", answer: "Ja. Værktøjet kører gratis i din browser uden konto, download eller betalingsmur." },
    { question: "Forskel mellem generator og solver?", answer: "Generatoren fokuserer på kreative og eksakte anagrammer. Solveren finder alle kortere spillbare ord fra et bogstavstativ." },
    { question: "Kan jeg lave anagram af mit navn?", answer: "Ja. Indtast dit fulde navn og slå flerordsfraser til." },
    { question: "Tæller mellemrum og tegnsætning?", answer: "Nej. Kun bogstaverne A–Z omarrangeres." },
    { question: "Hvad betyder „eksakt anagram“?", answer: "Hvert bogstav fra input bruges præcis én gang — samme bogstaver, ny rækkefølge. Det er det, afkrydsningsfeltet Kun eksakte beskytter." },
    { question: "Hvad gør knappen Bland?", answer: "Bland omrokerer kun fliserne. Dit bogstavlager og ordbogstræffene forbliver de samme." },
    { question: "Hvorfor ingen resultater for mit navn?", answer: "Aktiver flerordsfraser. Et fuldt navn bliver næsten aldrig ét ordbogsord." },
    { question: "Virker det offline efter første indlæsning?", answer: "Når ordbogen er indlæst, kører søgningen lokalt i fanen. En hard refresh kan hente listen igen." },
    { question: "Gemmes min tekst på en server?", answer: "Søgningen kører i browseren. Se privatlivssiden for detaljer." },
  ],
  ctaTitle: "Klar til at omarrangere noget?",
  ctaBody: "Åbn den gratis anagram-generator, indsæt et ord eller navn, og kopiér det bedste resultat med ét tryk.",
  ctaButton: "Lav anagrammer",
  navGenerator: "Generator",
  navSolver: "Solver",
  navNames: "Navne-anagrammer",
  navWhat: "Hvad er et anagram",
  navBlog: "Blog",
  navAbout: "Om os",
  makeAnagrams: "Lav anagrammer",
  languageLabel: "Sprog",
  footerTools: "Værktøjer",
  footerGuides: "Guides",
  footerCtaTitle: "Begynd at omarrangere",
  footerCtaBody: "Gratis i browseren — ingen tilmelding. Lav ord- og navneanagrammer på sekunder.",
  footerRights: "Alle rettigheder forbeholdes.",
  footerNote: "Gratis online ordspils-værktøj. Ikke tilknyttet Scrabble eller ordbogsforlag.",
  metaTitle: "Anagram-generator — lav ord- og navneanagrammer gratis",
  metaDescription: "Gratis anagram-generator online. Omarranger ord, navne og bogstaver til nye ord og fraser med det samme.",
};

const ptBR: HomeMessages = {
  brand: "Gerador de Anagramas",
  heroBefore: "Reorganize letras ",
  heroAccent: "em novas palavras.",
  heroSubPrefix: "Digite qualquer palavra e veja cada anagrama na hora — grátis.",
  freeMeta: "Grátis · Web · Dicionário atualizado em",
  ratingsLabel: "avaliações",
  toolTitle: "Gerador de anagramas",
  inputLabel: "Digite uma palavra ou letras",
  inputPlaceholder: "DIGITE AQUI",
  lettersHint: "As letras aparecem aqui…",
  shuffle: "Embaralhar",
  help: "Espaços e pontuação são ignorados. Os resultados rodam no seu navegador.",
  tryPrefix: "Tentar",
  exactOnly: "Somente anagramas exatos (mesmo número de letras)",
  multiWord: "Incluir frases com várias palavras",
  loadingDict: "Carregando dicionário…",
  loadError: "Não foi possível carregar a lista de palavras. Atualize a página.",
  exactFound: "anagramas exatos encontrados",
  wordsFromLetters: "palavras com essas letras",
  noMatches: "Nenhum resultado ainda — tente outra palavra ou desative somente exatos.",
  shorterWords: "Palavras mais curtas com essas letras",
  multiWordHeading: "Anagramas de várias palavras",
  sameLetters: "mesmas letras",
  copied: "copiado",
  updating: "Atualizando…",
  whatTitle: "Recursos do Gerador de Anagramas",
  whatBody:
    "Este gerador de anagramas gratuito gira em torno da ferramenta acima: digite as letras uma vez e veja anagramas exatos, palavras mais curtas opcionais e frases de várias palavras para nomes. As fichas mostram seu inventário, Embaralhar atualiza a vista e um clique copia qualquer resultado.",
  toolExplainerTitle: "O que esta ferramenta de gerador de anagramas realmente faz",
  toolExplainerBody:
    "A ferramenta carrega uma grande lista de palavras em inglês no navegador, monta uma assinatura de letras e encontra palavras do dicionário. O modo exato mantém a mesma contagem de letras. Desative somente exatos para ver palavras mais curtas como um solver. O modo multiword busca frases legíveis — típico de anagramas de nomes. A busca em si não precisa sair do seu dispositivo.",
  controlsTitle: "Controles do gerador de anagramas explicados",
  controls: [
    { t: "Fichas de letras + campo de texto", d: "Cada caractere A–Z vira uma ficha. Espaços e pontuação são ignorados — fácil colar nomes completos." },
    { t: "Embaralhar", d: "Embaralhar não muda seu inventário — só a ordem das fichas. Use para inspiração visual." },
    { t: "Somente anagramas exatos", d: "Padrão para intenção de gerador: anagramas verdadeiros do mesmo comprimento. Desative para cada palavra jogável mais curta." },
    { t: "Frases de várias palavras", d: "Para nomes e entradas longas. Uma única palavra do dicionário é rara em nomes completos; duas a quatro palavras costumam ser úteis." },
    { t: "Copiar com um clique", d: "Toque em qualquer palavra ou frase para copiar sem redigitar." },
  ],
  whoTitle: "Para quem é este gerador de anagramas",
  whoIntro: "A mesma ferramenta cobre jogos de palavras criativos e decodificação prática — escolha o modo que combina com o trabalho.",
  whoItems: [
    { t: "Escritores e worldbuilders", d: "Busque apelidos de personagens e revelações escondidas sem sair do navegador." },
    { t: "Fãs de puzzles e cruzadas", d: "Desembaralhe racks e verifique se um rearranjo é uma palavra real." },
    { t: "Gamers e streamers", d: "Brainstorm de gamertags e nomes de canal a partir do nome real ou de uma frase de marca." },
    { t: "Professores e noites de jogos", d: "Cole LISTEN ou uma palavra da turma e mostre anagramas exatos ao vivo — grátis, sem conta." },
  ],
  modesTitle: "Três modos de resultado em um gerador",
  modesIntro: "Muitos concorrentes escondem opções. Aqui a ferramenta da home mostra as três intenções que as pessoas realmente pesquisam.",
  modes: [
    { t: "Anagramas exatos", d: "Mesmas letras, mesma contagem, nova ordem — ideal para anagramas verdadeiros como CINEMA → ICEMAN." },
    { t: "Subpalavras / lista de solver", d: "Desative somente exatos para listar palavras mais curtas por comprimento — ótimo para desembaralhar." },
    { t: "Frases de nome com várias palavras", d: "Ative frases para nomes completos — o modo por trás de «anagrama do meu nome»." },
  ],
  tryIdeasTitle: "Palavras que valem colar na ferramenta",
  tryIdeasBody: "Use os chips Tentar acima ou cole estes clássicos para ver a diferença entre o modo exato e o multiword.",
  tryIdeas: ["LISTEN", "CINEMA", "DORMITORY", "ASTRONOMER", "THE EYES", "CLINT EASTWOOD", "BRITNEY SPEARS", "CONVERSATION"],
  cardExactTitle: "Anagramas exatos",
  cardExactBody: "Mesmas letras, nova ordem. O gerador prioriza anagramas verdadeiros como LISTEN → SILENT — não um monte de palavras curtas sem relação.",
  cardSolverTitle: "Subpalavras prontas para solver",
  cardSolverBody: "Desative somente exatos para encontrar cada palavra mais curta nas suas letras — ótimo para palavras cruzadas e jogos casuais.",
  cardNameTitle: "Modo nome e frase",
  cardNameBody: "Ative frases de várias palavras para transformar nomes completos em linhas memoráveis — o fluxo por trás das buscas de anagrama de nome.",
  howTitle: "Como usar este gerador de anagramas",
  howIntroBefore: "Seis passos práticos do campo vazio ao resultado pronto para copiar. Um guia completo está na página",
  howIntroLink: "como usar o Gerador de Anagramas",
  howIntroAfter: ".",
  howSteps: [
    { name: "Digite uma palavra, nome ou letras", text: "Qualquer coisa de LISTEN ao nome completo. Espaços ok — só A–Z contam." },
    { name: "Veja as fichas de letras atualizarem", text: "As fichas espelham seu inventário antes de você julgar os resultados." },
    { name: "Mantenha somente exatos para anagramas verdadeiros", text: "Checkbox ligado para o mesmo comprimento — comportamento clássico de gerador." },
    { name: "Desative somente exatos para desembaralhar", text: "Cada palavra mais curta do rack — como um solver." },
    { name: "Ative frases de várias palavras para nomes", text: "Nomes completos raramente viram uma palavra do dicionário. O modo frase torna anagramas de nome úteis." },
    { name: "Embaralhe, explore e copie", text: "Embaralhar reordena as fichas. Um clique copia a palavra ou frase." },
  ],
  vsTitle: "Gerador de anagramas vs resolvedor de anagramas",
  vsBody: "Os resultados de busca misturam as duas intenções. Mantemos tudo claro para você achar a ferramenta certa sem anúncios.",
  vsNeed: "Necessidade",
  vsTool: "Melhor ferramenta aqui",
  vsWhy: "Por quê",
  vsRow1Need: "Reorganizações criativas de uma palavra",
  vsRow1Tool: "Gerador de anagramas",
  vsRow1Why: "Primeiro os matches com as mesmas letras",
  vsRow2Need: "Desembaralhar um rack em muitas palavras",
  vsRow2Tool: "Resolvedor de anagramas",
  vsRow2Why: "Lista palavras jogáveis mais curtas por tamanho",
  vsRow3Need: "Anagrama do nome de uma pessoa",
  vsRow3Tool: "Gerador de anagramas de nomes",
  vsRow3Why: "Frases de várias palavras para nomes",
  famousTitle: "Anagramas famosos que você pode verificar em segundos",
  famousBodyBefore: "Exemplos clássicos ainda encantam porque parecem inevitáveis. Experimente acima ou veja nosso guia de",
  famousBodyLink: "exemplos de anagramas",
  famousBodyAfter: ".",
  whyEyebrow: "Por que as pessoas pesquisam isso",
  whyTitle: "Jogos de palavras para puzzles, usuários e escrita",
  whyBody: "Fãs de cruzadas desembaralham racks. Autores buscam apelidos. Streamers inventam tags. Um gerador cobre o lado criativo; o solver, o competitivo.",
  tryWord: "Experimente uma palavra agora",
  tipsTitle: "Dicas para melhores anagramas",
  tips: [
    { t: "Comece com padrões comuns de letras", d: "Prefixos, sufixos e vogais reduzem o espaço de busca e ajudam a julgar resultados naturais." },
    { t: "Prefira menos palavras, porém mais longas", d: "Os melhores anagramas de nomes usam duas ou três palavras sólidas em vez de muitas curtas." },
    { t: "Adicione letras com cuidado nos nomes", d: "Um nome do meio pode abrir frases melhores; letras demais deixam a busca lenta. Ideal: 8–16 letras." },
    { t: "Aprenda a arte de resolver", d: "Leia nosso guia de como resolver anagramas com truques usados por campeões de puzzles." },
  ],
  tipsFooterBefore: "Novo no assunto? Comece com",
  tipsFooterMid: " e depois compare",
  tipsFooterAfter: " se você estuda combinatória ou entrevistas de programação.",
  trustTitle: "Feito para velocidade, clareza e confiança",
  trustItems: [
    "Roda inteiramente no navegador após carregar o dicionário",
    "Interface de letras em blocos fácil de escanear",
    "Cópia em um clique para cada palavra e frase",
    "Fluxos separados de solver e nomes",
    "Páginas educativas alinhadas à demanda real de busca",
    "Privacy, About e Disclaimer personalizados",
  ],
  trustLink: "Ver todos os recursos do Gerador de Anagramas →",
  faqTitle: "Perguntas frequentes do gerador de anagramas",
  faqs: [
    { question: "O que é um gerador de anagramas?", answer: "Um gerador de anagramas reorganiza as letras de uma palavra, nome ou frase em outras palavras ou frases válidas com as mesmas letras." },
    { question: "Este gerador de anagramas é grátis?", answer: "Sim. A ferramenta roda grátis no navegador, sem conta, download ou paywall." },
    { question: "Qual a diferença entre gerador e resolvedor?", answer: "O gerador foca em rearranjos criativos e exatos. O resolvedor lista todas as palavras jogáveis mais curtas de um rack." },
    { question: "Posso fazer anagrama do meu nome?", answer: "Sim. Digite o nome completo e ative frases de várias palavras." },
    { question: "Espaços e pontuação contam?", answer: "Não. Apenas as letras A–Z são reorganizadas." },
    { question: "O que significa anagrama exato?", answer: "Cada letra da entrada é usada exatamente uma vez — mesmas letras, nova ordem. É o que a caixa Somente exatos protege." },
    { question: "O que o botão Embaralhar faz?", answer: "Embaralhar só reordena as fichas. Seu inventário e os resultados do dicionário permanecem iguais." },
    { question: "Por que não há resultados para o meu nome?", answer: "Ative frases de várias palavras. Um nome completo quase nunca vira uma única palavra do dicionário." },
    { question: "Funciona offline depois do primeiro carregamento?", answer: "Depois que o dicionário carrega, a busca roda localmente na aba. Um hard refresh pode baixar a lista de novo." },
    { question: "Meu texto fica salvo em um servidor?", answer: "A busca roda no navegador. Veja a página de Privacidade para detalhes." },
  ],
  ctaTitle: "Pronto para reorganizar algo?",
  ctaBody: "Abra o gerador de anagramas grátis, digite uma palavra ou nome e copie o melhor resultado com um toque.",
  ctaButton: "Criar anagramas",
  navGenerator: "Gerador",
  navSolver: "Resolvedor",
  navNames: "Anagramas de nomes",
  navWhat: "O que é um anagrama",
  navBlog: "Blog",
  navAbout: "Sobre",
  makeAnagrams: "Criar anagramas",
  languageLabel: "Idioma",
  footerTools: "Ferramentas",
  footerGuides: "Guias",
  footerCtaTitle: "Comece a reorganizar",
  footerCtaBody: "Grátis no navegador — sem cadastro. Gere anagramas de palavras e nomes em segundos.",
  footerRights: "Todos os direitos reservados.",
  footerNote: "Ferramenta gratuita de jogos de palavras. Não afiliada ao Scrabble nem a editoras de dicionários.",
  metaTitle: "Gerador de Anagramas — palavras e nomes grátis",
  metaDescription: "Gerador de anagramas online grátis. Reorganize qualquer palavra, nome ou letras em novas palavras e frases na hora.",
};

const ALL: Record<string, HomeMessages> = {
  "en-US": enUS,
  "en-GB": enGB,
  da,
  "pt-BR": ptBR,
  de,
};

export function getMessages(localeCode: string): HomeMessages {
  return ALL[localeCode] || enUS;
}
