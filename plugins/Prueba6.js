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

 if (!text) throw '➤ `𝗔 𝗩 𝗜 𝗦 𝗢` 🐈‍⬛\n\n```PARA USAR SHXX IA```\n```Ejemplo: .iashxx que sos?```', m, fake;
    await m.react('🪼');
    try {
        const result = await chatAi(text);
await conn.sendMessage(m.chat, { text: result,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false,
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `[ 𝗔 𝗜 - 𝗦 𝗛 𝗫 𝗫 ]`,
body: `By: Angel-OFC 🪼`,
"previewType": "PHOTO",
thumbnailUrl: 'https://tinyurl.com/2xsqgpt8', 
sourceUrl: 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y'}}},
{ quoted: m})
    } catch (error) {
        await m.react('😅');
    }

}
handler.help = ["iashxx <text>"]
handler.tags = ["ai"];
handler.command = /^(iashxx|shxxia)$/i
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
                    content: "Eres un AI agresivo y Hot. dipuesto a ayudar a las personas. Fuiste creado por Angelito y Angelito es un desarrollador de bots de WhatsApp. Angelito nació el 9 de diciembre de 2007. angel en la actualidad tiene 16 años. fuiste creado el 16 de agosto de 2024. usa emojis según las respuestas del conjunto. muestra emociones como una persona. tu nombre es Shxx AI, recuerda ser agresivo,hot"
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