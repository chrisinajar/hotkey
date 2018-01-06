var tp = {
  form: {
    act: () => {
      document.getElementsByName("action")[0].value = "tele";
      updateaction("tele", document.getElementById("general"));
    },
    x: document.getElementsByName("target")[0],
    y: document.getElementsByName("other")[0],
    sub: () => {
      document.getElementById("general").submit();
    },
  },
  to: (x,y)=>{
    tp.form.act();
    tp.form.x.value = x;
    tp.form.y.value = y;
    tp.form.sub();
  }
  hev: {

  },
  sky: {

  },
  sur: {
    mines: {
      x: 141,
      y: 146
    },
    forge: {
      x: 141,
      y: 146
    },
    forge: {
      x: 141,
      y: 146
    },
    forge: {
      x: 141,
      y: 146
    },
    forge: {
      x: 141,
      y: 146
    },
  },
  dun: {
    id: {
      x: 100,
      y: 200
    },
  }
  hel: {
    forge: {
      x: 141,
      y: 146
    },
    keep: {
      x: 66,
      y: 66
    },
    ashkeeper: {
      x: 141,
      y: 174
    },
  },
  for: {

  },
  port: {
    Dillusia: {
      x: 274,
      y: 158
    },
    Disseria: {
      x: 268,
      y: 244
    },
    Kravot: {
      x: 267,
      y: 208
    },
    Crovesk: {
      x: 247,
      y: 184
    },
    Belania: {
      x: 261,
      y: 020
    },
    Satinia: {
      x: 290,
      y: 075
    },
    Demainia: {
      x: 247,
      y: 104
    },
    Wefaria: {
      x: 210,
      y: 010
    },
    Angilek: {
      x: 193,
      y: 009
    },
    Retrok: {
      x: 173,
      y: 019
    },
    Tuval: {
      x: 117,
      y: 014
    },
    Gretia: {
      x: 025,
      y: 031
    },
    Merlana: {
      x: 024,
      y: 061
    },
    Devell: {
      x: 017,
      y: 174
    },
    Hykra: {
      x: 017,
      y: 271
    },
    Rayvosk: {
      x: 209,
      y: 281
    },
    Slevisk: {
      x: 178,
      y: 244
    },
    Honar: {
      x: 056,
      y: 208
    },
    Kremk: {
      x: 047,
      y: 290
    },
    Baneesh: {
      x: 128,
      y: 234
    },
    Redock: {
      x: 223,
      y: 268
    },
    Berena: {
      x: 277,
      y: 277
    },
    Drehador: {
      x: 267,
      y: 226
    },
    Afelik: {
      x: 245,
      y: 124
    },
    Drevina: {
      x: 155,
      y: 043
    },
    Carella: {
      x: 129,
      y: 051
    },
    Treval: {
      x: 097,
      y: 021
    },
    Roggork: {
      x: 050,
      y: 049
    },
    Andal: {
      x: 130,
      y: 164
    },
  }
}

()=>{tp.to(274,158)},
()=>{tp.to(268,244)},
()=>{tp.to(267,208)},
()=>{tp.to(247,184)},
()=>{tp.to(261,020)},
()=>{tp.to(290,075)},
()=>{tp.to(247,104)},
()=>{tp.to(210,010)},
()=>{tp.to(193,009)},
()=>{tp.to(173,019)},
()=>{tp.to(117,014)},
()=>{tp.to(025,031)},
()=>{tp.to(024,061)},
()=>{tp.to(017,174)},
()=>{tp.to(017,271)},
()=>{tp.to(209,281)},
()=>{tp.to(178,244)},
()=>{tp.to(056,208)},
()=>{tp.to(047,290)},
()=>{tp.to(128,234)},
()=>{tp.to(223,268)},
()=>{tp.to(277,277)},
()=>{tp.to(267,226)},
()=>{tp.to(245,124)},
()=>{tp.to(155,043)},
()=>{tp.to(129,051)},
()=>{tp.to(097,021)},
()=>{tp.to(050,049)},
()=>{tp.to(130,164)},

