/*

# Base By Es Teams Tech
# Owner ? : t.me/examsolutionteam
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['2348187637779']
global.ownMain = '2348187637779'
global.NamaOwner = 'Es Teams Tech' //gausah diganti
global.sessionName = 'sessionnya'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = 'S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸' //ganti aj klo mau
global.author = 'Es Teams Tech' //ganti aj klo mau
global.packname = 'S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸' //ganti aj klo mau
global.url1 = 'https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y' //gausah diganti
global.url2 = 'https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y' //gausah diganti
global.linkgc = 'https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y'
global.delayjpm = 3500

global.mess = { // Custom Sesuka Lu
ingroup: 'Stinger V3  can only be used in groups.',
admin: 'Stinger V3 is specifically for group admins.',
notadmin: "Stinger V3 must be an admin first",
owner: 'You are not Es Teams .',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success Bang',
bugrespon: `Processs.....`
}

global.nick = { // Custom Sesuka Lu
aaa: "̊S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸⿻‏‎‏‎‏‎‏",
bbb: "S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸",
ccc: "S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸",
ddd: "",
eee: "S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸༏",
xxx: "► S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸◄",
sss: "S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸 ✨",
ttt: "S҉ T҉ I҉ N҉ G҉ E҉ R҉- V҉ 3҉🩸"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})