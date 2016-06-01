var uid = 0;

var FeedTable = {
    createRow: function(message, imageSrc, page, date, done) {
        
        Facebook.getName(page, function (name) {
            Facebook.getProfilePicture(page, function(picUrl) {
                var newItem = ['<div class="','"><div><div style="width: 100%; overflow: hidden;"><div style="width: 50px; float: left;"> <img src="'+picUrl+'"> </div><div style="margin-left: 60px;"><h2>'+name+'</h2><br><i>'+timeSince(new Date(date))+'</i></div></div><br><p>'+message+'</p></div><img src="'+imageSrc+'" width="100%"></div>']; //Separates in an array so i can add class later, after the full list is sorted
                done(newItem, date);
            })
        })
    }
}

Date.prototype.ddmmyyy = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   return (dd[1]?dd:"0"+dd[0]) + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + yyyy; // padding
  };

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

Date.prototype.timeSince = function() {
    console.log(this);
    console.log((new Date() - this)/1000)
    var seconds = Math.floor((new Date() - this) / 1000);
    console.log("SECONDS::::" + seconds);
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