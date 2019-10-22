// if statements
 const age = 25;

 if(age > 20){
   console.log('oled üle 20 aasta vana');
 }


const liblikad = ['admiral', 'aasaöölane', 'taevastiib', 'keldriöölane'];

if(liblikad.length > 3){
  console.log("nüüd on küll palju liblikaid");
 }

 // else statements

 const salasõna = 'p@sswordstrong';

 if(salasõna.length >= 12){
  console.log('salasõna on väga tugev!');

 } else if(salasõna.length >= 8){
  console.log('salasõna on piisavalt pikk!');
 } else{
  console.log('salasõna ei ole piisavalt pikk!');
}