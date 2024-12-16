/* Global Variables */
// Personal API Key for OpenWeatherMap API

const apiKey = "4e883da8b0d597cb06a07c1341e0d14d";

const generateButton = document.getElementById("generate");
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

// Event listener to add function to existing HTML DOM element
generateButton.addEventListener("click", generateWeatherData);

/* Function called by event listener */
function generateWeatherData() {
  const userEntry = document.getElementById("zip").value.toLowerCase();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${userEntry}&appid=${apiKey}&units=metric`;
  getApiData(url)
    .then((newData) => {
      postApiData("/weatherData", newData);
    })
    .then(() => updateUI());
}
/* Function to GET Web API Data*/
const getApiData = async (url) => {
  try {
    const request = await fetch(url);
    const data = await request.json();
    const newData = {
      temprature: data.main.temp,
      description: data.weather[0].description,
    };
    return newData;
  } catch (error) {
    console.log("Error happend", error);
  }
};
/* Function to POST data */
const postApiData = async (url = "", data = {}) => {
  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log("Error happend", error);
  }
};

/* Function to GET Project Data */
async function updateUI() {
  try {
    const response = await fetch("/all");
    const data = await response.json();
    console.log(data);
    document.getElementById(
      "temp"
    ).innerHTML = `Temprature: ${data.temprature}`;
    document.getElementById(
      "content"
    ).innerHTML = `Descreption: ${data.description}`;
    document.getElementById("date").innerHTML = `Date: ${newDate}`;
  } catch (error) {
    console.log(error);
  }
}
