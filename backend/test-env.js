const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

console.log("✅ .env file loaded?");
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("__dirname:", __dirname);

const News = require('./src/models/news');
const sequelize = require('./src/config/database');

async function createTestData() {
  try {
    await sequelize.sync();
    
    // Test haberleri oluştur
    const testNews = [
      {
        title: 'Yapay Zeka Teknolojisinde Yeni Gelişmeler',
        content: 'Yapay zeka alanında son zamanlarda yaşanan gelişmeler, teknoloji dünyasını derinden etkiliyor. Araştırmacılar, makine öğrenmesi algoritmalarında önemli ilerlemeler kaydetti. Bu gelişmeler, günlük hayatımızı kolaylaştıracak yeni uygulamaların önünü açıyor.',
        summary: 'AI teknolojisinde son gelişmeler ve günlük hayata etkileri',
        category: 'technology',
        author: 'Teknoloji Editörü',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
        url: 'https://example.com/ai-technology',
        isBreaking: true
      },
      {
        title: 'Sürdürülebilir Enerji Projeleri Hızlanıyor',
        content: 'Dünya genelinde yenilenebilir enerji projeleri hızla artıyor. Güneş ve rüzgar enerjisi yatırımları, fosil yakıtlara olan bağımlılığı azaltmaya yardımcı oluyor. Uzmanlar, bu trendin önümüzdeki yıllarda daha da artacağını öngörüyor.',
        summary: 'Yenilenebilir enerji projelerindeki artış ve gelecek beklentileri',
        category: 'science',
        author: 'Çevre Muhabiri',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
        url: 'https://example.com/renewable-energy',
        isBreaking: false
      },
      {
        title: 'Spor Dünyasında Şampiyonluk Heyecanı',
        content: 'Bu sezon spor dünyasında büyük heyecan yaşanıyor. Farklı liglerde şampiyonluk yarışı kızışırken, taraftarlar da tribünlerde desteklerini esirgemiyor. Takımların performansları ve transfer haberleri gündemi meşgul ediyor.',
        summary: 'Spor dünyasındaki güncel gelişmeler ve şampiyonluk yarışı',
        category: 'sports',
        author: 'Spor Muhabiri',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
        url: 'https://example.com/sports-championship',
        isBreaking: false
      }
    ];

    for (const newsData of testNews) {
      await News.findOrCreate({
        where: { title: newsData.title },
        defaults: newsData
      });
    }

    console.log('✅ Test verileri başarıyla oluşturuldu!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Hata:', error);
    process.exit(1);
  }
}

createTestData();
