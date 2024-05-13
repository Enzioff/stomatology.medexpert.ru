const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const temp = fs.readFileSync("src/includes/temp.html");

// Pages
module.exports = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    inject: "body",
    title: "Med expert | Сеть семейных клиник",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/services.html",
    filename: "services.html",
    inject: "body",
    title: "Med expert | Услуги",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/sales.html",
    filename: "sales.html",
    inject: "body",
    title: "Med expert | Акции и скидки",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/docs.html",
    filename: "docs.html",
    inject: "body",
    title: "Med expert | Врачи",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/docs-detail.html",
    filename: "docs-detail.html",
    inject: "body",
    title: "Med expert | Карточка специалиста",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/dms.html",
    filename: "dms.html",
    inject: "body",
    title: "Med expert | ДМС",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/search.html",
    filename: "search.html",
    inject: "body",
    title: "Med expert | Поиск",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/404.html",
    filename: "404.html",
    inject: "body",
    title: "Med expert | 404",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/contacts.html",
    filename: "contacts.html",
    inject: "body",
    title: "Med expert | Контакты",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/jobs.html",
    filename: "jobs.html",
    inject: "body",
    title: "Med expert | Наши работы",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/price.html",
    filename: "price.html",
    inject: "body",
    title: "Med expert | Цены",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/stocks-detail.html",
    filename: "stocks-detail.html",
    inject: "body",
    title: "Med expert | Детальная Акции",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
  new HtmlWebpackPlugin({
    template: "./src/pages/jobs-detail.html",
    filename: "jobs-detail.html",
    inject: "body",
    title: "Med expert | Детальная работы",
    head,
    sectionHeader,
    sectionFooter,
    temp,
  }),
];
