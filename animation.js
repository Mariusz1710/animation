window.onload = function ()
{
	let box = document.getElementById("box");
	let posX = 1;
	let posY = 0;
	let dir_hor = 1;
	let dir_ver = 1;
	let change = 0;

	function move()
	{
		if(posX == 450 || posX == 0)
		{
			if((posX == 0 && posY == 450) || (posX == 0 && posY == 0))
			{
				posX = 1;
				dir_hor *= -1;
				dir_ver *= -1;
				return;
			}
			posY += dir_ver;
			change++;
			box.style.top = posY + "px";
			
			if(change < 50) 
			{
				return;
			}
			else
			{
				change = 0;
				dir_hor *= -1;
			}

			if(change > 55) alert("Ola");
		}

		posX += dir_hor;
		/*if(posX == 449) alert("449");
		else if(posX == 450) alert("450");
		else if(posX == 451) alert("451");
		else if(posX == 0) alert("0");
		else if(posX == 1) alert("1");*/
		box.style.left = posX + "px";


		
	}

	function move_ver()
	{
		let t1 = setInterval(move_ver,1000);
		posY += dir_ver;
		box.style.top = posY + "px";

		if(posY %50 == 0)
		{
			clearInterval(t1);
			move();
		}
	}

	let t = setInterval(move,10);

}