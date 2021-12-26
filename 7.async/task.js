class AlarmClock {
    constructor(alarmCollection = [], timerId = null) {
      this.alarmCollection = alarmCollection;
      this.timerId = timerId;
    }
  
    addClock(time, callback, id) {
      if (id === undefined) {
        throw new Error('Параметр id не передан');
      }
      let newObject = { id, time, callback };
      this.alarmCollection.filter(function(element) {
        if (element.id === newObject.id) {
          console.error(`Будильник с таким id уже существует`);
        }
      })
      this.alarmCollection.push(newObject);
      return;
    }
  
    removeClock(id) {
      let array = this.alarmCollection;
      let startLength = array.length;
      console.log(startLength);
      let idToRemove = id;
      let filteredArray = array.filter((item) => item.id !== idToRemove);
      let finishLength = filteredArray.length;
      if (startLength === finishLength) {
        return false;
      } else {
        return true;
      }
    }
  
  
    getCurrentFormattedTime() {
      let date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      if (h < 10) {
        return `0${h}:${m}`
      } else if (m < 10) {
        return `${h}:0${m}`
      } else if (h < 10 && m < 10) {
        return `0${h}:0${m}`
      } else {
        return `${h}:${m}`;
      }
    }
  
    start() {
    }
  
    stop() {
    }
  
    printAlarms() {
      this.alarmCollection.forEach(function(element) {
        console.log(`Будильник №${element.id} заведен на ${element.time}`);
      })
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }