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
  }
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
  }
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
      tp.to(261, 020);
    },
    satinia: () => {
      tp.to(290, 075);
    },
    demainia: () => {
      tp.to(247, 104);
    },
    wefaria: () => {
      tp.to(210, 010);
    },
    angilek: () => {
      tp.to(193, 009);
    },
    retrok: () => {
      tp.to(173, 019);
    },
    tuval: () => {
      tp.to(117, 014);
    },
    gretia: () => {
      tp.to(025, 031);
    },
    merlana: () => {
      tp.to(024, 061);
    },
    devell: () => {
      tp.to(017, 174);
    },
    hykra: () => {
      tp.to(017, 271);
    },
    rayvosk: () => {
      tp.to(209, 281);
    },
    slevisk: () => {
      tp.to(178, 244);
    },
    honar: () => {
      tp.to(056, 208);
    },
    kremk: () => {
      tp.to(047, 290);
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
      tp.to(155, 043);
    },
    carella: () => {
      tp.to(129, 051);
    },
    treval: () => {
      tp.to(097, 021);
    },
    roggork: () => {
      tp.to(050, 049);
    },
    andal: () => {
      tp.to(130, 164);
    },
    perydan: () => {
      tp.to(150, 197);
    },
  },
  wp: {
    loc_1: [000, 000],
    loc_2: [000, 000],
    loc_3: [000, 000],
    loc_4: [000, 000],
    jump1: () => {
      tp.to([tp.wp.loc_1[0], tp.wp.loc_1[1]]);
    },
    jump2: () => {
      tp.to([tp.wp.loc_2[0], tp.wp.loc_2[1]]);
    },
    jump3: () => {
      tp.to([tp.wp.loc_3[0], tp.wp.loc_3[1]]);
    },
    jump4: () => {
      tp.to([tp.wp.loc_4[0], tp.wp.loc_4[1]]);
    },
    set1: () => {
      tp.wp.loc_1 = [parseInt(top.LocX), parseInt(top.LocY)];
      domes("Waypoint has been set to " + tp.wp.loc_1[0] + "," + tp.wp.loc_1[1);
    },
    set2: () => {
      tp.wp.loc_2 = [parseInt(top.LocX), parseInt(top.LocY)];
      domes("Waypoint has been set to " + tp.wp.loc_2[0] + "," + tp.wp.loc_2[1]);
    },
    set3: () => {
      tp.wp.loc_3 = [parseInt(top.LocX), parseInt(top.LocY)];
      domes("Waypoint has been set to " + tp.wp.loc_3[0] + "," + tp.wp.loc_3[1);
    },
    set4: () => {
      tp.wp.loc_4 = [parseInt(top.LocX), parseInt(top.LocY)];
      domes("Waypoint has been set to " + tp.wp.loc_4[0] + "," + tp.wp.loc_4[1);
    },
  }
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
