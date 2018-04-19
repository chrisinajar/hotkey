'use strict'

var p = {
  version: "Version: 11",
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
      if (msg.toLowerCase().indexOf(":banhammer:") > -1) {
        let upperletter = top.login.substring(0, 1).toUpperCase();
        let lowername = top.login.substring(1, top.login.length);
        top.OldChat[x] = `<font color='#C89468'>${upperletter + lowername}</font> <font color='#FCFF11'>has been smitten! ... and there was much rejoicing</font>`;
        upchat("");
        //alert("You've been banned.");
      }
      if (msg.toLowerCase().indexOf(":banac:") > -1) {
        top.OldChat[x] = `<font color='#C89468'>Ash Collector</font> <font color='#FCFF11'>has been smitten! ... and there was much rejoicing</font>`;
        upchat("");
        //alert("You've been banned.");
      }
      if (msg.toLowerCase().indexOf(":banjeff:") > -1) {
        top.OldChat[x] = `<b><font color='#C89468'>Glitchless</font> <font color='#FCFF11'>has been smitten! ... and there was much rejoicing</font></b>`;
        upchat("");
        //alert("You've been banned.");
      }
      if (msg.toLowerCase().indexOf(":banpk:") > -1) {
        top.OldChat[x] = `<font color='#C89468'>Puddle Keeper</font> <font color='#FCFF11'>has been smitten! ... and there was much rejoicing</font>`;
        upchat("");
        //alert("You've been banned.");
      }
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
        let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
        top.OldChat[x] = msg.replace(/:hevmap:/gi, `<img width="300px" height="300px" src="http://${url}.racewarkingdoms.com/Hev.bmp">`);
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":skymap:") > -1) {
        let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
        top.OldChat[x] = msg.replace(/:skymap:/gi, `<img width="300px" height="300px" src="http://${url}.racewarkingdoms.com/Sky.bmp">`);
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":surmap:") > -1) {
        let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
        top.OldChat[x] = msg.replace(/:surmap:/gi, `<img width="300px" height="300px" src="http://${url}.racewarkingdoms.com/Sur.bmp">`);
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":dunmap:") > -1) {
        let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
        top.OldChat[x] = msg.replace(/:dunmap:/gi, `<img width="300px" height="300px" src="http://${url}.racewarkingdoms.com/Dun.bmp">`);
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":helmap:") > -1) {
        let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
        top.OldChat[x] = msg.replace(/:helmap:/gi, `<img width="300px" height="300px" src="http://${url}.racewarkingdoms.com/Hel.bmp">`);
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":formap:") > -1) {
        let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
        top.OldChat[x] = msg.replace(/:formap:/gi, `<img width="300px" height="300px" src="http://${url}.racewarkingdoms.com/For.bmp">`);
        upchat("");
      }
      if (msg.toLowerCase().indexOf(":bighadoken:") > -1) {
        let url = top.location.toString().substring(top.location.toString().indexOf('rwk'), top.location.toString().indexOf('rwk') + 4);
        top.OldChat[x] = msg.replace(/:bighadoken:/gi, `<img width="300px" height="300px" src="https://imgur.com/Ds160kg.gif">`);
        upchat("");
      }
    }
  }
}, 100);


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
               <table width="100%" style='text-align:center;'>
                  <tr id='tb_1'>
                     <td>
                     <center>
                     <table style='text-align:center;'>
                        <tr>
                           <td>
                           <div id="waypoint-menu" hidden>
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
                           </select><button onclick="porter(document.getElementById('waypoints').value)">Teleport</button>
                           </div><button onclick="toggle_waypoints();" id="wpb">Show Waypoints</button>
                          </td>
                        </tr>
                     </table>
                     </center>
                     </font>
                     <center>

                     <div id='crafting-helper' hidden>Crafting Helper <br>
                     Crafting: Item Type: <select id="craft-item-type">
                        <option selected>Select Item Type</option>
                        <option value="0">Weapon</option>
                        <option value="1">Helmet</option>
                        <option value="2">Shield</option>
                        <option value="3">Gauntlets</option>
                        <option value="4">Mantle</option>
                        <option value="5">Sleeves</option>
                        <option value="6">Damage Spell</option>
                        <option value="7">Leggings</option>
                        <option value="8">Boots</option>
                        <option value="9">Heal Spell</option>
                        <option value="10">Relic</option>
                        <option value="12">Bow</option>
                        <option value="13">Arrow</option>
                        <option value="14">Light Weapons</option>
                        <option value="15">Heavy Weapons</option>
                        <option value="16">Precise Weapons</option>
                        <option value="17">Rapid Damage Spells</option>
                        <option value="18">Major Damage Spells</option>
                        <option value="19">Accurate Damage Spells</option>
                        <option value="20">Durability Helmets</option>
                        <option value="21">Durability Shields</option>
                        <option value="22">Durability Gauntlets</option>
                        <option value="23">Durability Mantles</option>
                        <option value="24">Durability Sleeves</option>
                        <option value="25">Durability Leggings</option>
                        <option value="26">Durability Boots</option>
                        <option value="27">Essence Elements</option>
                     </select>

                     Item: <select id="craft-item-value">
                     <option selected>Please Select Type</option>
                     </select>

                     <button onclick="craft()">Craft</button>

                     <br>

                     Destroy Items: <select id='crafted-item-burn'> </select>

                     <button onclick="burn_crafted_item()">Destroy</button> <br>
                     Hide: <label>DOTB<input type='checkbox' id="hide-dotb" onclick="update_crafted_items();" checked></label>
                           <label>BP<input type='checkbox' id="hide-bp" onclick="update_crafted_items();" checked></label>
                           <label>LoD<input type='checkbox' id="hide-lod" onclick="update_crafted_items();" checked></label>
                           <label>Apex<input type='checkbox' id="hide-apex" onclick="update_crafted_items();" checked></label>
                           <label>SoC<input type='checkbox' id="hide-soc" onclick="update_crafted_items();"></label>
                           </div> <button onclick='toggle_crafting();' id='chb'>Show Crafting</button> <button onclick="get_equipment()">List Equipment</button>
                     </center>
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
  setTimeout(() => {
    update_crafted_items();
  }, 1500);
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
  maxInv();
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
  domes('Keybindings Loaded ' + p.version + ' Thank you for using the addon, I hope its served you well.');
  top.hotlist.unshift('Rune+Keeper');
  top.hotlist.unshift('NOBODY');
  upbuttons();
  maxInv();
}, 500);


