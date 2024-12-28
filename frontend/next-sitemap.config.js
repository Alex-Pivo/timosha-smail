module.exports = {
  siteUrl: process.env.SITE_URL || 'https://timoshas-smile.org',
  generateRobotsTxt: true, // (опционально) Создание файла robots.txt
  changefreq: 'daily', // Частота изменений страниц
  priority: 0.7, // Приоритет страниц
  sitemapSize: 5000, // Количество ссылок на один файл sitemap
  i18n: {
    locales: ['ua', 'en', 'ru', "it"], // Языки, которые поддерживает ваш сайт
    defaultLocale: 'ua', // Основной язык сайта
  },
  exclude: [], // Исключите страницы, которые не должны попадать в sitemap
};
