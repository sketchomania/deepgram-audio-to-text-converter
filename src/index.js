const fs = require("fs");
const { Deepgram } = require("@deepgram/sdk");
require("dotenv").config();

console.log(process.env.DG_KEY);

const deepgram = new Deepgram(process.env.DG_KEY);

const callDG = async () => {
  const response = await deepgram.transcription.preRecorded(
    { buffer: fs.readFileSync("./Conference.wav"), mimetype: "audio/wav" },
    { punctuate: true, utterances: true }
  );
  // console.log(response.toWebVTT());
  fs.writeFileSync("responseAuidoText.txt", response.toWebVTT());
  console.log("file created");
};

callDG();
