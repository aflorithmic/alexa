const { default: axios } = require("axios");

<<<<<<< HEAD
module.exports.getApiAudio = async function(username = "") {
    try {
        console.log("RETURNING URL!");
        return "https://v1.api.audio/url/4b9d60/multiple_speakers.mp3";
    } catch (ex) {
        console.log(ex);
        throw ex;
    }
};
=======
const ORGANIZATION = "aflorithmic";
const PROJECT = "baobub";
const MODULE = "handshake";
const SCRIPT = "handshake_01";

const HANDSHAKE_ENDPOINT = "https://handshake.aflr.io";

module.exports.getHandshakeResult = async function (username = "") {
  try {
    const { data } = await axios.get(HANDSHAKE_ENDPOINT, {
      params: {
        username,
        module: MODULE,
        script: SCRIPT,
        organization: ORGANIZATION,
        project: PROJECT
      }
    });
    const { handshakeTrack } = data;
    console.log("🚀 ~ handshakeTrack", handshakeTrack);
    return handshakeTrack;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};
>>>>>>> parent of e94fd01 (new version of alexa skill with apiaudio support)
