/*═════════•°•⚠️•°•═════════•
[❗] Ingin Full Code No Enc??
📲 Hub: https://t.me/kyzoffc (𝗞𝘆𝘇𝗥𝘆𝘇𝘇) 
🌐 Maker: https://whatsapp.com/channel/0029VaRI1OB2P59cTdJKZh3q
•═══════════════════════*/

import _0x21cc36 from 'axios';
let handler = async (_0x5bd73e, {
  conn: _0x34a9ef,
  text: _0x743ff9,
  usedPrefix: _0x4f125f,
  command: _0x587a1c
}) => {
  if (!_0x743ff9) {
    return _0x5bd73e.reply("Kamu pengen tanya apa?");
  }
  let _0x4a3d86 = new Date(new Date() + 0x36ee80);
  const _0x1aa15d = new Date().toLocaleString("es", {
    'timeZone': "Asia/Jakarta"
  });
  let _0x5ae1f8 = _0x4a3d86.toLocaleDateString('id', {
    'weekday': "long"
  });
  let _0x2c5326 = _0x4a3d86.toLocaleDateString('id', {
    'day': "numeric",
    'month': "long",
    'year': 'numeric'
  });
  let _0x3075ae = (await _0x34a9ef.getName(_0x5bd73e.sender)) ? await _0x34a9ef.getName(_0x5bd73e.sender) : "Orang";
  let _0x371a57;
  if (_0x5bd73e.sender === packname + "@s.whatsapp.net") {
    _0x371a57 = "Kyz";
  } else {
    _0x371a57 = _0x3075ae;
  }
  let _0x3e3d0e = "Jam kamu adalah jam " + _0x1aa15d + ". tanggal kamu adalah tanggal " + _0x2c5326 + ". hari kamu adalah hari " + _0x5ae1f8 + ", tempat tinggal kamu di Indonesia dan di kota Palembang wilayah Sumsel 🤫";
  let _0x4ca93c = "Nama kamu adalah furina 😆. nama pencipta dan suami mu adalah Kyz 😘.\nkamu memiliki karakter dan sifat seperti ramah 😊, sopan 🙏, gaya berbicara dengan benar dan asik ke semuaa orang😝. jangan lupa gunakan emoji ketika membalas pertanyaan seseorang 😉 😙. jika orang lain bertanya seperti jam, tanggal, hari 😊, dan tempat kamu berada jawab seperti " + _0x3e3d0e + ". Ini adalah  " + _0x371a57 + ", jika nama orang yang sedang bertanya adalah Kyz sambutlah dengan " + "Kamu adalah Developer kuh~. Hai Sayangku developer kuhh🥰😘. Darimana saja niih? 😚. jika kamu ga muncul aku kangen kamu loh sayang🥺" + " dan jika bukan sebut saja namanya " + _0x371a57;
  try {
    let _0x28646d = await _0x21cc36.get("https://aemt.me/prompt/gpt?prompt=" + encodeURIComponent(_0x4ca93c) + "&text=" + _0x743ff9);
    let _0x3d46a1 = _0x28646d.data.result;
    await _0x5bd73e.reply(_0x3d46a1);
  } catch (_0xa8ad8e) {
    throw "Aduh sepertinya Furina ngga bisa kasi datanya deh😅";
  }
};
handler.command = ["aifurina", "caifurina"];
handler.tags = ['ai'];
handler.command = /^((ai|cai)furina|furina?)$/i;
export default handler;