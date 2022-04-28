/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [
  {
    varieta: 'nera',
    peso: 50,
    lunghezza: 16
  },
  {
    varieta: 'romanesca',
    peso: 60,
    lunghezza: 17
  },
  {
    varieta: 'fiorentina',
    peso: 100,
    lunghezza: 18
  },
  {
    varieta: 'napoletana',
    peso: 150,
    lunghezza: 16
  },
  {
    varieta: 'tonda',
    peso: 200,
    lunghezza: 17
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
    lunghezza: 18
  },
  {
    varieta: 'pâtisson',
    peso: 450,
    lunghezza: 16
  }
];

const scalaPeso = (calcoloPeso(zucchine) > 1000) ? 'kg' : 'gr'

/**
 * Calcolo del peso totale delle zucchine
 * @returns pesoZucchine
 */
function calcoloPeso(array) {
  let pesoZucchine = 0;
  for(let zucchina of array){
   pesoZucchine += zucchina.peso; 
  }
  console.log(pesoZucchine);
  return pesoZucchine;
}

document.getElementById('peso').innerHTML = 
`
Il peso totale delle zucchine &egrave; ${calcoloPeso(zucchine) > 1000 ? calcoloPeso(zucchine) / 1000 : calcoloPeso(zucchine)} ${scalaPeso}
`
