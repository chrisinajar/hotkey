'use strict'

var p = {
  kb_enabled: 0,
  is_hidden: false,
  stat_display: false,
  Timestamps: false,
  version: "Version: 9.7",
  Hiding_Locs: false,
  Rune_Bank: undefined,
  Safety: false,
  remove_locations: undefined,
  junk: [],
  Timestamping: "",
  equipped_items: [],
  pwps: [
    0, 0, 0, 0
  ],
  current_inventory: [],
  current_inventory_length: 0,
  max_inventory: 50,
  binds: [16, 17, 37, 38, 39, 40, 46, 65, 66, 67, 68, 69, 70, 73, 74, 75, 76, 78,
    80, 81, 82, 83, 84, 85, 86, 88, 96, 119, 186, 191, 192, 219, 221, 220, 222]
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
      tp.to(40, 140);
    },
    puddle: () => {
      tp.to(140, 190);
    },
    brawl: () => {
      tp.to(141, 174);
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

var main = (() => {
  let elm = document.createElement('script');
  elm.src = "https://apis.google.com/js/client.js";
  document.body.appendChild(elm);
  setTimeout(() => {
    gapi.client.setApiKey('AIzaSyBE7RZAJvysvQoRlhI9MMurOyZvljqYqgg');
    gapi.client.load('urlshortener', 'v1', function() {});
  }, 500);
  return true;
})();

window.alert = function(text) {
  log('tried to alert: ' + text, 5);
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

function setBank() {
  if (p.Rune_Bank == undefined) {
    let Rune_Bank_Prompt = prompt("What is the location of target rune bank  ex: 150,sur,150");
    if (Rune_Bank_Prompt != null) {
      p.Rune_Bank = Rune_Bank_Prompt;
      document.getElementById('rb_location').innerHTML = "Rune Bank: " + p.Rune_Bank;
      log(`Rune bank updated to ${p.Rune_Bank}`, 0);
    } else {
      log(`Invalid Rune Bank location provided please try again.`, 1);
    }
  } else {
    if (confirm("Rune bank is already set, Do you want to update?")) {
      let Rune_Bank_Prompt = prompt("What is the location of target rune bank  ex: 150,sur,150");
      if (Rune_Bank_Prompt != null) {
        p.Rune_Bank = Rune_Bank_Prompt;
        document.getElementById('rb_location').innerHTML = "Rune Bank: " + p.Rune_Bank;
        log(`Rune bank updated to ${p.Rune_Bank}`, 0);
      } else {
        log(`Invalid Rune Bank location provided please try again.`, 1);
      }
    } else {
      log("Rune bank not updated.", 0);
    }
  }
}

function load_new() {
  delete document.head.lastChild;
  document.getElementById('addon').parentNode.parentNode.removeChild(document.getElementById('addon').parentNode);
  keybinder = removeEventListener("keydown", (event) => {}, false);
  chatmodder = clearInterval(chatmodder);
  window.alert = null;
  top.hotlist = [
    "NOBODY",
    "Rune+Keeper",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R",
    "R"
  ];
  setTimeout(() => {
    document.head.appendChild(document.createElement('script'));
    document.head.lastChild.src = 'https://s3.amazonaws.com/rwk-assets/hotkey-only.js';
  }, 500);
}

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
                     <font size=2>
                     ${p.version} | 10sec Safety <span id='safe-status'>Off</span> <br>
                     </font>
                     Shift Toggle (Form Submit) <br>
                     <label>General: <input type="radio" name="rd" value="general" checked> </label> <label>Kingdom: <input type="radio" name="rd" value="king"></label> <label>Disable: <input type="radio" name="rd" value="disabled"></label>
                     </td>
                     <td>
                     <font size="4"><span id="hotkey_status">HOTKEYS DISABLED</span></font> <br>
                     <font size="2">
                     <span id='button-enlargement'>
                     Attack Button Enlargement <br>
                     <label>Auto: <input type="radio" name="big-button" value='auto'></label> <label>None: <input type="radio" name="big-button" value="none" checked></label> <br><label>Attack: <input type="radio" name="big-button" value='attack'></label> <label>Cast: <input type="radio" name="big-button" value="cast"></label> <label>Defend: <input type="radio" name="big-button" value="defend"></label>
                     </span> <br>
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
                     <td>
                     <font size="2">
                     <span id='rb_location'>Rune Bank: Press R to set</span><br>
                     </font>
                     Quick Action Toggle <br>
                     <label>Control: <input type="radio" name="ra" value=17 checked></label> <label>Num Pad 0: <input type="radio" name="ra" value=96></label> <label>Disable: <input type="radio" name="ra" value="disabled"></label>
                     </td>
                  </tr>
                  </table>
                  <center>
                  <span id='burn-menu' hidden=true>Relic to Save: <label>Bp/Lestat: <input type="radio" id="burn_check" name="burn_check" value='no' checked title='Save Blood Pinch and Lestat'></label> <label>Nothing: <input type="radio" id="burn_check" name="burn_check" value='yes' title='Burn Everything Not Valuable'></label><label>1bils: <input type="radio" id="burn_check" name="burn_check" value='1b' title='Cara/Lestat/Titus/Cassius/DS/VL/DH/SOC will not be burnt.'></label> <span title='BP/Lestat Means Blood Pinch and Lestat will not be burnt, Nothing means bp/lestat will be burnt, 1bils = Cara/Lestat/Titus/Cassius/DS/VL/DH/SOC will not be burnt.'><a id="test">?</a></span><br>
                  <center><span id="inventory-counter"> </span></center>
                  <span>
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
   <center><span id="Poker_Cards"> </span></center>
</td>`;

  document.getElementsByTagName('table')[0].childNodes[0].childNodes[2].innerHTML = xlr;
  chat.target.focus();
})();

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function kb_toggle() {
  if (p.kb_enabled === 1) {
    p.kb_enabled = 0;
    //addon.hidden = true;
    document.getElementById('hotkey_status').innerHTML = "HOTKEYS DISABLED";
    //log("Hotkeys Disabled!");
  }
  return;
}

function check_Cards() {
  let card_html = "";
  if (top.RJ)
    card_html += "<img onmousedown=gattack(\"rjack\") border=0" + top.hio + "height=28 width=21 src='" + top.y + "card24.gif'> ";
  if (top.BJ)
    card_html += "<img onmousedown=gattack(\"bjack\") border=0" + top.hio + "height=28 width=21 src='" + top.y + "card50.gif'> ";
  if (top.RQ)
    card_html += "<img onmousedown=gattack(\"rqueen\") border=0" + top.hio + "height=28 width=21 src='" + top.y + "card25.gif'> ";
  if (top.BQ)
    card_html += "<img onmousedown=gattack(\"bqueen\") border=0" + top.hio + "height=28 width=21 src='" + top.y + "card51.gif'> ";
  if (top.RK)
    card_html += "<img onmousedown=gattack(\"rking\") border=0" + top.hio + "height=28 width=21 src='" + top.y + "card26.gif'> ";
  if (top.BK)
    card_html += "<img onmousedown=gattack(\"bking\") border=0" + top.hio + "height=28 width=21 src='" + top.y + "card52.gif'> ";
  if (top.RA)
    card_html += "<img onmousedown=gattack(\"race\") border=0" + top.hio + "height=28 width=21 src='" + top.y + "card14.gif'> ";
  if (top.BA)
    card_html += "<img onmousedown=gattack(\"bace\") border=0" + top.hio + "height=28 width=21 src='" + top.y + "card40.gif'> ";

  document.getElementById('Poker_Cards').innerHTML = card_html;
}

var thinger = document.chat.target.addEventListener("focus", function() {
  kb_toggle();
})

function getPercents() {
  let total = (parseInt(top.Str) + parseInt(top.Dex) + parseInt(top.Agi) + parseInt(top.Dur) + parseInt(top.Ntl) + parseInt(top.Cnc) + parseInt(top.Cnt));
  let percents = {};
  percents['Str'] = 100 * parseInt(top.Str) / total;
  percents['Dex'] = 100 * parseInt(top.Dex) / total;
  percents['Agi'] = 100 * parseInt(top.Agi) / total;
  percents['Dur'] = 100 * parseInt(top.Dur) / total;
  percents['Ntl'] = 100 * parseInt(top.Ntl) / total;
  percents['Cnc'] = 100 * parseInt(top.Cnc) / total;
  percents['Cnt'] = 100 * parseInt(top.Cnt) / total;
  return percents;
}

function resetStats() {
  top.frames.main.document.getElementById("s_Str").innerText = mc(top.Str);
  top.frames.main.document.getElementById("s_Dex").innerText = mc(top.Dex);
  top.frames.main.document.getElementById("s_Agi").innerText = mc(top.Agi);
  top.frames.main.document.getElementById("s_Dur").innerText = mc(top.Dur);
  top.frames.main.document.getElementById("s_Ntl").innerText = mc(top.Ntl);
  top.frames.main.document.getElementById("s_Cnc").innerText = mc(top.Cnc);
  top.frames.main.document.getElementById("s_Cnt").innerText = mc(top.Cnt);
}

function setPercents() {
  let percents = getPercents();
  let str = mc(top.Str) + ": " + percents['Str'].toString().substring(0, 4) + "%";
  let dex = mc(top.Dex) + ": " + percents['Dex'].toString().substring(0, 4) + "%";
  let agi = mc(top.Agi) + ": " + percents['Agi'].toString().substring(0, 4) + "%";
  let dur = mc(top.Dur) + ": " + percents['Dur'].toString().substring(0, 4) + "%";
  let ntl = mc(top.Ntl) + ": " + percents['Ntl'].toString().substring(0, 4) + "%";
  let cnc = mc(top.Cnc) + ": " + percents['Cnc'].toString().substring(0, 4) + "%";
  let cnt = mc(top.Cnt) + ": " + percents['Cnt'].toString().substring(0, 4) + "%";

  top.frames.main.document.getElementById("s_Str").innerText = str;
  top.frames.main.document.getElementById("s_Dex").innerText = dex;
  top.frames.main.document.getElementById("s_Agi").innerText = agi;
  top.frames.main.document.getElementById("s_Dur").innerText = dur;
  top.frames.main.document.getElementById("s_Ntl").innerText = ntl;
  top.frames.main.document.getElementById("s_Cnc").innerText = cnc;
  top.frames.main.document.getElementById("s_Cnt").innerText = cnt;
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

function makeShort() {
  let longUrl = prompt("Long URL Value");
  let request = gapi.client.urlshortener.url.insert({
    'resource': {
      'longUrl': longUrl
    }
  });
  request.execute(function(response) {

    if (response.id != null) {
      if ((document.getElementsByName('target')[2].value.length + response.id.length) < 140) {
        document.getElementsByName('target')[2].value = document.getElementsByName('target')[2].value + " " + response.id + " ";
        document.getElementsByName('target')[2].click();
        document.getElementsByName('target')[2].focus();
        //genfull('chat', response.id, 0);
      } else {
        log(`Chat message too long, Shortened url is: ${response.id}`);
        document.getElementsByName('target')[2].focus();
      }
    } else {
      log("error: creating short url n" + response.error, 5);
    }
  });
}

function Toggle_Timestamps() {
  if (p.Timestamps) {
    p.Timestamps = false;
    p.Timestamping = clearInterval(p.Timestamping);
  } else {
    p.Timestamping = setInterval(() => {
      Stamp_Chat();
    }, 500);
    p.Timestamps = true;
  }
}

function Stamp_Chat() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let chatupdate = false;
  let x;
  for (x = 0; x < 5; x++) {
    if (top.OldChat[x].indexOf('TIMESTAMP') < 0) {
      top.OldChat[x] = `<span id='TIMESTAMP'><font color='bronze' size='2'>(` + hours + `:` + minutes.substr(-2) + `:` + seconds.substr(-2) + `)</font></span>` + top.OldChat[x];
      chatupdate = true;
    }
  }
  if (chatupdate) {
    upchat("");
  }
}

function burn() {
  let save_list = [];
  let bl = document.querySelector('input[name="burn_check"]:checked').value
  if (document.getElementById('burn-menu').hidden == true) {
    document.getElementById('burn-menu').hidden = false;
  } else if (document.getElementById('burn-menu').hidden == false) {
    if (bl == 'no') {
      save_list = [
        22,
        23,
        35,
        36,
        37,
        38,
        39,
        46,
        47,
        51,
        52,
        53,
        54,
        55,
        58,
        59,
        60,
        64,
        66,
        67,
        68,
        69,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88
      ];
    } else if (bl == '1b') {
      save_list = [
        7,
        15,
        23,
        29,
        30,
        31,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        46,
        47,
        51,
        52,
        53,
        54,
        55,
        58,
        59,
        60,
        64,
        66,
        67,
        68,
        69,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88
      ];
    } else {
      save_list = [
        34,
        35,
        36,
        37,
        38,
        39,
        46,
        47,
        51,
        52,
        53,
        54,
        55,
        58,
        59,
        60,
        64,
        66,
        67,
        68,
        69,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88
      ];
    }

    if (p.junk.length == 0) {
      p.equipped_items = [
        top.Weapon,
        top.Shield,
        top.Cast,
        top.Heal,
        top.Helmet,
        top.Mantle,
        top.Sleeves,
        top.Leggings,
        top.Boots,
        top.Gauntlets
      ];
      let i;
      for (i in top.inventory) {
        if (getitem(top.inventory[i]).indexOf("*") > -1 && getitem(top.inventory[i]).indexOf("Imbued Perfection") == -1 && getitem(top.inventory[i]).indexOf("Body Singe") == -1 && getitem(top.inventory[i]).indexOf("Protectant Prevailation") == -1) {
          if (save_list.indexOf(parseInt(top.inventory[i] / 100000, 10) % 100 - 1) < 0) {
            if (p.equipped_items.indexOf(top.inventory[i]) < 0) {
              p.junk.push(top.inventory[i]);
            }
          }
        }
      }
      if (p.junk.length > 0) {
        log(`There are ${p.junk.length} items to be burnt.`, 1);
      }
      if (p.junk.length === 0) {
        log('No items found to burn', 1);
      }
    } else if (p.junk.length >= 1) {
      burnit(p.junk[0]);
      p.junk = p.junk.splice(1, p.junk.length);
      log(`${p.junk.length} items left to burn.`, 1);
    }
  }
  Check_Inventory();
}

function Check_Inventory() {
  let Max_Inventory;
  let Current_Inventory = top.Inventory.split("-").filter(e => String(e).trim());
  if (Current_Inventory.includes('11042') || Current_Inventory.includes('11050')) {
    Max_Inventory = 75;
  } else if (Current_Inventory.includes('11082') || Current_Inventory.includes('11087')) {
    Max_Inventory = 90;
  } else {
    Max_Inventory = 50;
  }
  let Inventory_Count = (top.Inventory.split("-").filter(e => String(e).trim())).length;
  document.getElementById('inventory-counter').innerText = `Inventory Count: ${Inventory_Count} / ${Max_Inventory}`;
}

function upbuttons() {
  let tempstr = "";
  let yes = 0;
  let pclass = "";

  switch (document.querySelector('input[name="big-button"]:checked').value) {

    case "auto":

      let str = parseInt(top.Str);
      let dex = parseInt(top.Dex);
      let cnc = parseInt(top.Cnc);
      let cnt = parseInt(top.Cnt);
      let agi = parseInt(top.Agi);
      let dur = parseInt(top.Dur);
      let ntl = parseInt(top.Ntl);

      if ((dur > dex + str) && (dur > cnt + agi) && (dur > dex + cnc) && (dur > cnc + ntl) && top.Heal != -1) {
        pclass = "vampire";
      }
      if ((dex + str > dur) && (dex + str > cnc + dex) && (dex + str > cnc + ntl) && (dex + str > dur + cnc) && (dex + str > agi + cnt)) {
        pclass = "fighter";
      }
      if (top.Weapon == -1 && top.Shield == -1) {
        pclass = "monk";
      }
      if ((dex + cnc > dur) && (dex + cnc > cnc + ntl) && (dex + cnc > dex + str) && (dex + cnc > ntl + cnc) && (dex + cnc > dur + cnc)) {
        pclass = "archer";
      }
      if ((ntl + cnc > dur) && (ntl + cnc > dex + cnc) && (ntl + cnc > dex + str) && (ntl + cnc > cnt + agi) && (ntl + cnc > dur + cnc)) {
        pclass = "caster";
      }
      if (top.Heal == -1 && ((dur > str) && (dur > agi) && (dur > ntl))) {
        pclass = "theurgist";
      }
      if (parseInt(top.Weapon, 10) % 12000 >= 0 && parseInt(top.Weapon, 10) % 12000 <= 82 || parseInt(top.Shield, 10) % 12000 >= 0 && parseInt(top.Shield, 10) % 12000 <= 82) {
        pclass = "archer";
      }
      break;

    case "attack":
      pclass = 'archer';
      break;

    case "cast":
      pclass = 'caster';
      break;

    case "defend":
      pclass = 'vampire';
      break;

    case 'none':
    default:
      pclass = '';
  }

  if (top.Exp >= 100) {
    tempstr += "<img onmousedown=level(0) " + top.hio;
    if (top.HotLevel == 1) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButStr.jpg'> ";
    tempstr += "<img onmousedown=level(1) " + top.hio;
    if (top.HotLevel == 2) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButDex.jpg'> ";
    tempstr += "<img onmousedown=level(2) " + top.hio;
    if (top.HotLevel == 3) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButAgi.jpg'> ";
    tempstr += "<img onmousedown=level(3) " + top.hio;
    if (top.HotLevel == 4) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButDur.jpg'> ";
    tempstr += "<img onmousedown=level(4) " + top.hio;
    if (top.HotLevel == 5) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButNtl.jpg'> ";
    tempstr += "<img onmousedown=level(5) " + top.hio;
    if (top.HotLevel == 6) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButCnc.jpg'> ";
    tempstr += "<img onmousedown=level(6) " + top.hio;
    if (top.HotLevel == 7) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButCnt.jpg'> ";
    tempstr += "<img onmousedown=level(7) " + top.hio;
    if (top.HotLevel == 8) tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='" + top.y + "ButAll.jpg'>";
    yes = 1;
  }
  if (top.Health <= 0) {
    if (yes) tempstr += "<br>";
    yes = 1;
    tempstr += "<img onmousedown=revive() " + top.hio + "border=0 src='" + top.y + "ButRevive.jpg'>";
  }

  if (top.Target != -1) {
    if (yes) tempstr += "<br>";
    tempstr += "<img onmousedown=gattack(\"attack\") ";
    if (pclass == "fighter" || pclass == "monk" || pclass == "archer") {
      tempstr += " width=60 height=40 ";
    }
    tempstr += "border=0" + top.hio + "src='" + top.y + "ButAttack.jpg' title='Attack With Both Weapons'> <img onmousedown=gattack(\"cast\") ";
    if (pclass == "caster" || pclass == "theurgist") {
      tempstr += " width=60 height=40 ";
    }
    tempstr += "border=0" + top.hio + "src='" + top.y + "ButCast.jpg' title='Cast With Both Spells'> <img onmousedown=gattack(\"lattack\") border=0" + top.hio + "src='" + top.y + "ButHybrid1.jpg' title='Left Weapon and Spell'> <img onmousedown=gattack(\"rattack\") border=0" + top.hio + "src='" + top.y + "ButHybrid2.jpg' title='Right Weapon and Spell'> <img onmousedown=gattack(\"defend\") ";
    if (pclass == "vampire") {
      tempstr += " width=60 height=40 ";
    }
    tempstr += "border=0" + top.hio + "src='" + top.y + "ButDefend.jpg' title='Defend'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    tempstr += " <img border=0 src='" + top.y + "ButVs.jpg'> <a href=javascript:pm('" + mp(top.Target) + "')>" + getcreature(top.Target) + "</a>";
  }

  top.frames.main.s_FightWin.innerHTML = tempstr;
  essences();
  curInv();
  check_Cards();
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

setTimeout(function() {
  genfull('chat', '/dis', 0);
  curInv();
  log('Keybindings Loaded ' + p.version + ' <a target="_blank" href="http://rwkhelp.com/changelog.html">Changelog</a> New Help Page: <a target="_blank" href="http://rwkhelp.com/hotkeys.html">Help</a>', 3);
  log(`9.7 is a bug fix for keybinds causing page movement.`, 2);
  log(`<font color='orange'>PM from <a href="javascript:pm('Anubis');">Anubis</a>: Hey ${top.login}! Thanks for using my addon. To report any issues please send me a pm and I will address it asap. </font>`, 2);
  top.hotlist.unshift('Rune+Keeper');
  top.hotlist.unshift('NOBODY');
  check_Cards();
  essences();
  maxInv();
}, 200);

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

var keybinder = document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    if (p.kb_enabled === 1) {
      p.kb_enabled = 0;
      document.getElementById('hotkey_status').innerHTML = "HOTKEYS DISABLED";
      chat.target.focus();
    } else {
      p.kb_enabled = 1;
      chat.target.blur();
      document.getElementById('hotkey_status').innerHTML = "HOTKEYS ENABLED";
    }
  }
  if (event.keyCode == 13) {
    let chat = document.getElementsByName('target')[2];
    if (chat.value.trim().toLowerCase().substring(0, 3) == "/kd") {
      event.preventDefault();
      chat.value = "";
      fn.Trivial();
    }
    if (chat.value.trim().toLowerCase().substring(0, 3) == "/cc") {
      event.preventDefault();
      clear_chat();
    }
  }
  if (document.getElementById('s_Response').innerHTML.indexOf('How many do you see?') < 0) {
    if (p.kb_enabled) { //keybindings Enabled
      if (!p.Safety) { //safety off
        fn.Process(event);
      } else if (p.Safety) { //safety on
        let delay = parseInt(top.ActionDelay, 10);
        if (delay <= 135) { //Safe to perform action
          fn.Process(event)
        } else { //10 second protection
          //console.log("SAFETY");
        }

      } else { //This should never get touched
        //console.log("ERROR");
      }

    } else { //Disabled
      //console.log("DISABLED");
    }
  } else { //SECURITY CHECK
    //console.log("SECURITY CHECK");
  }
});

var fn = {
  //Setting Selectors
  Action: document.getElementsByName('action')[0], //General Action menu
  General: document.getElementById('general'), //General Form
  Action_Target: document.getElementsByName('target')[0], //action target
  Quick: document.getElementById('s_quickie'), //quick action
  Other: document.getElementsByName("other")[0],
  //Movement
  North: () => {
    Move(0);
  }, //38
  East: () => {
    Move(2);
  }, //39
  West: () => {
    Move(3);
  }, //37
  South: () => {
    Move(1);
  }, //40
  Up: () => {
    Move(4);
  }, //219
  Down: () => {
    Move(5);
  }, //221
  Beast: () => { //Beast bane 66
    tp.wp.set4();
    genfull("chat", "/bb", 0);
  },
  NBeast: () => { //Beast noob bane 78
    tp.wp.set4();
    genfull("chat", "/bnb", 0);
  },
  //Menus
  Equip: () => { //opens equipment menu 69
    fn.Action.value = "equip"
    updateaction(fn.Action.value, fn.General);
  },
  Fight: () => { //opens equipment menu 70
    fn.Action.value = "fight"
    updateaction(fn.Action.value, fn.General);
  },
  Battle: () => { //opens battle menu 86
    fn.Action.value = "battle"
    updateaction(fn.Action.value, fn.General);
  },
  Destroy: () => { //opens destroy menu 88
    fn.Action.value = "burn"
    updateaction(fn.Action.value, fn.General);
    fn.Action_Target.focus();
  },
  Teleport: () => { //opens teleport menu 76
    fn.Action.value = "tele"
    updateaction(fn.Action.value, fn.General);
    fn.Action_Target.focus();
  },
  Trivial: () => { //toggles trivial filter
    if (top.AllowTrivial == 0) {
      fn.Action.value = "options"
      updateaction(fn.Action.value, fn.General);
      fn.Action_Target.value = 14;
      updatetarget(fn.Action.value, fn.Action_Target.value, fn.General);
      fn.Other.value = 1;
      fn.ASub();
    } else {
      fn.Action.value = "options"
      updateaction(fn.Action.value, fn.General);
      fn.Action_Target.value = 14;
      updatetarget(fn.Action.value, fn.Action_Target.value, fn.General);
      fn.Other.value = 0;
      fn.ASub();
    }
  },
  //Toggles
  Tog_Safety: () => {
    if (p.Safety) {
      p.Safety = false;
      document.getElementById('safe-status').innerHTML = 'Off';
      log('10 Second Safety Off');
    } else {
      p.Safety = true;
      document.getElementById('safe-status').innerHTML = 'On';
      log('10 Second Safety On');
    }
  },
  Tog_Time: () => {
    if (p.Timestamps) {
      p.Timestamps = false;
      p.Timestamping = clearInterval(p.Timestamping);
    } else {
      p.Timestamping = setInterval(() => {
        Stamp_Chat();
      }, 1000);
      p.Timestamps = true;
    }
  },
  //Actions
  Train: () => { //Trains a stat 84
    if (parseInt(top.Exp, 10) > 99) {
      if (top.HotLevel !== 0) {
        level(parseInt(top.HotLevel, 10) - 1);
      } else {
        log(`Please select an 'Enlarged Button' from your options.`, 1);
        fn.Action.value = "options"
        updateaction(fn.Action.value, fn.General);
        fn.Action_Target.value = 4;
        updatetarget(fn.Action.value, fn.Action_Target.value, fn.General);
      }
    }
  },
  Attack: () => { //Attacks with both weapons 65
    if (top.Target !== "" && top.Target !== -1) {
      gattack("attack");
    }
  },
  Cast: () => { //Cast with both spells 67
    if (top.Target !== "" && top.Target !== -1) {
      gattack("cast");
    }
  },
  Defend: () => { //Defends 68
    if (top.Target !== "" && top.Target !== -1) {
      gattack("defend");
    }
  },
  Revive: () => { //Revives 82
    if (top.Health == 0) {
      revive();
    } else {
      log(`Player isnt dead`);
    }
  },
  Poker: () => { //Play or Call poker 80
    if (document.getElementById('pokertable').getAttribute('style').indexOf('hidden') === -1) {
      if (document.getElementsByName('PokerPlay')[0].className === "vis1") {
        genfun("pplay");
      } else if (document.getElementsByName('PokerCall')[0].className === "vis1" && document.getElementsByName('PokerPlay')[0].className === "vis2") {
        genfun("pcall");
      }
    }
  },
  Quicky: () => { //Submits quick action 17
    if (fn.Quick.innerHTML !== "") {
      fn.Quick.childNodes[0].click();
    }
  },
  SetQ: () => { //Sets quick action 75
    if (fn.Quick.innerHTML !== "") {
      if (fn.Quick.innerHTML.substring(0, 30) == `<input type="button" value="/p` || fn.Quick.innerHTML.substring(0, 29) == `<input type=button value='/p`) {
        fn.Quick.innerHTML = "<input type=button value='/da " + p.Rune_Bank + "' onClick=\"genfull('chat','/da " + p.Rune_Bank + "',0)\" STYLE='font-size:8pt; background-color:000000; color:ABB5BF'>";
      } else {
        fn.Quick.innerHTML = "<input type=button value='/pe " + p.Rune_Bank + "' onClick=\"genfull('chat','/pe " + p.Rune_Bank + "',0)\" STYLE='font-size:8pt; background-color:000000; color:ABB5BF'>";
      }
    } else {
      fn.Quick.innerHTML = "<input type=button value='/pe " + p.Rune_Bank + "' onClick=\"genfull('chat','/pe " + p.Rune_Bank + "',0)\" STYLE='font-size:8pt; background-color:000000; color:ABB5BF'>";
    }
  },
  Submit: () => {
    let toggle = document.querySelector('input[name="rd"]:checked').value;
    let action = document.querySelector('select[name="action"]').value;
    if (toggle === "general") {
      if (action === "fight") {
        if (top.Target === -1 || top.Target === "") {
          fn.ASub();
        }
      } else {
        fn.ASub();
      }
    } else if (toggle === "king") {
      fn.KSub();
    }
  },
  ASub: () => {
    document.getElementById('s_subbut').childNodes[0].click()
  },
  KSub: () => {
    document.getElementById('s_subbut2').childNodes[0].click()
  },
  Hide: () => {
    if (p.is_hidden) {
      document.getElementById('tb_1').hidden = false;
      document.getElementById('addon-table').hidden = false;
      p.is_hidden = false;
    } else {
      document.getElementById('tb_1').hidden = true;
      document.getElementById('addon-table').hidden = true;
      p.is_hidden = true;
    }
  },
  Fold: () => { //Folds poker hand
    genfun("pfold");
  },
  Reload: () => { //Folds poker hand
    domes("Relaoding has been disabled due to new features implemented in rwk. You must relog for changes. Sorry!");
  },
  //Keybinds
  Process: (event) => {
    if(p.binds.includes(event.keyCode)){
      event.preventDefault();
    }
    switch (event.keyCode) {
      case 16:
        fn.Submit();
        break;

      case 17:
        if (document.querySelector('input[name="ra"]:checked').value == 17) {
          fn.Quicky();
        }
        break;

      case 37:
        fn.West();
        break;

      case 38:
        fn.North();
        break;

      case 39:
        fn.East();
        break;

      case 40:
        fn.South();
        break;

      case 46:
        setPercents();
        break;

      case 65:
        fn.Attack();
        break;

      case 66:
        fn.Beast();
        break;

      case 67:
        fn.Cast();
        break;

      case 68:
        fn.Defend();
        break;

      case 69:
        fn.Equip();
        break;

      case 70:
        fn.Fight();
        break;

      case 73:
        fn.Tog_Time();
        break;

      case 74:
        fn.Fold();
        break;

      case 75:
        fn.SetQ();
        break;

      case 76:
        fn.Teleport();
        break;

      case 78:
        fn.NBeast();
        break;

      case 80:
        fn.Poker();
        break;

      case 81:
        rn.Revive();
        break;

      case 82:
        setBank();
        break;

      case 83:
        fn.Tog_Safety();
        break;

      case 84:
        fn.Train();
        break;

      case 85:
        makeShort();
        break;

      case 86:
        fn.Battle();
        break;

      case 88:
        fn.Destroy();
        break;

      case 96:
        if (document.querySelector('input[name="ra"]:checked').value == 96) {
          fn.Quicky();
        }
        break;

      case 119:
        burn();
        break;

      case 186:
        fn.Reload();
        break;

      case 191:
        log('New Help Page: <a target="_blank" href="http://rwkhelp.com/hotkeys.html">Help</a>');
        break;

      case 192:
        genfull('chat', 'track', 'Shrine+Keeper');
        break;

      case 219:
        fn.Up();
        break;

      case 221:
        fn.Down();
        break;

      case 220:
        fn.Hide();
        break;

      case 222:
        genfull("chat", "/app", 0);
        break;
    }
  }
}

