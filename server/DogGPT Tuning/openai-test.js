require('dotenv').config();
const OpenAI = require("openai");

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: "Dog Name: Hersh; Breed: Pitbull; Girl; [Pre-walk] Initial Behavior: Sweet, Friendly; Leashing: No problems; [On-walk] Events: Pee, Pee, Poo, Rolled in grass, Played fetch; Notes: We stopped by a dog park and threw the ball around; [Post-walk] Where did you walk?: to dog park; Behavior during walk: Friendly, Friendly to other dogs, Didn't cause trouble when passing dogs; Overall Experience: Great walk; Filled Water Bowl?: TRUE;"}],
    model: "ft:gpt-3.5-turbo-0125:personal:dataset-0:9WW09oVf",
  });

  console.log(completion.choices[0]);
}

main();