'use strict'

var p = {
  version: "Version: 10 (Final)",
  pwps: [0, 0, 0, 0],
};

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
  to: (x, y) => {
    tp.form.act();
    tp.form.x.value = x;
    tp.form.y.value = y;
    tp.form.sub();
  },
  heaven: {
    palace: () => {
      tp.to(162, 159);
    },
    keep: () => {
      tp.to(66, 66);
    },
    citizen: () => {
      tp.to(150, 150);
    },
  },
  sky: {
    shrine: () => {
      tp.to(100, 250);
    },
    citizen: () => {
      tp.to(69, 157);
    },
  },
  surface: {
    mines: () => {
      tp.to(162, 159);
    },
    keeper: () => {
      tp.to(150, 150);
    },
    pub: () => {
      tp.to(150, 145);
    },
    puddle: () => {
      tp.to(140, 190);
    },
    brawl: () => {
      tp.to(40, 140);
    },
  },
  dungeon: {
    insane: () => {
      tp.to(100, 200);
    },
  },
  hell: {
    keep: () => {
      tp.to(66, 66);
    },
    collector: () => {
      tp.to(141, 174);
    },
    forge: () => {
      tp.to(141, 146);
    },
  },
  quest: {
    shore: () => {
      tp.to(145, 153);
    },
    mountians: () => {
      tp.to(207, 188);
    },
    lava: () => {
      tp.to(9, 256);
    },
    sky: () => {
      tp.to(78, 242);
    },
    dungeon: () => {
      tp.to(240, 60);
    },
    lake: () => {
      tp.to(40, 140);
    },
    temple: () => {
      tp.to(40, 225);
    },
  },
  port: {
    dillusia: () => {
      tp.to(274, 158);
    },
    disseria: () => {
      tp.to(268, 244);
    },
    kravot: () => {
      tp.to(267, 208);
    },
    crovesk: () => {
      tp.to(247, 184);
    },
    belania: () => {
      tp.to(261, 20);
    },
    satinia: () => {
      tp.to(290, 75);
    },
    demainia: () => {
      tp.to(247, 104);
    },
    wefaria: () => {
      tp.to(210, 10);
    },
    angilek: () => {
      tp.to(193, 9);
    },
    retrok: () => {
      tp.to(173, 19);
    },
    tuval: () => {
      tp.to(117, 14);
    },
    gretia: () => {
      tp.to(25, 31);
    },
    merlana: () => {
      tp.to(24, 61);
    },
    devell: () => {
      tp.to(17, 174);
    },
    hykra: () => {
      tp.to(17, 271);
    },
    rayvosk: () => {
      tp.to(209, 281);
    },
    slevisk: () => {
      tp.to(178, 244);
    },
    honar: () => {
      tp.to(56, 208);
    },
    kremk: () => {
      tp.to(47, 290);
    },
    naneesh: () => {
      tp.to(128, 234);
    },
    redock: () => {
      tp.to(223, 268);
    },
    berena: () => {
      tp.to(277, 277);
    },
    drehador: () => {
      tp.to(267, 226);
    },
    afelik: () => {
      tp.to(245, 124);
    },
    drevina: () => {
      tp.to(155, 43);
    },
    carella: () => {
      tp.to(129, 51);
    },
    treval: () => {
      tp.to(97, 21);
    },
    roggork: () => {
      tp.to(50, 49);
    },
    andal: () => {
      tp.to(130, 164);
    },
    perydan: () => {
      tp.to(150, 197);
    },
  },
  wp: {
    loc_1: [0, 0],
    loc_2: [0, 0],
    loc_3: [0, 0],
    loc_4: [0, 0],
    jump1: () => {
      tp.to(tp.wp.loc_1[0], tp.wp.loc_1[1]);
    },
    jump2: () => {
      tp.to(tp.wp.loc_2[0], tp.wp.loc_2[1]);
    },
    jump3: () => {
      tp.to(tp.wp.loc_3[0], tp.wp.loc_3[1]);
    },
    jump4: () => {
      tp.to(tp.wp.loc_4[0], tp.wp.loc_4[1]);
    },
    set1: () => {
      tp.wp.loc_1 = [parseInt(top.LocX), parseInt(top.LocY)];
      domes("Waypoint has been set to " + tp.wp.loc_1[0] + "," + tp.wp.loc_1[1]);
    },
    set2: () => {
      tp.wp.loc_2 = [parseInt(top.LocX), parseInt(top.LocY)];
      domes("Waypoint has been set to " + tp.wp.loc_2[0] + "," + tp.wp.loc_2[1]);
    },
    set3: () => {
      tp.wp.loc_3 = [parseInt(top.LocX), parseInt(top.LocY)];
      domes("Waypoint has been set to " + tp.wp.loc_3[0] + "," + tp.wp.loc_3[1]);
    },
    set4: () => {
      tp.wp.loc_4 = [parseInt(top.LocX), parseInt(top.LocY)];
      domes("Waypoint has been set to " + tp.wp.loc_4[0] + "," + tp.wp.loc_4[1]);
    },
  }
}

