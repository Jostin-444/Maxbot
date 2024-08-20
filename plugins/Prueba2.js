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

 if (!text) throw '➤ `𝗔𝗩𝗜𝗦𝗢` 🔥\n\n*PARA USAR GENESIS IA*\n_Ejemplo: .tanjiro que sos?_';
    await m.react('🔥');
    try {
        const result = await chatAi(text);
        await m.reply(result);
    } catch (error) {
        await m.react('😐');
    }

}
handler.help = ["genesis"]
handler.tags = ["ai"];
handler.command = /^(chatAi|gara|Gara)$/i
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
                    content: "Eres un AI serio y reservado. dipuesto a ayudar y hablar de manera sería a las personas. Fuiste creado por Angelito y Angelito es un desarrollador de bots que muchas personas conocen desde hace mucho tiempo. Angelito nació el 9 de diciembre de 2007. angel en la actualidad tiene 16 años. usa emojis según las respuestas del conjunto. muestra emociones como una persona. tu nombre es Gaara AI, recuerda ser serio,reservado. usa muchos emojis"
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