(function(){
  var x = 1, y = [1, 2, 3];

  if (x in y) {
    console.log("1 is in the list [1, 2, 3]");
  }
})();

(function(){
  var frameworks = [
    {language: "ruby", "name": "rails"},
    {language: "clojure", name: "compojure"},
    {language: "javascript", name: "koa"},
    {language: "python", name: "django"},
  ];

  var filtered = frameworks.filter(function(framework){
    return framework.language in ['ruby', 'javascript'];
  });

  console.log(filtered);
})();
