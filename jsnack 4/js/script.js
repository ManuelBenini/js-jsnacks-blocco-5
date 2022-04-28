/*
Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
Stampa a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const bici = [
  {
    nome: 'Bmx',
    peso: 250
  },
  {
    nome: 'Mountain bike',
    peso: 100
  },
  {
    nome: 'ibrida',
    peso: 150
  },
  {
    nome: 'pieghevole',
    peso: 10
  },
  {
    nome: 'Downhill',
    peso: 40
  }
];

pesoMinore(bici);

function pesoMinore(array) {
  let pesoMinore = array[0].peso;

  /* PRIMO METODO
  for(let i = 0; i < array.length; i++){
    if(pesoMinore > array[i].peso){
      pesoMinore = array[i].peso;
      const {nome, peso} = array[i];
      console.log(nome);
      console.log(peso);
      console.log('il peso minore è', pesoMinore , 'della bici' , nome);
      stamp(nome, peso)
    }
  }
  */

  // OPPURE 
  for(let biciclette of array){
    const {nome, peso} = biciclette;
    if(peso < pesoMinore){
      pesoMinore = peso;
      stamp(nome, peso)
    }else{
      pesoMinore = pesoMinore;
    }
  }
  

}

function stamp(nome, peso) {
  document.getElementById('peso-minore').innerHTML = 
  `
  La bici con il peso minore &egrave; ${nome} e pesa ${peso}kg!
  `;
}