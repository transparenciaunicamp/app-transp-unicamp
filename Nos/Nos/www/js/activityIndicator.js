var startAnimating = function() {
        var opts = {
          lines: 12, // The number of lines to draw
          length: 7, // The length of each line
          width: 5, // The line thickness
          radius: 10, // The radius of the inner circle
          color: '#fff', // #rbg or #rrggbb
          speed: 1, // Rounds per second
          trail: 66, // Afterglow percentage
          shadow: true // Whether to render a shadow
        };
        $("#spin").show().spin(opts);
};
var stopAnimating = function() {
        $("#spin").hide();
};