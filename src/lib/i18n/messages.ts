export type HomeMessages = {
  brand: string;
  metaTitle: string;
  metaDescription: string;
  heroSubPrefix: string;
  freeMeta: string;
  ratingsLabel: string;
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
  cardExactTitle: string;
  cardExactBody: string;
  cardSolverTitle: string;
  cardSolverBody: string;
  cardWhatsappTitle: string;
  cardWhatsappBody: string;
  howTitle: string;
  howIntroBefore: string;
  howIntroLink: string;
  howIntroAfter: string;
  howSteps: { name: string; text: string }[];
  whyEyebrow: string;
  whyTitle: string;
  whyBody: string;
  tipsTitle: string;
  tips: { t: string; d: string }[];
  trustTitle: string;
  trustItems: string[];
  trustLink: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  navGenerator: string;
  navInstagram: string;
  navNick: string;
  navWhatsapp: string;
  navWhat: string;
  navBlog: string;
  navAbout: string;
  makeStyles: string;
  languageLabel: string;
  footerTools: string;
  footerGuides: string;
  footerSocial: string;
  footerCtaTitle: string;
  footerCtaBody: string;
  footerRights: string;
  footerNote: string;
  platformsTitle: string;
  platformsIntro: string;
  platforms: { t: string; d: string }[];
  compareTitle: string;
  compareBody: string;
};

