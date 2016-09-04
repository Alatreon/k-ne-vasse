var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

function createPerso ()
{
  	ctx.beginPath(); 

	for(var i=0;i<1;i++)
	{
		ctx.moveTo(Math.floor((Math.random() * 350) + 1),Math.floor((Math.random() * 350) + 1)); 
		ctx.lineTo(Math.floor((Math.random() * 350) + 1),Math.floor((Math.random() * 350) + 1));
	}   

	ctx.closePath();

	ctx.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
	ctx.fill();

	ctx.stroke();

	window.requestAnimationFrame(createPerso);
}

createPerso();