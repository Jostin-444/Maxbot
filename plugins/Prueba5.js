import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return;
if (!text) return m.reply(`🤍 Ingrse su petición`) 
let syst = `Actuarás como un bot de WhatsApp, Tu nombre es Genesis-Bot y parece haber sido creado por Angel-OFC.`

if (command == 'gemini2') {
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/gemini?query=${text}`)
let res = await gpt.json()
await conn.sendMessage(m.chat, { text: res.message,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `[ 𝗔 𝗜 - 𝗣 𝗘 𝗥 𝗨 ]`,
body: ``,
"previewType": "PHOTO",
thumbnailUrl: 'https://tinyurl.com/253dnhcr', 
sourceUrl: 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y'}}},
{ quoted: m})
}

if (command == 'copilot' || command == 'bing') {
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/bingia?query=${text}`)
let res = await gpt.json()
await m.reply(res.message)
}}
handler.help = ["gemini", "copilot"]
handler.tags = ["ai"]
handler.command = ['gemini', 'copilot']
export default handler;