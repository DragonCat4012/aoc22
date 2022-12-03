const fs = require('fs')

a()
async function a() {
  await fs.readFile('input.txt', 'utf-8', (err, data) => {
    var arr = data.split("\r\n")
    var count = 0
    arr.forEach(compartemtn => {
        part1 = compartemtn.substring(0, compartemtn.length/2).split("")
        part2 = compartemtn.substring(compartemtn.length/2, compartemtn.length).split("")
        var item = ""

        part1.forEach(e => {
            if( part2.filter(i => i == e).length >= 1 ){
                item = e
            }
        })
        if(item.toLocaleUpperCase() == item){//if upper case
            count +=  item.charCodeAt(0) -  38
        }else {
            count +=  item.charCodeAt(0) - 96
        }
       
        
    });
    console.log(count)//7785
  })}
