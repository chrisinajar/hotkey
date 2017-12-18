'use strict'

top.hio = "";

var p = {
  kb_enabled: 0,
  is_hidden: false,
  stat_display: false,
  Timestamps: false,
  version: "Version: 8.3",
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
  max_inventory: 50
};

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
        top.OldChat[x] = msg.replace(/:corymoon:/gi, '<img width="32px" height="32px" src="https://i.imgur.com/skHiT8d.jpg">');
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
  document.onkeydown = null;
  keybinder = removeEventListener("keydown", null);
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
                     <input id='wpb' type='button' value='Show Waypoints' onclick='special_locations();'>
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
                  <span id='waypoint_menu' hidden>
                     <table style='text-align:center;'>
                        <tr>
                           <td style='background-color:#6666FF'>
                              <input type="button" value="Forbidden Palace" onclick="javascript:npc_porter('palace');">
                              <input type="button" value="A Citizen" onclick="javascript:npc_porter('hevcitizen');">
                              <input type="button" value="Heaven Keep" onclick="javascript:npc_porter('keep');">
                           </td>
                        </tr>
                        <tr>
                           <td style='background-color:#BBBBFF'>
                              <input type="button" value="Sky Shrine" onclick="javascript:npc_porter('shrine');">
                              <input type="button" value="A Citizen" onclick="javascript:npc_porter('skycitizen');">
                           </td>
                        </tr>
                        <tr>
                           <td style='background-color:#C8C8C8'>
                              <input type="button" value="Forbidden Mines" onclick="javascript:npc_porter('mines');">
                              <input type="button" value="Ash Keeper" onclick="javascript:npc_porter('ashk');">
                              <input type="button" value="Stallions Pub" onclick="javascript:npc_porter('pub');">
                              <input type="button" value="Le Puddle Deep" onclick="javascript:npc_porter('puddle');">
                              <input type="button" value="Inquest Brawl" onclick="javascript:npc_porter('brawl');">
                           </td>
                        </tr>
                        <tr>
                           <td style='background-color:#FFBBBB'>
                              <input type="button" value="Insane Dungeon" onclick="javascript:npc_porter('insane');">
                           </td>
                        </tr>
                        <tr>
                           <td style='background-color:#FF6666'>
                              <input type="button" value="Ash Collector" onclick="javascript:npc_porter('ashc');">
                              <input type="button" value="Hell Keep" onclick="javascript:npc_porter('keep');">
                              <input type="button" value="Forge Entrance" onclick="javascript:npc_porter('forge');">
                           </td>
                        </tr>
                        <tr>
                           <td style='background-color:#969696'>
                              <input type="button" value="Shore of Hell" onclick="javascript:npc_porter('shore');">
                              <input type="button" value="Dungeon Mountains" onclick="javascript:npc_porter('mountain');">
                              <input type="button" value="Dungeon Lava" onclick="javascript:npc_porter('lava');">
                              <input type="button" value="Sky Entrance" onclick="javascript:npc_porter('sky');">
                              <input type="button" value="Dungeon Entrance" onclick="javascript:npc_porter('dun');">
                              <input type="button" value="Heaven Lake" onclick="javascript:npc_porter('lake');">
                              <input type="button" value="Temple" onclick="javascript:npc_porter('temple');">
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <input id='pwp1' type="button" value="Set WP 1" onclick="javascript:npc_porter('pwp1');">
                              <input id='rpwp1' hidden type='button' value='Clear 1' onclick='javascript:resetwp(1);'>
                              <input id='pwp2' type="button" value="Set WP 2" onclick="javascript:npc_porter('pwp2');">
                              <input id='rpwp2' hidden type='button' value='Clear 2' onclick='javascript:resetwp(2);'>
                              <input id='pwp3' type="button" value="Set WP 3" onclick="javascript:npc_porter('pwp3');">
                              <input id='rpwp3' hidden type='button' value='Clear 3' onclick='javascript:resetwp(3);'>
                              <input id='pwp4' type="button" value="BB Return" onclick="javascript:npc_porter('pwp4');">
                           </td>
                        </tr>
                     </table>
                  </span>

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
})();

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetwp(wp) {
  switch (wp) {
    case 1:
      document.getElementById('rpwp1').hidden = true;
      p.pwps[0] = 0;
      log(`Waypoint 1 cleared`, 0);
      document.getElementById('pwp1').value = "Set WP 1";
      break;
    case 2:
      document.getElementById('rpwp2').hidden = true;
      p.pwps[1] = 0;
      log(`Waypoint 2 cleared`, 0);
      document.getElementById('pwp2').value = "Set WP 2";
      break;
    case 3:
      document.getElementById('rpwp3').hidden = true;
      p.pwps[2] = 0;
      log(`Waypoint 3 cleared`, 0);
      document.getElementById('pwp3').value = "Set WP 3";
      break;
  }
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
    card_html += "<a href='javascript:gattack(\"rjack\")'><img border=0 height=28 width=21 src='../card24.gif'></a> ";
  if (top.BJ)
    card_html += "<a href='javascript:gattack(\"bjack\")'><img border=0 height=28 width=21 src='../card50.gif'></a> ";
  if (top.RQ)
    card_html += "<a href='javascript:gattack(\"rqueen\")'><img border=0 height=28 width=21 src='../card25.gif'></a> ";
  if (top.BQ)
    card_html += "<a href='javascript:gattack(\"bqueen\")'><img border=0 height=28 width=21 src='../card51.gif'></a> ";
  if (top.RK)
    card_html += "<a href='javascript:gattack(\"rking\")'><img border=0 height=28 width=21 src='../card26.gif'></a> ";
  if (top.BK)
    card_html += "<a href='javascript:gattack(\"bking\")'><img border=0 height=28 width=21 src='../card52.gif'></a> ";
  if (top.RA)
    card_html += "<a href='javascript:gattack(\"race\")'><img border=0 height=28 width=21 src='../card14.gif'></a> ";
  if (top.BA)
    card_html += "<a href='javascript:gattack(\"bace\")'><img border=0 height=28 width=21 src='../card40.gif'></a> ";

  document.getElementById('Poker_Cards').innerHTML = card_html;
}

