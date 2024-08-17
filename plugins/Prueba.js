import _0x2fb4ec from 'node-fetch';
const translateGoogle = async (_0x3ff1ad, _0x186447, _0xf37b43) => {
  try {
    const _0xad9b49 = await _0x2fb4ec("https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + _0x186447 + "&tl=" + _0xf37b43 + "&dt=t&q=" + encodeURIComponent(_0x3ff1ad));
    const _0x5aab58 = await _0xad9b49.json();
    return _0x5aab58[0][0][0];
  } catch (_0x17287f) {
    throw new Error("Error en la traducción: " + _0x17287f);
  }
};
const commandMapping = {
  'rem': "rem"
};
let handler = async (_0x2ad26b, {
  conn: _0x179127,
  text: _0x52bc8c
}) => {
  if (!_0x52bc8c) {
    throw "Ingresa un texto para hablar con Rem :3";
  }
  let _0x5c26bb;
  try {
    _0x5c26bb = await translateGoogle("rem", 'es', 'en');
  } catch (_0x16604c) {
    throw new Error("Error al traducir el comando: " + _0x16604c);
  }
  let _0x102492 = commandMapping[_0x5c26bb.toLowerCase()];
  if (!_0x102492) {
    throw "El comando '" + _0x5c26bb + "' no está soportado.";
  }
  try {
    const _0x291ebe = await _0x2fb4ec("https://api.apigratis.site/cai/send_message", {
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      },
      'body': JSON.stringify({
        'external_id': "60P-929HwzdFJsTPosmDUNiwMYkJz8GZra6nH6nRHwo",
        'message': _0x52bc8c.trim()
      })
    });
    if (!_0x291ebe.ok) {
      throw new Error("HTTP error! Status: " + _0x291ebe.status);
    }
    const _0x45d8dd = await _0x291ebe.json();
    if (_0x45d8dd.status && _0x45d8dd.result && _0x45d8dd.result.state === "STATE_OK") {
      const {
        replies: _0x5bee22,
        character_info: _0x295f60
      } = _0x45d8dd.result;
      const {
        name: _0x11ca2d
      } = _0x295f60;
      for (const _0x1025b8 of _0x5bee22) {
        let _0x57737f = await translateGoogle(_0x1025b8.text, 'en', 'es');
        await _0x179127.sendMessage(_0x2ad26b.chat, {
          'text': '*' + _0x102492 + ":* " + _0x57737f,
          'contextInfo': {
            'externalAdReply': {
              'title': _0x11ca2d + " - C.ai",
              'body': "𝙲 𝙷 𝙰 𝚁 𝙰 𝙲 𝚃 𝙴 𝚁 - 𝙰 𝙸",
              'thumbnailUrl': "https://i.pinimg.com/564x/ea/16/c7/ea16c704d06b4efe12c9eb25eeafce95.jpg",
              'sourceUrl': "canal"
            }
          }
        }, {
          'quoted': _0x2ad26b
        });
      }
    } else {
      throw "Error al procesar la solicitud";
    }
  } catch (_0xb2f730) {
    throw new Error("Error al enviar el mensaje: " + _0xb2f730);
  }
};
handler.help = ["rem <txt>"];
handler.tags = ['IA'];
handler.command = /^(rem)$/i;
export default handler;