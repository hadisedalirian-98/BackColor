let citiDate = {  
  tehran: { city: "tehran", temp: 12, weather: "sunny", humidity: 23, windSpeed: 32, winDirection: "to north", log: "Images/sunny.png", wallPaper: "Images/tehrancity.jpg" },  
  shiraz: { city: "shiraz", temp: 8, weather: "storm", humidity: 19, windSpeed: 50, winDirection: "to north", log: "Images/storm.png", wallPaper: "Images/shiraz.jpg" },  
  esfahan: { city: "esfahan", temp: 10, weather: "rainy", humidity: 24, windSpeed: 43, winDirection: "to north", log: "Images/rainy.png", wallPaper: "Images/esfahan.jpeg" }  
};  

let searchBtn = document.getElementById("search");  
searchBtn.style.textAlign = "center";  
let searchBar = document.getElementById("searchBar");  

searchBtn.addEventListener("click", function() {  
  let searchBarValue = searchBar.value.toLowerCase(); // تغییر به حروف کوچک  
  let cityData = citiDate[searchBarValue];   
  
  if (cityData) {  
    document.querySelector(".city").innerHTML = "city: " + cityData.city;  
    document.querySelector(".city").style.color = "white";  
    document.querySelector(".city").style.textAlign = "center";  
    
    document.querySelector(".description").innerHTML = cityData.weather;  
    document.querySelector(".description").style.color = "white";  
    document.querySelector(".description").style.textAlign = "center";  
    
    document.querySelector(".temp").innerHTML = "temp is " + cityData.temp + "°C";  
    document.querySelector(".temp").style.color = "white";  
    document.querySelector(".temp").style.textAlign = "center";  
    
    document.querySelector(".humidity").innerHTML = "humidity: " + cityData.humidity;  
    document.querySelector(".humidity").style.color = "white";  
    document.querySelector(".humidity").style.textAlign = "center";  
    
    document.querySelector(".wind").innerHTML = "windSpeed is " + cityData.windSpeed + " K/h";  
    document.querySelector(".wind").style.color = "white";  
    document.querySelector(".wind").style.textAlign = "center";  
    
    document.querySelector(".windDirection").innerHTML = "winDirection: " + cityData.winDirection;  
    document.querySelector(".windDirection").style.color = "white";  
    document.querySelector(".windDirection").style.textAlign = "center";  
    
    document.querySelector(".icon").setAttribute("src", cityData.log);  
    
    document.getElementById("msg").style.display = "none";  
    
    document.body.style.backgroundImage = "url(" + cityData.wallPaper + ")"; // تغییر استفاده از backgroundImage  
   
  } else {  
    document.getElementById("enterCity").innerHTML = "plz enter your city name correctly";   
    document.getElementById("enterCity").style.color = "pink";  
    document.getElementById("enterCity").style.textAlign = "center";  
    document.getElementById("enterCity").style.fontSize = "25px";  
    document.getElementById("enterCity").style.fontWeight = "bold";  
    document.getElementById("msg").style.display = "none";  
  }  
});