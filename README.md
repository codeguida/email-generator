# Генератор електронних листів від Codeguida

![][mit-badge]

В цьому репозиторії лежить зручний генератор для електронних листів від **Codeguida**.

Стилі для листів написані на **SASS**, з використанням [ZURB Ink][zurb-ink] для легшої адаптивної верстки. Шаблони написані на **Jade**, данні для шаблонів витягуються з `data.json`. Всім цим оркестром керує **Gulp**, який збирає шаблон, компілює та інлайнить стилі, а також піднімає локальний сервер з live-reload.

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

* `gulp serve` - для процесу розробки з live-reload
* `gulp build` - збирає готовий лист (результат буде поміщений в `dist/`)
* `gulp serve:dist` - запускає live-reload для папки `dist/` - зручно, коли потрібно швидко виправити готовий лист.

## Вбудований функціонал

* Респонсивні шаблони листів ZURB Ink
* ZURB Ink CSS з використанням Sassy Ink ([Неофіційний Sass порт Ink](https://github.com/faustgertz/sassy-ink))
* Веб-сервер з live-reload
* Шаблони на Jade
* Стилі на Sass
* Автоматична CSS-конкатинація та переведення в інлайнові стилі

## Дерево проекту

```
.
├── dist                     # готовий лист
├── template                 # директорія з шаблоном
│   ├── layout                 # розмітка шаблону та блоків
│   ├── mixin                  # міксіни
│   ├── scss                   # scss-стилі
│   │   ├── ink                  # сирці sassy ZURB Ink
│   │   │   └── …                  # компоненти Ink
│   │   ├── ink.scss               # Ink
│   │   ├── main.scss              # основні кастомні стилі
│   │   └── _overrides.scss        # перевизначені зміні Ink
│   └── index.jade               # основний шаблон
├── tmp                      # директорія для тимчасових файлів
├── data.json                # данні для листа
├── gulpfile.js              # опис тасків для gulp
├── LICENSE                  # ліцензія МІТ
├── package.json             # опис пакету
└── README.md                # цей файл
```

## Todo

* [x] Додати watcher `data.json`, щоб при кожній зміні данних, оновлювався і шаблон
* [ ] Додати браузерний інтерфейс
* [ ] Додати обробник помилок jade-транспайлера

## Розробники

* Denys Dovhan ([@denysdovhan](https://github.com/denysdovhan)) - автор та основний мейнтейнер.

## Ліцензія

[MIT](http://opensource.org/licenses/MIT)

[mit-badge]: https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[zurb-ink]: http://zurb.com/ink