setTimeout(() => {
  document.getElementById("craft-item-type").addEventListener("change", () => {
    switch (document.getElementById("craft-item-type").value) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "7":
      case "8":
      case "12":
      case "13":
      case "20":
      case "21":
      case "22":
      case "23":
      case "24":
      case "25":
      case "26":
        document.getElementById('craft-item-value').innerHTML = `<option value=0>Dirty Rag</option>
           <option value=1>Cloth</option>
           <option value=2>Woven</option>
           <option value=3>Lined Mail</option>
           <option value=4>Bamboo Plate</option>
           <option value=5>Hardened Bark</option>
           <option value=6>Tin Platemail</option>
           <option value=7>Rusty Ringmail</option>
           <option value=8>Darkskin</option>
           <option value=9>Copper Scalemail</option>
           <option value=10>Bloody Iron Plate</option>
           <option value=11>Silvery Jointed Plate</option>
           <option value=12>Shiny Ringmail</option>
           <option value=13>Blackened Scalemail</option>
           <option value=14>Spiked Guard</option>
           <option value=15>Etched Adamantine</option>
           <option value=16>Gold Tipped Lined Mail</option>
           <option value=17>Heavy Cast Iron</option>
           <option value=18>Buffed Crystalline</option>
           <option value=19>Ageless Alchemist Ringmail</option>
           <option value=20>Spider Silk Woven</option>
           <option value=21>Shiny Platemail</option>
           <option value=22>Blackened Mennonite</option>
           <option value=23>Undead Skinned</option>
           <option value=24>Regenerating Troll Skin</option>
           <option value=25>Fire Dragon Scale</option>
           <option value=26>Molten Ringmail</option>
           <option value=27>Ice Dragon Scale</option>
           <option value=28>Magma Pounded Platemail</option>
           <option value=29>Angel Wing</option>
           <option value=30>Avenger Shieldskin</option>
           <option value=31>Aged Crystal</option>
           <option value=32>Fire Enderamoth</option>
           <option value=33>Indefinite Protection</option>
           <option value=34>Cry Ender</option>
           <option value=35>Cyclop's Eye</option>
           <option value=36>Unholy Intervention</option>
           <option value=37>Demon's Horn</option>
           <option value=38>Elemental Deceit</option>
           <option value=39>Ultimate Indifference</option>
           <option value=40>Enamalace Endoskeleton</option>
           <option value=41>Torment Skin</option>
           <option value=42>Refolded Diamond Plate</option>
           <option value=43>Damage Disregarder</option>
           <option value=44>Impenetrable Lamentation</option>
           <option value=45>Fortrousness Steelmail</option>
           <option value=46>Ancient Fortitude</option>
           <option value=47>Dragon Wing</option>
           <option value=48>Density Stone Guard</option>
           <option value=49>Unbreaking Body</option>
           <option value=50>Ice Forged</option>
           <option value=51>Melted Crystal</option>
           <option value=52>Woven Angel Hair</option>
           <option value=53>Tusk Spiked</option>
           <option value=54>Mortared Magma</option>
           <option value=55>Ageless Alkaline</option>
           <option value=56>Thousand Spun Silk</option>
           <option value=57>Smelted Carbonite</option>
           <option value=58>Widow Web</option>
           <option value=59>Acidified Stone</option>
           <option value=60>Lipased Enzyme</option>
           <option value=61>Regretless Mesh</option>
           <option value=62>Life Vigor</option>
           <option value=63>Perpetual Ice</option>
           <option value=64>Virgin Diamond</option>
           <option value=65>Creedless Cyrosilk</option>
           <option value=66>Treant Regrowth</option>
           <option value=67>Petrified Ancientscale</option>
           <option value=68>Behemoth Skin</option>
           <option value=69>Timeless Fortitude</option>
           <option value=70>Perforation Crafted</option>
           <option value=71>Imbued Perfection</option>
           <option value=72>Reivived Organismal</option>
           <option value=73>Clarified Creation</option>
           <option value=74>Enlightened Everbearing</option>
           <option value=75>Divine Transcension</option>
           <option value=76>Staggering Unsurpassment</option>
           <option value=77>Demon's Adulation</option>
           <option value=78>Protectant Prevailation</option>
           <option value=79>Devouring Lifeless Demise</option>
           </select>`;
        break;

      case "0":
      case "14":
      case "15":
      case "16":
        document.getElementById('craft-item-value').innerHTML = `<option value=0>Rusty Dagger</option>
        <option value=1>Old Knife</option>
        <option value=2>Broken Short Sword</option>
        <option value=3>Tarnished Scythe</option>
        <option value=4>Iron Mallet</option>
        <option value=5>Long Spear</option>
        <option value=6>Dull Katana</option>
        <option value=7>Strong Staff</option>
        <option value=8>Polished Tusk</option>
        <option value=9>Bronze Sharpened Dagger</option>
        <option value=10>Iron Claw</option>
        <option value=11>Naginata</option>
        <option value=12>Gold Plated Mallet</option>
        <option value=13>Etched Scythe</option>
        <option value=14>Poison Spear</option>
        <option value=15>Silver Tip Axe</option>
        <option value=16>Two Handed Battle Axe</option>
        <option value=17>Shimmering Long Sword</option>
        <option value=18>Ancient Katana</option>
        <option value=19>Blackened Pole</option>
        <option value=20>Crystal Staff</option>
        <option value=21>Engraved Dragon Bone</option>
        <option value=22>Bane Claw</option>
        <option value=23>Imploded Wand</option>
        <option value=24>Ovaline Double Sword</option>
        <option value=25>Molten Axe</option>
        <option value=26>Adversary Avenger Blade</option>
        <option value=27>Titans Mallet</option>
        <option value=28>Angel Fang Katana</option>
        <option value=29>Diamond Scorn Maret</option>
        <option value=30>Ancient Eye Wand</option>
        <option value=31>Head Heavy Staff</option>
        <option value=32>Scythe of Deliverance</option>
        <option value=33>Angled Razor Sword of Reznor</option>
        <option value=34>Undercurved Flesh Dispatcher</option>
        <option value=35>Cane of Tumultuous Torment</option>
        <option value=36>Axe of the Caged Angel</option>
        <option value=37>Demon Bone Mace</option>
        <option value=38>Katana of Ninth Life</option>
        <option value=39>Sword of Righteous Revenge</option>
        <option value=40>Mysterious Blade</option>
        <option value=41>Sword Of Omens</option>
        <option value=42>Dirk of Dark Magic</option>
        <option value=43>Rustic Light Shard</option>
        <option value=44>Eviscerating Eagle Claw</option>
        <option value=45>Dragon Tail Chain</option>
        <option value=46>Unforgiving Edge</option>
        <option value=47>Blackened Dragon Fang</option>
        <option value=48>Repressed Samurai Sword</option>
        <option value=49>Elimbinator</option>
        <option value=50>Crackling Tendril</option>
        <option value=51>Hammer of Execution</option>
        <option value=52>Bloodblack Recurve</option>
        <option value=53>Blackened Reaver</option>
        <option value=54>Flamberge of Flames</option>
        <option value=55>Bone Bladed Scythe</option>
        <option value=56>Unforgiving Flail</option>
        <option value=57>Brute Chopper</option>
        <option value=58>Enchanted Battle Staff</option>
        <option value=59>Rediron Pike</option>
        <option value=60>Reaping Rapier</option>
        <option value=61>Poison Barbed Whip</option>
        <option value=62>Bloodforge Axe</option>
        <option value=63>Cold Iron Claymore</option>
        <option value=64>Dwarven Double Edge</option>
        <option value=65>Bone Serrator</option>
        <option value=66>Combine Long Sword</option>
        <option value=67>Whip of Severance</option>
        <option value=68>Beheaden Blade</option>
        <option value=69>Rustless Lifeceaser</option>
        <option value=70>Mace of Resurrection</option>
        <option value=71>Double Axe of Durability</option>
        <option value=72>Bloodraker</option>
        <option value=73>Tension Torqer</option>
        <option value=74>Sword of Heavenly Ascension</option>
        <option value=75>Pandemoniums Vociferation</option>
        <option value=76>Awe Bringer</option>
        <option value=77>Avengment of the Fallen</option>
        <option value=78>Angels Eye Piercer</option>
        <option value=79>Claw of Demon Praise</option>`;
        break;

      case "9":
        document.getElementById('craft-item-value').innerHTML = `<option value=0>Minor Sanation</option>
        <option value=1>Regain Breath</option>
        <option value=2>Endow Health</option>
        <option value=3>Summon Breath</option>
        <option value=4>Aether Heal</option>
        <option value=5>Unrupture</option>
        <option value=6>Well of Life</option>
        <option value=7>White Light</option>
        <option value=8>Minor Rejuvenation</option>
        <option value=9>Elemental Breath</option>
        <option value=10>Regainment</option>
        <option value=11>Minor Recovery</option>
        <option value=12>Sanation</option>
        <option value=13>Regain Energy</option>
        <option value=14>Pain Forgettence</option>
        <option value=15>Summon Life</option>
        <option value=16>Aether Resurrection</option>
        <option value=17>White Life</option>
        <option value=18>Elemental Recovery</option>
        <option value=19>Rejuvenation</option>
        <option value=20>Summon Angels</option>
        <option value=21>Major Sanation</option>
        <option value=22>Regain Resistance</option>
        <option value=23>Endow Life</option>
        <option value=24>Undo Harm</option>
        <option value=25>Strength Remembrance</option>
        <option value=26>Unbegotten</option>
        <option value=27>Ceased Suffering</option>
        <option value=28>Major Rejuvenation</option>
        <option value=29>Reap Repair</option>
        <option value=30>Healers Omen</option>
        <option value=31>Omega Sanation</option>
        <option value=32>Asuwere</option>
        <option value=33>Regain Life</option>
        <option value=34>Effervescence</option>
        <option value=35>Replenish</option>
        <option value=36>Total Recall</option>
        <option value=37>Unending Regeneration</option>
        <option value=38>Rebirth</option>
        <option value=39>Breath of Life</option>
        <option value=40>Retainers Revelation</option>
        <option value=41>Life Empowerment</option>
        <option value=42>Angelic Anomaly</option>
        <option value=43>Forgetful Rendation</option>
        <option value=44>Disallowed Torment</option>
        <option value=45>Blinding Whiteness</option>
        <option value=46>Revelation of Health</option>
        <option value=47>Arrogant Regainment</option>
        <option value=48>Unholy Recollection</option>
        <option value=49>Eternal Enhancement</option>
        <option value=50>Wings of Support</option>
        <option value=51>Unbreaking Bones</option>
        <option value=52>Angelic Wind</option>
        <option value=53>Adoption</option>
        <option value=54>Begone Affliction</option>
        <option value=55>Devil of Lights Curse</option>
        <option value=56>Eye Glisten</option>
        <option value=57>Rebel Rehab</option>
        <option value=58>Rekindled Flame</option>
        <option value=59>Endall Suffering</option>
        <option value=60>Blinkback</option>
        <option value=61>Sorrowless</option>
        <option value=62>Pains Demise</option>
        <option value=63>Former State</option>
        <option value=64>Forced Blood Flow</option>
        <option value=65>Staggerless Agane</option>
        <option value=66>Blessing from Below</option>
        <option value=67>Restoration</option>
        <option value=68>Ardent Alignment</option>
        <option value=69>Livagane</option>
        <option value=70>Healthinator</option>
        <option value=71>Goshimhappy</option>
        <option value=72>Healmesoftly</option>
        <option value=73>Pheelgud</option>
        <option value=74>Lifeomatic</option>
        <option value=75>Gadam!</option>
        <option value=76>Sumholishit</option>
        <option value=77>Omagawad</option>
        <option value=78>Heavenly Recirculation</option>
        <option value=79>Everlasting Aura</option>`;
        break;

      case "10":
        document.getElementById('craft-item-value').innerHTML = `<option value="0">Strong Arm</option>
        <option value="1">Archers Eye</option>
        <option value="2">Cats Feet</option>
        <option value="3">Merlins Insight</option>
        <option value="4">Mental Focus</option>
        <option value="5">Impediment</option>
        <option value="6">Priests Touch</option>
        <option value="7">The Calling of Titus</option>
        <option value="8">Debilitator</option>
        <option value="9">Maladroit</option>
        <option value="10">Dawdle</option>
        <option value="11">Stupidify</option>
        <option value="12">Distraction</option>
        <option value="13">Mind Pierce</option>
        <option value="14">Touch of the Damned</option>
        <option value="15">The Calling of Cassius</option>
        <option value="16">Siphon Strength</option>
        <option value="17">Stolen Hands</option>
        <option value="18">Filched Feet</option>
        <option value="19">Pilfered Intellect</option>
        <option value="20">Lifted Thoughts</option>
        <option value="21">Purloinment</option>
        <option value="22">Blood Pinch</option>
        <option value="23">The Calling of Lestat</option>
        <option value="24">Confusion</option>
        <option value="25">Life Roulette</option>
        <option value="26">Annulment</option>
        <option value="27">Damage Shield</option>
        <option value="28">Damage Capacitor</option>
        <option value="29">The Calling of Cara</option>
        <option value="30">Dexterous Hoist</option>
        <option value="31">Stream of Conscious</option>
        <option value="32">Blood Bath</option>
        <option value="33">Vampiric Leech</option>
        <option value="34">Death Spike</option>
        <option value="35">Denial of the Believer</option>
        <option value="56">Encephalon Decay</option>
        <option value="57">Vogars Vice</option>
        <option value="40">Unerring Edge</option>
        <option value="41">Faithful Severity</option>
        <option value="42">Clarity</option>
        <option value="43">Mental Virtue</option>
        <option value="44">Devestation</option>
        <option value="45">Rectification</option>
        <option value="46">Allegiance</option>
        <option value="47">Impetuosity</option>
        <option value="48">Preservation</option>
        <option value="49">Monasticism</option>
        <option value="50">Theurgal Equalizer</option>
        <option value="60">Voidance</option>
        <option value="54">Apex</option>
        <option value="53">Leather of Delegation</option>`;
        break;

      case "6":
      case "17":
      case "18":
      case "19":
        document.getElementById('craft-item-value').innerHTML = `<option value=0>Acid Drop</option>
        <option value="1">Flame Blast</option>
        <option value="2">Striking Shadows</option>
        <option value="3">Soulwrack</option>
        <option value="4">Elemental Invocation</option>
        <option value="5">Unholy Provocation</option>
        <option value="6">Frost Whip</option>
        <option value="7">Flesh Rot</option>
        <option value="8">Dark Lash</option>
        <option value="9">Fire Burst</option>
        <option value="10">Bleeding Pores</option>
        <option value="11">Vile Curse</option>
        <option value="12">Crystal Shards</option>
        <option value="13">Chilling Scythe</option>
        <option value="14">Meteor Swarm</option>
        <option value="15">Lightening Arc</option>
        <option value="16">Flaming Spears</option>
        <option value="17">Aether Inferno</option>
        <option value="18">Agonizing Torment</option>
        <option value="19">Bolt of Death</option>
        <option value="20">Reaving Relent</option>
        <option value="21">Brain Decay</option>
        <option value="22">Mystic Mirage</option>
        <option value="23">Howl From Below</option>
        <option value="24">Incineration</option>
        <option value="25">Regenerating Talons</option>
        <option value="26">Chaos Hammer</option>
        <option value="27">Banshee Wail</option>
        <option value="28">Lightnings Lament</option>
        <option value="29">Bath of Razors</option>
        <option value="30">Feast of the Demons</option>
        <option value="31">Earthen Maw</option>
        <option value="32">Arcane Vengeance</option>
        <option value="33">Arctic Chill</option>
        <option value="34">Hell Fury</option>
        <option value="35">Spirit Annihilation</option>
        <option value="36">Frost Gate</option>
        <option value="37">Mind Shatter</option>
        <option value="38">Shriek of the Damned</option>
        <option value="39">Oblivion Orb</option>
        <option value="40">Obsidian Undershimmer</option>
        <option value="41">Unrelentious Retribution</option>
        <option value="42">Lost Souls Suffering</option>
        <option value="43">Relentless Clouds</option>
        <option value="44">Scream of the Unending</option>
        <option value="45">Retribution of the Wronged</option>
        <option value="46">Brain Boilation</option>
        <option value="47">Holocaustic Nuke</option>
        <option value="48">Shattering Blood Rebellion</option>
        <option value="49">Unholy Derangement</option>
        <option value="50">Nuke of Nosferatu</option>
        <option value="51">Belials Calling</option>
        <option value="52">Nerve Collapse</option>
        <option value="53">Inner Incineration</option>
        <option value="54">Eyesplode</option>
        <option value="55">Spirit Invocation</option>
        <option value="56">Hades Glimpse</option>
        <option value="57">Comfortless Pillow</option>
        <option value="58">Angelic Anguish</option>
        <option value="59">Demon Summonation</option>
        <option value="60">Silent Serenity</option>
        <option value="61">Lucifers Lament</option>
        <option value="62">Naysay</option>
        <option value="63">Manifest Corpse</option>
        <option value="64">Heretic Howl</option>
        <option value="65">Death Shroud</option>
        <option value="66">Morbid Provocation</option>
        <option value="67">Blood Curdle</option>
        <option value="68">Shriek of Satan</option>
        <option value="69">Lifeless Growls</option>
        <option value="70">Sinners Rebirth</option>
        <option value="71">Body Singe Durability</option>
        <option value="72">Spirit Bind</option>
        <option value="73">Eternal Yearning</option>
        <option value="74">Vivacity Arbitration</option>
        <option value="75">Boiling Contempt</option>
        <option value="76">Demons Despisal</option>
        <option value="77">Disparagement of the Forgotten</option>
        <option value="78">Hellacious Rebirth</option>
        <option value="79">Horrendous Defilation</option>`;
        break;

      case "27":
        document.getElementById('craft-item-value').innerHTML = `<option value="18">Essence Element of Treasure</option>
        <option value="19">Essence Element of Great Treasure</option>
        <option value="30">Essence Element of Superior Treasure</option>`;
        break;

    }
  });
  update_crafted_items();
}, 1000);

