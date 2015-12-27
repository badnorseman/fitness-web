window.fbAsyncInit = function() {
  FB.init({
    appId: "722603254511776",
    cookie: true,
    status: true,
    xfbml: false,
    version: "v2.5"
  });
};
(function(d, s, id) {
  var js, fjs=d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js=d.createElement(s); js.id=id;
  js.src="//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, "script", "facebook-jssdk"));
