const getallenReeks = [2, 6, 8, 2, 4, 1, 0, 5, 9];
function maakDubbel(el) {
  return el * 2;
}
const muteerdeArray = getallenReeks.map(maakDubbel);

console.log(muteerdeArray);

/*schrijf een functie dat een array met namen ontvangt 
en deze geeft een array terug met alle namen in drukletters*/
//maakGroot (["jos", "cindy", "els", "johan"])

function maakGroot(namen) {
  const nieuweArray = namen.map(function (naam) {
    return naam.toUpperCase();
  });
  return nieuweArray;
}
console.log(maakGroot(["jos", "cindy", "els", "johan"]));

const woorden = ["ref_127", "ref_8935", "ref_796"];

function getProductNrs(productRefs) {
  return productRefs.map(function (productRefs) {
    return productRefs.replace("ref_", "") * 1;
  });
}

console.log(getProductNrs(["ref_127", "ref_8935", "ref_796"]));

const emailAdress = [
  "elan.wittevrongel@gmail.com",
  "jef.jefke@gmail.com",
  "patrick.rodepull@gmail.com",
  "abdel.gucciklak@gmail.com",
];
function protect_email(str) {
  const delen = str.split("@");
  return (
    delen[0].substr(0, Math.round(delen[0].length / 2)) + "...@" + delen[1]
  );
}
function geefLijstMetProtectedEmails(lijst){
    return lijst.map(protect_email);
}
console.log(geefLijstMetProtectedEmails([
    "elan.wittevrongel@gmail.com",
    "jef.jefke@gmail.com",
    "patrick.rodepull@gmail.com",
    "abdel.gucciklak@gmail.com",
  ]));
