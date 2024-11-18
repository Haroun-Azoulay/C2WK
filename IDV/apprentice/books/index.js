"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var csv_parse_1 = require("csv-parse");
var path = require("path");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// function findId(obj) {
//     var categoryArray = obj.name;
//     for (var i = 0; i < categoryArray.length; i++) {
//         console.log(i)
//     }
// }
// function menu(obj) {
//     rl.question(`What's is your choice ? `, (numberProposition) => {
//       const guessedNumber = parseInt(numberProposition, 10);
//       switch (guessedNumber) {
//         case 0:
//             function retrieveID(obj){
//                 for (let i = 0; i < obj.length; i++) {
//                   console.log(obj[i].id);
//                   console.log(obj[i].name);
//                 }
//                 }
//                 retrieveID(obj)
//                 menu(obj)
//             break;
//         case 1:
//             console.log("It is a Monday.");
//             break;
//         case 2:
//             console.log("It is a Tuesday.");
//             break;
//         case 3:
//             console.log("It is a Wednesday.");
//             break;
//         case 4:
//             console.log("It is a Thursday.");
//             break;
//         case 5:
//             console.log("It is a Friday.");
//             break;
//         case 6:
//             console.log("It is a Saturday.");
//             break;
//         default:
//             console.log("No such day exists!");
//             break;
//     }
//     });
//   }
(function () {
    var csvFilePath = path.resolve(__dirname, 'books.csv');
    var headers = ['id', 'name', 'realName', 'works', 'genres', 'birthYear', 'deathYear'];
    var fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    (0, csv_parse_1.parse)(fileContent, {
        delimiter: ',',
        columns: headers,
    }, function (error, obj) {
        if (error) {
            console.error(error);
        }
        console.log("Result", obj);
    });
})();
function findId(obj) {
    var categoryArray = obj.name;
    for (var i = 0; i < categoryArray.length; i++) {
        console.log(i);
    }
}
function menu(obj) {
    rl.question("What's is your choice ? ", function (numberProposition) {
        var guessedNumber = parseInt(numberProposition, 10);
        switch (guessedNumber) {
            case 0:
                function retrieveID(obj) {
                    for (var i = 0; i < obj.length; i++) {
                        console.log(obj[i].id);
                        console.log(obj[i].name);
                    }
                }
                retrieveID(obj);
                menu(obj);
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
