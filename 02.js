const fs = require('fs')
let yArr = ["X", "Y", "Z"]
let oArr = ["A", "B", "C"]

a()
async function a() {
  await fs.readFile('input.txt', 'utf-8', (err, data) => {
    var arr = data.split("\r\n")
    var count = 0;

    arr.forEach(match => {
      let op = match[0]
      let you = match[2]
      const win_points = win(op, you);
      const shape_points = point(you);
      count += win_points + shape_points;
    })
    console.log(count) //13221
    //console.log(op, you, "|", win(op, you), "+", point(you));
  })
}

function win(a, b) {
  if ((a == "A" && b == "Y") || (a == "B" && b == "Z") || (a == "C" && b == "X")) {
    return 6
  } else if (oArr.indexOf(a) == yArr.indexOf(b)) {
    return 3
  } else {
    return 0
  }
}

function point(a) {
  if (a == "X") {
    return 1
  } else if (a == "Y") {
    return 2
  } else {
    return 3
  }
}
/*
A Rock     X 1   AY 
B Paper    Y 2 BZ
C Scissors    Z 3 CX
 */

//(1 for Rock, 2 for Paper, and 3 for Scissors)
