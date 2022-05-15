import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*𝙷𝙾𝙻𝙰 ✨${name}✨, 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙳𝙴 𝚃𝙷𝙴  ixxi - 𝙱𝙾𝚃*

*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*

*📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*

*📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*
╭────────────────ꕥ
├─𝕁𝕌𝔼𝔾𝕆𝕊
├─Ejemplo:
├─.puto @sebastian
├─ ❏ _.${usedPrefix}mates
├─ ❏ _.${usedPrefix}ppt *<papel / tijera /piedra>*
├─ ❏ _.${usedPrefix}prostituto
├─ ❏ _.${usedPrefix}prostituta 
├─ ❏ _.${usedPrefix}gay2
├─ ❏ _.${usedPrefix}puto
├─ ❏ _.${usedPrefix}pajera
├─ ❏ _.${usedPrefix}pajero
├─ ❏ _.${usedPrefix}lesbiana
╰────────────────✾

╭────────────────ꕥ
┃ *REPORTA FALLOS DE COMANDOS*
┃ *Reporta cualquier comando que falle*   
┃ *para poder solucionarlo*
╰────────────────✾
╭────────────────ꕥ
├─ ❏ _.bug *tal comando con fallas*
├─ ❏ _.report *tal comando con fallas*
├─ ❏ _.reporte *tal comando con fallas*
╰────────────────✾
╭────────────────ꕥ
┃ *NÚMERO DEl PROPIETARIO*
╰────────────────✾
├─ ❏ _.owner
├─ ❏ _.contacto
╰────────────────✾
╭────────────────ꕥ
┃ *UNE UN BOT A TU GRUPO*
╰────────────────✾
╭────────────────ꕥ
├─ ❏ _.join *enlace del grupo*
├─ ❏ _.unete *enlace del grupo* 
├─ ❏ _.bots *ver bots*
╰────────────────✾
╭────────────────ꕥ
┃ *TOPS*
╰────────────────✾
╭────────────────ꕥ
├─ ❏ _.top10gays | topgay
├─ ❏ _.toplind@s | toplind@
├─ ❏ _.topput@s | toppt
├─ ❏ _.toppajer@s | toppajeros
├─ ❏ _.topotakus | toptakus
╰────────────────✾
╭────────────────ꕥ
┃ 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ
╰────────────────✾
╭────────────────ꕥ
├─ ❏ _${usedPrefix}enable *welcome*_
├─ ❏ _${usedPrefix}disable *welcome*_
├─ ❏ _${usedPrefix}enable *modohorny*_
├─ ❏ _${usedPrefix}disable *modohorny*_
├─ ❏ _${usedPrefix}enable *antilink*_
├─ ❏ _${usedPrefix}disable *antilink*_
├─ ❏ _${usedPrefix}enable *antilink2*_
├─ ❏ _${usedPrefix}disable *antilink2*
├─ ❏ _${usedPrefix}enable *detect*_
├─ ❏ _${usedPrefix}disable *detect*_
├─ ❏ _${usedPrefix}enable *audios*_
├─ ❏ _${usedPrefix}disable *audios*
├─ ❏ _${usedPrefix}enable *autosticker*_
├─ ❏ _${usedPrefix}disable *autosticker*_
╰────────────────✾
╭────────────────ꕥ
┃ *DESCARGAS*
╰────────────────✾
╭────────────────ꕥ
├─ ❏ _imagen | image | gimage *texto*_
├─ ❏ _ytsearch *texto*_
├─ ❏ _dlaudio *link yt*_
├─ ❏ _dlvid *link yt*_
├─ ❏ _ytmp3 *link yt*_
├─ ❏ _ytmp4 *link yt*_
├─ ❏ _play *titulo del audio*_
├─ ❏ _play2 *titulo del video*_
├─ ❏ _play3 *titulo del audio/video*_
├─ ❏ _play6 *artista y titulo*_
├─ ❏ _letra *nombredelacanción*_
├─ ❏ _google *texto*_
├─ ❏ _googlef *texto*_
╰────────────────✾
╭────────────────ꕥ
┃ 𝔾ℝ𝕌ℙ𝕆𝕊 
╰────────────────✾
╭────────────────ꕥ
├─ ❏ _admins *texto*_ 
├─ ❏ _añadir *numero*_
├─ ❏ _sacar @tag_ 
├─ ❏ _promote_ 
├─ ❏ _demote_
├─ ❏ _grupo *abierto / cerrado*_
├─ ❏ _enable delete_
├─ ❏ _disable delete_ 
├─ ❏ _link_
├─ ❏ _hidetag *texto*_
├─ ❏ _infogrupo_
├─ ❏ _invocar *texto*_
├─ ❏ _del 
├─ ❏ _fantasmas_
├─ ❏ _banchat_
├─ ❏ _unbanchat_
╰────────────────✾
╭────────────────ꕥ
┃ *CREADORES*
╰────────────────✾
╭────────────────ꕥ
├─ ❏ _s_
├─ ❏ _${usedPrefix}toimg 
├─ ❏ _${usedPrefix}tomp3 
├─ ❏ _${usedPrefix}toptt 
├─ ❏ _${usedPrefix}tovideo 
├─ ❏ _${usedPrefix}tourl 
├─ ❏ _${usedPrefix}tts 
╰────────────────✾
╭────────────────ꕥ
┃ *ESTILOS DE TEXTOS*
┃ *¡Una gran variedad de estilos de textos!*
╰────────────────✾
╭────────────────ꕥ
├─ ❏ _.style *texto*_
├─ ❏ _.estilo *texto*_
╰────────────────✾
╭────────────────ꕥ
┃ *SUBIR ESTADOS A IXXI BOT*
┃ *¡Sube estados!*
╰────────────────✾
╭────────────────ꕥ
├─ ❏ _.subirestado 
╰────────────────✾
╭────────────────ꕥ
┃ *COMANDOS +18*
┃
┃ *NO nos hacemos responsables*
╰────────────────✾
╭────────────────ꕥ
├─ ❏ _.labiblia_
╰────────────────✾
╭────────────────ꕥ
┃ *EFECTOS PARA AUDIOS*
╰────────────────✾
╭────────────────ꕥ
├─🎤 _${usedPrefix}bass_
├─🎤 _${usedPrefix}blown_
├─🎤 _${usedPrefix}deep_
├─🎤 _${usedPrefix}earrape_
├─🎤 _${usedPrefix}fast_
├─🎤 _${usedPrefix}fat_
├─🎤 _${usedPrefix}nightcore_
├─🎤 _${usedPrefix}reverse_
├─🎤 _${usedPrefix}robot_
├─🎤 _${usedPrefix}slow_
├─🎤 _${usedPrefix}smooth_
├─🎤 _${usedPrefix}tupai_
╰────────────────✾

