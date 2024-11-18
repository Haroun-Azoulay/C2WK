const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findId(obj) {
    var categoryArray = obj.name;
    for (var i = 0; i < categoryArray.length; i++) {
        console.log(i)
    }
}



function menu(obj) {
    rl.question(`What's is your choice ? `, (numberProposition) => {
      const guessedNumber = parseInt(numberProposition, 10);
      switch (guessedNumber) {
        case 0:
            function retrieveID(obj){
                for (let i = 0; i < obj.length; i++) {
                  console.log(obj[i].id);
                  console.log(obj[i].name);
                }
                }
                retrieveID(obj)
                menu(obj)
            break;
        case 1:
            console.log("It is a Monday.");
            break;
        case 2:
            console.log("It is a Tuesday.");
            break;
        case 3:
            console.log("It is a Wednesday.");
            break;
        case 4:
            console.log("It is a Thursday.");
            break;
        case 5:
            console.log("It is a Friday.");
            break;
        case 6:
            console.log("It is a Saturday.");
            break;
        default:
            console.log("No such day exists!");
            break;
    }
    
    });
  }

fs.readFile("books.json", "utf8", function (err, data) {
  const content = data;

  const obj = JSON.parse(content);

  console.log(obj)
  menu(obj)

});


  

