let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", "volvo", "skoda", "nissan", "ferrari", "volkswagen", "alfa romeo", "mitsubishi"];


//1) Icinde "o" harfi gecen arabalari ve bu arabalarin sayisini bulun.
let o = 0;
for (i = 0; i < cars.length; i++) {
    if (cars[i].includes("o")) {
        o += 1
    }
}
let h1 = document.querySelector("h1")
h1.innerHTML = o + " tane O iceren araba var"

console.log(o)

//2) Icinde iki defa "o" harfi gecen arabalarin sayisini bulun.
let sayac = 0;

for (let i = 0; i < cars.length; i++) {
  let kelime = cars[i];
  let oHarfiSayisi = kelime.split('').filter((harf) => harf === 'o').length;
  
  if (oHarfiSayisi === 2) {
    sayac++;
  }
}

console.log("Dizide 2 tane 'o' harfi içeren kelime sayısı: " + sayac);

//3) Araba isim uzunlugu 5'den kücük olan arabalari listeleyin.

for (i = 0; i < cars.length; i++) {
    if (cars[i].length<5) {
       console.log("5den kucuk arabalar "+cars[i])
    }
}


//6) Ismi icinde "o" ve "a" gecen arabalari bulunuz.

for (i = 0; i < cars.length; i++) {
    if ((cars[i].includes("o") ) && (cars[i].includes("a"))) {
        console.log("a ve o    "+cars[i])
    }
}

//7) Ismi icinde "o" veya "i" gecen arabalari bulunuz.
for (i = 0; i < cars.length; i++) {
    if ((cars[i].includes("o") ) || (cars[i].includes("i"))) {
        console.log("o veya i   "+cars[i])
    }
}


 
  
  
  