╭────────────────ꕥ
┃ *CHAT ANONIMO*
╰────────────────✾
╭────────────────ꕥ
├─ ❏ _.start_
├─ ❏ _.next_
├─ ❏ _.leave_
╰────────────────✾
╭────────────────ꕥ
┃ *CONVIERTETE EN BOT*
╰────────────────✾
╭────────────────ꕥ
├─ ❏ _stop_
├─ ❏ _serbot_
├─ ❏ _getcode_
╰────────────────✾
╭────────────────ꕥ
┃𝔸𝕌𝔻𝕀𝕆𝕊
╰────────────────✾
╭────────────────ꕥ
├─_Quien es tu sempai botsito 7w7_
├─_Te diagnostico con gay_
├─_A nadie le importa_
├─_Fiesta del admin_
├─_Fiesta del administrador_ 
├─_Vivan los novios_
├─_Feliz cumpleaños_
├─_Noche de paz_
├─ _Buenos dias_
├─ _Buenos tardes_
├─ _Buenos noches_
├─ _Audio hentai_
├─ _Chica lgante_
├─ _Feliz navidad_
├─ _Vete a la vrg_
├─ _Pasa pack Bot_
├─_Atencion grupo_
├─ _Marica quien_
├─_Murio el grupo_
├─ _Oh me vengo_
├─ _Viernes_
╰────────────────✾
╭────────────────ꕥ
┃𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸
╰────────────────✾
╭────────────────ꕥ
├─_${usedPrefix}balance_
❏_${usedPrefix}claim_
❏_${usedPrefix}top_
❏_${usedPrefix}levelup_
❏_${usedPrefix}myns_
❏_${usedPrefix}perfil_
❏_${usedPrefix}work_
❏_${usedPrefix}minar_
❏_${usedPrefix}buy_
❏_${usedPrefix}buyall_
❏_${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
❏_${usedPrefix}verificar_
├─_${usedPrefix}unreg *<numero de serie>
╰────────────────✾
╭────────────────ꕥ
┃ 𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊
╰────────────────✾
╭────────────────ꕥ
👑 _${usedPrefix}enable *restrict*_
👑 _${usedPrefix}disable *restrict*_
👑 _${usedPrefix}enable *autoread*_
👑 _${usedPrefix}disable *autoread*_
👑 _${usedPrefix}enable *public*_
👑 _${usedPrefix}disable *public*_
👑 _${usedPrefix}enable *pconly*_
👑 _${usedPrefix}disable *pconly*_
👑 _${usedPrefix}enable *gconly*_
👑 _${usedPrefix}disable *gconly*_
👑 _${usedPrefix}banchat2_
👑 _${usedPrefix}unbanchat2_
👑 _${usedPrefix}banuser *<@tag>*_
👑 _${usedPrefix}unbanuser *<@tag>*_
👑 _${usedPrefix}banuser *<@tag>*_
👑 _${usedPrefix}bc *<texto>*_
👑 _${usedPrefix}bcchats *<texto>*_
👑 _${usedPrefix}bcgc *<texto>*_
👑 _${usedPrefix}cleartpm_
👑 _${usedPrefix}restart_
👑 _${usedPrefix}update_
👑 _${usedPrefix}addprem *<@tag>*_
👑 _${usedPrefix}delprem *<@tag>*_
👑 _${usedPrefix}listprem_
👑 _${usedPrefix}añadirdiamantes *<@tag> <cantidad>*_
👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/ixi666/Bot-2', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '/donasi'],
['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
], m,)
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