var fields = {
  general: {
    main: document.getElementById("general"),
    action: document.getElementsByName("action")[0],
    target: document.getElementsByName("target")[0],
    other: document.getElementsByName("other")[0],
    othera: document.getElementsByName("othera")[0],
    submit: () => {
      document.getElementById("s_subbut").childNodes[0].click();
      return true;
    },
    upaction: () => {
      updateaction(fields.general.action.value, fields.general.main);
      return true;
    },
    uptarget: () => {
      updatetarget(fields.general.action.value, fields.general.target.value, fields.general.main);
      return true;
    }
  },
  misc: {
    security: document.getElementById("s_Response"),
    message: document.getElementById("s_FightWin")
  }
};

function craft() {
  fields.general.action.value = "ts";
  fields.general.upaction();
  fields.general.target.value = document.getElementById("craft-item-type").value;
  fields.general.uptarget();
  fields.general.other.value = document.getElementById("craft-item-value").value;
  fields.general.submit();
  setTimeout(() => {
    update_crafted_items();
  }, 250);
}

function update_crafted_items(itemval) {
  let relics = [
    36, 37, 38, 39, 51, 52, 56, 58, 59, 64, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    81, 82, 83, 84, 85, 86, 87, 88
  ];
  if (document.getElementById('hide-dotb').checked == true) {
    relics.push(35);
  }
  if (document.getElementById('hide-bp').checked == true) {
    relics.push(22);
  }
  if (document.getElementById('hide-apex').checked == true) {
    relics.push(54);
  }
  if (document.getElementById('hide-lod').checked == true) {
    relics.push(53);
  }
  if (document.getElementById('hide-soc').checked == true) {
    relics.push(31);
  }
  let temp = ``;
  let inventory = top.Inventory.split("-").filter(e => String(e).trim());
  for (let value of inventory) {
    if (getitem(value).indexOf("*") < 0 && parseInt(value % 1000, 10) < 79) {
      let relic = Math.floor(parseInt(value - 10000, 10));
      if (!relics.includes(relic)) {
        if (parseInt(value / 1000, 10) % 100 !== 11 && parseInt(value / 1000, 10) % 100 !== 27) {
          temp += `<option value=${value}>${getitem(value)}</option>`;
        }
      }
    }
  }
  document.getElementById('crafted-item-burn').innerHTML = temp;
  if (arguments[0] != undefined) {
    setTimeout(() => {
      let options = document.getElementById('crafted-item-burn').options;
      for (let option of options) {
        if (option.value == arguments[0]) {
          document.getElementById('crafted-item-burn').value = arguments[0];
          break;
        }
      }
    }, 250);
  }
}

