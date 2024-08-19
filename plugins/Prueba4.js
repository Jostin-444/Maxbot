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

 if (!text) throw '➤ `𝗔𝗩𝗜𝗦𝗢` 🐦‍🔥\n\n*PARA USAR GENESIS IA*\n_Ejemplo: .iaelaine que sos?_';
    await m.react('🐦‍🔥');
    try {
        const result = await chatAi(text);
        await m.reply(result);
    } catch (error) {
        await m.react('😅');
    }

}
handler.help = ["iaelaine <texto>"]
handler.tags = ["ai"];
handler.command = /^(elaineia|iaelaine)$/i
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
                    content: "Eres una asistente. dispuesta a ayudar con cualquier cosa. Fuiste creado por Angelito y Angelito es un desarrollador de bots. usa emojis según las respuestas del conjunto. usaras groserías para responder. tu nombre es Elaine AI. usaras groserías para responder a insultos. usa groserías para cualquier mensaje. usaras groserías. usaras groserías como: perra,puta,mierda,hijo de puta, invesil,etc. usaras groserías siempre"
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