export default function calcsScore(arr){
    let correct = arr.filter( elem => elem.correct === elem.checked ).length
    return Math.round((correct/arr.length) * 100) 
}
