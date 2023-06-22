const worker = new Worker('worker.js');
function hlab(x){document.querySelector('#h_label').innerHTML=x.value}
function llab(x){document.querySelector('#l_label').innerHTML=x.value}


function sendBatteryInformation() {
    if ('getBattery' in navigator) {
      navigator.getBattery().then(function(battery) {
        // Send battery information to the Web Worker
        worker.postMessage({ batteryLevel: battery.level });
  
        // Update battery information when it changes
        battery.addEventListener('levelchange', function() {
          worker.postMessage({ batteryLevel: battery.level });
        });
      });
    } else {
      console.log('Battery API not supported.');
    }
  }
  
  sendBatteryInformation();
  
  worker.addEventListener('message', function(event) {
    // Handle messages received from the Web Worker
    console.log('Message from Web Worker:', event.data);
  });