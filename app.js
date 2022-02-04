const express = require('express')
const app     = express()

//**** Uzduotis 1 ****/
// app.get('/', function (req, res)    {
//     let name = 'Denzel';
//     let surname = 'Washington';

//     let hmm = name.slice(3) + surname.slice(7);

//     res.send(`<h1>${hmm}</h1>`)
// })

//**** Uzduotis 2 ****/
// app.get('/', function (req, res)    {
//     let word1 = 'An American in Paris';
//     let word2 = "Breakfast at Tiffany's";
//     let word3 = "2001: A Space Odyssey";
//     let word4 = "It's a Wonderful Life";

//     const regex = /[aeiyou]/gi;
//     let remove = word4.replace(regex, '');

//     res.send(`<h1>${remove}</h1>`)
// })

//**** Uzduotis 3 ****/
// app.get('/', function (req, res)    {
//         let star = "";
//         for (let i = 0; i <= 400; i++)  {
//           star += "*"
//         }
//     res.send(`<h1>${star}</h1>`)
// })


//**** Uzduotis 4 ****/
// app.get('/', function (req, res)    {
// function random(min, max) {
//     let masyvas = [];
//     for (let i = min; i < max; i++) {
//       let rand = Math.floor(Math.random() * (max - min + 1)) + min;
//       masyvas.push(rand);
//     }
//     return masyvas;
//   }  
//   let masyvas1 = random(0, 300);
//   let oneDigit = "";
//     for (let i = 0; i < masyvas1.length; i++)  {
//     oneDigit += masyvas1[i] + " ";
//     }
  
//      res.send(oneDigit)
//   })

//**** Uzduotis 5 ****/
app.get('/', function (req, res)    {
let oneDigit1 =[];
for (let i = 1; i < 3001; i++) {
  if (i % 77 == 0) {
    oneDigit1 += [i] + ", ";
  }
}  
     res.send(oneDigit1)
  })

  app.listen(3000)