const fil: HomeMessages = {
  brand: "Delta Executor",
  metaTitle: "Delta Executor — Gabay sa Download para sa Android, iOS at PC (Pilipinas)",
  metaDescription:
    "Mga gabay sa Delta Executor para sa Android APK, iOS, PC emulator, key system, safety, at script tips — para sa mga manlalaro sa Pilipinas. Updated 2026 sa deltaexecutor.com.ph.",
  heroSubPrefix:
    "Patakbuhin ang suportadong Roblox scripts sa mobile gamit ang malinaw na Delta Executor download steps, key unlock help, at tapat na safety notes — para sa mga manlalaro sa Pilipinas na gusto ng gumaganang build nang walang mirror-site ingay.",
  freeMeta: "Libre · Android at iOS · Updated · Pilipinas",
  ratingsLabel: "ratings",
  whatTitle: "Ano ang Delta Executor?",
  whatBody:
    "Ang Delta Executor ay isang mobile-first Roblox script executor na nagpapahintulot sa mga manlalaro na mag-load ng suportadong Lua scripts sa Android at, kapag available, sa iOS. Hinahanap ito ng mga Pilipinong manlalaro kapag kailangan nila ng gumaganang APK o IPA, maaasahang key unlock, at script hub na tumatakbo pa rin pagkatapos ng Roblox patch. Ang deltaexecutor.com.ph ay independent guide hub para sa install, key, platform, at panganib — hindi isang manipis na mirror page.",
  toolExplainerTitle: "Bakit hinahanap ang Delta Executor",
  toolExplainerBody:
    "Tatlong pangunahing kailangan ang nangingibabaw sa search: gumaganang Android o iOS build, araw-araw na key, at scripts na gumagana pagkatapos ng Roblox update. Kilala ang Delta sa dark mobile UI, built-in script hub, at madalas na update sa v2.743 series. Hinahati namin ang mga gabay para sa Android, iOS, PC, VNG, at key help para hindi magbanggaan ang mga page.",
  controlsTitle: "Ano ang makukuha mo sa Delta Executor",
  controls: [
    {
      t: "Mabilis na script execution",
      d: "Sa suportadong Android devices, nag-i-inject at tumatakbo ang common farm at helper scripts nang mas mabilis — mas malinis ang session kapag tugma ang build sa Roblox client mo.",
    },
    {
      t: "Nakatuon sa Android at iOS",
      d: "Karamihan ng Delta search sa Pilipinas ay mobile. Sundin ang Android APK guide o iOS install path na tugma sa device, signing method, at OS version mo.",
    },
    {
      t: "Key system unlock",
      d: "May time-limited key ang libreng build. Tinuturo ng key guide ang opisyal na in-app flow para hindi ka madala sa random na cloaked redirects.",
    },
    {
      t: "Script hub access",
      d: "Mag-browse o mag-paste ng suportadong scripts mula sa trusted hub categories. Palaging i-check ulit ang scripts pagkatapos ng malaking Roblox update.",
    },
    {
      t: "Stability updates",
      d: "Nabubuwag ang executors kapag nagpa-patch ang Roblox. Pumili ng build na may malinaw na version string at release notes — hindi anonymous “latest free” APK mula sa chat.",
    },
    {
      t: "Mobile-ready interface",
      d: "Madaling maabot ang Execute, Hub, at Settings sa dark mobile UI ng Delta — praktikal kapag nagfa-farm ka sa phone nang walang keyboard.",
    },
  ],
  whoTitle: "Para kanino ang Delta Executor?",
  whoIntro:
    "Para sa mga mobile players sa Pilipinas na gusto ng malinaw na install steps at tapat na usapan tungkol sa risk — hindi empty na “instant free Robux” promises.",
  whoItems: [
    {
      t: "Android script users",
      d: "Mga manlalarong nag-si-sideload ng Delta APK, maingat na nag-e-enable ng unknown sources, at may checklist bago buksan ang Roblox.",
    },
    {
      t: "iOS experimenters",
      d: "Mga nagsasaliksik ng IPA / Direct Install na kailangan ng babala tungkol sa certificates, trust prompts, at revokes bago mag-install.",
    },
    {
      t: "Key at script learners",
      d: "Mga baguhan na nauunawaan ang farm scripts pero natatigil sa expired keys, gateway loops, o hubs na tumitigil pagkatapos ng Roblox update.",
    },
    {
      t: "Safety-conscious players",
      d: "Sinumang naghahambing ng mirrors, nagbabasa ng risk write-ups, at nagtatanong kung safe ba ang Delta para sa device at alt account nila.",
    },
  ],
  modesTitle: "Tuklasin ang mga gabay sa Delta Executor",
  modesIntro:
    "Hiwalay na page para sa download, iOS, PC, Mac, VNG, Discord, troubleshooting, at SERP blogs — may malinaw na tahanan ang bawat search intent.",
  cardExactTitle: "Android APK download",
  cardExactBody:
    "Step-by-step Delta Executor APK install para sa Android 8+, kasama ang permissions, Play Protect notes, at post-install checks.",
  cardSolverTitle: "iOS install path",
  cardSolverBody:
    "Paano karaniwang napupunta ang Delta sa iPhone at iPad, ano ang Direct Install, at saan madalas bagsak ang builds pagkatapos ng certificate revoke.",
  cardWhatsappTitle: "Scripts at hubs",
  cardWhatsappBody:
    "Paano humanap ng gumaganang scripts para sa Delta at i-organize ang mga ito nang hindi nagda-download ng random packs mula sa unverified chat links.",
  howTitle: "Paano magsimula sa Delta Executor",
  howIntroBefore: "Gusto mo ng buong walkthrough?",
  howIntroLink: "buksan ang Android download guide",
  howIntroAfter: "o pumunta sa iOS / PC pages mula sa menu.",
  howSteps: [
    {
      name: "Piliin ang platform mo",
      text: "Android APK ang pinakakaraniwang path. May ibang limitasyon ang iOS at PC — gamitin ang tugmang gabay, huwag pilitin ang isang APK sa lahat.",
    },
    {
      name: "Mag-install mula sa labeled build",
      text: "I-download ang labeled Delta package, i-verify ang version string, at iwasan ang randomly renamed APKs mula sa Discord DMs o Telegram groups.",
    },
    {
      name: "Kumpletuhin ang key (kung kailangan)",
      text: "Buksan ang in-app Get Key flow, tapusin ang maikling unlock steps, tapos i-paste pabalik sa Delta. Karaniwang ~24 oras ang validity ng key sa libreng build.",
    },
    {
      name: "Mag-load ng suportadong script",
      text: "Mag-paste o pumili mula sa hub, mag-attach sa Roblox kapag hiniling, at magpatakbo lang ng scripts na naiintindihan mo sa alternate account.",
    },
  ],
  whyEyebrow: "Ginawa para sa kalinawan",
  whyTitle: "Bakit deltaexecutor.com.ph?",
  whyBody:
    "Karamihan ng Delta SERP pages ay pinagsasama-sama ang lahat ng keyword sa isang URL, nagtatago ng download sa trackers, o hindi nagsasabi ng safety. Hinahati namin ang intents, may totoong image metadata, at sinasabi agad ang sideloading at ban risk — gabay na mapagkakatiwalaan ng mga manlalaro sa Pilipinas.",
  tipsTitle: "Praktikal na tips sa Delta Executor",
  tips: [
    {
      t: "Itugma sa Roblox client",
      d: "Pagkatapos ng Roblox update, hintayin ang Delta version note bago isipin na gumagana pa rin ang kahapon na APK sa device mo.",
    },
    {
      t: "Ituring na pansamantala ang keys",
      d: "Kung bagsak ang unlock, i-refresh ang opisyal na in-app key path — huwag mag-paste ng keys na ibinebenta ng strangers sa Discord DMs.",
    },
    {
      t: "Ihiwalay ang accounts habang nagte-test",
      d: "Maaaring lumabag sa Roblox rules ang script tools. Gumamit ng alt account — huwag ang main na may Robux inventory.",
    },
    {
      t: "I-scan bago mag-install",
      d: "Pumili ng kilalang filenames at published hashes kung available. Tanggalin ang APKs na humihingi ng unrelated accessibility permissions nang walang dahilan.",
    },
  ],
  trustTitle: "Trust signals sa site na ito",
  trustItems: [
    "On-domain download guidance (walang cloaked affiliate redirect bilang tanging CTA)",
    "Hiwalay na pages para sa Android, iOS, PC, key help, safety, at fake-site warnings",
    "Custom Privacy at Disclaimer — hindi generator boilerplate",
    "Visible rating UI na tugma sa SoftwareApplication schema",
  ],
  trustLink: "Basahin ang aming disclaimer",
  faqTitle: "Mga Madalas Itanong tungkol sa Delta Executor",
  faqs: [
    {
      question: "Ano ang Delta Executor?",
      answer:
        "Ang Delta Executor ay third-party mobile Roblox script executor para patakbuhin ang suportadong Lua scripts sa Android at, kapag available, sa iOS. Hinahanap din bilang Delta X o Delta Roblox executor.",
    },
    {
      question: "Libre ba ang Delta Executor?",
      answer:
        "Karaniwang libre ang app na may key system o unlock flow. Huwag magbayad sa random sellers para sa “premium key” sa labas ng documented official Premium path.",
    },
    {
      question: "Gumagana ba ang Delta sa Android at iOS?",
      answer:
        "Android APK ang pangunahing path. May iOS options sa ilang releases depende sa signing, OS, at kasalukuyang patch — tingnan ang iOS guide.",
    },
    {
      question: "Kailangan ko ba ng Delta Executor key?",
      answer:
        "Maraming libreng build ang nangangailangan ng maikling key unlock bago tumakbo ang scripts. Time-limited at device-bound ang keys. Basahin ang key system blog para sa usual steps.",
    },
    {
      question: "Pwede bang ma-ban ang Roblox account ko?",
      answer:
        "Oo. Ang paggamit ng executor ay maaaring lumabag sa Roblox Terms of Service at magresulta sa moderation. Unawain ang risk bago mag-install.",
    },
    {
      question: "Safe ba ang Delta Executor?",
      answer:
        "Depende sa source ng build, permissions na ibinibigay mo, at scripts na pinapatakbo. Iwasan ang unknown mirrors at basahin ang safety article bago mag-sideload.",
    },
    {
      question: "Undetectable ba ang Delta Executor?",
      answer:
        "Walang executor na undetectable. May server-side anti-cheat ang Roblox. Hindi namin inaangkin ang “undetected” — mas ligtas ang quieter scripts kaysa sa marketing slogans.",
    },
    {
      question: "Sinusuportahan ba ng Delta ang UNC?",
      answer:
        "Implementado ang malaking bahagi ng UNC API surface. Nagbabago ang coverage kada update habang nagbabago ang Lua environment ng Roblox.",
    },
    {
      question: "Paano naiiba ang script hub sa external script sites?",
      answer:
        "Na-curate ang hub scripts bago ilista, kaya nababawasan ang ilang session-stealing patterns. Ang external paste sites ay unchecked at mas mataas ang malicious Lua risk.",
    },
  ],
  ctaTitle: "Buksan ang Delta Executor download guide",
  ctaBody:
    "Magsimula sa Android APK guide, o buksan ang iOS / PC guides para sa device mo. Suriin muna ang key unlock at safety notes bago mag-inject.",
  ctaButton: "Buksan ang download guide",
  navGenerator: "Home",
  navInstagram: "Download",
  navNick: "iOS",
  navWhatsapp: "PC",
  navWhat: "Features",
  navBlog: "Blog",
  navAbout: "Tungkol",
  makeStyles: "Download",
  languageLabel: "Wika",
  footerTools: "Mga Page",
  footerGuides: "Mga Gabay",
  footerSocial: "Social",
  footerCtaTitle: "Kunin ang Delta Executor",
  footerCtaBody: "Android, iOS, at PC paths — may malinaw na babala.",
  footerRights: "Lahat ng karapatan ay nakalaan.",
  footerNote:
    "Ang Delta Executor sa deltaexecutor.com.ph ay independent fan guide. Hindi affiliated sa Roblox Corporation. Maaaring lumabag ang executors sa ToS — gamitin sa sarili mong panganib.",
  platformsTitle: "Mga platform na tinatalakay namin",
  platformsIntro:
    "Tugma ang mga gabay sa intents na nangingibabaw sa Google sa Pilipinas: Android APK, iOS install, PC via emulator, Mac, VNG, at key unlock help.",
  platforms: [
    {
      t: "Android",
      d: "APK sideload, unknown-sources settings, at first-run key flow.",
    },
    {
      t: "iOS",
      d: "IPA / Direct Install patterns at common signing failures.",
    },
    {
      t: "PC",
      d: "Ano ang ibig sabihin ng “Delta for PC” at mas ligtas na emulator alternatives sa random EXE mirrors.",
    },
    {
      t: "Scripts",
      d: "Hub usage, paste-and-execute habits, at post-update verification.",
    },
  ],
  compareTitle: "Delta Executor vs tipikal na mirror pages",
  compareBody:
    "Itinatago ng mirror sites ang install steps sa keyword stuffing at off-site redirects. Pinapanatili namin ang CTAs sa deltaexecutor.com.ph, hinahati ang gabay ayon sa platform, at isinusulat ang risks na nilalaktawan ng YouTube titles.",
};

export function getMessages(_code?: string): HomeMessages {
  return fil;
}
