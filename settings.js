require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6281324492003"
global.namaowner = "JUSTIN OFFICIAL`👻"

//======== Setting Bot & Link ========//
global.namabot = "⚡Justin Official👻" 
global.idsaluran = "120363391247252499@newsletter"
global.linkgc = '_'
global.packname = "𝐁𝐮𝐲 𝐕𝐢𝐩"
global.author = "𝐉𝐮𝐬𝐭𝐢𝐧𝐗𝐃"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========= Setting Url Foto =========//
global.image = "https://files.catbox.moe/qx2kzo.jpg"

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = ""
global.apikey = ""
global.capikey = ""

//========= Setting Payment =========//
global.dana = "083878592078"
global.gopay = "083878592078"
global.ovo = "083878592078"
global.qris = "https://img1.pixhost.to/images/6877/617045386_ramaztore.jpg"


//=========== Api Domain ===========//
global.zone1 = "-";
global.apitoken1 = "-";
global.tld1 = "-";
//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "𝐓𝐞𝐫𝐣𝐚𝐝𝐢 𝐊𝐞𝐬𝐥𝐚𝐡𝐚𝐧 ❗",
"done": "⚡𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐤𝐬", 
"wait": "⚡𝐏𝐫𝐨𝐬𝐞𝐬𝐬 𝐌𝐞𝐤𝐬", 
"group": "Fitur Ini Hanya Untuk Didalam Grup❗", 
"private": "Fitur Ini Hanya Untuk Didalam Private Chat❗", 
"admin": "Fitur Ini Hanya Untuk Admin Grup❗", 
"adminbot": "Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin❗", 
"owner": "⚡Fitur ini hanya untuk Justin Official👻", 
"developer": "⚡FITUR INI HANYA UNTUK DEV TERGANTENG (JUSTIN OFFICIAL)"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})