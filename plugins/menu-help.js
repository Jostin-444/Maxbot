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
        ? ". .┊ ‹‹ `𝘉𝘖𝘛:` :: 𝘗𝘳𝘪𝘯𝘤𝘪𝘱𝘢𝘭. ."
        : ". .┊ ‹‹ `𝘉𝘖𝘛:` :: 𝘚𝘶𝘣 - 𝘣𝘰𝘵 𝘥𝘦. ." + `  Wa.me/${global.conn.user.jid.split`@`[0]}`;

    global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `ɢᴇɴᴇꜱɪꜱ ʙᴏᴛ`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${username}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    m.react("💫");
    let menu = ``;

    let txt = ""
    txt += ". .╭── ︿︿︿︿︿ .   .   .   .   .   . \n";
    txt += ". .┊ ✩*⢄⢁✧ *⌜ 𝗚𝗘𝗡𝗘𝗦𝗜𝗦 ⌟* ✧⡈⡠*✩\n";
    txt += '. .┊ ‹‹ `𝘊𝘙𝘌𝘈𝘋𝘖𝘙:` ::  ' + `𝘈𝘯𝘨𝘦𝘭. .\n`;
    txt += '. .┊ ‹‹ `𝘕𝘖𝘔𝘉𝘙𝘌:` ::  ' + `Genesis\n`;
    txt += '. .┊ ‹‹ `𝘍𝘌𝘊𝘏𝘈:` ::  ' + `${fecha}. .\n`;
    txt += '. .┊ ‹‹ `𝘝𝘌𝘙𝘚𝘐𝘖𝘕:` ::  ' + `${vs}. .\n`;
    txt += '. .┊ ‹‹ `𝘗𝘓𝘈𝘛𝘍𝘖𝘙𝘔:` ::  ' + `𝘓𝘪𝘯𝘶𝘹. .\n`;
    txt += `${sbot}\n`;
    txt += '. .┊ ‹‹ `𝘗𝘙𝘌𝘍𝘐𝘑𝘖:` ::  ' + ` [  ${usedPrefix}  ]\n`;
    txt += '. .┊ ‹‹ `𝘚𝘜𝘉𝘉𝘖𝘛𝘚:` ::  ' + ` _${totalUsers || '0'}_\n`;
    txt += '. .┊ ‹‹ `𝘜𝘚𝘜𝘈𝘙𝘐𝘖𝘚:` ::  ' + ` _${totalusr}_\n`;
    txt += '. .┊ ‹‹ `𝘙𝘌𝘎𝘐𝘚𝘛𝘙𝘈𝘋𝘖𝘚:` ::  ' + ` _${rtotalreg}_\n`;
    txt += '. .┊ ‹‹ `𝘛𝘐𝘌𝘔𝘗𝘖 𝘈𝘊𝘛:` ::  ' + ` _${uptime}_\n`;
    txt += '. .┊ ‹‹ `𝘖𝘞𝘕𝘌𝘙:` ::  #owner\n';
    txt += ". .╰─── ︶︶︶︶ ♡⃕  ⌇. . .\n";

    let listSections = [];

    listSections.push({
        title: `🔖 SELECCIÓNA LO QUE NECESITES`, highlight_label: `Popular Genesis`,
        rows: [
            {
                header: "𝘼𝙐𝙏𝙊 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍 ✅",
                title: "",
                description: `Verificacion Automáticamente`,
                id: `#reg ${username}.18`,
            },
            {
                header: ". .┊☁️ MENU COMPLETO",
                title: "",
                description: `MENU COMPLETO`,
                id: `.allmenu`,
            },
            {
                header: ". .┊☁️ MENU FREE FIRE",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘧𝘳𝘦𝘦 𝘧𝘪𝘳𝘦`,
                id: `${usedPrefix}menuff`,
            },
            {
                header: ". .┊☁️ MENU AUDIOS",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘢𝘶𝘥𝘪𝘰𝘴`,
                id: `${usedPrefix}menuaudios`,
            },
            {
                header: ". .┊☁️ MENU NSFW",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘤𝘢𝘭𝘪𝘦𝘯𝘵𝘦`,
                id: `${usedPrefix}labiblia`,
            },
            {
                header: ". .┊☁️ MENU GAME",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘫𝘶𝘦𝘨𝘰𝘴`,
                id: `${usedPrefix}gamemenu`,
            },
            {
                header: ". .┊☁️ MENU RANDOM",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘪𝘮𝘨 𝘳𝘢𝘯𝘥𝘰𝘮`,
                id: `${usedPrefix}menurandom`,
            },
            {
                header: ". .┊☁️ MENU DESCARGAS",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴`,
                id: `${usedPrefix}menudl`,
            },
            {
                header: ". .┊☁️ MENU AI",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘐𝘈-𝘉𝘰𝘵`,
                id: `${usedPrefix}menuai`,
            },
            {
                header: ". .┊☁️ REDES GENESIS",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘢𝘴 𝘳𝘦𝘥𝘦𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}redes`,
            },
            {
                header: ". .┊☁️ GRUPOS GENESIS",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘰𝘴 𝘨𝘳𝘶𝘱𝘰𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}grupos`,
            },
{
                header: ". .┊☁️ VELOCIDAD GENESIS",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘢 𝘷𝘦𝘭𝘰𝘤𝘪𝘥𝘢𝘥 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}ping`,
            },
{
                header: ". .┊☁️ DONACION BOT",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘵𝘰𝘥𝘰 𝘥𝘦 𝘥𝘰𝘯𝘢𝘳`,
                id: `${usedPrefix}donate`,
            },
        ],
    });

    let vid = "https://i.ibb.co/gJNrL71/file.jpg";
    let img = "https://i.ibb.co/gJNrL71/file.jpg";
    let img2 = "https://i.ibb.co/gJNrL71/file.jpg";
    let img3 = "https://i.ibb.co/gJNrL71/file.jpg";
    let img4 = "https://i.ibb.co/gJNrL71/file.jpg";
    let img5 = "https://i.ibb.co/gJNrL71/file.jpg";
    let img6 = "https://i.ibb.co/gJNrL71/file.jpg";
    let img8 = "https://i.ibb.co/gJNrL71/file.jpg";
    let img9 = "https://i.ibb.co/gJNrL71/file.jpg";
    let img10 = "https://i.ibb.co/gJNrL71/file.jpg";
    let img11 = "https://i.ibb.co/gJNrL71/file.jpg";

    await conn.sendListB(m.chat, menu, txt, `𝗠𝗘𝗡𝗨𝗦 𝗚𝗘𝗡𝗘𝗦𝗜𝗦`, [vid, img, img2, img3, img4, img5, img6, img8, img9, img10, img11].getRandom(), listSections, estilo);
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