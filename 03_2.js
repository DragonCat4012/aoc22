const fs = require('fs')

a()
async function a() {
  await fs.readFile('input.txt', 'utf-8', (err, data) => {
    var arr = data.split("\r\n")
    var count = 0

    var newArr = []
    for(var i = 0; i <= arr.length - 1; i+=3){
        newArr.push([arr[i], arr[i+1],arr[i+2]])
    }

    newArr.forEach(compartemtn => {
        part1 = compartemtn[0].split("")
        part2 = compartemtn[1].split("")
        part3 = compartemtn[2].split("")
        var item = ""

        part1.forEach(e => {
            if( part2.filter(i => i == e).length >= 1  && part3.filter(i => i == e).length >= 1 ){
                item = e
            }
        })

        if(item.toLocaleUpperCase() == item){//if upper case
            count +=  item.charCodeAt(0) -  38
        }else {
            count +=  item.charCodeAt(0) - 96
        }
    });
    console.log(count)//2633
  })}
