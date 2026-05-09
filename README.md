# 🌦 Weather & Outfit Recommender Agent

A beginner‑friendly **Node.js + Express v5** project that demonstrates **agentic AI concepts** using the **Ollama npm package** for local LLM reasoning.  

This project is designed for **classroom teaching** — helping students learn how to build agentic AI systems with **multi‑tool chaining**, **conditional reasoning**, and **external API integration**.

---

## 📌 Project Overview
The agent answers questions like:  
> *“What should I wear in London today?”*  

It works by:
1. Fetching **weather data** (mock JSON or OpenWeatherMap API).  
2. Checking **calendar events** (mock data).  
3. Using **Ollama (local LLM)** to generate outfit recommendations with reasoning.  
4. Returning a structured JSON response via an Express endpoint.  

---

## 🛠 Tech Stack
- **Node.js (ESM syntax)**  
- **Express v5**  
- **Ollama npm package** (local LLM integration)  
- **Native Fetch API** (no axios)  

---

## 🚀 Features
- `POST /api/agent/outfit` → Takes location input and returns outfit recommendation + reasoning.  
- Mock weather/calendar tools for beginner practice.  
- Optional integration with **OpenWeatherMap API**.  
- Local LLM reasoning via **Ollama** (`llama3`, `mistral`, `gemma`, etc.).  
- Error handling with fallback suggestions.  

---

## ▶️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/weather-outfit-agent.git
cd weather-outfit-agent
