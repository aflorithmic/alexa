const { default: axios } = require("axios");
const apiaudio = require("apiaudio").default
// fill with your apiKey and your scriptId.
// for production version, please don't hardcode your keys.
apiaudio.configure({ apiKey: "your apikey here"});
const SCRIPT_ID = "your scriptid here"

module.exports.getApiAudio= async function (username = "") {
  try {
    // produce text to speech
    const speechRequest = await apiaudio.Speech.create({ scriptId: SCRIPT_ID, voice: "en-GB-RyanNeural", audience:[{"username": username}]});
    
    // do mastering on the speech audio files using a soundTemplate.
    const masteringRequest = await apiaudio.Mastering.create({scriptId: SCRIPT_ID, public: true, soundTemplate: "headlines", audience:[{"username": username}]});
    
    // retrieve mastered audio file url
    const masteringResult = await apiaudio.Mastering.retrieve(SCRIPT_ID, {"username": username}, _public=true);
    const audioUrl = masteringResult.url
    console.log("~ mastering result", audioUrl);
    return audioUrl;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};