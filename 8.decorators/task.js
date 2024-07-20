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

	function wrapper(...args) {
		wrapper.allCount++;
		if (timeoutId) {
			clearTimeout(timeoutId);
			console.log('уже есть таймаут', args);
		}
		if (!timeoutId) {
			console.log('первый сигнал', args);
			func.call(this, ...args);
			wrapper.count++;
		}
		timeoutId = setTimeout(() => {
			console.log('задержка больше 2000 милисекунд, сработал таймаут');
			wrapper.count++;
			func.call(this, ...args);
		}, delay);
	}
	wrapper.count = 0;
	wrapper.allCount = 0;
	return wrapper;
}
