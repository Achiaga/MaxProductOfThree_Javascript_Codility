functionsolution(A) {

    // write your code in JavaScript (Node.js 8.9.4)
 
    A.sort((a,b) => (a - b))
 
    return Math.max((A[A.length-1] * A[A.length - 2] * A[A.length - 3]), A[A.length -1] * A[1] * A[0])
 
 }