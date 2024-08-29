import ws from 'ws';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    let uniqueUsers = new Map();

    global.conns.forEach((conn) => {
        if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
            uniqueUsers.set(conn.user.jid, conn);
        }
    });

    let users = [...uniqueUsers.values()];
    let totalUsers = users.length;

    let totalusr = Object.keys(global.db.data.users).length;
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let username = conn.getName(m.sender);
    let locale = 'es';
    let d = new Date(new Date + 3600000);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let sbot =
        conn.user.jid == global.conn.user.jid
        ? "`⠕⃞❨ः亹⠿☛ 𝐁𝐎𝐓:` Principal"
        : "`⠕⃞❨ः亹⠿☛ 𝐁𝐎𝐓:` Sub - Bot de" + `  Wa.me/${global.conn.user.jid.split`@`[0]}`;

    global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\n𝗠 𝗔 𝗫 𝗕 𝗢 𝗧 𝗣 𝗥 𝗢`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${username}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    m.react("💙");
    let menu = ``;

    let txt = ""
    txt += '`⠕⃞❨ः亹⠿☛ 𝑪𝑹𝑬𝑨𝑫𝑶𝑹 :`' + ` Jostin-444\n`;
    txt += '`⠕⃞❨ः亹⠿☛ 𝑵𝑰𝑪𝑲𝑩𝑶𝑻 :`' + ` MaxBot\n`;
    txt += '`⠕⃞❨ः亹⠿☛ 𝑽𝑬𝑹𝑪𝑰𝑶𝑵 :`' + ` ${fecha}\n`;
    txt += '`⠕⃞❨ः亹⠿☛ 𝑽𝑬𝑹𝑪𝑰𝑶𝑵 :`' + ` ${vs}\n`;
    txt += `${sbot}\n`;
    txt += '`⠕⃞❨ः亹⠿☛ 𝑷𝑹𝑬𝑭𝑰𝑱𝑶 :`' + ` [  ${usedPrefix}  ]\n`;
    txt += '``' + ` ${totalUsers || '0'}\n`;
    txt += '`⠕⃞❨ः亹⠿☛ 𝑼𝑺𝑼𝑨𝑹𝑰𝑶𝑺 :`' + ` ${totalusr}\n`;
    txt += '`⠕⃞❨ः亹⠿☛ 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶𝑺 :`' + ` ${rtotalreg}\n`;
    txt += '`⠕⃞❨ः亹⠿☛ 𝑨𝑪𝑻𝑰𝑽𝑶 :`' + ` ${uptime}\n`;
    txt += '`⠕⃞❨ः亹⠿☛ 𝑪𝑹𝑬𝑨𝑫𝑶𝑹 :` #owner\n';
    txt += "᳝꩖͜͡•꙰──────▧⃟╳⃟ೇ───────𖡜ꦽ̸ོ˚￫ ݈݇─";

    let listSections = [];

        listSections.push({
        title: `🔖 SELECCIÓNA LO QUE NECESITES`, highlight_label: `Popular 𝗠𝗔𝗫-𝗕𝗢𝗧`,
        rows: [
            {
                header: "𝗔𝗨𝗧𝗢 𝗩𝗘𝗥𝗜𝗙𝗜𝗖𝗔𝗥 ✅",
                title: "",
                description: `Verificacion Automáticamente`,
                id: `#reg 食𝐕̲͟ⳤ͢⃝̵̵🧧᭄̯⳱.18`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢 💙",
                title: "",
                description: `MENU COMPLETO`,
                id: `.allmenu`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗔𝗨𝗗𝗜𝗢𝗦 🔊",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘢𝘶𝘥𝘪𝘰𝘴`,
                id: `${usedPrefix}menuaudios`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪 🔞",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘤𝘢𝘭𝘪𝘦𝘯𝘵𝘦`,
                id: `${usedPrefix}labiblia`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗝𝗨𝗘𝗚𝗢𝗦 🎮",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘫𝘶𝘦𝘨𝘰𝘴`,
                id: `${usedPrefix}gamemenu`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 📥",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴`,
                id: `${usedPrefix}menudl`,
            },
            {
                header: "𝗠𝗘𝗡𝗨 𝗔𝗜 🤖",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘐𝘈-𝘉𝘰𝘵`,
                id: `${usedPrefix}menuai`,
            },
            {
                header: "𝗥𝗘𝗗𝗘𝗦 𝗠𝗮𝘅-𝗕𝗼𝘁 🍄",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘢𝘴 𝘳𝘦𝘥𝘦𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}redes`,
            },
            {
                header: "𝗚𝗥𝗨𝗣𝗢𝗦 𝗠𝗮𝘅-𝗕𝗼𝘁 ☁️",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘰𝘴 𝘨𝘳𝘶𝘱𝘰𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}grupos`,
            },
{
                header: "𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗 𝗕𝗢𝗧 ⚡",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘢 𝘷𝘦𝘭𝘰𝘤𝘪𝘥𝘢𝘥 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}ping`,
            },
{
                header: "𝗗𝗢𝗡𝗔𝗖𝗜𝗢𝗡 𝗕𝗢𝗧 ☕",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘵𝘰𝘥𝘰 𝘥𝘦 𝘥𝘰𝘯𝘢𝘳`,
                id: `${usedPrefix}donate`,
            },
        ],
    });

    let vid = "https://telegra.ph/file/1cf7cec1bba1dd12e5723.mp4";
    let img = "https://telegra.ph/file/1cf7cec1bba1dd12e5723.mp4";
    let img2 = "https://telegra.ph/file/1cf7cec1bba1dd12e5723.mp4";
    let img3 = "https://telegra.ph/file/e91640f6a39f1c3c61481.jpg";
    let img4 = "https://telegra.ph/file/e91640f6a39f1c3c61481.jpg";
    let img5 = "https://telegra.ph/file/e91640f6a39f1c3c61481.jpg";
    let img6 = "https://telegra.ph/file/e91640f6a39f1c3c61481.jpg";
    let img8 = "https://telegra.ph/file/e91640f6a39f1c3c61481.jpg";
    let img9 = "https://telegra.ph/file/e91640f6a39f1c3c61481.jpg";
    let img10 = "https://telegra.ph/file/e91640f6a39f1c3c61481.jpg";
    let img11 = "https://telegra.ph/file/c1ae1795e674be894f7fc.jpg";

    await conn.sendListB(m.chat, menu, txt, `「✶」𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓「✶」`, [vid, img, img2, img3, img4, img5, img6, img8, img9, img10, img11].getRandom(), listSections, estilo);
};

handler.command = ["menu", "help", "menú"];

export default handler;


function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}


  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;