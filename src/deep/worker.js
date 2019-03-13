

self.onmessage = (e) => {
console.log('m here');
setTimeout(() => {
  self.postMessage({result: e.data.addThis.num1 + e.data.addThis.num2 })
}, 5000);
}

