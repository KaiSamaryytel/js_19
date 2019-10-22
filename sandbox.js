 // logical operators - OR || and AND &&

 const salasõna = 'p@ssword';

 if(salasõna.length >= 12 && salasõna.includes('@')){
  console.log('salasõna on väga tugev!');

 } else if(salasõna.length >= 8 || salasõna.includes('@')){
  console.log('salasõna on piisavalt tugev!');
 } else{
  console.log('salasõna ei ole piisavalt tugev!');
}