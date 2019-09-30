const town=document.getElementById('town');
const show_result=document.getElementById('show_result');
town.addEventListener('change',(event)=>{
	fetch("https://openweathermap.org/data/2.5/weather?q="+town.value+",ua&appid=b6907d289e10d714a6e88b30761fae22",{method: 'GET'})
					.then(res=>res.json())
					.then(res=>{
						show_result.innerHTML="";
						show_result.innerHTML=
							"Weather: "+res.weather[0].description+
							"</br>Temperature: "+res.main.temp+
							"</br>Wind: "+res.wind.speed+" m/s"+
							"</br>Pressure: "+res.main.pressure+
							"</br>Humidity: "+res.main.humidity;						
					});
});
