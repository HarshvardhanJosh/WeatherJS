 class Weather {
        constructor(city) {
          this.apiKey = "0fed3fb63aa99e6f6ea1ef0aebe6911b";
          this.city = city;
        }
      
// Fetch weather from API
        async getWeather() {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${
              this.apiKey
            }&units=metric`
          );
      
          const responseData = await response.json();
      
          return responseData;
        }
      
// Change weather location
        changeLocation(city) {
          this.city = city;
        }
      }
      