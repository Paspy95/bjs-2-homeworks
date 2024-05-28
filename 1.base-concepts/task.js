"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;
    if (d < 0)
        return false;
    if (d == 0)
        arr['roots'] = (-b / 2 * a);
    if (d > 0) {
        let tmp = [];
        tmp.push(-b + Math.sqrt(d)) / (2 * a);
        tmp.push(-b - Math.sqrt(d)) / (2 * a);
        arr['roots'] = tmp;
    }
    return arr;
}
console.log(solveEquation(1, 10, 4))

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let S = amount - contribution;
	let P = percent / 100 / 12;
	let n = countMonths;
	let pay = S * (P + (P / (((1 + P) ** n) - 1)));
	let totalPay = pay * countMonths;
	totalPay = Number(totalPay.toFixed(2))
	return totalPay;

}
