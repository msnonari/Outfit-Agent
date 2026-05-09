import express from "express";
import ollama from "ollama";

const app = express();
app.use(express.json());

// -------------------- TOOLS --------------------

async function fetchWeather(location) {
  return { temp: 12, condition: "rain" };

  // Uncomment for real API (replace YOUR_API_KEY)
  /*
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    temp: data.main.temp,
    condition: data.weather[0].main.toLowerCase()
  };
  */
}

// Calendar Tool (mock data)
function getCalendarEvents(location) {
  return { event: "office meeting" };
}

// Outfit Suggestion Tool
async function suggestOutfit(weather, calendar) {
  const prompt = `
  You are an outfit recommender agent.
  Weather: ${weather.condition}, Temp: ${weather.temp}°C
  Event: ${calendar.event}
  Suggest an outfit with reasoning.
  `;

  try {
    const response = await ollama.generate({
      model: "nemotron-3-nano:4b",
      prompt: prompt,
      think: false,
    });

    return response.response;
  } catch (err) {
    console.error("Ollama error:", err.message);
    return "Wear casual clothes (fallback, Ollama not available).";
  }
}

// -------------------- EXPRESS ENDPOINT --------------------
app.post("/suggest", async (req, res) => {
  const { location } = req.body;
  try {
    const weather = await fetchWeather(location);
    const calendar = getCalendarEvents(location);
    const outfit = await suggestOutfit(weather, calendar);

    res.json({
      recommendation: outfit,
      reasoning: `Weather: ${weather.condition}, Temp: ${weather.temp}°C, Event: ${calendar.event}`,
    });
  } catch (err) {
    res.json({
      recommendation: "Wear casual clothes",
      reasoning: "Fallback due to error.",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
