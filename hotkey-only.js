'use strict'

var p = {
  version: "Version: 10 (Final)",
  pwps: [0, 0, 0, 0],
  current_inventory: [],
  current_inventory_length: 0,
  max_inventory: 50,
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
      if (msg.toLowerCase().indexOf(":hevmap:") > -1) {
        top.OldChat[x] = msg.replace(/:hevmap:/gi, '<img width="300px" height="300px" src="http://rwk2.racewarkingdoms.com/Hev.bmp">');
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":skymap:") > -1) {
        top.OldChat[x] = msg.replace(/:skymap:/gi, '<img width="300px" height="300px" src="http://rwk2.racewarkingdoms.com/Sky.bmp">');
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":surmap:") > -1) {
        top.OldChat[x] = msg.replace(/:surmap:/gi, '<img width="300px" height="300px" src="http://rwk2.racewarkingdoms.com/Sur.bmp">');
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":dunmap:") > -1) {
        top.OldChat[x] = msg.replace(/:dunmap:/gi, '<img width="300px" height="300px" src="http://rwk2.racewarkingdoms.com/Dun.bmp">');
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":helmap:") > -1) {
        top.OldChat[x] = msg.replace(/:helmap:/gi, '<img width="300px" height="300px" src="http://rwk2.racewarkingdoms.com/Hel.bmp">');
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":formap:") > -1) {
        top.OldChat[x] = msg.replace(/:formap:/gi, '<img width="300px" height="300px" src="http://rwk2.racewarkingdoms.com/For.bmp">');
        upchat("");
      }
    }
  }
}, 500);


