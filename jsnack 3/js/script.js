/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

let saluto = prompt('inserire una stringa da invertire');
while(!isNaN(saluto)){
  if(!isNaN(saluto)){
    saluto = prompt('non hai inserito una stringa, riprovare')
  }
}

const stringaInvertita = invertiStringhe(saluto);

function invertiStringhe(stringa) {
  const stringaInvertita = stringa.split('').reverse().join('');
  console.log(stringaInvertita);
  return stringaInvertita
}

document.getElementById('parola-invertita').innerHTML = 
`
La stringa inserita (${saluto}) invertita &egrave; "${stringaInvertita}".
`;