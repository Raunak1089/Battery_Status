onmessage = (event)=>{
  // Receive battery information from the main thread
  var batteryLevel = event.data.batteryLevel;

  // Perform battery monitoring logic using the received data
  console.log('Battery level:', batteryLevel);
}