
fetch('http://api.airvisual.com/v2/nearest_city?key=603df610-02c7-454d-b991-c0f7053da9e6')

.then( response => response.json())
.then(json => {

document.getElementById('blah').innerHTML = json.data.current.pollution.aqius;

document.getElementById('blup').innerHTML = json.data.current.weather.tp;
});
