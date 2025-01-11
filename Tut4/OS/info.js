const { log } = require('console');
const os = require('os');

let plat = os.platform();
console.log("PlatForm ", plat);

let user = os.userInfo();
console.log("User Info ", user);

let arc = os.arch();
console.log('Architecture ', arc);

let rele = os.release();
console.log("Release ", rele);

let home = os.homedir();
console.log("home directory ", home);

let totalMemory = os.totalmem();
console.log("Total Memory ", totalMemory);

let free = os.freemem();
console.log("Free Memory ", free);

let cpu = os.cpus();
console.log("CPU ", cpu);

let len = os.cpus().length;
console.log("length ", len);

let net = os.networkInterfaces();
console.log("NetWork ", net);

let up = os.uptime();
console.log("UpTime ", up);

let tm = os.tmpdir();
console.log("TMdir ",tm);

console.log(os)





