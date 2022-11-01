//challenge 1

// function perfectSquare (num) {
//     let num2 = 0
//     let num3 = 0
//     let num4 = 0
//     num2 = Math.sqrt(num) 
//     num3 = num2 + 1
//     num4 = num3 * num3
//     if(num4 % 1 === 0){
//         console.log(num4)
//     } else {
//         console.log(-1)
//     }
// }

// perfectSquare(289)


//challenge 2

// function perfectSquare (num) {
//     let num2 = 0
//     let num3 = 0
//     let num4 = 0
//     num2 = Math.floor(Math.sqrt(num))
//     num3 = num2 + 1
//     num4 = num3 * num3
//     if(num4 % 1 === 0){
//         console.log(num4)
//     }else if(num < 0) {
//         console.log(0)
//     } 
// }

// perfectSquare(289.516)

//challenge 3

function perfectSquareTri (n) {
    if(n < 0) {
        return 0
    }

    let currentSquareInSeries = 0
    let currentTriangleInSeries = 0
    let nextSquareInSeries = 1
    let nextTrianglebase = 1
    let answer
    let i = 0

    while(true) {
        if (i === currentTriangleInSeries && i === currentSquareInSeries && i > n) {
            return i
        }

        if (i === nextSquareInSeries) {
            currentTriangleInSeries = nextSquareInSeries
            nextSquareInSeries = Math.sqrt(nextSquareInSeries + 1) * Math.sqrt(nextSquareInSeries + 1)
        }

        if (i === currentTriangleInSeries + nextTrianglebase) {
            currentTriangleInSeries = currentTriangleInSeries + nextTrianglebase
            nextTrianglebase++
        }
    }
}


console.log(perfectSquareTri(-9.82))
console.log(perfectSquareTri(0.56))
console.log(perfectSquareTri(18))