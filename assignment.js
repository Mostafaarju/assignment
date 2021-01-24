function kilometerToMeter(num) {
    let oneKilometer = 1000;
    return num * oneKilometer;
}
let meterResult = kilometerToMeter(5);
console.log(meterResult);



function budgetCalculator(watch, mobile, laptop) {
    return watch * 50 + mobile * 100 + laptop * 500;
}
console.log(budgetCalculator(1, 1, 1));



function hotelCost(cost) {
    let hotel = 0;
    if (cost <= 10) {
        hotel = cost * 100;
    } else if (cost <= 20) {
        let firstTenDay = 10 * 100;
        let remaining = cost - 10;
        let secondTenDay = remaining * 80;
        hotel = firstTenDay + secondTenDay;
    } else {
        let firstTenDay = 10 * 100;
        let secondTenDay = 10 * 80;
        let remaining = cost - 20;
        let thirdTenDay = remaining * 50;
        hotel = firstTenDay + secondTenDay + thirdTenDay;
    }
    return hotel;
}

let count = hotelCost(22);
console.log(count);




function megaFriend(str) {
    let longestWord = '';
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        let individualWord = words[i];
        if (individualWord.length > longestWord.length) {
            longestWord = individualWord;
        }
    }
    return longestWord;
}