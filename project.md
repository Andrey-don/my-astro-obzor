# project.md — Паспорт проекта astro-obzor.ru

> Последнее обновление: март 2026

---

## 1. Что это за проект

Контентный сайт об астрономии и космосе — **«Астро-Обзор»**. Публикует новости о планетах, ракетоносителях, МКС, колонизации Марса, дальнем космосе и других темах. Аудитория — русскоязычные любители астрономии и космонавтики.

---

## 2. Адреса и доступы

| Параметр | Значение |
|---|---|
| Сайт (продакшн) | https://astro-obzor.ru |
| Локальный URL | http://astro-obzor.local |
| Контактный e-mail | admin@astro-obzor.ru |
| Владелец / разработчик | Andrey-don |

---

## 3. Техническая инфраструктура

### CMS и тема

| Параметр | Значение |
|---|---|
| CMS | WordPress 6.9.4 |
| Тема (родительская) | Themify Magazine v1.9.7 |
| Дочерняя тема | magazine-child |
| Папки тем | `wp-content/themes/magazine/` и `wp-content/themes/magazine-child/` |
| Главная страница | ID: 4051 («Главная»), собрана на Themify Builder |
| Скины темы | black, green, orange, pink, purple, red, default |

### Локальная среда

| Параметр | Значение |
|---|---|
| Среда | Local by Flywheel (Local WP) |
| Локальный URL | http://astro-obzor.local |

### Репозиторий

| Параметр | Значение |
|---|---|
| Git (локальный) | `C:/Users/profi/Documents/Project/astro-obzor` |
| Структура в репо | `site/public_html/` |
| GitHub | Andrey-don/my-astro-obzor |
| Ветка | master |

---

## 4. Плагины WordPress (7 шт.)

| Плагин | Версия | Назначение |
|---|---|---|
| Akismet | 5.6 | Защита от спама в комментариях и формах |
| Classic Editor | 1.6.7 | Классический редактор WordPress |
| Contact Form 7 | 6.1.5 | Формы обратной связи (страница «Контакты») |
| Cyr to Lat Enhanced | 3.7.3 | Транслитерация URL с кириллицы на латиницу |
| Duplicator | 1.5.15 | Резервное копирование и миграция (хранить!) |
| Themify Shortcodes | 2.1.4 | Библиотека шорткодов для темы Themify |
| Yoast SEO | 27.2 | SEO-оптимизация, XML-карта сайта (/sitemap.xml) |

---

## 5. Структура контента

### Страницы

| Страница | ID | URL |
|---|---|---|
| Главная | 4051 | / |
| О нас | 52 | /o-nas/ |
| Контакты | 54 | /contact/ |
| Карта сайта | 4097 | /karta-sajta/ |
| Политика конфиденциальности | 3 | — |

### Категории (рубрики)

| Рубрика | Постов |
|---|---|
| Новости планеты | 58 |
| Ракетоносители | 41 |
| Колонизация Марса | 16 |
| Видео космос | 16 |
| МКС | 12 |
| Звёздные скопления | 11 |
| Космос будущее | 11 |
| Планеты Солнечной системы | 14 |
| Дальний космос | 14 |
| Астероиды, болиды, метеориты | 10 |
| Космодромы мира | 9 |
| Солнечная система | 9 |
| Галактики | 5 |
| Космические термины | 4 |
| Вселенная | 3 |
| Обои на рабочий стол космос | 3 |

### Навигационное меню

Главная · О нас · Контакты · Карта сайта

---

## 6. SEO и индексация

| Параметр | Значение |
|---|---|
| robots.txt | Настроен вручную — директивы для Googlebot, Yandex, Mail.Ru |
| Карта сайта | https://astro-obzor.ru/sitemap.xml (Yoast SEO) |
| Фавиконка | `wp-content/uploads/2019/02/favicon-3.ico` |
| Логотип | `wp-content/uploads/2019/02/LogoAstroObzor-277.png` |

---

## 7. Что в Git, что нет

### Включено в репозиторий
- `wp-content/themes/magazine/`
- `wp-content/themes/magazine-child/`
- `wp-content/plugins/` (все 7 плагинов: без PS Auto Sitemap)
- `.htaccess`, `robots.txt`, `wp-config-sample.php`

### Исключено (.gitignore)
- `wp-content/uploads/` — медиафайлы (переносить вручную или через Duplicator)
- `wp-content/cache/`, `wp-content/upgrade/`, `wp-content/languages/`
- `wp-config.php` — содержит учётные данные БД, **не коммитить**
- `wp-content/debug.log`

---

## 8. Важные предупреждения

- **wp-config.php** — исключён из репо, хранить отдельно
- **Медиафайлы** — не в Git, при переносе на новый сервер копировать папку `uploads/` вручную или через Duplicator
- **Themify Builder** — главная страница собрана визуально, при обновлении темы проверять отображение главной
- **Резервные копии** — перед обновлением WordPress или плагинов делать бэкап через Duplicator

---

## 9. История коммитов

| Дата | Описание |
|---|---|
| 13.03.2026 | Initial commit: astro-obzor.ru WordPress site |
| 17.03.2026 | Add project passport (HTML) |
| 17.03.2026 | Add CLAUDE.md и project.md |
| 17.03.2026 | Fix site health: защита debug.log, чистка тем и плагинов, установка Yoast SEO 27.2 |
| 17.03.2026 | Remove PS Auto Sitemap plugin (replaced by Yoast SEO sitemap) |

---

## Связанные файлы

- [CLAUDE.md](CLAUDE.md) — правила работы AI с проектом
- [ПАСПОРТ_ПРОЕКТА_astro-obzor.ru.html](ПАСПОРТ_ПРОЕКТА_astro-obzor.ru.html) — паспорт в HTML (для печати)
