$(function(){
	$("#bigbox3").mouseover(function(){
		$("#box7").css("animation","box4 4.0s linear infinite");
		$("#box8").css("animation","box5 4.0s linear infinite");
		$("#box9").css("animation","box6 4.0s linear infinite");

		$("#bigbox3").css({
			width:'220px',
			height:'220px',
			boxShadow:"0px 0px 20px blue",
			borderRadius:'170px'
		});
		$("#bigbox3 img").css({
			width:'420px',
			height:'220px',
		});

	}).mouseout(function(){
		$("#box7").css("animation","paused");
		$("#box8").css("animation","paused");
		$("#box9").css("animation","paused");
		$("#bigbox3").css({
			width:'200px',
			height:'200px',
			boxShadow:"none",
			borderRadius:'150px'
		});
		$("#bigbox3 img").css({
			width:'400px',
			height:'200px',
		});
	});
})