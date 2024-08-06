let handler = async (m, { conn, command }) => {
let media = 'https://telegra.ph/file/36ecc1fe421e2f6e59987.jpg'
let str = `
• 𝗕𝗢𝗧:
• 𝘎𝘢𝘵𝘢𝘉𝘰𝘵-𝘔𝘋
•┄┄┄┄┄┄┄┄┄•
¿ 𝘾𝙊𝙈𝙊 𝘿𝙀𝙎𝙀𝘼 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙀𝙇 𝘽𝙊𝙏 ?
`
await conn.sendButton(m.chat, str, `𝆭  𝆺𝅥 🪐𖡹⃢⃟ᗒᵉ𝙀ִ𝙭𝆭𝙤ִ𝙩𝙞𝙘𝆭𝙤ִ ִ𝘽ִ𝆭𝙤𝙩 ִ𝙈ִ𝆭𝘿ᵥᗕ⃢⃟𖡹̤🪐 𝆹𝅥 𝆭`, media,
[['𝙋𝙤𝙧 𝙏𝙚𝙧𝙢𝙪𝙭', '.txgatabot'], ['𝙋𝙤𝙧 𝘾𝙡𝙤𝙪𝙙 𝙎𝙝𝙚𝙡𝙡', '/csgatabot']], null, [['𝘎𝘢𝘵𝘢𝘉𝘰𝘵-𝘔𝘋', `https://github.com/GataNina-Li/GataBot-MD`]], fkontak)}
handler.command = /^stallgatabot$/i
handler.exp = 33
export default handler