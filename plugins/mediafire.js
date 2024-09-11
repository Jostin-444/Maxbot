import axios from "axios";
import cheerio from "cheerio";

let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (!args[0]) return m.reply(`Ingresa el link de mediafire\nEjemplo: ${usedPrefix + command} https://www.mediafire.com/××××××××`);
	m.reply(wait);
	const { title, size, type, url } = await mediafire(args[0]);
	await conn.sendFile(m.chat, url, title, `- *Nombre:* ${title}\n- *Tamaño:* ${size}\n- *Type:* ${type}`, m, false, { mimetype: type, asDocument: true });
}
handler.help = ['mediafire2'].map(v => v + ' *<url>*')
handler.tags = ['downloader']
handler.command = ["mediafire2", "mf2"]

export default handler

async function mediafire(link) {
	return new Promise(async(resolve, reject) => {
		try {
			const res = await axios.get(link);
			const $ = cheerio.load(res.data);
			const url = $('a#downloadButton').attr('href');
			const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', '').trim();
			const title = url.split('/')[5].split("+").join(" ").split(".").reverse().slice(1).reverse().join(".");
			const type = url.split("/")[5].split('.').reverse()[0];
			resolve({
				title,
				size,
				type,
				url
			});
		} catch (err) {
			reject({
				error: err
			})
		}
	})
}