

if(window.Worker) {
  var myWorker = new Worker("./worker.js");

  var message = { addThis: {num1: 1, num2: 52} };

  myWorker.postMessage(message);

  myWorker.onmessage = ((e) => {

    alert(e.data.result);
      console.log('got result', e.data.result);
  });

}
else {
  alert("Upgrade your DInosaur era Browser :(");
}

