//logoの表示
$(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(2000).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });

  $(function(){
    var timer = false;
    $(window).resize(function() {
    if (timer !== false) {
    clearTimeout(timer);
    }
    timer = setTimeout(function() {
    //リロードする
    location.reload();
    }, 200);
    });
    });
