$(function(){
	$("#bigbox").mouseover(function(){
		$("#box1").css("animation","box1 4.0s linear infinite");
		$("#box2").css("animation","box2 4.0s linear infinite");
		$("#box3").css("animation","box3 4.0s linear infinite");
		$(".firstWord").stop().slideUp(1000);
		$("#bigbox").css({
			width:'220px',
			height:'220px',
			boxShadow:"0px 0px 20px blue",
			borderRadius:'170px'
			
		});
		$("#bigbox img").css({
			width:'420px',
			height:'220px',
		});

	}).mouseout(function(){
		$("#box1").css("animation","paused");
		$("#box2").css("animation","paused");
		$("#box3").css("animation","paused");
		$(".firstWord").stop().slideUp(1000);
		$("#bigbox").css({
			width:'200px',
			height:'200px',
			boxShadow:"none",
			borderRadius:'150px'
		});
		$("#bigbox img").css({
			width:'400px',
			height:'200px',
		});
	});
})