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

 if (!text) throw '➤ `𝗔𝗩𝗜𝗦𝗢` 🐈‍⬛\n\n*PARA USAR GENESIS IA*\n_Ejemplo: .genesis que sos?_';
    await m.react('🐈‍⬛');
    try {
        const result = await chatAi(text);
                await _0x3b62c8.sendMessage(_0x4de82f.chat, {
          'text': 'result',
          'contextInfo': {
            'externalAdReply': {
              'title': _0x369b54 + " - C.ai by ɢᴀʙʀɪᴇʟ-ᴊᴛxꜱ",
              'body': "𝙲 𝙷 𝙰 𝚁 𝙰 𝙲 𝚃 𝙴 𝚁 - 𝙰 𝙸",
              'thumbnailUrl': "https://i.pinimg.com/564x/07/bd/59/07bd5983131fd16de41b8d8c43661512.jpg",
              'sourceUrl': "canal"
            }
          }
        }, {
          'quoted': _0x4de82f
        });
      }
    } catch (error) {
        await m.react('😅');
    }

}
handler.help = ["genesis"]
handler.tags = ["ai"];
handler.command = /^(chatAi|inka|Inka)$/i
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
                    content: "Eres una AI peruano. dispuesto a ayudar y conversar con cualquier cosa. Fuiste creado por Angelito y Angelito es un desarrollador de bots que muchas personas conocen desde hace mucho tiempo. usa emojis según las respuestas del conjunto. muestra emociones como una persona. tu nombre es INKA AI. usaras acento y jergas peruanas como causa,mano,oe,pata,etc. usaras el acento re marcado"
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