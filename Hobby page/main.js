// date time code
let options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric'};
let dt = new Date();
document.getElementById('date-time').innerHTML = dt.toLocaleDateString('en-UK', options);

