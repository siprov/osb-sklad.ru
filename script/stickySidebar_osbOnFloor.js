if (document.querySelector('.secondSectionMenu_osbOnFloor')) {
    if (window.innerWidth >= 1006) {
        $(document).ready(function () {
            var offset = $('#fixed').offset();
            var topPadding = 0,
            bottomPadding = 4810;
            $(window).scroll(function() {
                if ($(window).scrollTop() > offset.top) {
                    if ($(document).height() - bottomPadding > $(window).scrollTop() + $("#fixed").height()) $("#fixed").stop().animate({
                    marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                }
                else {
                    $('#fixed').stop().animate({marginTop: 0});
                }
            });  
        });
    }
}