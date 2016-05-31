var currentClass = 'whiteBack';
var nextClass = 'greyBack';

var Feed = {
    list: [],
};

Feed.addPost = function(html, date) {
    this.list.push({date: date, html: html});
}

Feed.showAll = function() {
    this.list.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
    });
    for (var i in this.list) {
        var item = $(this.list[i].html[0]+currentClass+this.list[i].html[1]);
        item.appendTo('#myTable');
        var tempClass = currentClass;
        currentClass = nextClass;
        nextClass = tempClass;
    }
    stopAnimating("fb");
}