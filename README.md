# Генератор електронних листів від Codeguida

В цьому репозиторії лежиться зручний генератор для електронних листів від **Codeguida**. Стилі для листів написані на **LESS** і збираються з допомогою **Grunt**.

## Grunt

Вся магія захована в `Gruntfile.js`. Саме **Grunt** компілює **LESS**, переводить всі стилі в інлайнові, стискає **HTML** та зображення, відкриває браузер та змушує працювати **LiveReload**.

Передбачені такі команди:

* `grunt` - збирає кінцеву збірку
* `grunt dev` - компілює стилі, відкриває браузер та вішає `watch`
* `grunt dev:build` - збирає розробницьку збірку (стилі окремо)

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

* Denys Dovhan ([@denysdovhan](https://github.com/denysdovhan))
* Pavlyuk Petr ([@pavlyukpetr](https://github.com/pavlyukpetr))
