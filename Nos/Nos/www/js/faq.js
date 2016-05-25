var loadFaq = function() {
    jQuery.get('https://raw.githubusercontent.com/transparenciaunicamp/transparenciaunicamp-FAQ/master/FAQ.txt', function(data) {
        var text = data;
        var txt = text.split("|");
        for (var i in txt){
            var split = txt[i].split("#");
            var question = split[0];
            if(question.indexOf("}") > -1){
                var newCategory = $('<div class="category"><div class="header"><span>Categoria:'+question.split("}")[0]+'</span></div>');
                newCategory.appendTo('#FAQ');
                question = question.split("}")[1];
            }
            var answer = split[1];
            var newQuestion = $('<div class="container"><div class="header"><span>Pergunta:'+question+'</span></div><div class="content" style="display:none;"><ul id="output">Resposta:'+answer+'</ul></div></div>');
            newQuestion.appendTo('#FAQ');
        }
        $(".header").click(function () {
            $header = $(this);
            //getting the next element
            $content = $header.next();
            //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
            $content.slideToggle(500, function () {
                //execute this after slideToggle is done
                //change text of header based on visibility of content div
                $header.text(function () {
                //change text based on condition
                });
            });

        });
    });
}