const News = require('../models/news');
const Category = require('../models/category');

const sampleNews = [
  {
    title: "Yapay Zeka Teknolojisinde Yeni Gelişmeler",
    excerpt: "OpenAI'nin yeni GPT-5 modeli, doğal dil işleme alanında çığır açan gelişmeler sunuyor.",
    content: "Yapay zeka teknolojisinde son dönemde yaşanan gelişmeler, endüstrinin geleceğini şekillendiriyor. OpenAI'nin yeni GPT-5 modeli, önceki versiyonlara göre %40 daha iyi performans gösteriyor ve daha doğal konuşma yeteneklerine sahip.\n\nBu yeni model, özellikle doğal dil işleme alanında büyük ilerlemeler kaydediyor. GPT-5, daha az veri ile daha iyi sonuçlar üretebiliyor ve çok dilli destek konusunda da önemli gelişmeler içeriyor.\n\nUzmanlar, bu teknolojinin eğitim, sağlık, finans ve eğlence sektörlerinde devrim yaratacağını öngörüyor. Özellikle eğitim alanında, kişiselleştirilmiş öğrenme deneyimleri sunma potansiyeli büyük ilgi görüyor.\n\nAncak bu gelişmeler aynı zamanda etik soruları da gündeme getiriyor. Yapay zekanın iş gücü üzerindeki etkisi ve veri güvenliği konuları, teknoloji şirketlerinin ve politika yapıcıların gündeminde öncelikli konular arasında yer alıyor.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    category: "technology",
    author: "Tech Reporter",
    publishedAt: new Date(),
    readTime: "5 min",
    likes: 245,
    comments: 18,
    interactionCount: 1250
  },
  {
    title: "Küresel İklim Anlaşması İmzalandı",
    excerpt: "200'den fazla ülke, karbon emisyonlarını azaltmak için tarihi bir anlaşma imzaladı.",
    content: "Paris'te düzenlenen küresel iklim zirvesinde, 200'den fazla ülke temsilcisi karbon emisyonlarını 2030 yılına kadar %50 azaltma hedefi için anlaşma imzaladı. Bu anlaşma, iklim değişikliğiyle mücadelede önemli bir adım olarak görülüyor.\n\nAnlaşma kapsamında, gelişmiş ülkeler gelişmekte olan ülkelere finansal destek sağlayacak ve temiz enerji teknolojilerinin transferi konusunda işbirliği yapacaklar. Bu destek, özellikle yenilenebilir enerji projelerinin hayata geçirilmesinde kritik rol oynayacak.\n\nÇevre örgütleri, anlaşmayı önemli bir ilerleme olarak değerlendirirken, bazıları hedeflerin bilim insanlarının önerdiği seviyelerin altında kaldığını belirtiyor. Uzmanlar, anlaşmanın başarılı olması için tüm ülkelerin taahhütlerini yerine getirmesi gerektiğini vurguluyor.\n\nBir sonraki zirve, 2025 yılında düzenlenecek ve uygulamanın hızlandırılması ile hedeflerin artırılması konularına odaklanacak.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
    category: "politics",
    author: "World News",
    publishedAt: new Date(Date.now() - 3600000),
    readTime: "7 min",
    likes: 189,
    comments: 32,
    interactionCount: 980
  },
  {
    title: "Futbol Ligi Şampiyonası Heyecanı",
    excerpt: "Sezonun son maçlarında şampiyonluk yarışı kızışıyor.",
    content: "Futbol liginde sezonun son haftalarına girilirken, şampiyonluk yarışı heyecan verici bir hal alıyor. İlk 3 takım arasında sadece 2 puan fark bulunuyor ve her maç kritik önem taşıyor.\n\nSon haftalarda yaşanan sürpriz sonuçlar, şampiyonluk yarışını daha da belirsiz hale getirdi. Uzmanlar, sezonun son maçına kadar şampiyonun belli olmayacağını öngörüyor.\n\nTaraftarlar, sosyal medyada yoğun tartışmalar yaşıyor ve her takımın destekçileri kendi takımlarının şampiyon olacağına inanıyor. Bu durum, lig tarihinde görülmemiş bir heyecan yaratıyor.\n\nKulüp yöneticileri, oyuncuların motivasyonunu yüksek tutmak için özel programlar düzenliyor ve taraftar desteğinin kritik önem taşıdığını vurguluyor.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    category: "sports",
    author: "Sports Desk",
    publishedAt: new Date(Date.now() - 7200000),
    readTime: "4 min",
    likes: 156,
    comments: 24,
    interactionCount: 750
  },
  {
    title: "Yeni Netflix Dizisi Rekor Kırdı",
    excerpt: "Netflix'in yeni orijinal dizisi, ilk haftasında 100 milyon izlenme rekoru kırdı.",
    content: "Netflix'in yeni yayınladığı orijinal dizisi, ilk haftasında 100 milyon izlenme sayısına ulaşarak platform tarihinde yeni bir rekor kırdı. Dizi, sosyal medyada da büyük ilgi görüyor.\n\nDizinin başarısı, özellikle genç izleyici kitlesi arasında büyük yankı uyandırdı. Sosyal medya platformlarında dizi hakkında milyonlarca paylaşım yapıldı ve hashtag'ler trend oldu.\n\nKritikler, dizinin yapım kalitesi ve oyuncu performanslarını övgüyle karşıladı. Özellikle senaryo yazımı ve görsel efektler konusunda büyük beğeni topladı.\n\nNetflix, dizinin başarısından dolayı ikinci sezon onayı verdi ve çekimlerin yakında başlayacağını duyurdu. Bu haber, hayranları büyük sevince boğdu.",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800",
    category: "entertainment",
    author: "Entertainment Weekly",
    publishedAt: new Date(Date.now() - 10800000),
    readTime: "3 min",
    likes: 298,
    comments: 45,
    interactionCount: 2100
  },
  {
    title: "Elektrikli Araç Pazarında Büyük Artış",
    excerpt: "Elektrikli araç satışları geçen yıla göre %150 artış gösterdi.",
    content: "Elektrikli araç pazarında yaşanan büyük artış, otomotiv sektörünün geleceğini şekillendiriyor. Geçen yıla göre %150 artış gösteren satışlar, tüketicilerin çevre bilincinin artığını gösteriyor.\n\nUzmanlar, bu artışın temel nedenlerinin artan yakıt fiyatları, devlet teşvikleri ve çevre bilincinin artması olduğunu belirtiyor. Özellikle genç tüketiciler arasında elektrikli araç tercihi giderek artıyor.\n\nOtomotiv üreticileri, elektrikli araç modellerini artırmak için büyük yatırımlar yapıyor. Birçok şirket, 2030 yılına kadar tamamen elektrikli araç üretimine geçmeyi planlıyor.\n\nŞarj istasyonu altyapısının da hızla gelişmesi, elektrikli araç kullanımını daha da cazip hale getiriyor. Devletler, şarj istasyonu kurulumu için teşvik programları uyguluyor.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800",
    category: "technology",
    author: "Auto News",
    publishedAt: new Date(Date.now() - 14400000),
    readTime: "6 min",
    likes: 167,
    comments: 28,
    interactionCount: 890
  },
  {
    title: "Yeni Uzay Görevi Başarıyla Tamamlandı",
    excerpt: "Mars'a gönderilen uzay aracı, planlanan görevini başarıyla tamamladı.",
    content: "Mars'a gönderilen uzay aracı, planlanan tüm görevlerini başarıyla tamamladı ve Dünya'ya değerli veriler gönderdi. Bu başarı, uzay araştırmaları alanında yeni bir dönüm noktası olarak görülüyor.\n\nUzay aracı, Mars yüzeyinde 500 gün boyunca çalıştı ve gezegenin atmosferi, toprak yapısı ve su varlığı hakkında detaylı bilgiler topladı. Bu veriler, gelecekteki Mars görevleri için kritik önem taşıyor.\n\nBilim insanları, toplanan verilerin Mars'ta yaşam izlerinin araştırılması konusunda büyük umut verdiğini belirtiyor. Özellikle su varlığına dair bulgular, gelecekte insanlı Mars görevlerinin planlanmasında önemli rol oynayacak.\n\nUzay ajansı, bu başarının ardından yeni Mars görevleri planlamaya başladı ve 2030 yılına kadar insanlı Mars görevi için hazırlıkları hızlandırdı.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800",
    category: "technology",
    author: "Space News",
    publishedAt: new Date(Date.now() - 18000000),
    readTime: "8 min",
    likes: 234,
    comments: 41,
    interactionCount: 1560
  }
];

const seedNews = async () => {
  try {
    // Check if news already exist
    const existingNews = await News.count();
    if (existingNews > 0) {
      console.log('News already seeded, skipping...');
      return;
    }

    // Create sample news
    await News.bulkCreate(sampleNews);
    console.log('Sample news seeded successfully!');
  } catch (error) {
    console.error('Error seeding news:', error);
  }
};

module.exports = { seedNews }; 