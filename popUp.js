$('document').ready(function(){
    const wrapper = $('.wrapper');
    const clickHere = $('#clickHere');
    const popup = $('#popup');
    const body = $('body');

    clickHere.on('click',function(e){
        wrapper.addClass('mask')
        popup.addClass('popup')
        .addClass('popup-move')
        e.preventDefault()
    })



})