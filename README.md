# Генератор електронних листів від Codeguida

В цьому репозиторії лежиться зручний генератор для електронних листів від **Codeguida**. Стилі для листів написані на **LESS** і збираються з допомогою **Grunt**.

# Встановлення

Залежності:

* [Node.js](http://nodejs.org/) >=0.10.0
* [Gulp.js](http://gulpjs.com/) >=3.8.0

Процес встановлення:

1. Клонувати цей репозиторій: `git clone git@github.com:codeguida/email-generator.git`
2. Встановити залежності командою `npm install`

## Використання

Вся магія захована в `gulpfile.js`. Саме **Gulp** компілює **SASS** та **Jade**, переводить всі стилі в інлайнові, відкриває браузер та змушує працювати **browserSync**.

Передбачені такі команди:

* `gulp serve` - для процесу розробки з **browserSync**
* `gulp build` - збирає готовий лист (результат буде поміщений в `dist/`)
* `gulp serve:dist` - запускає **browserSync** для папки `dist/` - зручно, коли потрібно швидко виправити готовий лист.

## Вбудований функціонал

* Респонсивні шаблони листів ZURB Ink
* ZURB Ink CSS з використанням Sassy Ink ([Неофіційний Sass порт Ink](https://github.com/faustgertz/sassy-ink))
* Веб-сервер з **browserSync**
* Шаблони на Jade
* Стилі на Sass
* Автоматична CSS-конкатинація та переведення в інлайнові стилі

## Дерево проекту

```
    .
    ├── dist                # Згенерований лист опиниться тут
    ├── node_modules        # Необхідні модулі для роботи генератора
    ├── src                 # Сирці листа
    │   ├── css                # Стилі CSS/LESS
    │   └── images             # Зображення gif,png,jpg,jpeg
    ├── tmp                 # Папка для тимчасових данних (LiveReload)
    ├── .gitignore          # За замовчуванням tmp, node_modules, dist
    ├── Gruntfile.js        # Всі задачі описані тут
    ├── LICENSE             # Ліцензія MIT
    ├── README.md           # Цей файл
    └── package.json        # Файл з описом проекту
```

## Розробники

* Denys Dovhan ([@denysdovhan](https://github.com/denysdovhan)) - автор та основний мейнтейнер.
