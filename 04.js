const fs = require('fs')

a()
async function a() {
  await fs.readFile('input.txt', 'utf-8', (err, data) => {
    var arr = data.split("\r\n") //'38-41,38-38', '18-65,18-65',
var count = 0

arr.forEach(pair => {
    pair = pair.split(",")//'38-41,38-38'
    let p1 = pair[0]//38-41
    p1max = p1.split("-")[1] //41
    p1min = p1.split("-")[0] //38
    
    let p2 = pair[1]//38-38
    p2max = p2.split("-")[1] //38
    p2min = p2.split("-")[0] //38
 
    var arr1 = Array.from({length: p1max}, (_, i) => i + 1).filter(e =>  e >= p1min)
    var arr2 = Array.from({length: p2max}, (_, i) => i + 1).filter(e =>  e >= p2min)

    var count1 = 0
    arr1.forEach( i => {
        if(arr2.includes(i)){ count1 += 1 } 
    })

      if(count1 == arr2.length ){
        count += 1
        
      } else {

      var count2 = 0
      arr2.forEach( i => {
        if(arr1.includes(i)){ count2 += 1 } 
    })
    if(count2 == arr1.length ){
        count += 1
      }}
      console.log(count2, arr1.length ," - ",count1, arr2.length)
})

console.log(count)
  })}
