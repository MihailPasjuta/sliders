const town=document.getElementById('town');
const show_result_categories=document.getElementById('show_result_categories');
const show_result_information=document.getElementById('show_result_information');
town.addEventListener('change',(event)=>{
	fetch("https://openweathermap.org/data/2.5/weather?q="+town.value+",ua&appid=b6907d289e10d714a6e88b30761fae22",{method: 'GET'})
					.then(res=>res.json())
					.then(res=>{
						
						show_result_categories.innerHTML=
							"</br>Weather: <hr/>"
							+"</br>Temperature: <hr/>"
							+"</br>Wind: <hr/>"
							+"</br>Pressure: <hr/>"
							+"</br>Humidity: <hr/>"	
							
						show_result_information.innerHTML=
							"</br>"+res.weather[0].description+"<hr/>"
							+"</br>"+res.main.temp+" &deg;C<hr/>"
							+"</br>"+res.wind.speed+" m/s<hr/>"
							+"</br>"+res.main.pressure+"<hr/>"
							+"</br>"+res.main.humidity+"<hr/>";
							
					})
					.catch(res=>{
						show_result_categories.innerHTML="Проверьте интернет соединение";
					});
});
