function Perso ()
{
	this.width = 150;
	this.height = 150;
	this.x = 50;
	this.y = 50;
	this.vx= 5;
	this.vy= 2;
	this.color= 'blue';
}
Perso.prototype = 
{
	draw : function () 
	{
	  	ctx.beginPath(); 

		for(var i=0;i<1;i++)
		{
			ctx.moveTo(this.x,this.y); 
			ctx.lineTo(this.x+150,this.y+150);
			ctx.moveTo(this.x+150,this.y); 
			ctx.lineTo(this.x,this.y+150);
		}   

		ctx.closePath();

		ctx.stroke();	
	},
	create : function () 
	{
		ctx.clearRect(0,0, c.width, c.height);

		this.draw();

		if (this.y + this.vy > c.height-this.width || this.y + this.vy < 0)
		{
			this.vy = -this.vy;
		}
		else
		{
			this.x += this.vx;
		}

		if (this.x + this.vx > c.width-this.height || this.x + this.vx < 0) 
		{
			this.vx = -this.vx;
		}
		else
		{
			this.y += this.vy;			
		}
	},
	anim : function ()
	{
		self=this;
		var test=setInterval(function(){self.create()}, 15);
	}
}