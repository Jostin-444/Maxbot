import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

                if (!text) return m.reply('Ejemplo: .ai hola, todo bien?\n\nPuedes ingresar cualquier pregunta.')
                let res = await fetch(`https://vihangayt.me/tools/chatgpt?q=${text}`)                
                let open = await res.json()
                let ai = await open.data
                await m.reply(`${ai}`)
}
handler.help = ['gpt']
handler.tags = ['ai']
handler.command = /^(gpt)$/i
handler.limit = true
handler.premium = true

export default handler