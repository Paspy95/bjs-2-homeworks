"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d < 0)
		return arr;
	if (d == 0)
		arr.push(-b / 2 * a);
	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let S = amount - contribution;
	let P = percent / 100 / 12;
	let n = countMonths;
	let pay = S * (P + (P / (((1 + P) ** n) - 1)));
	let totalPay = pay * countMonths;
	totalPay = Number(totalPay.toFixed(2))
	return totalPay;

}
