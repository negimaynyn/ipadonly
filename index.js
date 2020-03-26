$(document).ready(function(){

  $("p").css("color", '#844500');
  $("p.test").css("color","blue");
  $(".kashi").hide();
  $('.test').on({
    'click':function(){
      $(this).text("クリックされました。");
    }
    
  });
  
  $('.title').on({
    'mouseenter':function(){
      $(this).css("background-color",'#d68000');
    },
    'mouseleave':function(){
      $(this).css("background-color",'rgb(255, 178, 62)');
    }
  });
  $('.flex-boll').on({
    'mouseenter':function () {
      $(this).css("background-color",'#d68000');
    },
    'mouseleave':function(){
      $(this).css("background-color",'rgb(255, 178, 62)');
    }
  });
  $('#con').on('click',function(){//conがクリックされると
    $('#con').animate({//animate使うときはposition:relative;必須！！
      'left':'300px'//conを右に移動
      
    });
    $('.kashi').show(1000);
    $('.kashi').css("z-index","10");
    $('.kashi').animate({
      'bottom':'50px',
      'left':'180px'
    });
  });
  
});