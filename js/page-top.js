function moveAnime1() {
    var width = $(window).window();    
    
    if(width <= 768) {
        $(".moveIn1").addClass('active');
    }else{
        $(".moveIn1").removeClass('active');
    }
}

// function moveAnime2() {
//     var width = $(window).window();    
    
//     if(width <= 768) {
//         $(".moveIn2").addClass('active');
//     }else{
//         $(".moveIn2").removeClass('active');
//     }
// }

$(window).resize(function() {
    moveAnime1();
});

$(window).on('load',function(){
    moveAnime1();
});




