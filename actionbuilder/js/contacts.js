$().ready(function(){

	$(".expander-link").click(function(){
		//collapse
		if($(this).parent().parent().parent().hasClass("open") == true){
			$(this).parent().parent().parent().removeClass("open");
		}
		//open details
		else{
			$(this).parent().parent().parent().addClass("open");
		}
	});

});