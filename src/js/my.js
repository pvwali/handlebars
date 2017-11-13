(function() {
  // Load my handlebar template
  // script = document.createElement('script');
  // script.src = "../../js/hello.handlebars.js";
  // document.body.appendChild(script);

  script = document.createElement('script');
  script.src = "../../js/banner.handlebars.js";
  document.body.appendChild(script);
})();

var context = function() {
  return {
    title: "My New Post",
    body: "This is my first post!"
  };
};

var getInnerHtml = function() {
  var innerHtml = Handlebars.templates.hello(context());
  console.log(innerHtml);
  return innerHtml;
};

var bannerContext = function() {
  return {
    headline: "Awesome Phones !!",
    image: "https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/TGAAAOSwk~ZaBQU1/$_57.JPG"
  };
};
var getInnerHtmlAdBanner = function() {
  var innerHtml = Handlebars.templates.banner(bannerContext());
  console.log(innerHtml);
  return innerHtml;
};
