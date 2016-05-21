var currentClass = 'one';
var nextClass = 'anotherOne';

var FeedTable = {
    addRow: function(message) {
//        var table = document.getElementById("myTable");
//        var row = table.insertRow(0);
//        var cell1 = row.insertCell(0);
//        cell1.innerHTML = message;
//        return cell1;
        
        var coisinha = $('<p align="justify" class="'+currentClass+'">'+message+'</p>');
        coisinha.appendTo('#myTable');
        
        var tempClass = currentClass;
        currentClass = nextClass;
        nextClass = tempClass;
        
        return coisinha;
    },
    insertImage: function(cell, link) {
        var img = $('<img src="'+link+'" width="100%">');
        cell.append(img);
    }
}