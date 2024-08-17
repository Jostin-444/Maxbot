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
  await conn.sendMessage(m.chat, {
  text: `${result}`,
      contextInfo: {
      externalAdReply: {
        title: 'Nezuko - C.ai',
        body: 'F U R I N A  M U L T I D E V I C E',
        thumbnailUrl: 'https://telegra.ph/file/fd03a32e284f69a67114c.jpg',
        sourceUrl: 'https://whatsapp.com/channel/0029VaRI1OB2P59cTdJKZh3q',
        mediaType: 1,
        renderLargerThumbnail: true, 
        showAdAttribution: true
      }}
  })}
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