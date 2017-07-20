$(function(){
	/*$("#bigbox2").mouseover(function(){*/
		$("#bigbox2").bind("mouseover",function(){
		$("#box4").css("animation","box4 4.0s linear infinite");
		$("#box5").css("animation","box5 4.0s linear infinite");
		$("#box6").css("animation","box6 4.0s linear infinite");

		$("#bigbox2").css({
			width:'220px',
			height:'220px',
			boxShadow:"0px 0px 20px blue",
			borderRadius:'170px'
		});
		$("#bigbox2 img").css({
			width:'420px',
			height:'220px',
		});

	}).bind("mouseout",function(){
		$("#box4").css("animation","paused");
		$("#box5").css("animation","paused");
		$("#box6").css("animation","paused");
		$("#bigbox2").css({
			width:'200px',
			height:'200px',
			boxShadow:"none",
			borderRadius:'150px'
		});
		$("#bigbox2 img").css({
			width:'400px',
			height:'200px',
		});
	});
})