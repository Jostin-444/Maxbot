// Creditos del codigo a @usxr_angelito //
/* GitHub: https://github.com/Angelito-OFC*/
import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
  const groupName = (await conn.groupMetadata(m.chat)).subject;
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `❱❱ 𝗔𝗩𝗜𝗦𝗢 𝗚𝗘𝗡𝗘𝗦𝗜𝗦 ❰❰\n\n🐈‍⬛ *${usuario}*\n» 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗢 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘:\n\n» *${m.messageStubParameters[0]}*`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `❱❱ 𝗔𝗩𝗜𝗦𝗢 𝗚𝗘𝗡𝗘𝗦𝗜𝗦 ❰❰\n\n🐈‍⬛ *${usuario}* \n» 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗢 𝗟𝗔 𝗙𝗢𝗧𝗢`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `❱❱ 𝗔𝗩𝗜𝗦𝗢 𝗚𝗘𝗡𝗘𝗦𝗜𝗦 ❰❰\n\n🐈‍⬛ *${usuario}*\n» 𝗠𝗢𝗗𝗜𝗙𝗜𝗖𝗢 𝗟𝗔 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `🔒 𝗔𝗛𝗢𝗥𝗔 *${m.messageStubParameters[0] == 'on' ? '𝗦𝗢𝗟𝗢 𝗔𝗗𝗠𝗜𝗡𝗦' : '𝗧𝗢𝗗𝗢𝗦'}* 𝗣𝗨𝗘𝗗𝗘𝗡 𝗘𝗗𝗜𝗧𝗔𝗥 𝗟𝗔 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `❱❱ 𝗔𝗩𝗜𝗦𝗢 𝗚𝗘𝗡𝗘𝗦𝗜𝗦 ❰❰\n\n» 𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 𝗘𝗦𝗧𝗔 ${m.messageStubParameters[0] == 'on' ? '𝗖𝗘𝗥𝗥𝗔𝗗𝗢 🐈‍⬛' : '𝗔𝗕𝗜𝗘𝗥𝗧𝗢 🐈‍⬛'}\n ${m.messageStubParameters[0] == 'on' ? '𝗦𝗢𝗟𝗢 𝗔𝗗𝗠𝗜𝗡𝗦 𝗣𝗨𝗘𝗗𝗘𝗡 𝗘𝗦𝗖𝗥𝗜𝗕𝗜𝗥' : '𝗬𝗔 𝗣𝗨𝗘𝗗𝗘𝗡 𝗘𝗦𝗖𝗥𝗜𝗕𝗜𝗥 𝗧𝗢𝗗𝗢𝗦'} 𝗘𝗡 𝗘𝗦𝗧𝗘 𝗚𝗥𝗨𝗣𝗢`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `❱❱ 𝗔𝗩𝗜𝗦𝗢 𝗚𝗘𝗡𝗘𝗦𝗜𝗦 ❰❰\n\n🐈‍⬛ *@${m.messageStubParameters[0].split`@`[0]}*\n » 𝗔𝗛𝗢𝗥𝗔 𝗘𝗦 𝗔𝗗𝗠𝗜𝗡.:\n\n» 𝗗𝗘: ${groupName}\n\n» 𝗔𝗖𝗖𝗜𝗢𝗡 𝗥𝗘𝗔𝗟𝗜𝗭𝗔 𝗣𝗢𝗥:\n🐈‍⬛ *${usuario}*`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `❱❱ 𝗔𝗩𝗜𝗦𝗢 𝗚𝗘𝗡𝗘𝗦𝗜𝗦 ❰❰\n\n 🐈‍⬛ *@${m.messageStubParameters[0].split`@`[0]}*\n » 𝗗𝗘𝗝𝗔 𝗗𝗘 𝗦𝗘𝗥 𝗔𝗗𝗠𝗜𝗡 𝗗𝗘:\n\n» 𝗚𝗥𝗨𝗣𝗢: ${groupName}\n\n» 𝗔𝗖𝗖𝗜𝗢𝗡 𝗥𝗘𝗔𝗟𝗜𝗭𝗔 𝗣𝗢𝗥:\n🐈‍⬛ *${usuario}*`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} 𝗖𝗔𝗠𝗕𝗜𝗢 𝗟𝗔 𝗗𝗨𝗥𝗔𝗖𝗜𝗢𝗡 𝗗𝗘 𝗟𝗢𝗦 𝗠𝗘𝗡𝗦𝗔𝗝𝗘𝗦 𝗧𝗘𝗠𝗣𝗢𝗥𝗔𝗟𝗘𝗦 𝗔: *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗢 𝗟𝗢𝗦 𝗠𝗘𝗡𝗦𝗔𝗝𝗘𝗦 𝗧𝗘𝗠𝗣𝗢𝗥𝗔𝗟𝗘𝗦.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}