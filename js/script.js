function Main ()
{
	Self = this;
	this.c = document.getElementById("mon_canvas");
	this.ctx = Self.c.getContext("2d");

	this.KeyboardKey = new KeyboardKey;
	this.Perso = new Perso;

}
Main.prototype=
{
	anim : function ()
	{
		Self.Perso.draw();

		Self.KeyboardKey.actionKeys();
	}

}

var Main = new Main;

Main.anim();