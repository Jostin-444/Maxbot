let handler = m => m
handler.all = async function (m) {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let chat = global.db.data.chats[m.chat]

if (/^araara|ara ara|ara$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/audios/Ara.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })}    

if (!chat.isBanned && chat.audios && m.text.match(/(fino señores)/gi)) {
let vn = './media/audios/fino.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })} 

if (!chat.isBanned && chat.audios && m.text.match(/(bañate|Bañate|banate)/gi)) {    
let vn = './media/audios/Banate.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })} 

if (!chat.isBanned && chat.audios && m.text.match(/(buenos dias|Buenos dias)/gi)) {    
let vn = './media/audios/Buenos-dias-2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })}     

if (!chat.isBanned && chat.audios && m.text.match(/(diagnóstico|diagnóstico gay)/gi)) {    
let vn = './media/audios/DiagnosticadoConGay.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })}     

if (!chat.isBanned && chat.audios && m.text.match(/(elmo|elmoo|elmooo)/gi)) {    
let vn = './media/audios/Elmo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })}

if (!chat.isBanned && chat.audios && m.text.match(/(puto|es puto|el puto)/gi)) {    
let vn = './media/audios/Es putoo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })}

if (!chat.isBanned && chat.audios && m.text.match(/(gemido|gimeme)/gi)) {    
let vn = './media/audios/gemi2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })}

if (!chat.isBanned && chat.audios && m.text.match(/(pobre perra|perra|pobre)/gi)) {    
let vn = './media/audios/hay-pobre-perra.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })}

if (!chat.isBanned && chat.audios && m.text.match(/(manco|manquito|Manco)/gi)) {    
let vn = './media/audios/manco.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })}

if (!chat.isBanned && chat.audios && m.text.match(/(miau|Miau|Gata)/gi)) {    
let vn = './media/audios/miau.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })}

if (!chat.isBanned && chat.audios && m.text.match(/(traka|traka traka|Trakaa)/gi)) {    
let vn = './media/audios/traka.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })}

if (!chat.isBanned && chat.audios && m.text.match(/(turip|turip ip|Turip)/gi)) {    
let vn = './media/audios/turip.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })}

if (!chat.isBanned && chat.audios && m.text.match(/(himno potaxie)/gi)) {    
let vn = './media/audios/himno-potaxie.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true })}


return !0 }
handler.tags = ['audios']
handler.help = ['ara ara','fino señores','bañate','buenos dias','diagnóstico gay','elmo','puto','gemido','pobre perra','manco','miau','traka','turip ip','himno potaxie']
handler.register = true
export default handler