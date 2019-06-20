class Watch {
  constructor() {
    this.interval = null;
  }

  start() {

    this.interval= setInterval( ()=> {
      let date=new Date();
      let time_str= date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
      console.clear();
      console.info(time_str);
    },300);

  }

  stop() {
    clearInterval(this.interval);
  }
}

const watch = new Watch();

watch.start();


setTimeout(() => {
  // Остановится через 10 секунд
  watch.stop();
}, 10000);
