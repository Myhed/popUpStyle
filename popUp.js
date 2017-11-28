$('document').ready(function() {
    var container = $('.container');
    var box = $('#box');
    $('#clickH').on('click', function(e) {
        $('#clickH').addClass('disable-links');
        $('body').addClass('bodyPopUp')
        box.delay(150).animate({
            "top": `${container[0].offsetTop-100}`,
            "opacity": '1'
        }, function() {
            box.css({
                "background": "white"
            }).delay(50).animate({
                "width": '850'
            })
        }).fadeIn(5000);

        e.preventDefault();
    })
})