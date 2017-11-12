(function() {
  // Load my handlebar template
  script = document.createElement('script');
  script.src = "../../js/hello.handlebars.js";
  document.body.appendChild(script);
})();

var context = function() {
  return {
    title: "My New Post",
    body: "This is my first post!"
  };
};

var getInnerHtml = function(id) {
  var innerHtml = Handlebars.templates.hello(context());
  console.log(innerHtml);
  return innerHtml;
};
