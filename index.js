require('dotenv').config()

// Express variables
const express = require('express')
const app = express()
app.use(express.json());
const PORT = process.env.PORT || 8080;

// Gemini variables
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const DEFAULT_MODEL = "gemini-1.5-flash"; //https://ai.google.dev/gemini-api/docs/models/gemini


const callGemini = async (geminiModel, prompt, generationConfig) => {
  const modelConfig = {
    model: geminiModel,
  };
  if (generationConfig) {
    modelConfig.generationConfig = generationConfig;
  }
  const model = genAI.getGenerativeModel(modelConfig);
  const result = await model.generateContent(prompt);
  const response = result.response;
  return response.text();
}

/**
 * @description GET route - test with /?model=gemini-1.5-flash-8b&prompt=What%20is%20the%20Capital%20of%20California
 */
app.get('/', async (req, res) => {
  let prompt = req.query.prompt ? req.query.prompt : 'How do I pass paramters in a URL?';
  let model = req.query.model ? req.query.model : DEFAULT_MODEL;
  let response = await callGemini(model, prompt);
  res.status(200).send(response);
})

/**
 * @description POST route - curl -H "Content-Type: application/json" -H "Authorization: Bearer $ACCESS_TOKEN" -d '{ "model": "gemini-1.5-pro", "prompt": "What is the capital of Nevada"}' -X POST https://9002-$WEB_HOST
 */
app.post('/', async (req, res) => {
  const prompt = req.body.prompt ? req.body.prompt : 'How do I CURL a POST with a JSON body?';
  const model = req.body.model ? req.body.model : DEFAULT_MODEL;
  const generationConfig = req.body.generationConfig ? req.body.generationConfig : null;
  const response = await callGemini(model, prompt, generationConfig);
  res.status(200).send(response);
})

app.listen(PORT, () => {
  console.log(`Intro to Gemini app listening on port ${PORT}`)
})