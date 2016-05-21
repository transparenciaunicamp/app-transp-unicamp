var FeedTable = {
    addRow: function(message) {
        var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = message;
        return cell1;
    },
    insertImage: function(cell, link) {
        var img = document.createElement('img');
        img.src = link;
        cell.appendChild(img);
    }
}