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
	  	Self.ctx.beginPath();

		Self.ctx.moveTo(this.x,this.y); 
		Self.ctx.lineTo(this.x+150,this.y+150);
		Self.ctx.moveTo(this.x+150,this.y); 
		Self.ctx.lineTo(this.x,this.y+150);

		Self.ctx.closePath();

		Self.ctx.stroke();	
	},
	jump : function () 
	{
		Self.ctx.clearRect(0,0, Self.c.width, Self.c.height);

		this.draw();
		this.y += this.vy;
		this.y -= this.vy;

	},
	left : function () 
	{
		Self.ctx.clearRect(0,0, Self.c.width, Self.c.height);
		this.x += this.vx;
		this.draw();
	},
	right : function () 
	{
		Self.ctx.clearRect(0,0, Self.c.width, Self.c.height);
		this.x -= this.vx;
		this.draw();
	},
	stop : function () 
	{
		Self.ctx.clearRect(0,0, Self.c.width, Self.c.height);
		this.draw();
	}
}