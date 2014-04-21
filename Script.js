
var debug = "";
window.onload = function()
{
		//alert("si carga")
//var color = "#FF0000";
var dibujar = SVG('Recuadro').size("30%",500);
var line=[[0,250],[400,250]]

var posicion = [[100,0], [300,0 ], [340,40 ], [340, 200] , [300,240] , [100,240],[100,200], [260,200 ] , 
                [300,160], [300,80] , [260,40], [140,40],[140,200 ],[100,200 ],[100,0 ]]; //letra "d"

var posDestino = [[230,0 ],[260, 0],[400,200 ],[360,200],[320,140 ],[200,140],[160,200 ],
                  [120,200 ],[180,100],[300,100],[250,40],[240,40],  //letra "a"
                  [210,100],[180,100],[230,0]];
var continua = dibujar.polyline(posicion).fill( color =" blue").stroke({width : 6, color: ' red'});
                continua.animate(1000).plot(posDestino).loop();

for(var i = 1; i <= 7; i++)
	{
		nom_div("opcion_" + i).addEventListener('change', function(event)
		{
			console.debug(event);
			var ind = event.target.id.split("_");
			switch(Number(ind[1]))
			{
				case 1: continua.attr({fill: this.value}); break;
				case 2: continua.stroke({color : this.value}); break;
				case 3: continua.stroke({width : this.value}); break;
				case 4: continua.attr({opacity: this.value}); break;
				case 5: continua.rotate(this.value); break;
				case 6: continua.scale(this.value); break;
				case 7: //Mostra máscara..
						if(this.value == 1)
						{
							image.show();
							//image.maskWith(continua);
							continua.maskWith(image);
						}
						else
						{
							//continua.remove()
							//image.hide();
							continua.unmask();
							//mask.remove()
						}
						break;
			}
		});
	}

var animo = true;
	nom_div("controla").addEventListener('click', function(event)
	{
		if(animo)
		{
			this.value = "Continuar";
			continua.pause();
		}
		else
		{
			this.value = "Detener";
			continua.play();
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}

/*
var otro= false;
nom_div("newline").addEventListener('click', function(event)
	{
		if(!otro)
		{
			continua.animate(1000).plot(posDestino);
		}
		else
		{
			continua.animate(1000).plot(posicion);
		}
		otro = !otro;
	});

function nom_div(div)
	{
		return document.getElementById(div);
	}*/
}
