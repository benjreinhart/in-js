# in-js

in-js is a [sweet.js](http://sweetjs.org/) macro for JavaScript which adds a keyword, `in?`, to the language.

## Examples

The file `examples.js` in this repo contains a few examples. To run that file, run `make run-examples` in the root of this repo.

```javascript
var x = 1, y = [1, 2, 3];

if (x in? y) {
  console.log("1 is in the list [1, 2, 3]");
}

// 1 is in the list [1, 2, 3]
```

```javascript
var frameworks = [
  {language: "ruby", "name": "rails"},
  {language: "clojure", name: "compojure"},
  {language: "javascript", name: "koa"},
  {language: "python", name: "django"},
];

var filtered = frameworks.filter(function(framework){
  return framework.language in? ['ruby', 'javascript'];
});

console.log(filtered);

/*
[ { language: 'ruby', name: 'rails' },
  { language: 'javascript', name: 'koa' } ]
*/
```

## Tests

`make test`

## License

[MIT](https://github.com/benjreinhart/in-js/blob/master/LICENSE.txt)
