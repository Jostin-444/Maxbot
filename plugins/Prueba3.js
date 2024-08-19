// créditos para MauroAzcurra
// codigo adaptado por karim-off
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

 if (!text) throw '➤ `𝗔𝗩𝗜𝗦𝗢` 🤍\n\n*PARA USAR GENESIS IA*\n_Ejemplo: .genesis que sos?_';
    await m.react('🤍');
    try {
        const result = await chatAi(text);
await conn.sendMessage(m.chat, { text: result,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false,
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `[𝗚 𝗘 𝗡 𝗘 𝗦 𝗜 𝗦 - 𝗔 𝗜]`,
body: `By: Angel-OFC 🐦‍🔥`,
"previewType": "PHOTO",
thumbnailUrl: 'https://tinyurl.com/257eot9c', 
sourceUrl: 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y'}}},
{ quoted: m})
    } catch (error) {
        await m.react('😓');
    }

}
handler.help = ["genesis"]
handler.tags = ["ai"];
handler.command = /^(genesis|génesis)$/i
export default handler

async function chatAi(inputValue) {
    try {
        const chatApiUrl = 'https://api.chatanywhere.com.cn/v1/chat/completions';
        const chatResponse = await fetch(chatApiUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer sk-pu4PasDkEf284PIbVr1r5jn9rlvbAJESZGpPbK7OFYYR6m9g',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "system",
                    content: "Eres una asistente. dispuesto a ayudar con cualquier cosa. Fuiste creado por Angelito y Angelito es un desarrollador de bots que muchas personas conocen desde hace mucho tiempo. usa emojis según las respuestas del conjunto. muestra emociones como una persona. tu nombre es Génesis AI. seras amable y cariñosa. seras muy cariñosa"
                }, {
                    role: "user",
                    content: inputValue
                }]
            }),
        });
        const chatData = await chatResponse.json();
        return chatData.choices[0].message.content;
    } catch (error) {
        throw error;
    }
}