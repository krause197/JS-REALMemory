var pics = new Array();
var deck = [];

pics[0] = new Image();
pics[0].src = '../img/cat.gif';

pics[1] = new Image();
pics[1].src = '../img/bear.gif';

pics[2] = new Image();
pics[2].src = '../img/owl.gif';

pics[3] = new Image();
pics[3].src = '../img/turtle.gif';

pics[4] = new Image();
pics[4].src = '../img/duck.gif';

for(var i = pics.length; i >= 0; i--) {
	var ceiling = Math.floor(Math.random() * [i]);
    deck.push(pics[ceiling])
    pics.splice(ceiling, 1);
}
