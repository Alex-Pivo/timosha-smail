// src/app/[locale]/sitemap/page.tsx

import React from 'react';

interface StaticPage {
    loc: string;
    changefreq: string;
}

interface DynamicNews {
    loc: string;
    changefreq: string;
}

// Функция для генерации XML
const generateXML = (staticPages: StaticPage[], dynamicNews: DynamicNews[]): string => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Добавляем статические страницы
    staticPages.forEach(page => {
        xml += '  <url>\n';
        xml += `    <loc>${page.loc}</loc>\n`;
        xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
        xml += '  </url>\n';
    });

    // Добавляем динамические новости
    dynamicNews.forEach(news => {
        xml += '  <url>\n';
        xml += `    <loc>${news.loc}</loc>\n`;
        xml += `    <changefreq>${news.changefreq}</changefreq>\n`;
        xml += '  </url>\n';
    });

    xml += '</urlset>\n';
    return xml;
};

// Главный компонент SitemapPage
const SitemapPage = async ({ params }: { params: { locale: string } }) => {
    // Получение данных непосредственно в компоненте
    const res = await fetch('https://timoshas-smile.org:8443/sitemap/json');
    const data = await res.json();

    const staticPages: StaticPage[] = data.static_pages;
    const dynamicNews: DynamicNews[] = data.dynamic_news;

    const xmlData = generateXML(staticPages, dynamicNews);

    return (
        <div>
            <h1>Сайтмап</h1>
            <h2>Статичні сторінки</h2>
            <ul>
                {staticPages.map((page, index) => (
                    <li key={index}>
                        <a href={page.loc}>{page.loc}</a> - {page.changefreq}
                    </li>
                ))}
            </ul>
            <h2>Динамічні новини</h2>
            <ul>
                {dynamicNews.map((news, index) => (
                    <li key={index}>
                        <a href={news.loc}>{news.loc}</a> - {news.changefreq}
                    </li>
                ))}
            </ul>
            <h2>XML Структура</h2>
            <pre>
                <code>{xmlData}</code>
            </pre>
        </div>
    );
};

// Экспортируем компонент как по умолчанию
export default SitemapPage;
