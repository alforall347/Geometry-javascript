let jariJari = 7;
let tinggi = 24;

let s = Math.sqrt((jariJari * jariJari) + (tinggi * tinggi));

let volume = (1/3) * Math.PI * jariJari * jariJari * tinggi;
let luasPermukaan = Math.PI * jariJari * (jariJari + s);

console.log("Kerucut");
console.log("Volume = " + volume);
console.log("Luas Permukaan = " + luasPermukaan);