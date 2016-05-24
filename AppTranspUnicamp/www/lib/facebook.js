var token = "1065023200223770|30f801dea119b03c6b5e530205c4f9fd";

var pages = [
    "adunicamp",
    "stu.unicamp",
    "caia.unicamp",
    "cacounicamp",
    "ielmobiliza",
    "CAL.Unicamp",
    "caeco",
    "cach.galo.ifch",
    "100004573876750",
    "comandodelutaIFCH2016",
    "caf.fisica.73",
    "cafunicamp",
    "geocact",
    "100011444199673",
    "cab.unicamp",
    "cafarma",
    "Paralisafonounicamp016",
    "caequnicamp",
    "cafea.unicamp",
    "caal.unicamp",
    "caxd.unicamp",
    "cacau.unicamp",
    "cabs.unicamp",
    "capunicamp",
    "TransparenciaUNICAMP",
    "OcupaTudoUnicamp",
    "caemm.unicamp"
]

var Facebook = {
    feed: function(page) {
        FB.api(
            '/'+page+'/feed',
            'GET',
            {"fields":"attachments,message,created_time", "limit":"3", "access_token":token},
            function(response) {
                for (var i in response.data){
                    var message = "";
                    var image = "";
                    try {
                        image = response.data[i].attachments.data[0].media.image.src;
                    } catch (e) {
                        try {
                            image = response.data[i].attachments.data[0].subattachments.data[0].media.image.src;
                        } catch (e) {
                            image = "";
                        }
                    } try {
                        message = response.data[i].message;
                    } catch (e) {
                        message = "";
                    }
                    if (message == null) message = "";
                    var row = FeedTable.createRow(message, image, page);
                    Feed.addPost(row,response.data[i].created_time)
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
            for (var item in pages) {
                Facebook.feed(pages[item]);
            }
            Feed.showAll();
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },
    fillWithProfilePicture: function(page, img) {
        FB.api(
            '/'+page+'/picture',
            'GET',
            {},
            function(response) {
              img.src = response.data.url;
            }
        );
    },
    fillWithName: function(page, field) {
        FB.api(
            '/'+page+'/',
            'GET',
            {"access_token":token},
            function(response) {
                field.innerHTML = response.name;
            }
        );
    }
};