function clear_chat() {
  for (let x = 101; x >= 0; x--) {
    top.OldChat[x] = "";
  }
  document.getElementById('chattybox').value = "";
  domes("Chat has been cleared.");
}

function upinventory(shouldi, ughi) {
  let h = '';
  if (top.Inventory == "" || top.Inventory == null)
    top.inventory = ["EMPTY", ""];
  else
    top.inventory = top.Inventory.split("-");

  let inputt = top.frames.main.document.getElementById('general').action.value;
  let g = top.frames.main.document.getElementById('general');
  let itemtog = [];
  itemtog[0] = top.Weapon;
  itemtog[1] = top.Shield;
  itemtog[2] = top.Gauntlets;
  itemtog[3] = top.Mantle;
  itemtog[4] = top.Sleeves;
  itemtog[5] = top.Cast;
  itemtog[6] = top.Leggings;
  itemtog[7] = top.Boots;
  itemtog[8] = top.Heal;
  itemtog[9] = top.Relic1;
  itemtog[10] = top.Relic2;
  itemtog[11] = top.Relic3;
  itemtog[12] = top.Relic4;
  itemtog[13] = top.Relic5;
  itemtog[14] = top.Relic6;
  itemtog[15] = top.Helmet;

  if (inputt == "equip" || inputt == "trade" || inputt == "sell" || inputt == "burn" || inputt == "ds" || inputt == "es") {
    if (shouldi != 0) {
      if (inputt == "equip" || inputt == "sell" || inputt == "burn" || inputt == "ds" || ughi == 1)
        h = g.target;
      else
        h = g.other;

      top.stickiinv = h.selectedIndex;

      let subarr = top.inventory;
      let lasttype = 99;
      let amount = subarr.length - 1;
      if (amount == 1) {
        amount = 2;
        subarr[1] = -1;
      }
      h.length = amount - 1;
      let displace = 0;
      for (var i = 1; i < amount + displace; i++) {
        let skipit = 0;
        for (var x = 0; x < 16; x++) {
          if (itemtog[x] == "Nothing") continue;
          if (itemtog[x] == subarr[i - displace]) {
            itemtog[x] = "Nothing";
            skipit = 1;
            break;
          }
        }
        let itype = parseInt(subarr[i - displace] / 1000, 10) % 100;
        if (lasttype != itype) {
          displace++;
          h.length = h.length + 1;
          if (itype == 0)
            h.options[i - 1].text = "Weapons";
          else if (itype == 1)
            h.options[i - 1].text = "Helmets";
          else if (itype == 2)
            h.options[i - 1].text = "Shields";
          else if (itype == 3)
            h.options[i - 1].text = "Gauntlets";
          else if (itype == 4)
            h.options[i - 1].text = "Mantles";
          else if (itype == 5)
            h.options[i - 1].text = "Sleeves";
          else if (itype == 6)
            h.options[i - 1].text = "Damage Spells";
          else if (itype == 7)
            h.options[i - 1].text = "Leggings";
          else if (itype == 8)
            h.options[i - 1].text = "Boots";
          else if (itype == 9)
            h.options[i - 1].text = "Heal Spells";
          else if (itype == 10)
            h.options[i - 1].text = "Relics";
          else if (itype == 11)
            h.options[i - 1].text = "Others";
          else if (itype == 12)
            h.options[i - 1].text = "Bows";
          else if (itype == 13)
            h.options[i - 1].text = "Arrows";
          else if (itype == 14)
            h.options[i - 1].text = "Light Weapons";
          else if (itype == 15)
            h.options[i - 1].text = "Heavy Weapons";
          else if (itype == 16)
            h.options[i - 1].text = "Precise Weapons";
          else if (itype == 17)
            h.options[i - 1].text = "Rapid Damage Spells";
          else if (itype == 18)
            h.options[i - 1].text = "Major Damage Spells";
          else if (itype == 19)
            h.options[i - 1].text = "Accurate Damage Spells";
          else if (itype == 20)
            h.options[i - 1].text = "Durability Helmets";
          else if (itype == 21)
            h.options[i - 1].text = "Durability Shields";
          else if (itype == 22)
            h.options[i - 1].text = "Durability Gauntlets";
          else if (itype == 23)
            h.options[i - 1].text = "Durability Mantles";
          else if (itype == 24)
            h.options[i - 1].text = "Durability Sleeves";
          else if (itype == 25)
            h.options[i - 1].text = "Durability Leggings";
          else if (itype == 26)
            h.options[i - 1].text = "Durability Boots";
          else if (itype == 27)
            h.options[i - 1].text = "Essence Elements";
          h.options[i - 1].text = "__________________" + h.options[i - 1].text + "__________________";
          h.options[i - 1].value = 999999999;
          i++;
        }
        lasttype = itype;
        if (skipit)
          h.options[i - 1].text = getitem(subarr[i - displace]) + " (EQUIPPED)";
        else
          h.options[i - 1].text = getitem(subarr[i - displace]);
        h.options[i - 1].value = subarr[i - displace];
      }
    }
    if (shouldi != 0) {
      if (top.stickiinv < 0)
        top.stickiinv = 0;
      if (top.stickiinv >= h.length)
        top.stickiinv = h.length - 1;
      h.selectedIndex = top.stickiinv;
    }
    if (inputt != "equip")
      return;
    let itype = parseInt(g.target.options[g.target.selectedIndex].value / 1000, 10) % 100;

    let tmpchar = g.target.options[g.target.selectedIndex].text;
    if (tmpchar.charAt(tmpchar.length - 1) == ")") {
      g.other.length = 1;
      g.other.options[0].text = "UNEQUIP";
      g.other.options[0].value = 11;
    } else if ([1, 3, 4, 5, 7, 8, 20, 22, 23, 24, 25].includes(itype)) {
      g.other.innerHTML = `<option value=0>Auto</option>`;
    } else if ([0, 2, 12, 13, 14, 15, 16, 21].includes(itype)) {
      g.other.innerHTML = `<option value=1>Left Hand</option> <option value=2>Right Hand</option>`;
      if (top.Weapon == "-1" && top.Shield != "-1") {
        g.other.value = 1;
      } else if (top.Weapon != "-1" && top.Shield == "-1") {
        g.other.value = 2;
      } else if (top.Weapon == "-1" && top.shield == "-1") {
        g.other.value = 1;
      }
    } else if ([6, 9, 17, 18, 19].includes(itype)) {
      g.other.innerHTML = `<option value=3>Spell One</option> <option value=4>Spell Two</option>`;
      if (top.Cast == "-1" && top.Heal != "-1") {
        g.other.value = 3;
      } else if (top.Cast != "-1" && top.Heal == "-1") {
        g.other.value = 4;
      } else if (top.Cast == "-1" && top.Heal == "-1") {
        g.other.value = 3;
      }
    } else if (itype == 10) {
      g.other.innerHTML = `<option value=5>Relic 1</option> <option value=6>Relic 2</option> <option value=7>Relic 3</option> <option value=8>Relic 4</option> <option value=9>Relic 5</option> <option value=10>Relic 6</option> `;
      if (top.Relic1 == -1) {
        g.other.value = 5;
      } else if (top.Relic2 == -1) {
        g.other.value = 6;
      } else if (top.Relic3 == -1) {
        g.other.value = 7;
      } else if (top.Relic4 == -1) {
        g.other.value = 8;
      } else if (top.Relic5 == -1) {
        g.other.value = 9;
      } else if (top.Relic6 == -1) {
        g.other.value = 10;
      } else {
        g.other.value = 5;
      }
    } else {
      g.other.length = 1;
      g.other.options[0].text = "UNEQUIPABLE";
      g.other.options[0].value = 0;
    }
  }
}
