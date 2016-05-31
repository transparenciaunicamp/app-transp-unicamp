var uid = 0;

var FeedTable = {
    createRow: function(message, imageSrc, page, date, done) {
        
        Facebook.getName(page, function (name) {
            Facebook.getProfilePicture(page, function(picUrl) {
                var newItem = ['<div class="','"><div><div style="width: 100%; overflow: hidden;"><div style="width: 50px; float: left;"> <img src="'+picUrl+'"> </div><div style="margin-left: 60px;"><h2>'+name+'</h2></div></div><br><p>'+message+'</p></div><img src="'+imageSrc+'" width="100%"></div>']; //Separates in an array so i can add class later, after the full list is sorted
                done(newItem, date);
            })
        })
    }
}