import _0x4ba8d8 from 'node-fetch';
const translateGoogle = async (_0xb0e5a1, _0x54f0a3, _0x49a6b6) => {
  try {
    const _0x3777b3 = await _0x4ba8d8("https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + _0x54f0a3 + "&tl=" + _0x49a6b6 + "&dt=t&q=" + encodeURIComponent(_0xb0e5a1));
    const _0xd9e58e = await _0x3777b3.json();
    return _0xd9e58e[0][0][0];
  } catch (_0x2e7535) {
    throw new Error("Error en la traducción: " + _0x2e7535);
  }
};
const commandMapping = {
  'kurumi': "kurumi"
};
let handler = async (_0x4de82f, {
  conn: _0x3b62c8,
  text: _0x2f9c22
}) => {
  if (!_0x2f9c22) {
    throw "Ingresa un texto para hablar con kurumi :3";
  }
  let _0x435b29;
  try {
    _0x435b29 = await translateGoogle("kurumi", 'es', 'en');
  } catch (_0x29d97b) {
    throw new Error("Error al traducir el comando: " + _0x29d97b);
  }
  let _0x38f7a9 = commandMapping[_0x435b29.toLowerCase()];
  if (!_0x38f7a9) {
    throw "El comando '" + _0x435b29 + "' no está soportado.";
  }
  try {
    const _0x18f52e = await _0x4ba8d8("https://api.apigratis.site/cai/send_message", {
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      },
      'body': JSON.stringify({
        'external_id': "jNFgkSl-JTLsDM4d_twATPlFqLkQU-Odmr6h23_d1Jg",
        'message': _0x2f9c22.trim()
      })
    });
    if (!_0x18f52e.ok) {
      throw new Error("HTTP error! Status: " + _0x18f52e.status);
    }
    const _0x33093e = await _0x18f52e.json();
    if (_0x33093e.status && _0x33093e.result && _0x33093e.result.state === "STATE_OK") {
      const {
        replies: _0x33a29b,
        character_info: _0x2e28cf
      } = _0x33093e.result;
      const {
        name: _0x369b54
      } = _0x2e28cf;
      for (const _0x5c5a92 of _0x33a29b) {
        let _0x2edc21 = await translateGoogle(_0x5c5a92.text, 'en', 'es');
        await _0x3b62c8.sendMessage(_0x4de82f.chat, {
          'text': '*' + _0x38f7a9 + ":* " + _0x2edc21,
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
    } else {
      throw "Error al procesar la solicitud";
    }
  } catch (_0x1e23db) {
    throw new Error("Error al enviar el mensaje: " + _0x1e23db);
  }
};
handler.help = ["kurumi <txt>"];
handler.tags = ['IA'];
handler.command = /^(kurumi5)$/i;
handler.register = true;
export default handler;