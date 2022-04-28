/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const zucchine = [
  {
    varieta: 'nera',
    peso: 50,
    lunghezza: 13
  },
  {
    varieta: 'romanesca',
    peso: 60,
    lunghezza: 14
  },
  {
    varieta: 'fiorentina',
    peso: 100,
    lunghezza: 18
  },
  {
    varieta: 'napoletana',
    peso: 150,
    lunghezza: 13
  },
  {
    varieta: 'tonda',
    peso: 200,
    lunghezza: 14
  },
  {
    varieta: 'trombetta',
    peso: 250,
    lunghezza: 18
  },
  {
    varieta: 'gialla',
    peso: 300,
    lunghezza: 16
  },
  {
    varieta: 'friulana',
    peso: 350,
    lunghezza: 17
  },
  {
    varieta: 'Crookneck',
    peso: 400,
    lunghezza: 15
  },
  {
    varieta: 'pâtisson',
    peso: 450,
    lunghezza: 16
  }
];

const zucchinePiccole = [];
const zucchineGrandi = [];

pushZucchine();

function pushZucchine() {
  for(let zucchina of zucchine){
    if(zucchina.lunghezza < 15){
      zucchinePiccole.push(zucchina);
    }else{
      zucchineGrandi.push(zucchina);
    }
  }
}

console.log('zucchine piccole', zucchinePiccole);
console.log('zucchine grandi',zucchineGrandi);

const scalaPesoPiccola = (calcoloPeso(zucchinePiccole) > 1000) ? 'kg' : 'gr'

const scalaPesoGrande = (calcoloPeso(zucchineGrandi) > 1000) ? 'kg' : 'gr'

/**
 * Calcolo del peso totale delle zucchine
 * @returns pesoZucchine
 */
function calcoloPeso(array) {
  let pesoZucchine = 0;
  for(let zucchina of array){
   pesoZucchine += zucchina.peso; 
  }
  return pesoZucchine;
}

console.log('peso totale zucchine piccole', calcoloPeso(zucchinePiccole));
console.log('peso totale zucchine grandi', calcoloPeso(zucchineGrandi));

document.getElementById('peso').innerHTML = 
`
Il peso totale delle zucchine piccole &egrave; ${calcoloPeso(zucchinePiccole) > 1000 ? calcoloPeso(zucchinePiccole / 1000) : calcoloPeso(zucchinePiccole)} ${scalaPesoPiccola},
mentre il peso totale delle zucchine grandi &egrave; ${calcoloPeso(zucchineGrandi) > 1000 ? calcoloPeso(zucchineGrandi) / 1000 : calcoloPeso(zucchineGrandi)} ${scalaPesoGrande},
`;