var mainLoad = (function() {
  document.getElementsByTagName('tbody')[1].innerHTML = `<tbody>
  <tr>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
    <td background="../top.jpg" align="center" colspan="4"><img border="0" src="../top.jpg" width="44" height="10"></td>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
  </tr>
  <tr>
    <td background="../side.jpg" rowspan="5"><img border="0" src="../side.jpg" width="10" height="44"></td>
    <td width="25%" bgcolor="0"> <span id="s_name">${top.login}</span> <a target="_blank" href="../info.htm#lev">Lev</a>: <span id="s_login">${top.Level}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#loc">Loc</a>: <span id="s_Loc">${top.Loc}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#gold">Gold</a>: <span id="s_Gold">${mc(top.Gold)}</span></td>
    <td width="25%" bgcolor="0">
      <span id="s_Exp">
        <table border="0" width="100%" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td width="0" bgcolor="0"><img border="0" height="15" width="11" src="../ml.jpg"></td>
              <td width="0%" background="../mfy.jpg" align="right"></td>
              <td width="100%" background="../mee.jpg"></td>
              <td width="0" bgcolor="0"><img border="0" height="15" width="11" src="../mr.jpg"></td>
            </tr>
          </tbody>
        </table>
      </span>
    </td>
    <td
      background="../side.jpg" rowspan="5"><img border="0" src="../side.jpg" width="10" height="44"></td>
  </tr>
  <tr>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#str">Str</a>: <span id="s_Str">${mc(top.Str)}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#dex">Dex</a>: <span id="s_Dex">${mc(top.Dex)}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#agi">Agi</a>: <span id="s_Agi">${mc(top.Agi)}</span></td>
    <td width="25%" bgcolor="0">
      <span id="s_Level">
        <table border="0" width="100%" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td width="0" bgcolor="0"><img border="0" height="15" width="11" src="../ml.jpg"></td>
              <td width="0%" background="../mfa.jpg" align="right"></td>
              <td width="100%" background="../mee.jpg"></td>
              <td width="0" bgcolor="0"><img border="0" height="15" width="11" src="../mr.jpg"></td>
            </tr>
          </tbody>
        </table>
      </span>
    </td>
  </tr>
  <tr>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#dur">Dur</a>: <span id="s_Dur">${mc(top.Dur)}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#ntl">Ntl</a>: <span id="s_Ntl">${mc(top.Ntl)}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#cnc">Cnc</a>: <span id="s_Cnc">${mc(top.Cnc)}</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="../info.htm#cnt">Cnt</a>: <span id="s_Cnt">${mc(top.Cnt)}</span></td>
  </tr>
  <tr>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://rwkservice.com/quests.htm#treasures">Inventory Counts</a>: </td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://rwkservice.com/quests.htm#treasures">EEoT</a>: <span id="s_Eeot">0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://rwkservice.com/quests.htm#treasures">EEoGT</a>: <span id="s_Eeogt">0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="http://rwkservice.com/quests.htm#treasures">EEoST</a>: <span id="s_Eeost">0</span></td>
  </tr>
  <tr>
    <td width="25%" bgcolor="0"> <a target="_blank" href="https://www.reddit.com/r/rwk/comments/6m8lux/the_forge_major_update/">Space</a>: <span id="inv_Space"> </span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="https://www.reddit.com/r/rwk/comments/6m8lux/the_forge_major_update/">Ruby</a>: <span id="s_Ruby">0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="https://www.reddit.com/r/rwk/comments/6m8lux/the_forge_major_update/">Emerald</a>: <span id="s_Emerald">0</span></td>
    <td width="25%" bgcolor="0"> <a target="_blank" href="https://www.reddit.com/r/rwk/comments/6m8lux/the_forge_major_update/">Sapphire</a>: <span id="s_Sapphire">0</span></td>
  </tr>
  <tr>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
    <td background="../top.jpg" align="center" colspan="4"><img border="0" src="../top.jpg" width="44" height="10"></td>
    <td width="0" height="0"><img border="0" src="../corner.jpg" width="10" height="10"></td>
  </tr>
  </tbody>`
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

function upbuttons() {
  let tempstr = "";

  if (top.RJ)
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"rjack\") title='Ambush Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card24.gif'> ";
  if (top.BJ)
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"bjack\") title='Ultra Resist Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card50.gif'> ";
  if (top.RQ)
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"rqueen\") title='Ambush Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card25.gif'> ";
  if (top.BQ)
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"bqueen\") title='Negate Resist Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card51.gif'> ";
  if (top.RK)
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"rking\") title='Ambush Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card26.gif'> ";
  if (top.BK)
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"bking\") title='Ultra Revive Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card52.gif'> ";
  if (top.RA)
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"race\") title='Ambush Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card14.gif'> ";
  if (top.BA)
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"bace\") title='Ultra Crit Mode' border=0" + top.hio + "height=24 width=18 src='" + top.y + "card40.gif'> ";

  if (tempstr != "")
    tempstr = "<img border=0 src='" + top.y + "c.gif' height=8 width=8><img border=0 src='" + top.y + "ButDash.gif'><img border=0 src='" + top.y + "c.gif' height=8 width=8>" + tempstr;


  top.frames.main.s_HotCards.innerHTML = tempstr;
  tempstr = "";

  let yes = 0;

  if (top.Exp >= 100) {
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(0) " + top.hio;
    if (top.HotLevel == 1) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButStr.jpg'> ";
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(1) " + top.hio;
    if (top.HotLevel == 2) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButDex.jpg'> ";
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(2) " + top.hio;
    if (top.HotLevel == 3) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButAgi.jpg'> ";
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(3) " + top.hio;
    if (top.HotLevel == 4) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButDur.jpg'> ";
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(4) " + top.hio;
    if (top.HotLevel == 5) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButNtl.jpg'> ";
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(5) " + top.hio;
    if (top.HotLevel == 6) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButCnc.jpg'> ";
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(6) " + top.hio;
    if (top.HotLevel == 7) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButCnt.jpg'> ";
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=level(7) " + top.hio;
    if (top.HotLevel == 8) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButAll.jpg'>";
    yes = 1;
  }
  if (top.Health <= 0) {
    if (yes) tempstr += "<br>";
    yes = 1;
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=revive() " + top.hio + "border=0 src='" + top.y + "ButRevive.jpg'>";
  }

  if (top.Target != -1) {
    if (yes) tempstr += "<br>";
    yes = 1;
    tempstr += "<img style=\"cursor: pointer;\" onmousedown=gattack(\"attack\") border=0" + top.hio + "src='" + top.y + "ButAttack.jpg' title='Attack With Both Weapons'> <img style=\"cursor: pointer;\" onmousedown=gattack(\"cast\") border=0" + top.hio + "src='" + top.y + "ButCast.jpg' title='Cast With Both Spells'> <img style=\"cursor: pointer;\" onmousedown=gattack(\"lattack\") border=0" + top.hio + "src='" + top.y + "ButHybrid1.jpg' title='Left Weapon and Spell'> <img style=\"cursor: pointer;\" onmousedown=gattack(\"rattack\") border=0" + top.hio + "src='" + top.y + "ButHybrid2.jpg' title='Right Weapon and Spell'> <img style=\"cursor: pointer;\" onmousedown=gattack(\"defend\") border=0" + top.hio + "src='" + top.y + "ButDefend.jpg' title='Defend'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


    tempstr += " <img border=0 src='" + top.y + "ButVs.jpg'> <a href=javascript:pm('" + mp(top.Target) + "')>" + getcreature(top.Target) + "</a>";
  }

  top.frames.main.s_FightWin.innerHTML = tempstr;
  curInv();
  essences();
}

function curInv() {
  p.current_inventory = top.Inventory.split("-").filter(e => String(e).trim());
  p.current_inventory_length = top.Inventory.split("-").filter(e => String(e).trim()).length;
  document.getElementById("inv_Space").innerHTML = `${p.current_inventory_length}/${p.max_inventory}`;
};

function maxInv() {
  if (p.current_inventory.includes("11042") || p.current_inventory.includes("11050")) {
    p.max_inventory = 75;
  }
  if (p.current_inventory.includes("11082") || p.current_inventory.includes("11087")) {
    p.max_inventory = 90;
  }
  document.getElementById("inv_Space").innerHTML = `${p.current_inventory_length}/${p.max_inventory}`;
}

function essences() {
  let eeot = 0;
  let eeogt = 0;
  let eeost = 0;
  let ruby = 0;
  let sapphire = 0;
  let emerald = 0;
  for (let i in top.inventory) {
    switch (parseInt(top.inventory[i])) {
      case 27018:
        eeot++;
        break;
      case 27019:
        eeogt++;
        break;
      case 27030:
        eeost++;
        break;
      case 27027:
        ruby++;
        break;
      case 27028:
        sapphire++;
        break;
      case 27029:
        emerald++;
        break;
      case 27031:
        ruby += 32;
        break;
      case 27032:
        sapphire += 32;
        break;
      case 27033:
        emerald += 32;
        break;
    }
  }
  document.getElementById('s_Eeot').innerHTML = eeot;
  document.getElementById('s_Eeogt').innerHTML = eeogt;
  document.getElementById('s_Eeost').innerHTML = eeost;
  document.getElementById('s_Ruby').innerHTML = ruby;
  document.getElementById('s_Sapphire').innerHTML = sapphire;
  document.getElementById('s_Emerald').innerHTML = emerald;
}

setTimeout(function() {
  genfull('chat', '/dis', 0);
  curInv();
  domes('Keybindings Loaded ' + p.version + ' I appreciate everyone using my addon for the past 10 months. The hotkeys have been removed, and some errors have been fixed. I will not be updating this in the future unless Jeff adds the features to the game. Thank you for the kind words and support, Anubis.');
  top.hotlist.unshift('Rune+Keeper');
  top.hotlist.unshift('NOBODY');
  upbuttons();
  maxInv();
}, 500);
