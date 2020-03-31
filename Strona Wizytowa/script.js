$('button').on('click', function () {
    const topPosition = $('.portfolio').offset().top;
    $([document.documentElement, document.body]).animate({
        scrollTop: topPosition
    }, 2000)
})