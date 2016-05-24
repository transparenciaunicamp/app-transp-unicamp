var currentClass = 'one';
var nextClass = 'anotherOne';

var uid = 0;

var FeedTable = {
    createRow: function(message, imageSrc, page) {
        
        var newItem = $('<div class="'+currentClass+'"><div><div style="width: 100%; overflow: hidden;"><div style="width: 50px; float: left;"> <img id="prof'+uid+'"> </div><div style="margin-left: 60px;"><h2 id="name'+uid+'"></h2></div></div><br><p>'+message+'</p></div></div>');
//        newItem.appendTo('#myTable');
        
//        var image = document.getElementById("prof"+uid);
//        Facebook.fillWithProfilePicture(page,image);
//        
//        var name = document.getElementById("name"+uid);
//        Facebook.fillWithName(page,name);
//        Feed.addHeader(uid, page, imageSrc, name);
            
        var tempClass = currentClass;
        currentClass = nextClass;
        nextClass = tempClass;
        
        uid++;
        
        FeedTable.insertImage(newItem, imageSrc);
        
        return newItem;
    },
    insertImage: function(cell, link) {
        var img = $('<img src="'+link+'" width="100%">');
        cell.append(img);
    },
    insertHeader: function() {
        for (var i = 0; i < uid; i++) {
            var image = document.getElementById("prof"+i);
            Facebook.fillWithProfilePicture(page,image);

            var name = document.getElementById("name"+i);
            Facebook.fillWithName(page,name);
        }
    }
}