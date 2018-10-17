const flourPrice = 1;
const sugarPrice = 1.5;
const eggPrice = 3;
const milkPrice = 2.5;
const chocolatPrice = 10;
const decorationPrice = 3.5;
const fruitPrice = 5;

const totalForet =
  flourPrice +
  sugarPrice * 2 +
  eggPrice * 2 +
  milkPrice / 2 +
  chocolatPrice * 2 +
  decorationPrice * 5;

const totalTarte =
  fruitPrice * 2 +
  flourPrice / 2 +
  sugarPrice / 2 +
  eggPrice / 2 +
  milkPrice / 2 +
  chocolatPrice / 2 +
  decorationPrice * 2;

const marge = prompt('votre marge pour la foret noir');

const ttcForet = totalForet * marge;

const ttcTarte = totalTarte * marge;

alert(
  'cout coutant foret noir' +
    totalForet +
    'prix vendu ' +
    ttcForet +
    'cout coutant tarte ' +
    totalTarte +
    'prix vendu ' +
    ttcTarte
);

const boutiques = 5;
const prod = 6;

const tresorerie = boutiques * prod * (totalForet + totalTarte);

const recette = boutiques * prod * (ttcForet + ttcTarte) * 0.9;

const benefice = recette - tresorerie;

alert('vous avez fait ' + benefice);

const isEven = benefice % 2 === 0;

isEven && alert('bim!');

!isEven && alert('bam!');
