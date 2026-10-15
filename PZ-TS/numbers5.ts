function resDay(nWater: number, proc: number, minWater: number) {
    let day = 0;
    let currentWoter = nWater;
    while (currentWoter > minWater) {
        currentWoter *= (1 - proc / 100);
        day++;
    }
    return day - 1;
}

let nWater = 150;
let proc = 10;
let minWater = 10;

let result = resDay(nWater, proc, minWater);

console.log(result);