var chatmodder = setInterval(() => {
  for (let x = 0; x <= 4; x++) {
    if (top.OldChat[x] != "") {
      let msg = top.OldChat[x];
      if (msg.toLowerCase().indexOf(":corymoon:") > -1) {
        top.OldChat[x] = msg.replace(/:corymoon:/gi, '<img width="32px" height="32px" src="http://i.imgur.com/skHiT8d.jpg">');
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":calemoon:") > -1) {
        top.OldChat[x] = msg.replace(/:calemoon:/gi, '<img width="32px" height="32px" src="http://i.imgur.com/zVgLXzs.png">');
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":kalemoon:") > -1) {
        top.OldChat[x] = msg.replace(/:kalemoon:/gi, '<img width="32px" height="32px" src="http://i.imgur.com/zVgLXzs.png">');
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":hadoken:") > -1) {
        top.OldChat[x] = msg.replace(/:hadoken:/gi, '<img width="32px" height="32px" src="https://imgur.com/Ds160kg.gif">');
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":adumb:") > -1) {
        top.OldChat[x] = msg.replace(/:adumb:/gi, '<img width="32px" height="32px" src="http://i.imgur.com/GgEVho6.jpg">');
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":migs:") > -1) {
        top.OldChat[x] = msg.replace(/:migs:/gi, '<img width="32px" height="32px" src="http://i.imgur.com/tLkj3x1.png">');
        upchat("");
      }
    }
  }
}, 500);


