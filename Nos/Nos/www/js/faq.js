var loadFaq = function() {
    jQuery.get('https://raw.githubusercontent.com/transparenciaunicamp/transparenciaunicamp-FAQ/master/FAQ.txt', function(data) {
        var text = data;
        var txt = text.split("|");
        for (var i in txt){
            var split = txt[i].split("#");
            var question = split[0];
            if(question.indexOf("}") > -1){
                var newCategory = $('<div class="faq-category w3-container"><span><br>'+question.split("}")[0].toUpperCase()+'</span>');
                newCategory.appendTo('#FAQ');
                question = question.split("}")[1];
            }
            var answer = split[1];
            var newQuestion = $('<div class="w3-container" style="padding: 0px; border: 20px"><div class="faq-header faq-question"><div style="margin-left: 26px;"><span class="right-arrow"><b>'+question+'</b></span></div></div><div class="content faq-answer">'+answer+'</div></div>');
            newQuestion.appendTo('#FAQ');
        }
        $(".faq-header").click(function () {
            $header = $(this);
            //getting the next element
            var status = 0;
            if (! $header.hasClass('faq-selected')) {
                $header.toggleClass('faq-selected')
                status = 1;
            }
            $content = $header.next();
            var elem = $header[0].children[0].children[0];
//            console.log(elem);
//            console.log($header[1])
            elem.classList.toggle('right-arrow')
            elem.classList.toggle('down-arrow')
            //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
            $content.slideToggle(500, function () {
                if (status === 0) {
                    $header.toggleClass('faq-selected')
                }
                //execute this after slideToggle is done
                //change text of header based on visibility of content div
                $header.text(function () {
                //change text based on condition
                });
            });
        });
    });
}