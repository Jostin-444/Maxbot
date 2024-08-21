var handler  = async (m, { conn }) => {

let texto = `🤍 *Instalación de GenesisBot-MD*

☕ Dudas: ${creador}
☕ Tutoríal: *¡Pronto!*

*Comandos de instalación via Termux ♣️*

termux-setup-storage

apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn

git clone https://github.com/Angelito-OFC/GenesisBot-Pro && cd GenesisBot-MD

yarn install

npm install

npm update

npm start

_Utilice "comandos" para enviarle los comandos uno por uno 🤍_

_Utilice ".olympus o .corinplus" para enviarle la instalación por cualquiera de los 2 *Hosting* 🤍_`

conn.reply(m.chat, texto, m, rcanal )

handler.before = async m => {

if (/^comandos$/i.test(m.text) ) {
m.reply('termux-setup-storage')
await delay(1000 * 1)
m.reply('apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn')
await delay(1000 * 1)
m.reply('git clone https://github.com/Angelito-OFC/GenesisBot-Pro && cd GenesisBot-MD')
await delay(1000 * 1)
m.reply('yarn install')
await delay(1000 * 1)
m.reply('npm install')
await delay(1000 * 1)
m.reply('npm update')
await delay(1000 * 1)
m.reply('npm start')
}

await delay(2000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/18969886b4317d985c1f3.jpg'}, caption: ''}, {quoted: fkontak})
await delay(1000 * 1)
conn.sendMessage(m.chat, {image: {url: 'https://telegra.ph/file/c24470edcbe5e250b5089.png'}, caption: ''}, {quoted: fkontak})
}
}

}
handler.help = ['instalarbot']
handler.tags = ['main']
handler.command = /^(instalarbot|instalarbot)/i

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
