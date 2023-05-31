
// Uses bored api to retreive data when btn is clicked
document.getElementById('find-btn').addEventListener('click', function(){
  
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("result").textContent = data.activity
    })})