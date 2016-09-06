function KeyboardKey ()
{
	this.heroMoveRightInter;
	this.heroMoveLeftInter;
	/**/
	this.heroMoveLeftBool=true;
	this.heroMoveRightBool=true;
}
KeyboardKey.prototype=
{
	actionKeys : function () 
	{
		var self=this;
		document.addEventListener('keydown', function(evt)
		{
			self.keyDown(evt);
		});
		document.addEventListener('keyup', function(evt)
		{
			self.keyUp(evt);
		});

	},
	keyDown : function (evt)
	{
		switch(evt.keyCode)
		{
			case 32:
					Self.Perso.jump();
			break;
			case 68:
				if(evt.keyCode==68 && this.heroMoveRightBool)
				{
					this.heroMoveRightBool = false;
					this.heroMoveRightInter = setInterval(function()
					{
						Self.Perso.left();
					},10);
				}
			break;
			case 81:
				if(evt.keyCode==81 && this.heroMoveLeftBool)
				{
					this.heroMoveLeftBool = false;
					this.heroMoveLeftInter = setInterval(function()
					{
						Self.Perso.right();	
					},10);
				}
			break;
		}
	},
	keyUp : function (evt)
	{
		if(evt.keyCode==68)
		{
			this.heroMoveRightBool = true;
			clearInterval(this.heroMoveRightInter);
			Self.Perso.stop();
		}
		if(evt.keyCode==81)
		{
			this.heroMoveLeftBool = true;
			clearInterval(this.heroMoveLeftInter);
			Self.Perso.stop();
		}
	}
}