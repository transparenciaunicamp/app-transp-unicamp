var uid = 0;

var FeedTable = {
    createRow: function(message, imageSrc, page, date, done) {
        
        Facebook.getName(page, function (name) {
            Facebook.getProfilePicture(page, function(picUrl) {
                var newItem = ['<div class="','"><div><div style="width: 100%; overflow: hidden;"><div style="width: 50px; float: left;"> <img src="'+picUrl+'"> </div><div style="margin-left: 60px;"><h2>'+name+'</h2><br><i>'+new Date(date).timeSince()+'</i></div></div><br><p>'+message+'</p></div><img src="'+imageSrc+'" width="100%"></div>']; //Separates in an array so i can add class later, after the full list is sorted
                done(newItem, date);
            })
        })
    }
}

Date.prototype.timeSince = function() {

    var seconds = Math.floor((new Date() - this) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " anos";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " mêses";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " dias";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " horas";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutos";
    }
    return Math.floor(seconds) + " segundos";
}

//d = new Date();
//d.yyyymmdd();