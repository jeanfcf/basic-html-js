$('nav a').click(rolar);
$('button').click(rolar);

function rolar(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        menuHeight = $('nav').innerHeight();

    $('html,body').animate({
        scrollTop : targetOffset - menuHeight
    },500);

}

