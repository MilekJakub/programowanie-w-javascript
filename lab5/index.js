class EventManager {
  observers = [];
  events = [];

  constructor() {
    this.events.onEverySecond = function() {
      console.log('seconds passed');
    }
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter()
  }
}

class Interval {
  timer;
  intervalAction;

  constructor(intervalAction) {
    this.timer = 1;
    this.intervalAction = intervalAction
  }

  start() {
    setInterval(
      () => {
        this.intervalAction();
        timer++
      }, 1000)
  }
}

class Logger {
  static log(data) {
    console.log(data)
  }
}

function onEverySecond() {
  saveCToSessionStorage(interval.timer);
  Logger.log(`[log from C] ${interval.timer}`)
  discoverPowerBallNumber(interval.timer);
}

const interval = new Interval(onEverySecond);

interval.start();

function saveCToSessionStorage(data) {
  console.log('[reader C]', data)
  const storageData = { data }
  sessionStorage.setItem('C', JSON.stringify(storageData))
  // publisher.publish(new ItemSetToSessionStorageEvent(item));
}

function discoverPowerBallNumber(data) {
  const number = Math.floor(Math.random() * data * 100)
  console.log('[powerball number]', number)
}