function pm(thesubber) {
  kb_toggle();
  hl(thesubber);
  let thenamestring = "/m " + ms(thesubber) + ": ";
  let thenamestring2 = "/p " + ms(thesubber);
  let thenamestring3 = "/s " + ms(thesubber);
  if (top.frames.main.chat.target.value == thenamestring3) {
    thenamestring = "/ignore " + ms(thesubber);
  } else if (top.frames.main.chat.target.value == thenamestring) {
    thenamestring = thenamestring2;
  } else if (top.frames.main.chat.target.value == thenamestring2) {
    thenamestring = thenamestring3;
  }
  top.frames.main.chat.target.value = thenamestring;
  top.frames.main.chat.target.focus();
  top.frames.main.chat.target.value = thenamestring;
  top.frames.main.chat.target.focus();
  upplayers();
}

var thinger = document.chat.target.addEventListener("click", function() {
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

function list_enchantments() {
  let essence = '';
  let rank = '';
  let message = '';
  let approbation = '';

  let enchantments = [
    top.Ench1,
    top.Ench2,
    top.Ench3,
    top.Ench4,
    top.Ench5,
    top.Ench6,
    top.Ench7,
    top.Ench8,
    top.Ench9,
    top.Ench10
  ]

  let essences = [
    top.Mnch1,
    top.Mnch2,
    top.Mnch3,
    top.Mnch4,
    top.Mnch5,
    top.Mnch6,
    top.Mnch7,
    top.Mnch8,
    top.Mnch9,
    top.Mnch10
  ]

  let ranks = [
    top.MnchRank1,
    top.MnchRank2,
    top.MnchRank3,
    top.MnchRank4,
    top.MnchRank5,
    top.MnchRank6,
    top.MnchRank7,
    top.MnchRank8,
    top.MnchRank9,
    top.MnchRank10
  ]

  for (let x = 10; x >= 0; x--) {
    if (enchantments[x] > 0) {
      switch (essences[x]) {
        case 1:
          message = ` - Essence: Fire`;
          break;

        case 2:
          message = ` - Essence: Lightning`;
          break;

        case 3:
          message = ` - Essence: Ice`;
          break;

        case 4:
          message = ` - Essence: Dragon Flames`;
          break;

        case 5:
          message = ` - Essence: Dragon Storm`;
          break;

        case 6:
          message = ` - Essence: Dragon Shards`;
          break;

        case 7:
          message = ` - Ruby Rank: ${ranks[x]}`;
          break;

        case 8:
          message = ` - Sapphire Rank: ${ranks[x]}`;
          break;

        case 9:
          message = ` - Emerald Rank: ${ranks[x]}`;
          break;
      }
      let Slot = '';
      switch (x) {
        case 0:
          Slot = "Left Hand"
          break;
        case 1:
          Slot = "Skull"
          break;
        case 2:
          Slot = "Right Hand"
          break;
        case 3:
          Slot = "Forearms"
          break;
        case 4:
          Slot = "Chest"
          break;
        case 5:
          Slot = "Arms"
          break;
        case 6:
          Slot = "Left Brain"
          break;
        case 7:
          Slot = "Legs"
          break;
        case 8:
          Slot = "Feet"
          break;
        case 9:
          Slot = "Right Brain"
          break;
      }

      switch (enchantments[x]) {
        case 7:
          message = `${Slot}: The Calling of Titus` + message;
          break;
        case 15:
          message = `${Slot}: The Calling of Cassius` + message;
          break;
        case 23:
          message = `${Slot}: The Calling of Lestat` + message;
          break;
        case 29:
          message = `${Slot}: The Calling of Cara` + message;
          break;
        case 30:
          message = `${Slot}: Dexterous Hoist` + message;
          break;
        case 31:
          message = `${Slot}: Stream of Conscious` + message;
          break;
        case 32:
          message = `${Slot}: Blood Bath` + message;
          break;
        case 33:
          message = `${Slot}: Vampric Leech` + message;
          break;
        case 34:
          message = `${Slot}: Death Spike` + message;
          break;
        case 35:
          message = `${Slot}: Denial of the Believer` + message;
          break;
      }
      log(message);
      message = '';
    }
  }
}

var load_control = setTimeout(function() {
  //force the application to load the new menu
  upwindow(1);
}, 500);

window.alert = function(text) {
  log("tried to alert: " + text);
}

function npc_porter(npc) {
  if (parseInt(top.ActionDelay) < 150) {
    switch (npc) {
      case 'temple':
        if (top.LocZ == "Sur") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(40, 10);
          document.getElementsByName('other')[0].value = parseInt(225, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used on Surface', 1);
        }
        break;
      case 'mines':
        if (top.LocZ == "Sur") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(162, 10);
          document.getElementsByName('other')[0].value = parseInt(159, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used on Surface');
        }
        break;
      case 'ashk':
        if (top.LocZ == "Sur") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(150, 10);
          document.getElementsByName('other')[0].value = parseInt(150, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used on Surface');
        }
        break;
      case 'pub':
        if (top.LocZ == "Sur") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(150, 10);
          document.getElementsByName('other')[0].value = parseInt(145, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used on Surface');
        }
        break;
      case 'puddle':
        if (top.LocZ == "Sur") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(140, 10);
          document.getElementsByName('other')[0].value = parseInt(190, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used on Surface');
        }
        break;
      case 'sky':
        if (top.LocZ == "Sur") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(78, 10);
          document.getElementsByName('other')[0].value = parseInt(242, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used on Surface');
        }
        break;
      case 'dun':
        if (top.LocZ == "Sur") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(240, 10);
          document.getElementsByName('other')[0].value = parseInt(60, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used on Surface');
        }
        break;
      case 'brawl':
        if (top.LocZ == "Sur") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(40, 10);
          document.getElementsByName('other')[0].value = parseInt(140, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used on Surface');
        }
        break;
      case 'palace':
        if (top.LocZ == "Hev") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(162, 10);
          document.getElementsByName('other')[0].value = parseInt(159, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used on Heaven');
        }
        break;
      case 'hevcitizen':
        if (top.LocZ == "Hev") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(150, 10);
          document.getElementsByName('other')[0].value = parseInt(150, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used on Heaven');
        }
        break;
      case 'keep':
        if (top.LocZ == "Hev" || top.LocZ == 'Hel') {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(66, 10);
          document.getElementsByName('other')[0].value = parseInt(66, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used on Heaven or Hell');
        }
        break;
      case 'lake':
        if (top.LocZ == "Hev") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(40, 10);
          document.getElementsByName('other')[0].value = parseInt(140, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used on Heaven');
        }
        break;
      case 'shrine':
        if (top.LocZ == "Sky") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(100, 10);
          document.getElementsByName('other')[0].value = parseInt(250, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used in Sky');
        }
        break;
      case 'skycitizen':
        if (top.LocZ == "Sky") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(69, 10);
          document.getElementsByName('other')[0].value = parseInt(157, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used in Sky');
        }
        break;
      case 'insane':
        if (top.LocZ == "Dun") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(100, 10);
          document.getElementsByName('other')[0].value = parseInt(200, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used in Dungeon');
        }
        break;
      case 'mountain':
        if (top.LocZ == "Dun") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(207, 10);
          document.getElementsByName('other')[0].value = parseInt(188, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used in Dungeon');
        }
        break;
      case 'lava':
        if (top.LocZ == "Dun") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(9, 10);
          document.getElementsByName('other')[0].value = parseInt(256, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used in Dungeon');
        }
        break;
      case 'ashc':
        if (top.LocZ == "Hel") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(141, 10);
          document.getElementsByName('other')[0].value = parseInt(174, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used in Hell');
        }
        break;
      case 'shore':
        if (top.LocZ == "Hel") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(145, 10);
          document.getElementsByName('other')[0].value = parseInt(153, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used in Hell');
        }
        break;
      case 'forge':
        if (top.LocZ == "Hel") {
          document.getElementsByName('action')[0].value = 'tele';
          updateaction("tele", document.getElementById('general'));
          document.getElementsByName('target')[0].value = parseInt(141, 10);
          document.getElementsByName('other')[0].value = parseInt(146, 10);
          document.getElementById('general').submit();
        } else {
          log('This can only be used in Hell');
        }
        break;
      case 'pwp1':
        if (p.pwps[0] == 0) {
          document.getElementById('rpwp1').hidden = false;
          let wp = top.LocX + ',' + top.LocZ + ',' + top.LocY;
          //chrome.storage.sync.set({"wp1": wp});
          p.pwps[0] = wp;
          log(`Waypoint 1 set to ${wp}`, 0);
          document.getElementById('pwp1').value = "Goto " + wp;
        } else {
          let location_array = p.pwps[0].split(',');
          if (top.LocZ == location_array[1]) {
            document.getElementsByName('action')[0].value = 'tele';
            updateaction("tele", document.getElementById('general'));
            document.getElementsByName('target')[0].value = parseInt(location_array[0], 10);
            document.getElementsByName('other')[0].value = parseInt(location_array[2], 10);
            document.getElementById('general').submit();
          } else {
            log(`This can only be used in ${location_array[1]}`);
          }
        }
        break;
      case 'pwp2':
        if (p.pwps[1] == 0) {
          document.getElementById('rpwp2').hidden = false;
          let wp = top.LocX + ',' + top.LocZ + ',' + top.LocY;
          //chrome.storage.sync.set({"wp2": wp});
          p.pwps[1] = wp;
          log(`Waypoint 2 set to ${wp}`, 0);
          document.getElementById('pwp2').value = "Goto " + wp;
        } else {
          let location_array = p.pwps[1].split(',');
          if (top.LocZ == location_array[1]) {
            document.getElementsByName('action')[0].value = 'tele';
            updateaction("tele", document.getElementById('general'));
            document.getElementsByName('target')[0].value = parseInt(location_array[0], 10);
            document.getElementsByName('other')[0].value = parseInt(location_array[2], 10);
            document.getElementById('general').submit();
          } else {
            log(`This can only be used in ${location_array[1]}`);
          }
        }
        break;
      case 'pwp3':
        if (p.pwps[2] == 0) {
          document.getElementById('rpwp3').hidden = false;
          let wp = top.LocX + ',' + top.LocZ + ',' + top.LocY;
          //chrome.storage.sync.set({"wp3": wp});
          p.pwps[2] = wp;
          log(`Waypoint 3 set to ${wp}`, 0);
          document.getElementById('pwp3').value = "Goto " + wp;
        } else {
          let location_array = p.pwps[2].split(',');
          if (top.LocZ == location_array[1]) {
            document.getElementsByName('action')[0].value = 'tele';
            updateaction("tele", document.getElementById('general'));
            document.getElementsByName('target')[0].value = parseInt(location_array[0], 10);
            document.getElementsByName('other')[0].value = parseInt(location_array[2], 10);
            document.getElementById('general').submit();
          } else {
            log(`This can only be used in ${location_array[1]}`);
          }
        }
        break;
      case 'pwp4':
        if (p.pwps[3] == 0) {
          log(`Cannot manually set BB return, Must use b hotkey.`, 1);
        } else {
          let location_array = p.pwps[3].split(',');
          if (top.LocZ == location_array[1]) {
            document.getElementsByName('action')[0].value = 'tele';
            updateaction("tele", document.getElementById('general'));
            document.getElementsByName('target')[0].value = parseInt(location_array[0], 10);
            document.getElementsByName('other')[0].value = parseInt(location_array[2], 10);
            document.getElementById('general').submit();
          } else {
            log(`This can only be used in ${location_array[1]}`);
          }
        }
    }
  } else {
    log(`You attempted to do an action to quickly which may have resulted in a 10 second penelty. Please retry.`, 1);
  }
}

function special_locations() {
  if (document.getElementById('waypoint_menu').hidden == true) {
    document.getElementById('waypoint_menu').hidden = false;
    document.getElementById('wpb').value = 'Hide Waypoints';
  } else {
    document.getElementById('waypoint_menu').hidden = true;
    document.getElementById('wpb').value = 'Show Waypoints';
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
    tempstr += "<a href='javascript:level(0)'><img ";
    if (top.HotLevel == 1)
      tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='../ButStr.jpg'></a> ";
    tempstr += "<a href='javascript:level(1)'><img ";
    if (top.HotLevel == 2)
      tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='../ButDex.jpg'></a> ";
    tempstr += "<a href='javascript:level(2)'><img ";
    if (top.HotLevel == 3)
      tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='../ButAgi.jpg'></a> ";
    tempstr += "<a href='javascript:level(3)'><img ";
    if (top.HotLevel == 4)
      tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='../ButDur.jpg'></a> ";
    tempstr += "<a href='javascript:level(4)'><img ";
    if (top.HotLevel == 5)
      tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='../ButNtl.jpg'></a> ";
    tempstr += "<a href='javascript:level(5)'><img ";
    if (top.HotLevel == 6)
      tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='../ButCnc.jpg'></a> ";
    tempstr += "<a href='javascript:level(6)'><img ";
    if (top.HotLevel == 7)
      tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='../ButCnt.jpg'></a> ";
    tempstr += "<a href='javascript:level(7)'><img ";
    if (top.HotLevel == 8)
      tempstr += "width=102 height=54 ";
    tempstr += "border=0 src='../ButAll.jpg'></a>";
    yes = 1;
  }
  if (top.Health <= 0) {
    if (yes)
      tempstr += "<br>";
    yes = 1;
    tempstr += "<a href='javascript:revive()'><img border=0 src='../ButRevive.jpg'></a>";
  }

  check_Cards();

  if (top.Target != -1) {
    if (yes)
      tempstr += "<br>";
    tempstr += "<a href='javascript:gattack(\"attack\")'><img ";
    if (pclass == "fighter" || pclass == "monk" || pclass == "archer") {
      tempstr += "width=60 height=40 ";
    }
    tempstr += "border=0 src='../ButAttack.jpg' title='Attack With Both Weapons'></a> <a href='javascript:gattack(\"cast\")'><img "
    if (pclass == "caster" || pclass == "theurgist") {
      tempstr += "width=60 height=40 ";
    }
    tempstr += "border=0 src='../ButCast.jpg' title='Cast With Both Spells'></a> <a href='javascript:gattack(\"lattack\")'><img border=0 src='../ButHybrid1.jpg' title='Left Weapon and Spell'></a> <a href='javascript:gattack(\"rattack\")'><img border=0 src='../ButHybrid2.jpg' title='Right Weapon and Spell'></a> <a href='javascript:gattack(\"defend\")'><img "
    if (pclass == "vampire") {
      tempstr += "width=60 height=40 ";
    }
    tempstr += "border=0 src='../ButDefend.jpg' title='Defend'></a>";
    tempstr += " <img border=0 src='../ButVs.jpg'> <a href=javascript:pm('" + mp(top.Target) + "')>" + getcreature(top.Target) + "</a>";
  }

  top.frames.main.s_FightWin.innerHTML = tempstr;
  essences();
  curInv();
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
  }
  if (document.getElementById('s_Response').innerHTML.indexOf('How many do you see?') < 0) {
    if (p.kb_enabled) { //keybindings Enabled
      if (!p.Safety) { //safety off
        fn.Process(event.keyCode);
      } else if (p.Safety) { //safety on
        let delay = parseInt(top.ActionDelay, 10);
        if (delay <= 135) { //Safe to perform action
          fn.Process(event.keyCode)
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

function trivial_Gold() {
  chat.value = "";
  let king = document.getElementById("king");
  let action = document.getElementsByName("action")[1];
  let amount = document.getElementsByName("othera")[1];
  let submit = document.getElementById("s_subbut2").childNodes[0];
  let gold = parseInt(top.Gold, 10);
  let reply = document.getElementById('s_Response');

  if (gold >= 1000000000 && gold <= 1499999999) {
    if (top.LocZ != "For") {
      action.value = "food";
      updateaction("food", king);
      amount.value = (parseInt(top.Gold, 10) - 1000000000);
      submit.click();
      setTimeout(() => {
        action.value = "settle";
        updateaction("settle", king);
        reply.innerHTML = "Trivial gold dumped";
      }, 150);
    } else {
      action.value = "deposit";
      updateaction("deposit", king);
      amount.value = (parseInt(top.Gold, 10) - 1000000000);
      submit.click();
      setTimeout(() => {
        action.value = "settle";
        updateaction("settle", king);
        reply.innerHTML = "Trivial gold dumped";
      }, 150);
    }
  } else if (gold <= 499999999 && gold >= 999999) {
    if (top.LocZ != "For") {
      action.value = "food";
      updateaction("food", king);
      amount.value = parseInt(top.Gold, 10);
      submit.click();
      setTimeout(() => {
        action.value = "settle";
        updateaction("settle", king);
        reply.innerHTML = "Trivial gold dumped";
      }, 150);
    } else {
      action.value = "deposit";
      updateaction("deposit", king);
      amount.value = parseInt(top.Gold, 10);
      submit.click();
      setTimeout(() => {
        action.value = "settle";
        updateaction("settle", king);
        reply.innerHTML = "Trivial gold dumped";
      }, 150);
    }
  } else {
    reply.innerHTML = "Non trivial gold amount.";
  }
}

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
    genfull("chat", "/bb", 0);
    let wp = top.LocX + "," + top.LocZ + "," + top.LocY;
    p.pwps[3] = wp;
    log(`Waypoint 4 set to ${wp}`, 0);
    document.getElementById("pwp4").value = "Goto " + wp;
  },
  NBeast: () => { //Beast noob bane 78
    genfull("chat", "/bnb", 0);
    let wp = top.LocX + "," + top.LocZ + "," + top.LocY;
    p.pwps[3] = wp;
    log(`Waypoint 4 set to ${wp}`, 0);
    document.getElementById("pwp4").value = "Goto " + wp;
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
    if (top.Target !== "") {
      gattack("attack");
    }
  },
  Cast: () => { //Cast with both spells 67
    if (top.Target !== "") {
      gattack("cast");
    }
  },
  Defend: () => { //Defends 68
    if (top.Target !== "") {
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
    if (confirm("Reload addon?")) {
      load_new();
    } else {
      log('Reloading aborted');
    }
  },
  //Keybinds
  Process: (x) => {
    switch (x) {
      case 16:
        fn.Submit();
        event.preventDefault();
        break;

      case 17:
        if (document.querySelector('input[name="ra"]:checked').value == 17) {
          fn.Quicky();
          event.preventDefault();
        }
        break;

      case 37:
        fn.West();
        event.preventDefault();
        break;

      case 38:
        fn.North();
        event.preventDefault();
        break;

      case 39:
        fn.East();
        event.preventDefault();
        break;

      case 40:
        fn.South();
        event.preventDefault();
        break;

      case 46:
        setPercents();
        event.preventDefault();
        break;

      case 65:
        fn.Attack();
        event.preventDefault();
        break;

      case 66:
        fn.Beast();
        event.preventDefault();
        break;

      case 67:
        fn.Cast();
        event.preventDefault();
        break;

      case 68:
        fn.Defend();
        event.preventDefault();
        break;

      case 69:
        fn.Equip();
        event.preventDefault();
        break;

      case 70:
        fn.Fight();
        event.preventDefault();
        break;

      case 73:
        fn.Tog_Time();
        event.preventDefault();
        break;

      case 74:
        fn.Fold();
        event.preventDefault();
        break;

      case 75:
        fn.SetQ();
        event.preventDefault();
        break;

      case 76:
        fn.Teleport();
        event.preventDefault();
        break;

      case 78:
        fn.NBeast();
        event.preventDefault();
        break;

      case 80:
        fn.Poker();
        event.preventDefault();
        break;

      case 81:
        rn.Revive();
        event.preventDefault();
        break;

      case 82:
        setBank();
        event.preventDefault();
        break;

      case 83:
        fn.Tog_Safety();
        event.preventDefault();
        break;

      case 84:
        fn.Train();
        event.preventDefault();
        break;

      case 85:
        makeShort();
        event.preventDefault();
        break;

      case 86:
        fn.Battle();
        event.preventDefault();
        break;

      case 88:
        fn.Destroy();
        event.preventDefault();
        break;

      case 96:
        if (document.querySelector('input[name="ra"]:checked').value == 96) {
          fn.Quicky();
          event.preventDefault();
        }
        break;

      case 119:
        burn();
        event.preventDefault();
        break;

      case 186:
        fn.Reload();
        event.preventDefault();
        break;

      case 191:
        log('New Help Page: <a target="_blank" href="http://rwkhelp.com/hotkeys.html">Help</a>');
        event.preventDefault();
        break;

      case 192:
        genfull('chat', 'track', 'Shrine+Keeper');
        event.preventDefault();
        break;

      case 219:
        fn.Up();
        event.preventDefault();
        break;

      case 221:
        fn.Down();
        event.preventDefault();
        break;

      case 220:
        fn.Hide();
        event.preventDefault();
        break;

      case 222:
        list_enchantments();
        event.preventDefault();
        break;
    }
  }
}
