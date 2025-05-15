function sendMail() {
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  }

  emailjs.send("service_r02punt", "template_07h77of", parms).then(alert("E-mail Sent!!"))

}


window.addEventListener('load', () => {
      document.getElementById('myImage').classList.add('visible');
});


//                FADE IN IMAGE
  const images = document.querySelectorAll('.fade-in-image');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust as needed
  });

  images.forEach(image => observer.observe(image));


  const images2 = document.querySelectorAll('.fade-in-image2');

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust as needed
  });

  images2.forEach(image => observer.observe(image));


  const images3 = document.querySelectorAll('.fade-in-image3');

  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust as needed
  });

  images3.forEach(image => observer.observe(image));


    const images4 = document.querySelectorAll('.fade-in-image4');

  const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust as needed
  });

  images4.forEach(image => observer.observe(image));



//                  HEADER SCROLL
  var lastScrollTop = 0;
  navbar = document.getElementsByClassName("home")[0];
window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
      navbar.style.top = "-5.5rem";
  } else {
      navbar.style.top = "3rem";
  }
  lastScrollTop =  scrollTop;
})



//          WEATHER API IMPLEMENTATION
navigator.geolocation.getCurrentPosition(function (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const apiKey = 'a37bb410beba1a7a5cab8e9603cccb1b'; // Replace this with your key
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherJSON = {
        location: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        country: data.sys.country
      };

          console.log("Weather JSON:", JSON.stringify(weatherJSON, null, 2));

      // Optional: Display it on the page
      document.getElementById("weather").insertAdjacentHTML('beforeend', `
        <div id="weather-card">
          <h2 class="state">${weatherJSON.location}, ${weatherJSON.country}.</h2>
          <p class="description">${weatherJSON.description}, ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
          <div class="weather-icon">
            <h1 class="icon" id="tempC">${weatherJSON.temperature}</h1> <sup id="celcius">°C</sup> <sup id="farenheit">°F</sup>
            <div class="details">
              <p class="description">Humidity: ${weatherJSON.humidity}%</p>
              <p class="description">Wind Speed: ${weatherJSON.windSpeed} m/s</p>
            </div>
          </div>
        </div>`);
          
      // Add onclick function to convert °C to °F
      document.getElementById("farenheit").onclick = function () {
        const celsius = weatherJSON.temperature;
        const fahrenheit = (celsius * 9 / 5 + 32).toFixed(1);
        document.getElementById("tempC").textContent = fahrenheit;
        document.getElementById("celcius").style.color = "rgba(0, 0, 0, 0.5)";
        document.getElementById("farenheit").style.color = "black";
        // document.getElementById("farenheit").style.fontWeight = "bold";
      };

      // Add onclick function to convert °F to °C
      document.getElementById("celcius").onclick = function () {
        const farenheit = document.getElementById("tempC").textContent;
        const celcius = ((farenheit - 32) * 5 / 9).toFixed(1);
        document.getElementById("tempC").textContent = celcius;
        document.getElementById("farenheit").style.color = "rgba(0, 0, 0, 0.5)";
        document.getElementById("celcius").style.color = "black";
        // document.getElementById("farenheit").style.fontWeight = "bold";
      };
    })
    .catch(err => {
      console.error("Error fetching weather data:", err);
    });
});