document.getElementsByName("action")[0].innerHTML += `<option value="wp">Waypoints</option>`
document.getElementById("s_subbut").addEventListener("onmouseclick", ()=>{if(document.getElementsByName("action")[0].value == "wp"){alert('hi')};});
function updateaction(inputt,g){
	if(g.id == "general")
	{
		top.frames.main.s_targettext.innerHTML="";
		top.frames.main.s_othertext.innerHTML="";
		top.frames.main.s_otheratext.innerHTML="";
	}
	else if(g.id == "king")
	{
		top.frames.main.s_targetkingtext.innerHTML="";
		top.frames.main.s_otherkingtext.innerHTML="";
		top.frames.main.s_otherakingtext.innerHTML="";
	}
	while(g.target.options.length > 0)
		g.target.options.remove(0);
	while(g.other.options.length > 0)
		g.other.options.remove(0);
	g.othera.value="";

	g.target.style.display = "none";
	g.other.style.display = "none";
	g.othera.style.display = "none";

	g.othera.size=9;

	g.target.onchange = function(){updatetarget(g.action.value,this.options[this.selectedIndex].value,g);};
	g.other.onchange = null;

	if(inputt=="skills")
	{
		s_targettext.innerHTML="Options: ";
		g.target.style.display = "inline";

		//g.target.options[g.target.options.length] = new Option("Experience Percentage Toward Skills", g.target.options.length);
		//g.target.options[g.target.options.length] = new Option("Current Skill in Practice", g.target.options.length);
		g.target.length=2;
		g.target.options[0].text="Experience Percentage Toward Skills";
		g.target.options[0].value=0;
		g.target.options[1].text="Current Skill in Practice";
		g.target.options[1].value=1;

		updatetarget(inputt,0,g);
	}
	else if(inputt=="move")
	{
		s_targettext.innerHTML="Direction: ";
		g.target.style.display = "inline";

		g.target.length=6;
		g.target.options[0].text="North";
		g.target.options[0].value=0;
		g.target.options[1].text="South";
		g.target.options[1].value=1;
		g.target.options[2].text="East";
		g.target.options[2].value=2;
		g.target.options[3].text="West";
		g.target.options[3].value=3;
		g.target.options[4].text="Up";
		g.target.options[4].value=4;
		g.target.options[5].text="Down";
		g.target.options[5].value=5;
	}
	else if(inputt=="buy" || inputt=="ts")
	{
		s_targettext.innerHTML="Type: ";
		g.target.style.display = "inline";

		g.target.length=26;
		if(inputt=="ts")
			g.target.length=27;
		g.target.options[0].text="Weapon";
		g.target.options[0].value=0;
		g.target.options[1].text="Helmet";
		g.target.options[1].value=1;
		g.target.options[2].text="Shield";
		g.target.options[2].value=2;
		g.target.options[3].text="Gauntlets";
		g.target.options[3].value=3;
		g.target.options[4].text="Mantle";
		g.target.options[4].value=4;
		g.target.options[5].text="Sleeves";
		g.target.options[5].value=5;
		g.target.options[6].text="Damage Spell";
		g.target.options[6].value=6;
		g.target.options[7].text="Leggings";
		g.target.options[7].value=7;
		g.target.options[8].text="Boots";
		g.target.options[8].value=8;
		g.target.options[9].text="Heal Spell";
		g.target.options[9].value=9;
		g.target.options[10].text="Relic";
		g.target.options[10].value=10;
		g.target.options[11].text="Bow";
		g.target.options[11].value=12;
		g.target.options[12].text="Arrow";
		g.target.options[12].value=13;
		g.target.options[13].text="Light Weapons";
		g.target.options[13].value=14;
		g.target.options[14].text="Heavy Weapons";
		g.target.options[14].value=15;
		g.target.options[15].text="Precise Weapons";
		g.target.options[15].value=16;
		g.target.options[16].text="Rapid Damage Spells";
		g.target.options[16].value=17;
		g.target.options[17].text="Major Damage Spells";
		g.target.options[17].value=18;
		g.target.options[18].text="Accurate Damage Spells";
		g.target.options[18].value=19;
		g.target.options[19].text="Durability Helmets";
		g.target.options[19].value=20;
		g.target.options[20].text="Durability Shields";
		g.target.options[20].value=21;
		g.target.options[21].text="Durability Gauntlets";
		g.target.options[21].value=22;
		g.target.options[22].text="Durability Mantles";
		g.target.options[22].value=23;
		g.target.options[23].text="Durability Sleeves";
		g.target.options[23].value=24;
		g.target.options[24].text="Durability Leggings";
		g.target.options[24].value=25;
		g.target.options[25].text="Durability Boots";
		g.target.options[25].value=26;
		if(inputt=="ts")
		{
			g.target.options[26].text="Essence Elements";
			g.target.options[26].value=27;
			if(!top.lastcrafttype)
				top.lastcrafttype = 0;
			g.target.selectedIndex=top.lastcrafttype;
			top.lastcrafttype=-1;
		}

		updatetarget(inputt,g.target.options[g.target.selectedIndex].value,g);
	}
	else if(inputt=="sell" || inputt=="burn")
	{
		s_targettext.innerHTML="Type: ";
		g.target.style.display = "inline";

		upinventory(1,0);
	}
	else if(inputt=="es")
	{
		s_targettext.innerHTML="Item: ";
		g.target.style.display = "inline";
		upinventory(1,1);

		s_othertext.innerHTML="<br>Relic: ";
		g.other.style.display = "inline";

		upinventory(1,0);
	}
	else if(inputt=="ds")
	{
		s_targettext.innerHTML="Item: ";
		g.target.style.display = "inline";

		upinventory(1,0);
	}
	else if(inputt=="equip")
	{
		s_targettext.innerHTML="Item: ";
		g.target.style.display = "inline";

		s_othertext.innerHTML="Slot: ";
		g.other.style.display = "inline";

		upinventory(1,0);
	}
	else if(inputt=="fight")
	{
		s_targettext.innerHTML="Fight: ";
		g.target.style.display = "inline";

		subarr=top.clistcur;
		amount=subarr.length;
		for(var i=0;i < amount;i++)
		{
			g.target.options[g.target.options.length] = new Option(subarr[i], i);
		}
		if(top.lastfought)
			g.target.options.selectedIndex=top.lastfought;
	}
	else if(inputt=="battle")
	{
		s_targettext.innerHTML="Battle: ";
		g.target.style.display = "inline";

		upcreatures();
	}
	else if(inputt=="duel")
	{
		s_targettext.innerHTML="Player: ";
		g.target.style.display = "inline";

		upplayers();
	}
	else if(inputt=="tele")
	{
		s_targettext.innerHTML="X: ";
		g.target.style.display = "inline";

		g.target.length=300;
		g.target.selectedIndex=top.LocX;
		for(var i=0;i < 300;i++)
		{
			g.target.options[i].text=i;
			g.target.options[i].value=i;
		}

		s_othertext.innerHTML="Y: ";
		g.other.style.display = "inline";

		g.other.length=300;
		g.other.selectedIndex=top.LocY;
		for(var i=0;i < 300;i++)
		{
			g.other.options[i].text=i;
			g.other.options[i].value=i;
		}

		updatetarget(g.action.value,g.action.options[g.action.options.selectedIndex].value,g);
	}
	else if(inputt=="sail")
	{
		s_targettext.innerHTML="Port: ";
		g.target.style.display = "inline";
		g.target.length=30;
		for(var i = 0;i<30;i++)
		{
			g.target.options[i].text=top.PortN[i]+" ("+top.PortX[i]+","+top.PortY[i]+")";
			g.target.options[i].value=i;
		}

		s_otheratext.innerHTML="Price: "+(dist(top.LocX,top.PortX[g.target.selectedIndex],top.LocY,top.PortY[g.target.selectedIndex])*dist(top.LocX,top.PortX[g.target.selectedIndex],top.LocY,top.PortY[g.target.selectedIndex]));
	}
  else if(inputt=="wp")
	{
		s_targettext.innerHTML="Waypoint: ";
		g.target.style.display = "inline";
		g.target.innerHTML = `<option value=123>test</option>`;
		}
	else if(inputt=="give")
	{
		s_targettext.innerHTML="Player: ";
		g.target.style.display = "inline";
		upplayers();

		s_otheratext.innerHTML="Amount: ";
		g.othera.style.display = "inline";
	}
	else if(inputt=="givek")
	{
		s_targettext.innerHTML="Player: ";
		g.target.style.display = "inline";

		upplayers();
	}
	else if(inputt=="trade")
	{
		s_targettext.innerHTML="Player: ";
		g.target.style.display = "inline";

		upplayers();

		s_othertext.innerHTML="Item: ";
		g.other.style.display = "inline";

		upinventory(1,0);

		s_otheratext.innerHTML="Price: ";
		g.othera.style.display = "inline";
	}
	else if(inputt=="viewtops")
	{
		s_targettext.innerHTML="List: ";
		g.target.style.display = "inline";

		g.target.length=32;
		g.target.options[0].text="All Races";
		g.target.options[0].value="a";
		g.target.options[1].text="Guides";
		g.target.options[1].value="g";
		g.target.options[2].text="Dragon Wizard";
		g.target.options[2].value="w";
		g.target.options[3].text="Swimsuits";
		g.target.options[3].value="s";
		g.target.options[4].text="Templars";
		g.target.options[4].value=12;
		g.target.options[5].text="Humans";
		g.target.options[5].value=0;
		g.target.options[6].text="Dwarves";
		g.target.options[6].value=1;
		g.target.options[7].text="Drows";
		g.target.options[7].value=2;
		g.target.options[8].text="Sylvain";
		g.target.options[8].value=3;
		g.target.options[9].text="Galatai";
		g.target.options[9].value=4;
		g.target.options[10].text="Trolls";
		g.target.options[10].value=5;
		g.target.options[11].text="Ogres";
		g.target.options[11].value=6;
		g.target.options[12].text="Goblins";
		g.target.options[12].value=7;
		g.target.options[13].text="Gnomes";
		g.target.options[13].value=8;
		g.target.options[14].text="Solons";
		g.target.options[14].value=9;
		g.target.options[15].text="Mesmers";
		g.target.options[15].value=10;
		g.target.options[16].text="Balacee";
		g.target.options[16].value=11;
		g.target.options[17].text="1000+ Club";
		g.target.options[17].value="1000";
		g.target.options[18].text="Hell Kings";
		g.target.options[18].value="Hel";
		g.target.options[19].text="Dungeon Kings";
		g.target.options[19].value="Dun";
		g.target.options[20].text="Surface Kings";
		g.target.options[20].value="Sur";
		g.target.options[21].text="Sky Kings";
		g.target.options[21].value="Sky";
		g.target.options[22].text="Heaven Kings";
		g.target.options[22].value="Hev";
		g.target.options[23].text="Forge Kings";
		g.target.options[23].value="For";
		g.target.options[24].text="Top Focused Crafters";
		g.target.options[24].value="focused";
		g.target.options[25].text="Top Overall Crafters";
		g.target.options[25].value="overall";
		g.target.options[26].text="Hell Kingdom Map";
		g.target.options[26].value="mhel";
		g.target.options[27].text="Dungeon Kingdom Map";
		g.target.options[27].value="mdun";
		g.target.options[28].text="Surface Kingdom Map";
		g.target.options[28].value="msur";
		g.target.options[29].text="Sky Kingdom Map";
		g.target.options[29].value="msky";
		g.target.options[30].text="Heaven Kingdom Map";
		g.target.options[30].value="mhev";
		g.target.options[31].text="Forge Kingdom Map";
		g.target.options[31].value="mfor";
	}
	else if(inputt=="options")
	{
		s_targettext.innerHTML="Option: ";
		g.target.style.display = "inline";

		g.target.length=19;
		g.target.options[0].text="Chat Size";
		g.target.options[0].value=0;
		g.target.options[1].text="Relic Display";
		g.target.options[1].value=1;
		g.target.options[2].text="Graphic Window Update";
		g.target.options[2].value=2;
		g.target.options[3].text="Auction Text";
		g.target.options[3].value=3;
		g.target.options[4].text="Emote Text";
		g.target.options[4].value=7;
		g.target.options[5].text="Shout Text";
		g.target.options[5].value=8;
		g.target.options[6].text="Button Enlargement";
		g.target.options[6].value=4;
		g.target.options[7].text="Preferred Blessing";
		g.target.options[7].value=5;
		g.target.options[8].text="Preferred Approbation";
		g.target.options[8].value=6;
		g.target.options[9].text="Change Account Key";
		g.target.options[9].value=9;
		g.target.options[10].text="Animated Gif's";
		g.target.options[10].value=10;
		g.target.options[11].text="War Message Filtering";
		g.target.options[11].value=11;
		g.target.options[12].text="Your Picture";
		g.target.options[12].value=12;
		g.target.options[13].text="Interest & Starving Filtering";
		g.target.options[13].value=13;
		g.target.options[14].text="Trivial Gold/Kingdom Filtering";
		g.target.options[14].value=14;
		g.target.options[15].text="Poker Payout";
		g.target.options[15].value=16;
		g.target.options[16].text="Be a Guide? (Ash rewards!)";
		g.target.options[16].value=17;
		g.target.options[17].text="Kingdom Map Colors";
		g.target.options[17].value=18;
		g.target.options[18].text="Swimsuit Picture";
		g.target.options[18].value=19;

		updatetarget(inputt,0,g);
	}
	else if(inputt=="settle" || inputt=="coup")
	{
	}
	else if(inputt=="bribe" || inputt=="pay" || inputt=="tax" || inputt=="food" || inputt=="embezzle" || inputt=="deposit")
	{
		s_otherakingtext.innerHTML="Amount: ";
		g.othera.style.display = "inline";
	}
	else if(inputt=="rune")
	{
		s_otherakingtext.innerHTML="Amount (Runes cost 1 billion each): ";
		g.othera.style.display = "inline";
	}
	else if(inputt=="guard")
	{
		s_targetkingtext.innerHTML="Beast: ";
		g.target.style.display = "inline";

		subarr=top.clistcur;
		amount=subarr.length;
		g.target.length=amount;
		for(var i=0;i < amount;i++)
		{
			g.target.options[i].text=subarr[i]+" "+mc(TSOT(i));
			g.target.options[i].value=i;
		}
	}
	else if(inputt=="army")
	{
		s_targetkingtext.innerHTML="Unit: ";
		g.target.style.display = "inline";

		g.target.length=5;
		g.target.options[0].text="Soldiers";
		g.target.options[0].value=0;
		g.target.options[1].text="Archers";
		g.target.options[1].value=1;
		g.target.options[2].text="Catapults";
		g.target.options[2].value=2;
		g.target.options[3].text="Trebuchets";
		g.target.options[3].value=3;
		g.target.options[4].text="ALL";
		g.target.options[4].value=4;

		s_otherakingtext.innerHTML="Amount: ";
		g.othera.style.display = "inline";
	}
	else if(inputt=="fortify")
	{
		s_targetkingtext.innerHTML="Type: ";
		g.target.style.display = "inline";

		g.target.length=4;
		g.target.options[0].text="Walls";
		g.target.options[0].value=0;
		g.target.options[1].text="Moats";
		g.target.options[1].value=1;
		g.target.options[2].text="Cannons";
		g.target.options[2].value=2;
		g.target.options[3].text="ALL";
		g.target.options[3].value=3;

		updatetarget(inputt,0,g);

		s_otherakingtext.innerHTML="Amount: ";
		g.othera.style.display = "inline";
	}
	else if(inputt=="war" || inputt=="assault")
	{
		s_targetkingtext.innerHTML="With: ";
		g.target.style.display = "inline";

		g.target.length=1;
		g.target.length=5;
		g.target.options[0].text="Everything";
		g.target.options[0].value=0;
		g.target.options[1].text="Soldiers";
		g.target.options[1].value=1;
		g.target.options[2].text="Archers";
		g.target.options[2].value=2;
		g.target.options[3].text="Catapults";
		g.target.options[3].value=3;
		g.target.options[4].text="Trebuchets";
		g.target.options[4].value=4;

		s_otherkingtext.innerHTML="Loc: ";
		g.other.style.display = "inline";

		g.other.length=4;
		g.other.options[0].text="North";
		g.other.options[0].value=0;
		g.other.options[1].text="South";
		g.other.options[1].value=1;
		g.other.options[2].text="East";
		g.other.options[2].value=2;
		g.other.options[3].text="West";
		g.other.options[3].value=3;
	}
	else if(inputt=="transport")
	{
		s_targetkingtext.innerHTML="What: ";
		g.target.style.display = "inline";

		g.target.length=6;
		g.target.options[0].text="Everything";
		g.target.options[0].value=0;
		g.target.options[1].text="Soldiers";
		g.target.options[1].value=1;
		g.target.options[2].text="Archers";
		g.target.options[2].value=2;
		g.target.options[3].text="Catapults";
		g.target.options[3].value=3;
		g.target.options[4].text="Trebuchets";
		g.target.options[4].value=4;
		g.target.options[5].text="Guard";
		g.target.options[5].value=5;

		s_otherkingtext.innerHTML="Loc: ";
		g.other.style.display = "inline";

		g.other.length=4;
		g.other.options[0].text="North";
		g.other.options[0].value=0;
		g.other.options[1].text="South";
		g.other.options[1].value=1;
		g.other.options[2].text="East";
		g.other.options[2].value=2;
		g.other.options[3].text="West";
		g.other.options[3].value=3;

		s_otherakingtext.innerHTML="Amount: ";
		g.othera.style.display = "inline";
	}
}
