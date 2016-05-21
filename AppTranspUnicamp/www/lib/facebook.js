
var Facebook = {
    feed: function() {
        FB.api(
          '/OcupaTudoUnicamp/feed',
          'GET',
          {"fields":"object_id,message,created_time","access_token":"EAACEdEose0cBAEDz0ZB5e6sptC0GIaYZCR4FkGrtahkoAFVZBurOjarfzmLhSiOsHRppPixlKl5ZAjvqSoUWMg3pqyZA6wKHbuhyKoukrk7YuxZCPzvzTzrCUP7hFZC3haL4pdjScpGExYt1JqbVXcZBhrYbEUt6vhiSLlPVGKJtTUL5UJB0qNmt"},
          function(response) {
              console.log(response);
              for (var i in response.data){
                  FeedTable.addRow(response.data[i].message);
              }
          }
        );
    },
    start: function() {
        window.fbAsyncInit = function() {
        FB.init({
          appId      : '1065023200223770',
          xfbml      : true,
          version    : 'v2.6'
        });
        Facebook.feed();
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    },
    image: function() {
    
    }
};