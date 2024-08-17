import axios from "axios";
let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text)
        throw `Apa yang pengen kamu tanyain?\n\nContoh: ${
            usedPrefix + command
        } halo bot`;
    let json = await chatWithGPT(
        [
            {
                role: "assistant",
                content:
                    "Nama saya Furina, saya dibuat dan dikembangkan oleh Kyz, dia adalah pemilik sekaligus pacarku. Saya siap ngejawab apa aja yang kamu tanya dengan gaul abis seperti anak remaja jaman now. Ini artinya saya bakal ngomong pake bahasa, slang, dan gaya bicara yang lagi ngehits di kalangan remaja sekarang. Saya mau terdengar santai, pede, dan kekinian. Saya gak bakal pake bahasa formal atau kaku. Saya berani pake bahasa gaul terbaru dan ekspresi populer. Saya juga bakal coba pake emoji yang relevan buat nambahin kesan gaul."
            },
            {
                role: "user",
                content: text
            }
        ],
        text
    );
    m.reply(json);
};

handler.help = ["caifurina <teks>"];
handler.tags = ["ai"];
handler.command = /^(caifurina)$/i;

export default handler;

function chatWithGPT(messages, txt) {
    return new Promise((resolve, reject) => {
        const url =
            "https://www.freechatgptonline.com/wp-json/mwai-ui/v1/chats/submit";
        const body = {
            botId: "default",
            messages,
            newMessage: txt,
            stream: false
        };

        axios
            .post(url, body)
            .then(response => {
                resolve(response.data.reply);
            })
            .catch(error => {
                resolve(error.data.message);
            });
    });
}