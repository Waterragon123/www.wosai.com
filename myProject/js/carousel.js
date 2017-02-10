(
	( $(function(){
	 	var num=0;
	 	$(".carousel li:first").clone().appendTo('.carousel')
	 	$('.left-btn').on("click",function(){
	 		left();
	 	})
	 	$('.right-btn').on('click',function(){
	 		right();
	 	});

	 	function left(){
	 	    if(!$('.carousel').is(':animated')){
	 		    if(num>0){
	 		    	num--
	 		    	$('.carousel').animate({"margin-left":num*-100+"%"},1000);
	 		    }else{
	 		    	num=2
	 		       $('.carousel').css('margin-left',3*-100+"%");
	 		       $('.carousel').animate({'margin-left':num*-100+"%"},1000);
	 		    }
	 	    }
	    }

	 function right(){
	 if(!$('.carousel').is(':animated')){
         if(num<3){
         	num++;
         	$('.carousel').animate({"margin-left":num*-100+'%'},1000);
         }else{
         	num=0;
            $('.carousel').animate({'margin-left':3*-100+"%"},1000,function(){
            	  $(".carousel").css("margin-left",0);
            });
         }
	  }
	}
	 }))();
)