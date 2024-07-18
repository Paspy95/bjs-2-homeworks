function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = (JSON.stringify(args));
		let objectInCache = cache.find(item => item.hash === hash);
		if (objectInCache) {
			console.log("Из кеша: " + objectInCache.value, cache);
			return "Из кеша: " + objectInCache.value;
		}
		let result = func(...args);
		cache.push({
			hash: hash,
			value: result
		});
		if (cache.length > 5) {
			cache.shift();
		}
		console.log("Вычисляем: " + result, cache);
		return "Вычисляем: " + result;
	}
	return wrapper;
}

function debounceDecoratorNew(func, delay) {
	let timeoutId;
	let count = 0;
	let allCount = 0;

	function wrapper(...args) {
		if (timeoutId) {
			console.log('уже есть таймаут', args);
			clearTimeout(timeoutId);
			allCount++;
		}
		if (!timeoutId) {
			console.log('первый сигнал', args);
			func.apply(this, args);
			count++;
		}
		timeoutId = setTimeout(() => {
			console.log('задержка больше 2000 милисекунд, сработал таймаут');
			count++;
			func.apply(this, args);
			wrapper.count = count;
		}, delay);
		wrapper.allCount = allCount;
	}
	return wrapper;
}