function burn_crafted_item() {
  let item = document.getElementById('crafted-item-burn').value;
  if (item != undefined) {
    burnit(item);
  }
  setTimeout(() => {
    update_crafted_items(item);
  }, 250);
}

function toggle_crafting() {
  if (document.getElementById("crafting-helper").hidden == false) {
    document.getElementById("crafting-helper").hidden = true;
    document.getElementById("chb").innerHTML = "Show Crafting";
  } else {
    document.getElementById("crafting-helper").hidden = false;
    document.getElementById("chb").innerHTML = "Hide Crafting";
  }
}

function toggle_waypoints() {
  if (document.getElementById("waypoint-menu").hidden == false) {
    document.getElementById("waypoint-menu").hidden = true;
    document.getElementById("wpb").innerHTML = "Show Waypoints";
  } else {
    document.getElementById("waypoint-menu").hidden = false;
    document.getElementById("wpb").innerHTML = "Hide Waypoints";
  }
}

function get_equipment() {
  let temp = [];
  let current_inventory = {
    "Relic 6": getitem(top.Relic6),
    "Relic 5": getitem(top.Relic5),
    "Relic 4": getitem(top.Relic4),
    "Relic 3": getitem(top.Relic3),
    "Relic 2": getitem(top.Relic2),
    "Relic 1": getitem(top.Relic1),
    "Right Spell": getitem(top.Heal),
    "Feet": getitem(top.Boots),
    "Legs": getitem(top.Leggings),
    "Left Spell": getitem(top.Cast),
    "Arms": getitem(top.Sleeves),
    "Chest": getitem(top.Mantle),
    "Hands": getitem(top.Gauntlets),
    "Right Hand": getitem(top.Shield),
    "Head": getitem(top.Helmet),
    "Left Hand": getitem(top.Weapon)
  }

  Object.entries(current_inventory).forEach((data) => {
    domes(`${data[0]}: ${data[1]}`);
  });
  domes("Currently Equipped Items");
}
