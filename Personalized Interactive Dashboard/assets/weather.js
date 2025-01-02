// const url =
//   "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

// getWeather();

// async function getWeather() {
//   try {
//     const response = await fetch(url);
//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }
//     const data = await response.json();
//     JSON.stringify(data)
//     console.log(data.latitude);
//     console.log(data.longitude);
//     console.log(data.temperature_unit);
//     console.log(data.elevation);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
