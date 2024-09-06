import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default

const defaultMenu = {
  before: `“𝐇𝐨𝐥𝐚 *%name* 𝐒𝐨𝐲 𝐌𝐚𝐱-𝐁𝐨𝐭"

◆ ▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬ ◆

 '︶꒦꒷♡꒷꒦︶.
┊𖣘 𝐂𝐥𝐢𝐞𝐧𝐭𝐞: %name
┊┊𖣘 𝐁𝐨𝐭: Max Bot
┊┊𖣘 𝐌𝐨𝐝𝐨: Público
┊┊𖣘 𝐅𝐞𝐜𝐡𝐚: ${fecha}
┊┊𖣘 𝐔𝐬𝐞𝐫𝐬: %totalreg
┊┊𖣘 𝐍𝐢𝐯𝐞𝐥: %level 
. .‿̩͙‿̩̩̥͙̽‿̩͙‿̩͙‿̩̩̥͙̽‿̩͙‿̩͙‿̩̩̥͙̽‿̩͙‿̩͙‿̩̩̥͙̽‿̩͙┉ˏ͛ ༝̩̩̥͙　 ҉　

༺═───────✿━━━━•─────✧─────•━━━━✿───────═༻
%readmore
`.trimStart(),
  header: '✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭*•̩̩͙✩•̩̩͙*˚୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙\n╠ • ˗ˏ✎*ೃ `%category`\n╠ ┈──✦﹀﹀|﹀﹀﹕₊˚ ✧. *. ⋆\n╠ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈',
  body: '║✶ %cmd %isPremium\n',
  footer: '╚════•.·:·.✧ ✦ ✧.·:·.*•════╝',
  after: ``,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
let tags = {
'game': '𝐃𝐈𝐕𝐄𝐑𝐒𝐈𝐎𝐍',
}
let img = 'https://i.ibb.co/qkSttKQ/file.jpg'

  try {
          // DEFAULT MENU
      let dash = global.dashmenu
          let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2

      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua

      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`

    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
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
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]

    let wib = moment.tz('America/Buenos_Aires').format('HH:mm:ss')
    let wibh = moment.tz('America/Buenos_Aires').format('HH')
    let wibm = moment.tz('America/Buenos_Aires').format('mm')
    let wibs = moment.tz('America/Buenos_Aires').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`

    let mode = global.opts['self'] ? 'Privado' : 'Publico'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, eris} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Usuario común'}`
    let platform = os.platform()

    //---------------------

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
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
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, eris, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
await m.react('🎮') 

 conn.sendMessage(m.chat, {
        text: text,
        contextInfo: {
        externalAdReply: {
        title: '𝐌𝐚𝐱-𝐁𝐨𝐭',
        body: '©𝟐𝟎𝟐𝟒 𝐉𝐨𝐬𝐭𝐢𝐧-444',
        thumbnailUrl: img,
        sourceUrl: global.canal,
        mediaType: 1,
        renderLargerThumbnail: true
        }}},
        { quoted: estilo})

  } catch (e) {
    conn.reply(m.chat, 'Lo siento, el menú tiene un error.', m)
    throw e
  }
}
handler.help = ['menugame']
handler.tags = ['main']
handler.command = ['menugame']

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Años 🗓️*\n',  mo, ' *Meses 🌙*\n', d, ' *Días ☀️*\n', h, ' *Horad 🕐*\n', m, ' *Minutos ⏰*\n', s, ' *Segundos ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('America/Buenos_Aires').format('HH')
  let res = "Despierto tan temprano? 🥱"
  if (time >= 4) {
    res = "Madrugada 🌄"
  }
  if (time >= 10) {
    res = "Mañana ☀️"
  }
  if (time >= 15) {
    res = "Tarde 🌇"
  }
  if (time >= 18) {
    res = "Noche 🌙"
  }
  return res
}