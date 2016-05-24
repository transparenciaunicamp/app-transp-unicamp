var Feed = {
    list: [],
    headerList: []
};

Feed.addPost = function(html, date) {
    this.list.push({date: date, html: html});
}

Feed.addHeader = function(id, page, name, image) {
    this.headerList.push({id: id, page: page, name: name, image: image});
}

Feed.showAll = function(target) {
//    for(var i in this.list) {
//        console.log(this.list[i]);
//    }
    this.list.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
    });
    for (var i in this.list) {
//        console.log(this.list[i]);
//        target.append(this.list[i].html);
        this.list[i].html.appendTo('#myTable');
//        FeedTable.insertHeader();
    }
}