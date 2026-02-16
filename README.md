# MODX Revo News Project

Проект представляет собой сайт новостей на **MODX Revo 2.8.x** с фронтендом на **React + SASS/SCSS**, реализованным через Vite.

---

## Структура проекта

```

news-project/
├─ core/                  # Ядро MODX
├─ manager/               # Админка MODX
├─ connectors/            # Коннекторы MODX
├─ assets/
│  └─ react/news-project/ # React проект
│     ├─ src/
│     │  ├─ scss/
│     │  ├─ App.tsx
│     │  ├─ main.js
│     │  └─ menu.js
│     └─ dist/            # Собранные файлы для публикации
├─ index.php
└─ .htaccess

````

---

## Требования

- PHP >= 8.0  
- MySQL  
- MODX Revo 2.8.*  
- Node.js и npm (для сборки React/SCSS фронтенда)  

---

## Установка и запуск локально

1. Скопировать все файлы проекта в локальный веб-сервер (например, `htdocs/news_test`).  
2. Создать базу данных и импортировать дамп проекта (`modx.sql`).  
3. Настроить `core/config/config.inc.php`:

```php
$database_type = 'mysql';
$database_server = 'localhost';
$database_user = 'ваш_пользователь';
$database_password = 'ваш_пароль';
$dbase = 'имя_бд';
$table_prefix = 'modx_';
$database_charset = 'utf8';
````

4. Установить зависимости фронтенда:

```bash
cd assets/react/news-project
npm install
```

5. Сборка фронтенда:

```bash
npm run build
```

6. Очистить кэш MODX (в панели управления: **Система → Очистить кэш**).
7. Открыть сайт: `http://localhost/news_test/`

---

## Разработка фронтенда

* Для разработки с хот-релоудом:

```bash
npm run dev
```

* Основной файл приложения: `App.tsx`
* Стили: SCSS (`src/scss/`)
* Скрипты меню: `src/menu.js`

---

## Структура новостей

* Страницы новостей создаются через MODX.
* Используются **TV-поля** для изображений превью (`preview_image`).
* Контент выводится через **Fenom-шаблоны**.

---

## Мобильное меню

* Загружается динамически через AJAX из MODX (JSON через ресурс `/api/getMenu`).
* Поддерживает **многоуровневую вложенность**.
* Пункты с ссылками открывают соответствующие страницы.
* Анимация и бургер-меню реализованы через SCSS + JS.

