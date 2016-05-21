var currentClass = 'one';
var nextClass = 'anotherOne';

var uid = 0;

var FeedTable = {
    addRow: function(message) {
        
        var newItem = $('<div class="'+currentClass+'"><div><div style="width: 100%; overflow: hidden;"><div style="width: 50px; float: left;"> <img id="prof'+uid+'"> </div><div style="margin-left: 60px;"><h2>Ocupa Tudo Unicamp 2016</h2></div></div><br><p>'+message+'</p></div></div>');
        newItem.appendTo('#myTable');
        
        var image = document.getElementById("prof"+uid);
        Facebook.fillWithProfilePicture("OcupaTudoUnicamp",image);
        
        var tempClass = currentClass;
        currentClass = nextClass;
        nextClass = tempClass;
        
        uid++;
        
        return newItem;
    },
    insertImage: function(cell, link) {
        var img = $('<img src="'+link+'" width="100%">');
        cell.append(img);
    }
}