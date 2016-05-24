var Feed = {
    list: {},
};

Feed.addPost = function(html, date) {
    this.list[date] = html;
}

Feed.showAll = function(target) {
    console.log(Feed);
}