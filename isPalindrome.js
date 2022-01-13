// Write your code below
function pal(same){
    for(let i = 0; i < same.length; i++){
        for(let j = same.length - 1; j > i; j--){
            if(same[i] === same[j]){
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(pal('Racecar'))