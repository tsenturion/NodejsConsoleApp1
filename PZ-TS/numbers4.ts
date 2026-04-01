import { randomInt } from "crypto";
 
for (let i = 0; i < 10; i++) {
    let r: number = randomInt(1, 20);
    if (r % 4 === 0) {
        console.log(r);
    }
}


