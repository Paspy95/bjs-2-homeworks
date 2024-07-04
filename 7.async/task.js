const {
	start
} = require("repl");
const {
	callback
} = require("util");

class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.invalidId = null;
	}
	addClock(time, callBack) {
		if (!time || !callBack) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.find(item => item.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		const newAlarm = {
			time,
			callback,
			canCall: true
		};
		this.alarmCollection.push(newAlarm);
	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}
	getCurrentFormattedTime() {
		const now = new Date();
		let hours = now.getHours();
		let minutes = now.getMinutes();
		return '$(hours):$(minutes)';
	}
	start() {
		if (this.intevalId) {
			return;
		}
		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEarch(alarm => {
				if (alarm.time === currentTime && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback()
				}
			});
		}, 1000);
	}
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null
	}
	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		});
	}
	clearAlarm() {
		this.stop();
		this.alarmCollection = [];
	}
}
