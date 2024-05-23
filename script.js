function updateClock(){
  const timeNow = new Date();
  const hours = timeNow.getHours().toString().padStart(2,0);
  const mins = timeNow.getMinutes().toString().padStart(2,0);
  const secs = timeNow.getSeconds().toString().padStart(2,0);
  let time = `${hours}:${mins}:${secs}`
  document.getElementById("clock").textContent = time
}

updateClock()
setInterval(updateClock,1000)