import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': '𝐈𝐍𝐅𝐎 𝐁𝐎𝐓',
  'search': '𝐒𝐄𝐀𝐑𝐂𝐇',
  'games': '𝐃𝐈𝐕𝐄𝐑𝐒𝐈𝐎𝐍',
  'buscador': '𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀𝐒',
  'fun': '𝐉𝐔𝐄𝐆𝐎𝐒',
  'jadibot': '𝐒𝐔𝐁 𝐁𝐎𝐓𝐒',
  'rpg': '𝐑𝐏𝐆',
  'rg': '𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎',
  'xp': '𝐄𝐗𝐏',
  'sticker': '𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒',
  'anime': '𝐀𝐍𝐈𝐌𝐄𝐒',
  'database': '𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄',
  'fix': '𝐅𝐈𝐗𝐌𝐒𝐆𝐄𝐒𝐏𝐄𝐑𝐀',
  'grupo': '𝐆𝐑𝐔𝐏𝐎𝐒',
  'nable': '𝐎𝐍 / 𝐎𝐅𝐅', 
  'descargas': '𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒',
  'youtube': '𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘',
  'tools': '𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒',
  'info': '𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍',
  'nsfw': '𝐍𝐒𝐅𝐖', 
  'owner': '𝐂𝐑𝐄𝐀𝐃𝐎𝐑',
  'mods': '𝐒𝐓𝐀𝐅𝐅 𝐘𝐀𝐄𝐌𝐎𝐑𝐈',
  'audio': '𝐀𝐔𝐃𝐈𝐎𝐒', 
  'ai': '𝐀𝐈 𝐁𝐎𝐓',
  'transformador': '𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒',
}

const defaultMenu = {
  before: `“Hola *%name* soy *GenesisBot*, %greeting”

*▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*

. .╭── ︿︿︿︿︿ .   .   .   .   .
. .┊✯ 𝗖𝗹𝗶𝗲𝗻𝘁𝗲: %name
. .┊✯ 𝗕𝗼𝘁: Génesis Bot
. .┊✯ 𝗠𝗼𝗱𝗼: Público
. .┊✯ 𝗧𝗶𝗲𝗺𝗽𝗼 𝗔𝗰𝘁: %muptime
. .┊✯ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼𝘀: %totalreg
. .┊✯ 𝗘𝘀𝘁𝗿𝗲𝗹𝗹𝗮𝘀: %estrellas
. .┊✯ 𝗡𝗶𝘃𝗲𝗹: %level
. .╰─── ︶︶︶︶ .   .   .   .   .

*▬▭▬▭▬ ᴀʟʟᴍᴇɴᴜ ▬▭▬▭▬*


╭  ┄ 𝅄  ۪꒰ ׅ \`𝐌𝐎𝐍𝐄𝐘 𝐏𝐑𝐄𝐌\` ׅ ꒱  ۟  𝅄 ┄
┊✧ *Dinero:* ◜🪙◞
┊✧ *Premium:* ◜🎫◞
╰⸼ ┄ ┄ ┄ ─  ꒰  ׅ୭🌟୧ ׅ ꒱  ┄  ─ ┄ ⸼\n
`.trimStart(),
      header: '╭  ┄ 𝅄  ۪꒰ ׅ  `%category`  ׅ ꒱  ۟  𝅄 ┄',
  body: '┊✧ %cmd %isdiamond %isPremium\n',
  footer: '╰⸼ ┄ ┄ ┄ ─  ꒰  ׅ୭🌟୧ ׅ ꒱  ┄  ─ ┄ ⸼\n\n',
  after: `> ${dev}`,
}
let ppp = 'https://i.ibb.co/yyS7hkT/file.jpg'
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, estrellas, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        estrellas: plugin.estrellas,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '◜🪙◞' : '')
                .replace(/%isPremium/g, menu.premium ? '◜🎫◞' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
botofc: (conn.user.jid == global.conn.user.jid ? '🚩 𝙴𝚂𝚃𝙴 𝙴𝚂 𝙴𝙻 𝙱𝙾𝚃 𝙾𝙵𝙲' : `🚩 𝚂𝚄𝙱-𝙱𝙾𝚃 𝙳𝙴: Wa.me/${global.conn.user.jid.split`@`[0]}`), 
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
greeting, level, estrellas, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

const pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

  let category = "video"
  const db = './media/database/db.json'
  const db_ = JSON.parse(fs.readFileSync(db))
  const random = Math.floor(Math.random() * db_.links[category].length)
  const rlink = db_.links[category][random]
  global.vid = rlink
  const response = await fetch(vid)
  const gif = await response.buffer()
 // const img = imagen1

await conn.reply(m.chat, '*ꪹ͜𓂃͡𝗖𝗮𝗿𝗴𝗮𝗻𝗱𝗼 𝗘𝗹 𝗠𝗲𝗻𝘂 𝗗𝗲 𝗹𝗮 𝗕𝗼𝘁...𓏲੭*', fkontak, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: packname, body: '🍟 ¡Super Bot De WhatsApp!', sourceUrl: canal, thumbnail: icons }}})

// await conn.reply(m.chat, '🍟 Enviando el menú.....', m, rcanal)

await m.react('⭐️') 

await conn.sendFile(m.chat, ppp, 'menu.jpg', text.trim(), fakegif3, null, rcanal)

  } catch (e) {
    conn.reply(m.chat, '🔵 Lo sentimos, el menú tiene un error', m, rcanal, )
    throw e
  }
}
handler.help = ['menucompleto']
handler.tags = ['main']
handler.command = ['menucompleto', 'allmenú', 'allmenu'] 
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
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
