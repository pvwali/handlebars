var context = {
  title: "My New Post",
  body: "This is my first post!"
};
var innerHtml = Handlebars.templates.hello(context);
console.log(innerHtml);

$(document).ready(function() {
  $("#hello-handler").html(innerHtml);
});
