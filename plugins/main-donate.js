
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `

» 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝘿𝙀𝙇 𝘽𝙊𝙏
wa.me/50242073893 

» 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈
https://www.instagram.com/jostin_max.bot

_Puedes apoyar el bot dando tu estrellita en nuestro repositorio_

» 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊
https://github.com/Jostin-444/Maxbot


> WIERBOT: Jostin-444
`
let img = 'https://i.ibb.co/ggDzWmx/file.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rcanal)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler

