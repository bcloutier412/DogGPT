const fs = require('fs');
const fetch = require('node-fetch');
const { OpenAI, toFile } = require('openai');

const openai = new OpenAI();

async function main() {
  // If you have access to Node fs we recommend using fs.createReadStream():
  // await openai.files.create({ file: fs.createReadStream('Tuning Datasets/mydata-0.jsonl'), purpose: 'fine-tune' });


  // Start a Tuning job
  // const fineTune = await openai.fineTuning.jobs.create({ training_file: 'mydata-0', model: 'gpt-3.5-turbo' });

  // List 10 fine-tuning jobs
  let page = await openai.fineTuning.jobs.list({ limit: 10 });
  console.log(page)
  // Retrieve the state of a fine-tune
  // let fineTune = await openai.fineTuning.jobs.retrieve('ftjob-abc123');

  // Cancel a job
  // let status = await openai.fineTuning.jobs.cancel('ftjob-abc123');

  // List up to 10 events from a fine-tuning job
  // let events = await openai.fineTuning.jobs.listEvents(fineTune.id, { limit: 10 });

  // Delete a fine-tuned model (must be an owner of the org the model was created in)
  // let model = await openai.models.delete('ft:gpt-3.5-turbo:acemeco:suffix:abc123');
}

main();