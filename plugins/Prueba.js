import 'fs';
import { generateWAMessageFromContent, generateWAMessageContent } from '@whiskeysockets/baileys';
let handler = async (_0x486178, {
  conn: _0x3101e3
}) => {
  let _0x2aa1dd = global.nomorown;
  let _0x49dbad = global.nomorbot;
  let _0x42f4a2 = "*Halo Kak @" + _0x486178.sender.split`@`[0x0] + "*\n\n*[ BERIKUT OWNER SAYA ]*\n" + _0x2aa1dd + " [ " + nameown + " ]\n";
  const _0x42e9b0 = '' + global.thumb;
  async function _0x4fb118(_0x108e21) {
    const {
      imageMessage: _0x8e7f60
    } = await generateWAMessageContent({
      'image': {
        'url': _0x108e21
      }
    }, {
      'upload': _0x3101e3.waUploadToServer
    });
    return _0x8e7f60;
  }
  let _0x69841b = generateWAMessageFromContent(_0x486178.chat, {
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'body': {
            'text': _0x42f4a2
          },
          'contextInfo': {
            'mentionedJid': _0x3101e3.parseMention(_0x42f4a2),
            'quoted': [_0x486178],
            'isForwarded': true,
            'forwardingScore': 0x1869f,
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "120363247149539361@newsletter",
              'newsletterName': namebot + " || Powered By " + nameown,
              'serverMessageId': 0xcb
            }
          },
          'carouselMessage': {
            'cards': [{
              'header': {
                'imageMessage': await _0x4fb118(_0x42e9b0),
                'hasMediaAttachment': true
              },
              'body': {
                'text': "\n     「 ```[ OWNER FURINA ]``` 」\n     \n*[ " + nameown + " ]*\n - Jangan Chat Yang Aneh Aneh\n - Jangan Telpon/Call Owner \n - Chat Langsung ke intinya aja\n - Ada Fitur Error? Laporin Kesini\n"
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{\"display_text\":\"Cʜᴀᴛ ᴏᴡɴᴇʀ \",\"url\":\"https://wa.me/" + _0x2aa1dd + "\",\"merchant_url\":\"https://wa.me/" + _0x2aa1dd + "\"}"
                }]
              }
            }, {
              'header': {
                'imageMessage': await _0x4fb118(_0x42e9b0),
                'hasMediaAttachment': true
              },
              'body': {
                'text': "\n          「 ```[ NOMOR FURINA ]``` 」\n          \n*[ " + namebot + " ]*\n - Jangan Spam Bot\n - Jangan Telpon/Call Bot \n - Gausah Chat Yg Aneh Aneh\n - Sewa bot Dll Chat Owner\n"
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{\"display_text\":\"Cʜᴀᴛ ʙᴏᴛ\",\"url\":\"https://wa.me/" + _0x49dbad + "\",\"merchant_url\":\"https://wa.me/" + _0x49dbad + "\"}"
                }]
              }
            }],
            'messageVersion': 0x1
          }
        }
      }
    }
  }, {
    'quoted': _0x486178
  });
  await _0x3101e3.relayMessage(_0x69841b.key.remoteJid, _0x69841b.message, {
    'messageId': _0x69841b.key.id
  });
};
handler.help = ["owner *[my owner]*"];
handler.tags = ["info"];
handler.command = /^(owner5)$/i;
export default handler;