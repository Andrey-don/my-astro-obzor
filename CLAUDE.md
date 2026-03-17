# CLAUDE.md — Правила работы с проектом astro-obzor

Паспорт проекта: [project.md](project.md)
Паспорт (HTML, для печати): [ПАСПОРТ_ПРОЕКТА_astro-obzor.ru.html](ПАСПОРТ_ПРОЕКТА_astro-obzor.ru.html)

---

## Что за проект

Контентный WordPress-сайт об астрономии и космосе — **astro-obzor.ru**.
CMS: WordPress 6.9.4 · Тема: Themify Magazine v1.9.7 + дочерняя magazine-child.
Хостинг: **Beget** (anbegefr.beget.tech), PHP 8.3, MySQL 5.7 → 8.0 (в процессе).
Локальная среда: **http://astro-obzor.local** (Local by Flywheel).
Репозиторий: **Andrey-don/my-astro-obzor**, ветка master.
Файлы WP в репо: `site/public_html/`.

---

## Текущее состояние (март 2026)

| Параметр | Статус |
|---|---|
| Сайт на продакшне | ✓ Работает (https://astro-obzor.ru) |
| Сайт локально | ✓ Работает (astro-obzor.local) |
| WordPress 6.9.4 | ✓ Установлен |
| Тема + дочерняя | ✓ Активны |
| Плагины (8 шт.) | ✓ Все активны (+ Яндекс Метрика) |
| Yoast SEO 27.2 | ✓ Настроен |
| Здоровье сайта | ✓ Хорошо (зелёный) |
| HTTPS | ✓ Включён (редирект HTTP → HTTPS на Beget) |
| PHP | ✓ 8.3 (на хостинге Beget) |
| MySQL | ⚠ 5.7 → запрос на обновление до 8.0 отправлен в Beget |
| Яндекс.Метрика | ✓ Установлена, счётчик 107738189 |
| debug.log | ✓ Закрыт (.htaccess + WP_DEBUG_LOG=false) |
| Autoload БД | ✓ Очищен (2.4 МБ → 98 КБ) |

---

## Хостинг Beget

| Параметр | Значение |
|---|---|
| Хостинг | Beget (beget.com) |
| Аккаунт | anbegefr |
| Сервер | anbegefr.beget.tech |
| Тарифный план | Blog |
| Оплата до | 04.04.2026 ⚠ (не забыть оплатить!) |
| База данных | anbegefr_astro26 |
| PHP | 8.3 |
| MySQL | 5.7 (обновление до 8.0 запрошено) |
| Путь на сервере | /home/a/anbegefr/astro-obzor.ru/public_html/ |

---

## Структура репозитория

```
astro-obzor/
├── site/
│   └── public_html/          # Корень WordPress
│       ├── .htaccess
│       ├── robots.txt
│       ├── wp-config-sample.php
│       └── wp-content/
│           ├── themes/
│           │   ├── magazine/         # Родительская тема Themify Magazine
│           │   └── magazine-child/   # Дочерняя тема (кастомизация)
│           └── plugins/              # 7 плагинов (без PS Auto Sitemap)
├── CLAUDE.md                 # Этот файл
├── project.md                # Паспорт проекта
└── ПАСПОРТ_ПРОЕКТА_astro-obzor.ru.html
```

**НЕ в репозитории:**
- `wp-content/uploads/` — медиафайлы
- `wp-config.php` — учётные данные БД (не коммитить!)
- `wp-content/cache/`, `languages/`, `upgrade/`

---

## Важные особенности проекта

- **Главная страница** собрана на Themify Builder (визуальный конструктор). При правках темы — проверять главную.
- **Цикличные URL** (кириллица → латиница) обеспечивает плагин Cyr-to-Lat — не удалять.
- **Sitemap** генерируется Yoast SEO (`/sitemap.xml`).
- **wp-config.php** исключён из Git. При переносе создавать из `wp-config-sample.php`.
- **Медиафайлы** (`uploads/`) не в Git. При переносе копировать вручную или через Duplicator.
- **Яндекс.Метрика** — счётчик 107738189, плагин «Яндекс Метрика» от Yandex.

---

## Правила работы AI

- Перед любыми правками в теме — прочитать файл, понять контекст, не менять лишнего
- Не трогать `wp-content/plugins/` без явного запроса
- Не коммитить `wp-config.php` — содержит пароли БД
- Перед обновлением WordPress или плагинов — напомнить про резервную копию (Duplicator)
- Коммиты с `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
- При любых сомнениях — задавать вопросы, а не принимать решения самостоятельно

---

## Быстрый старт для новой сессии

1. Сайт на продакшне: **https://astro-obzor.ru**
2. Локальный сервер (при необходимости): запустить **Local WP** → http://astro-obzor.local
3. Рабочая папка: `C:/Users/profi/Documents/Project/astro-obzor`
4. Проверить состояние: `git status` и `git log --oneline`
