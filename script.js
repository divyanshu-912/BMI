function result() {

 var djk = (document.getElementById(
  "ashu").value / (document
  .getElementById("divyanshu")
  .value *
  document.getElementById(
   "divyanshu")
  .value));
 var ashuk = document.getElementById(
  "Equal").value += djk;


 if (ashuk <= 18) {
  alert("Khaya-piya kro thoda = You are Malnutrite ")
 } else if (ashuk >= 25) {
  alert(
   "Kha kha ke mote ho gaye ho. You are Overweight."
  )
 } else if (ashuk >= 18.5 && ashuk<=25) {
  alert("Your are Healthy")
 } else {
  alert("Enter data")
   }
}


//variables
let R, G, B;
let randomR, randomG, randomB;

//function that changes the background color
function color() {
 randomR = Math.floor(Math.random() *
  256);
 randomG = Math.floor(Math.random() *
  156);
 randomB = Math.floor(Math.random() *
  256);
 R = randomR;
 G = randomG;
 B = randomB;
 document.body.style
  .backgroundColor =
  'rgb' + '(' + R + ',' + G + ',' +
  B +
  ')';
}
