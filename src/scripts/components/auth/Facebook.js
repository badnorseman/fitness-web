import React, { Component } from "react";

export default class Facebook extends Component {
  render() {
    return (
      <div>
        <script>
          window.fbAsyncInit = function() {
            FB.init({
              appId: "262325467304404",
              xfbml: true,
              version: "v2.3"
            });
          }

          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "//connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, "script", "facebook-jssdk"));
        </script>
        <div
          className="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true">
        </div>
      </div>
    );
  }
}
