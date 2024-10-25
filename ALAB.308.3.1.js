/* let num = 1;
while (num <= 100) {
    if (num % 3 ==0 && num % 5 ==0) {
  
    } else if (num % 3 == 0) {
        console.log("fizz");
    } else if (num % 5 == 0){
        console.log("buzz");
    } else {
        console.log(num);
    }
    num++;
} */

/* let n = 41;
    switch(n) {
        case 1:
            console.log("next prime is 2");
            break;
        case 2:
            console.log("The next prime is 3");
            break;
        case 3: case 4:
            console.log(" The next prime will be 5");
            break; 
        case 5: case 6:
            console.log("The next prime will be 7");
            break; 
        case 7: case 8: case 9:  case 10:
            console.log("The next prime will be 11");
            break;
        case 11: case 12:
             console.log("The next prime will be 13");
            break;
        case 13: case 14: case 15: case 16:
             console.log("The next prime will be 17");
            break;
    
        case 17: case 18:
            console.log("The next prime will be 19");
            break; 
        case 19: case 20: case 21: case 22:
            console.log(" The next prime will be 23");
            break; 
        case 24: case 25: case 26: case 27: case 28:
            console.log("The next prime will be 29");
            break; 
        case 29: case 30:
            console.log("The next prime will be 31");
            break;
        case 31: case 32: case 33: case 34: case 35: case 36:
             console.log("The next prime will be 37");
            break;
        case 37: case 38: case 39: case 40:
            console.log("The next prime will be 41");
            break; 
        case 41: case 42:
            console.log("41 The next prime will be 43");
            break; 
        case 43: case 44: case 45: case 46: 
            console.log("43 The next prime will be 47");
            break;  
    } */


let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// Loop through characters in string
// Loop through characters in string
let cell = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let cellNum = 1;
// For each character
for (let i = 0; i < data.length; i++) {
    let char = data[i];

    if (char == "," || char == "\n") {
      switch (cellNum) {
          case 1:
              cell1 = cell;
              break;
          case 2:
              cell2 = cell;
              break;
          case 3:
              cell3 = cell;
              break;
          case 4:
              cell4 = cell;
              break;
      }
      if (cellNum == 4){
          cellNum = 1;
      }
      else {
          cellNum += 1;
      }
      cell = "";
  } else {
      cell += char;
  }
    if (char == "\n"){
        console.log(cell1, cell2, cell3, cell4);
        cell = "";
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
    }
}