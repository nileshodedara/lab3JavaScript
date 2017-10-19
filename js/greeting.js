(function(){
  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let myCity = document.getElementById("my-city"); 
  let cityName = document.getElementById("city-name"); 
  let getName = document.getElementById("get-name");
  
  function PerformGreeting() {
    myName.innerHTML = userName.value;
	myCity.innerHTML = cityName.value;
    event.preventDefault();
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
  }
  
}());
