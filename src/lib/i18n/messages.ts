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

const tr: HomeMessages = {
  brand: "Delta Roblox",
  metaTitle: "Delta Roblox — Android ve iOS için Delta Executor İndirme",
  metaDescription:
    "Delta Roblox, Delta Executor için kapsamlı rehber merkezinizdir: Android APK, iOS kurulum ipuçları, PC rehberi, anahtar sistemi yardımı ve 2026 script çalıştırma güncellemeleri.",
  heroSubPrefix:
    "Delta Executor ile mobil cihazlarda desteklenen Roblox scriptlerini çalıştırın — Android ve iOS için net indirme adımları, anahtar yardımı ve pratik güvenlik notları deltaroblox.tr'de.",
  freeMeta: "Ücretsiz rehberler · Android ve iOS · Güncellendi",
  ratingsLabel: "değerlendirme",
  whatTitle: "Delta Roblox Nedir?",
  whatBody:
    "Delta Roblox, popüler mobil odaklı Roblox script yürütücüsü Delta Executor için bağımsız bir bilgi ve indirme rehberi sitesidir. Oyuncular, uygulama mevcut Roblox istemcisiyle uyumlu olduğunda Android ve iOS'ta desteklenen Lua scriptlerini yüklemek için Delta'yı kullanır. Bu site Delta'nın ne yaptığını, kurulumların nasıl çalıştığını, anahtar sisteminin nasıl işlediğini ve güvensiz yansıma APK'lardan nasıl kaçınılacağını açıklar.",
  toolExplainerTitle: "Oyuncular neden Delta Executor arıyor?",
  toolExplainerBody:
    "Delta Roblox etrafındaki arama talebi üç konuda yoğunlaşır: çalışan bir APK veya iOS derlemesi edinmek, anahtar sistemini açmak ve Roblox güncellemelerinden sonra hâlâ çalışan scriptler bulmak. Delta Executor, karanlık mobil arayüzü, script hub erişimi ve sık sürüm güncellemeleriyle (v2.745 serisi gibi) tanınır. Delta Roblox, bu amaçları ayrı rehberlere böler.",
  controlsTitle: "Delta Executor ile neler elde edersiniz",
  controls: [
    {
      t: "Hızlı script çalıştırma",
      d: "Delta, desteklenen Android cihazlarda hızlı enjeksiyon ve çalıştırma süreleri sunar; çiftlik ve yardımcı scriptler daha az beklemeyle başlar.",
    },
    {
      t: "Android ve iOS odaklı",
      d: "Delta Roblox aramalarının büyük çoğunluğu mobildir. Android APK rehberini veya cihazınıza uygun iOS kurulum rehberini takip edin.",
    },
    {
      t: "Anahtar sistemi açma",
      d: "Pek çok derleme zaman sınırlı anahtar kullanır. Anahtar rehberimiz, sizi gizlenmiş yönlendirmelerden geçirmeden standart akışı açıklar.",
    },
    {
      t: "Script hub erişimi",
      d: "Güvenilir hub'lardan desteklenen scriptleri görüntüleyin veya yapıştırın. Büyük Roblox istemci güncellemelerinden sonra scriptleri mutlaka yeniden kontrol edin.",
    },
    {
      t: "Kararlılık güncellemeleri",
      d: "Roblox yama yaptığında executor uygulamaları bozulur. Net bir sürüm numarası belirten ve değişiklik notları yayınlayan derlemeleri tercih edin.",
    },
    {
      t: "Kullanıcı dostu arayüz",
      d: "Delta'nın karanlık mobil arayüzü; çalıştır, hub ve ayarlar seçeneklerini telefonda çiftlik yaparken bile kolayca erişilebilir kılar.",
    },
  ],
  whoTitle: "Delta Roblox kime yönelik?",
  whoIntro:
    "Delta Roblox, boş 'anında ücretsiz Robux' vaatleri değil, net kurulum adımları ve dürüst risk bilgisi isteyen mobil oyuncularına hizmet eder.",
  whoItems: [
    {
      t: "Android script kullanıcıları",
      d: "Delta Executor APK'yı yükleyen, bilinmeyen kaynakları dikkatli etkinleştiren ve temiz bir kurulum kontrol listesi isteyen oyuncular.",
    },
    {
      t: "iOS deneyimcileri",
      d: "Yüklemeden önce platforma özgü uyarılara ihtiyaç duyan Delta iOS / IPA veya doğrudan kurulum seçeneklerini araştıran kullanıcılar.",
    },
    {
      t: "Anahtar ve script öğrencileri",
      d: "Çiftlik scriptlerini anlayan ancak güncellemelerden sonra anahtar sayfalarında, süresi dolmuş bağlantılarda veya bozulmuş hub'larda takılan yeni başlayanlar.",
    },
    {
      t: "Güvenlik bilincine sahip oyuncular",
      d: "Yansımaları karşılaştıran, Trustpilot tarzı geri bildirimleri okuyan ve Delta Executor'ın hesabı için güvenli olup olmadığını soran herkes.",
    },
  ],
  modesTitle: "Delta Roblox rehberlerini keşfedin",
  modesIntro:
    "İndirme, iOS, PC, Discord, Mac ve blog konuları için ayrı sayfalar — her arama amacının net bir evi vardır.",
  cardExactTitle: "Android APK indirme",
  cardExactBody:
    "Android 8+ için adım adım Delta Executor APK kurulumu; izinler ve kurulum sonrası kontroller dahil.",
  cardSolverTitle: "iOS kurulum yolu",
  cardSolverBody:
    "Delta'nın iOS'a genellikle nasıl kurulduğu, 'doğrudan kurulum' ne anlama gelir ve derlemelerin nerede başarısız olduğu.",
  cardWhatsappTitle: "Scriptler ve hub'lar",
  cardWhatsappBody:
    "Delta Executor için çalışan scriptler nasıl bulunur ve gereksiz paketler indirmeden nasıl düzenlenir.",
  howTitle: "Delta Executor'a nasıl başlanır",
  howIntroBefore: "Tam bir rehber mi istiyorsunuz?",
  howIntroLink: "Android indirme rehberini",
  howIntroAfter: "açın veya menüden iOS / PC sayfalarına geçin.",
  howSteps: [
    {
      name: "Platformunuzu seçin",
      text: "Android APK, en yaygın Delta Roblox yoludur. iOS ve PC'nin ayrı kısıtlamaları vardır — uygun rehberi kullanın.",
    },
    {
      name: "Güvenilir bir derlemeden yükleyin",
      text: "Etiketli Delta Executor paketini indirin, sürüm dizesini doğrulayın ve sohbet bağlantılarından gelen rastgele yeniden adlandırılmış APK'lardan kaçının.",
    },
    {
      name: "Anahtarı tamamlayın (gerekiyorsa)",
      text: "Uygulama içi anahtar akışını açın, kısa kilit açma adımlarını tamamlayın, ardından Delta'ya geri dönün. Anahtarların süresi genellikle belirli bir süre sonra dolar.",
    },
    {
      name: "Desteklenen bir script yükleyin",
      text: "Hub'dan bir script yapıştırın veya seçin, istendiğinde Roblox'a bağlanın ve yalnızca anladığınız scriptleri çalıştırın.",
    },
  ],
  whyEyebrow: "Netlik için inşa edildi",
  whyTitle: "Neden deltaroblox.tr kullanmalısınız?",
  whyBody:
    "Delta Executor SERP sayfalarının çoğu tüm anahtar kelimeleri tek bir URL'ye tıkıştırır, indirmeleri izleyicilerin arkasına saklar veya güvenlik konusunu atlar. Delta Roblox amaçları ayırır, gerçek görüntü meta verisi kullanır ve yandan yükleme risklerini baştan belirtir.",
  tipsTitle: "Pratik Delta ipuçları",
  tips: [
    {
      t: "Roblox istemcisiyle eşleştirin",
      d: "Roblox güncellemesinden sonra, dünün APK'sının hâlâ temiz enjekte edip etmediğini varsaymadan önce bir Delta sürüm notunu bekleyin.",
    },
    {
      t: "Anahtarları geçici sayın",
      d: "Kilit açma başarısız olursa, Discord DM'lerindeki yabancılardan anahtar yapıştırmak yerine resmi anahtar yolunu yenileyin.",
    },
    {
      t: "Test ederken hesapları ayırın",
      d: "Script araçları Roblox kurallarını ihlal edebilir. Executor'ları değerlendiriyorsanız yedek hesap kullanın.",
    },
    {
      t: "Yüklemeden önce tarayın",
      d: "Mümkün olduğunda bilinen dosya adlarını ve karmalarını tercih edin. Delta ile ilgisi olmayan erişilebilirlik izinleri isteyen APK'ları silin.",
    },
  ],
  trustTitle: "Bu sitedeki güven sinyalleri",
  trustItems: [
    "Alan adı üzerinde indirme rehberi (tek CTA olarak gizli bir bağlı kuruluş yönlendirmesi yok)",
    "Android, iOS, PC, anahtar yardımı ve güvenlik için ayrı sayfalar",
    "Özel Gizlilik ve Sorumluluk Reddi — şablonlu metin değil",
    "SoftwareApplication şemasıyla eşleşen görünür derecelendirme arayüzü",
  ],
  trustLink: "Sorumluluk reddimizi okuyun",
  faqTitle: "Delta Roblox Sıkça Sorulan Sorular",
  faqs: [
    {
      question: "Delta Executor nedir?",
      answer:
        "Delta Executor (çoğunlukla Delta Roblox olarak aranır), Android'de ve uygun olduğunda iOS derlemelerinde desteklenen Lua scriptlerini çalıştırmak için kullanılan üçüncü taraf bir mobil Roblox script yürütücüsüdür.",
    },
    {
      question: "Delta Executor ücretsiz mi?",
      answer:
        "Uygulama genellikle bir anahtar sistemi veya kilit açma akışıyla ücretsiz sunulur. Belgelenmiş süreç dışında rastgele satıcılara 'premium anahtar' için asla ödeme yapmamalısınız.",
    },
    {
      question: "Delta Android ve iOS'ta çalışıyor mu?",
      answer:
        "Android APK desteği birincil yoldur. iOS seçenekleri bazı sürümlerde mevcuttur ancak imzalama, cihaz işletim sistemi ve mevcut yamaya bağlıdır — iOS rehberine bakın.",
    },
    {
      question: "Delta anahtarına ihtiyacım var mı?",
      answer:
        "Pek çok derleme, scriptler çalışmadan önce kısa bir anahtar kilit açma gerektirir. Anahtarların süresi genellikle sınırlıdır. Olağan adımlar için anahtar sistemi blogunu okuyun.",
    },
    {
      question: "Roblox hesabım yasaklanabilir mi?",
      answer:
        "Evet. Executor kullanmak Roblox Kullanım Koşullarını ihlal edebilir ve moderasyon işlemlerine yol açabilir. Herhangi bir şey yüklemeden önce riski anlayın.",
    },
    {
      question: "Delta Executor güvenli mi?",
      answer:
        "Güvenlik, derleme kaynağına, verdiğiniz izinlere ve çalıştırdığınız scriptlere bağlıdır. Bilinmeyen yansımalardan kaçının ve yandan yüklemeden önce güvenlik makalemizi okuyun.",
    },
    {
      question: "Delta Executor Roblox tarafından tespit edilemez mi?",
      answer:
        "Hiçbir executor 'tespit edilemez' değildir. Roblox'un hile karşıtı sistemi sunucu taraflıdır ve davranış kalıplarını analiz eder. Delta'nın tespit edilemez olduğunu iddia etmiyoruz — daha az görünür scriptler (pasif otomatik çiftlik ile bariz uçma/hız hileleri) riski azaltır.",
    },
    {
      question: "Delta UNC'yi (Unified Naming Convention) destekliyor mu?",
      answer:
        "Delta Executor, UNC API yüzeyinin önemli bir bölümünü uygular. Tam kapsam düzeyi güncellemeye göre değişir — her yama döngüsünde Roblox'un Lua ortamına eklenen veya kaldırılan işlevler sonraki Delta güncellemelerinde ele alınır.",
    },
    {
      question: "Script hub harici script sitelerinden nasıl farklı?",
      answer:
        "Hub scriptleri eklenmeden önce incelenir; bu, açık oturum çalan kodları tarar. Harici script siteleri denetimsizdir ve daha yüksek kötü amaçlı Lua riski taşır. Hub ödünleşimi: sınırlı, düzenlenmiş bir seçim ile harici kaynaklardan sınırsız ancak denetlenmemiş seçenekler arasındadır.",
    },
  ],
  ctaTitle: "Delta Executor indirme rehberi",
  ctaBody:
    "Android APK rehberiyle başlayın veya cihazınıza göre iOS / PC rehberlerini açın. Ardından anahtar kilit açma ve güvenlik notlarını inceleyin.",
  ctaButton: "İndirme rehberini aç",
  navGenerator: "Ana Sayfa",
  navInstagram: "İndir",
  navNick: "iOS",
  navWhatsapp: "PC",
  navWhat: "Özellikler",
  navBlog: "Blog",
  navAbout: "Hakkımızda",
  makeStyles: "İndir",
  languageLabel: "Dil",
  footerTools: "Sayfalar",
  footerGuides: "Rehberler",
  footerSocial: "Sosyal Medya",
  footerCtaTitle: "Delta Executor'ı edinin",
  footerCtaBody: "Android, iOS ve PC yolları — net uyarılarla birlikte.",
  footerRights: "Tüm hakları saklıdır.",
  footerNote:
    "Delta Roblox bağımsız bir hayran rehberidir. Roblox Corporation ile bağlantısı yoktur. Executor'lar ToS'u ihlal edebilir — kullanım riski size aittir.",
  platformsTitle: "Kapsanan platformlar",
  platformsIntro:
    "Delta Roblox, Google sonuçlarına hâkim olan amaçları ele alır: Android APK, iOS kurulumu, PC denemeleri ve anahtar kilit açma yardımı.",
  platforms: [
    {
      t: "Android",
      d: "APK yandan yükleme, bilinmeyen kaynak ayarları ve ilk çalıştırma anahtar akışı.",
    },
    {
      t: "iOS",
      d: "IPA / doğrudan kurulum kalıpları ve yaygın imzalama hataları.",
    },
    {
      t: "PC",
      d: "'Delta for PC' listelerinin genellikle ne anlama geldiği ve rastgele EXE yansımalarına güvenli alternatifler.",
    },
    {
      t: "Scriptler",
      d: "Hub kullanımı, yapıştır-çalıştır ve güncelleme sonrası doğrulama alışkanlıkları.",
    },
  ],
  compareTitle: "Delta Roblox ile tipik yansıma sayfaları karşılaştırması",
  compareBody:
    "Yansıma siteleri genellikle kurulum adımlarını anahtar kelime doldurma ve site dışı yönlendirmelerin altına gömer. Delta Roblox, CTA'ları deltaroblox.tr'de tutar, rehberleri platforma göre ayırır ve YouTube başlıklarının atladığı riskleri belgeler.",
};

export function getMessages(_code?: string): HomeMessages {
  return tr;
}
