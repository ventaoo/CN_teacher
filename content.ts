
import { assets } from './assets';

export const content = {
  profile: {
    name: "Ventao",
    title: "Преподаватель", // Teacher
    subtitle: "китайского", // Chinese (adjective)
    email: "ventaoczu@gmail.com",
    location: "Санкт-Петербург",
    copyrightYear: "2024"
  },
  
  navigation: [
    { label: 'Методика', href: '#methodology' },
    { label: 'Опыт', href: '#experience' },
    { label: 'Контакты', href: '#contact' },
  ],

  hero: {
    tagline: "От кириллицы к иероглифам",
    titleLine1: "Китайский",
    titleLine2: "Культура",
    quote: "Изучать язык — значит открыть еще одно окно, через которое можно смотреть на мир.",
    tags: "HSK • Бизнес • Каллиграфия",
    image: assets.hero, 
    imageCaptionTitle: "Погружение",
    imageCaptionSubtitle: "Язык и Искусство"
  },

  methodology: {
    sectionTitle: "Методика обучения",
    sectionSubtitle: "Учебная программа",
    sectionQuote: "структурная элегантность и беглость",
    items: [
      {
        title: "HSK",
        description: "Подготовка к экзаменам",
        image: assets.methodology.hsk
      },
      {
        title: "Китайская культура",
        description: "История и традиции",
        image: assets.methodology.culture
      },
      {
        title: "Разговорная практика",
        description: "Живое общение",
        image: assets.methodology.speaking
      },
      {
        title: "Бизнес-перевод",
        description: "Деловая коммуникация",
        image: assets.methodology.business
      }
    ]
  },

  experience: {
    sectionTitle: "Опыт",
    sectionDescription: "История преодоления языковых барьеров через академическое мастерство и личное наставничество.",
    items: [
      {
        year: "2024",
        title: "Старший преподаватель",
        role: "МГУ имени М.В. Ломоносова",
        location: "Москва",
      },
      {
        year: "2023",
        title: "Институт Конфуция",
        role: "Культурный посол",
        location: "Санкт-Петербург",
      },
      {
        year: "2021",
        title: "Магистр лингвистики",
        role: "Пекинский педагогический университет",
        location: "Пекин",
      },
      {
        year: "2019",
        title: "Частный репетитор",
        role: "Подготовка к HSK",
        location: "Онлайн / Zoom",
      }
    ]
  },

  contact: {
    tagline: "ведется набор учеников",
    callToAction: "Начните\nсвой путь.", // \n represents line break
    emailLabel: "ПОЧТА",
    platformsLabel: "Платформы",
    platforms: "Zoom / Telegram / Skype",
    backgroundText: "你好" // Background decoration
  }
};