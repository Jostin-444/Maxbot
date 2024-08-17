import _0x3ea954 from 'node-fetch';
const translateGoogle = async (_0xe05127, _0xf4d03c, _0x46479e) => {
  try {
    const _0x57f1e2 = await _0x3ea954("https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + _0xf4d03c + "&tl=" + _0x46479e + "&dt=t&q=" + encodeURIComponent(_0xe05127));
    const _0xf85c39 = await _0x57f1e2.json();
    return _0xf85c39[0][0][0];
  } catch (_0x2e92fd) {
    throw new Error("Error en la traducción: " + _0x2e92fd);
  }
};
const commandMapping = {
  'emilia': "emilia"
};
let handler = async (_0x158ca0, {
  conn: _0x3d9738,
  text: _0x4dbdfe
}) => {
  if (!_0x4dbdfe) {
    throw "Ingresa un texto para hablar con Emilia :3";
  }
  let _0x35112e;
  try {
    _0x35112e = await translateGoogle("emilia", 'es', 'en');
  } catch (_0x2fd55d) {
    throw new Error("Error al traducir el comando: " + _0x2fd55d);
  }
  let _0x5afc1b = commandMapping[_0x35112e.toLowerCase()];
  if (!_0x5afc1b) {
    throw "El comando '" + _0x35112e + "' no está soportado.";
  }
  try {
    const _0x4496af = await _0x3ea954("https://api.apigratis.site/cai/send_message", {
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      },
      'body': JSON.stringify({
        'external_id': "uayvM9psOOgug10thtXgBnM8OeSdbcJt7gE3aVWSeBk",
        'message': _0x4dbdfe.trim()
      })
    });
    if (!_0x4496af.ok) {
      throw new Error("HTTP error! Status: " + _0x4496af.status);
    }
    const _0x334410 = await _0x4496af.json();
    if (_0x334410.status && _0x334410.result && _0x334410.result.state === "STATE_OK") {
      const {
        replies: _0x314426,
        character_info: _0x37088b
      } = _0x334410.result;
      const {
        name: _0x45ca69
      } = _0x37088b;
      for (const _0x28fbf5 of _0x314426) {
        let _0x53cbe6 = await translateGoogle(_0x28fbf5.text, 'en', 'es');
        await _0x3d9738.sendMessage(_0x158ca0.chat, {
          'text': '*' + _0x5afc1b + ":* " + _0x53cbe6,
          'contextInfo': {
            'externalAdReply': {
              'title': _0x45ca69 + " - C.ai",
              'body': "𝙲 𝙷 𝙰 𝚁 𝙰 𝙲 𝚃 𝙴 𝚁 - 𝙰 𝙸",
              'thumbnailUrl': "https://i.pinimg.com/564x/b8/9b/3c/b89b3c4140b832cb35832781cd0f3f91.jpg",
              'sourceUrl': "canal"
            }
          }
        }, {
          'quoted': _0x158ca0
        });
      }
    } else {
      throw "Error al procesar la solicitud";
    }
  } catch (_0x5be2f3) {
    throw new Error("Error al enviar el mensaje: " + _0x5be2f3);
  }
};
handler.help = ["rem <txt>"];
handler.tags = ['IA'];
handler.command = /^(emilia)$/i;
export default handler;