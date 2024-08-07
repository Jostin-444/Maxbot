var handler = async (m) => {

let tqto = `👑 *Creador*
⬡ *Angel-OFC*
https://github.com/Angelito-OFC

💫 *Colaboradores*
⬡ *Maxz XB* 
⬡ *Alermz XB*
⬡ *Sebas XB*

_Envie "colaboradores" para obtener el enlace del perfil de GitHub de los colaboradores_`

conn.reply(m.chat, tqto, m, fake, )

handler.before = async m => {

if (/^colaboradores|Colaboradores$/i.test(m.text) ) {
let texto = `🌟 *GitHub - Colaboradores*

⬡ https://github.com/Diego-YL-177
⬡ https://github.com/AzamiJs
⬡ *https://github.com/matias-crypto*

_Envie "cc" Para Obtener El Contacto De Los Colaboradores_`

conn.reply(m.chat, texto, m, fake, )
}

if (/^cc$/i.test(m.text) ) {
let contacto = `🌟 *Contacto - Colaboradores* 

⬡ *Azami*
@5214434703586

⬡ *Diego*
@573012482597

⬡ *matias-crypto*
@5492215034412`

m.reply(contacto, m.chat, { mentions: conn.parseMention(contacto)})}
}

}
handler.help = ['tqto', 'creditos', 'credits', 'thanks', 'thanksto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

handler.register = true

export default handler