const fs = require('fs')
let yArr = ["X", "Y", "Z"]//lose,draw,win
let oArr = ["A", "B", "C"]
/*
A Rock     X 1   AY 
B Paper    Y 2 BZ
C Scissors    Z 3 CX
 */
a()
async function a() {
  await fs.readFile('input.txt', 'utf-8', (err, data) => {
    var arr = data.split("\r\n")
    var count = 0;

    arr.forEach(match => {
      let op = match[0]
      let outcome = match[2]
      let you = yArr[oArr.indexOf(op)] //auto draw

      if(outcome == "X"){ //loose
        switch (op) {
            case "A": you="Z" 
            break
            case "B": you="X" 
            break
            case "C": you="Y" 
        }
      }else if(outcome == "Z"){ //win
        switch (op) {
            case "A": you="Y" 
            break
            case "B": you="Z" 
            break
            case "C": you="X" 
        }
      }    
      var win_points = 3
      var shape_points = 0
   
      if(outcome == "Z"){win_points = 6}else if(outcome == "X"){
        win_points = 0
      }
      if(you == "X"){shape_points = 1}else if(you == "Y"){shape_points = 2}else {shape_points = 3}
      count += win_points + shape_points;

      console.log(outcome, ": ",op, you, shape_points ,"+",win_points)
    })
    console.log(count) //13131
  })
}
