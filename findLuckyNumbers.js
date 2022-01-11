// Write your code below this line.
function randomNum(){
    let possibleNums = [1,2,3,4,5,6,7,8,9,10]
    let randomGen = Math.floor(Math.random()*possibleNums.length)
    return possibleNums[randomGen]
}

let firstRandomGen = randomNum()
console.log(firstRandomGen)