var mainLoad = (function() {
  let abc = document.getElementsByTagName('table')[0].childNodes[0];
  let xxz = document.getElementsByTagName('table')[0].childNodes[0].childNodes[2];
  abc.insertBefore(document.createElement("tr"), xxz);
  abc.id = 'addon-tr';
  let xlr = `
  <td width="100%" colspan="2" id="addon">
   <table id="addon-table" border="0" width="100%" cellspacing="0" cellpadding="0" bgcolor="#808080" text-align='center'>
      <tbody>
         <tr>
            <td background="../top.jpg" align="center" colspan="5">
               <img border="0" src="../top.jpg" width="44" height="10">
            </td>
         </tr>
         <tr>
            <td rowspan="5" background="../side.jpg">
               <img border="0" src="../side.jpg" width="10" height="44">
            </td>
            <td bgcolor="0" width="0">
               <img border="0" src="../dragon.jpg">
            </td>
            <td width="100%" bgcolor="0">
               <table width="100%" style='text-align:center; color:orange'>
                  <tr id='tb_1'>
                     <td>
                     <center>
                     <table style='text-align:center;'>
                        <tr>
                           <td>
                           Waypoints: <select id="waypoints">
                           <option value=false>-----HEAVEN-----</option>
                             <option value="palace">Forbidden Palace</option>
                             <option value="vkeep">Heaven Keep</option>
                             <option value="vcitizen">A Citizen</option>

                           <option value=false>-----SKY-----</option>
                             <option value="shrine">Skill Shrine</option>
                             <option value="scitizen">A Citizen</option>

                           <option value=false>-----SURFACE-----</option>
                             <option value="mines">Forbidden Mines</option>
                             <option value="keeper">Ash Keeper</option>
                             <option value="pub">Stallions Pub</option>
                             <option value="puddle">Le Puddle Deep</option>
                             <option value="brawl">Inquest Brawl</option>

                           <option value=false>-----DUNGEON-----</option>
                             <option value="id">Insane Dungeon</option>

                           <option value=false>-----HELL-----</option>
                             <option value="lkeep">Hell Keep</option>
                             <option value="collector">Ash Collector</option>
                             <option value="forge">Forge Entrance</option>

                           <option value=false>-----QUEST-----</option>
                             <option value="shore">Hell Shore</option>
                             <option value="mountians">Dungeon Mountians</option>
                             <option value="lava">Dungeon Lava</option>
                             <option value="sky">Sky Entrance</option>
                             <option value="dungeon">Dungeon Entrance</option>
                             <option value="lake">Heaven Lake</option>
                             <option value="temple">The Temple</option>

                           <option value=false>-----PERSONAL-----</option>
                             <option value="jump1">Personal 1</option>
                             <option value="jump2">Personal 2</option>
                             <option value="jump3">Personal 3</option>
                             <option value="jump4">Return</option>
                             <option value="set1">Set 1</option>
                             <option value="set2">Set 2</option>
                             <option value="set3">Set 3</option>
                           </select><button onclick="porter(document.getElementById('waypoints').value)">Submit</button>
                          </td>
                        </tr>
                     </table>
                     </center>
                     </font>
                     </td>
                  </tr>
                  </table>
               </center>
            </td>
            <td bgcolor="#000000" width="0" align="right">
               <img border="0" src="../minotaur.jpg">
            </td>
            <td rowspan="4" background="../side.jpg">
               <img border="0" src="../side.jpg" width="10" height="44">
            </td>
         </tr>
         <tr>
            <td background="../top.jpg" align="center" colspan="5">
               <img border="0" src="../top.jpg" width="44" height="10">
            </td>
         </tr>
      </tbody>
   </table>
</td>`;
  document.getElementsByTagName('table')[0].childNodes[0].childNodes[2].innerHTML = xlr;
  chat.target.focus();
})();

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function porter(location) {
  switch (location) {
    case "palace":
      tp.heaven.palace();
      break;
    case "vkeep":
      tp.heaven.keep();
      break;
    case "vcitizen":
      tp.heaven.citizen();
      break;
    case "shrine":
      tp.sky.shrine();
      break;
    case "scitizen":
      tp.sky.citizen();
      break;
    case "mines":
      tp.surface.mines();
      break;
    case "keeper":
      tp.surface.keeper();
      break;
    case "pub":
      tp.surface.pub();
      break;
    case "puddle":
      tp.surface.puddle();
      break;
    case "brawl":
      tp.surface.brawl();
      break;
    case "id":
      tp.dungeon.insane();
      break;
    case "lkeep":
      tp.hell.keep();
      break;
    case "collector":
      tp.hell.collector();
      break;
    case "forge":
      tp.hell.forge();
      break;
    case "shore":
      tp.quest.shore();
      break;
    case "mountians":
      tp.quest.mountians();
      break;
    case "lava":
      tp.quest.lava();
      break;
    case "sky":
      tp.quest.sky();
      break;
    case "dungeon":
      tp.quest.dungeon();
      break;
    case "lake":
      tp.quest.lake();
      break;
    case "temple":
      tp.quest.temple();
      break;
    case "jump1":
      tp.wp.jump1();
      break;
    case "jump2":
      tp.wp.jump2();
      break;
    case "jump3":
      tp.wp.jump3();
      break;
    case "jump4":
      tp.wp.jump4();
      break;
    case "set1":
      tp.wp.set1();
      break;
    case "set2":
      tp.wp.set2();
      break;
    case "set3":
      tp.wp.set3();
      break;

    default:
      //No matching case found. Where did you try to go?
      console.log(location);
      break;
  }
}

function log(message, log_level) {
  switch (log_level) {
    case 0:
      //information
      top.OldChat.unshift(`<font style='color:green'>${message}</font>`);
      break;

    case 1:
      //warning
      top.OldChat.unshift(`<font style='color:yellow'>${message}</font>`);
      break;

    case 2:
      //security
      top.OldChat.unshift(`<font style='color:red'>${message}</font>`);
      break;

    case 3:
      //security
      top.OldChat.unshift(`${message}`);
      break;

    case 4:
    case undefined:
      //system
      top.OldChat.unshift(`<font style='color:#CC00CC'>${message}</font>`);
      break;

    default:
      console.log(message);
      break;
  }
  upchat('');
}

setTimeout(function() {
  genfull('chat', '/dis', 0);
  domes('Keybindings Loaded ' + p.version + ' Hotkeys have been removed. Waypoints will stay. Thank you for using my hotkeys.');
  top.hotlist.unshift('Rune+Keeper');
  top.hotlist.unshift('NOBODY');
}, 200);
