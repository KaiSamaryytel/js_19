// variables & block scope
let age = 30;

if(true){

  // age = 40;
  let age = 40;
  let name = 'Alice Cooper';
  console.log('Esimese koodiploki sees:', age, name);

  if(true){

    let age = 50;
    console.log('Teise koodiploki sees:', age, name);

  }

}

console.log('Koodiplokist väljas:', age, name);