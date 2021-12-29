class AlarmClock {
    constructor(alarmCollection = [], timerId = null) {
      this.alarmCollection = alarmCollection;
      this.timerId = timerId;
    }
  
    addClock(time, callback, id) {
      if (id === undefined) {
          throw new Error('Параметр id не передан');
      }
      if (this.alarmCollection.find(element => element.id === id)) {
        console.error(`Будильник с таким id уже существует`);
      } else {
        let newObject = { id, time, callback };
        this.alarmCollection.push(newObject);
      }
    }
  
  
    removeClock(id) {
      let startLength = this.alarmCollection.length;
      this.alarmCollection = this.alarmCollection.filter(item => item.id !== id); 
      return startLength === this.alarmCollection.length;
    }
  
  
    getCurrentFormattedTime() {
      let date = new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return date;
    }
  
    start() {
      checkClock = checkClock.bind(this);
      function checkClock(element) {
        if (this.alarmCollection.getCurrentFormattedTime() === element.time) {
          element.callback();
        }
      }
  
      if (this.timerId !== null) {
        timerId = setInterval(this.alarmCollection.forEach(element => checkClock(element)));
      }
    }
  
    stop() {
      if (this.timerId !== null) {
        clearInterval(timerId);
      }
    }
  
    printAlarms() {
      console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
      this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} заведен на ${element.time}`));
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }
