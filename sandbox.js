// arguments & parameters
// expressionile läheb ;-lõppu!
const tervitus = function(name = 'Kati', time = 'hommikust'){
  console.log(`Tere ${time}, ${name}!`);
};

tervitus('Mati');
tervitus();
tervitus('Malle', 'päevast');


