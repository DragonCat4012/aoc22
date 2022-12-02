const fs = require('fs')

async function a(){
    var arr = []
    await fs.readFile('help.txt', 'utf-8', (err, data) => {
         arr = data.split("\r\n\r\n")
         
        for(e of arr){
            let i = arr.indexOf(e)
            var n = e.split("\r\n")
            arr[i] = n
        }

        var sumArr = []
        arr.forEach(e => {
            sumArr.push(sum(e))
        })
       
        var i = sumArr.sort((a, b) => a - b)
        console.log(i[i.length - 1])
        //part two
        console.log(i[i.length - 1] + i[i.length - 2] + i[i.length - 3])
        return i
    })
}

function sum(ar){
    var count = 0
    for (e of ar){
        count += Number(e)
    }
    return count
}

a()
