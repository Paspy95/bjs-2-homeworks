function parseCount(value) {
	const parsedValue = Number.parseFloat(value);
	if (Number.isNaN(parsedValue)) {
		throw new Error("Невалидное значение");
	}
	return parsedValue;
}

function validateCount(value) {
	try {
		const parsedValue = parseCount(value);
		return parsedValue;
	} catch (error) {
		return error;
	}
}﻿
