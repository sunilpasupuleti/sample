$(function() {

  $("video").prop('muted', true);

  AOS.init({
    duration: 1000
  });
  AOS.init({
    duration: 1000
  });

  $(window).on('resize',function(){
    if ($(window).width() <768 ) {
      $("#addingcontainer").addClass('container');
    }else{
      $("#addingcontainer").removeClass('container');
    }
  })
      $(".hiding").find("p").hide();
      $(".hiding").mouseover(function(){
        $(this).find("p").show();
      })
      $(".hiding").mouseout(function(){
        $(this).find("p").hide();
      })



            $("#sidebar").hide();
            var positionofdiv = $("#posofdiv").offset().top;




  $(window).scroll(function() {
    var currentscroll = $(window).scrollTop();

    if ($(window).width() > 768) {
        if (currentscroll >= positionofdiv) {
          $("#sidebar").show().delay(3000);

        } else {
          $("#sidebar").hide();

        }
    } else {
      $("#sidebar").hide();

     }
 });





      // $(window).scroll(function(){
      //   var currentscroll = $(window).scrollTop();
      //
      //   if (currentscroll >= positionofdiv ) {
      //           $("#sidebar").show().delay(3000);
      //
      //
      //   }
      //
      //   else{
      //     $("#sidebar").hide();
      //   }
      //
      //
      //
      // })


        // $(window).scroll(function(e) {
        //        if ($(this).scrollTop() > 700)
        //        {
        //           $("#sidebar").show();
        //            $("#sidebar").fadeIn("slow");
        //        }
        //        else
        //        {
        //            $("#sidebar").hide();
        //        }
        //    });





});
