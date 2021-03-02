const { default: axios } = require("axios");

const ORGANIZATION = "aflr";
const MODULE = "baobub";
const PROJECT = "handshake";
const SCRIPT = "handshake";

const HANDSHAKE_ENDPOINT = "https://handshake.aflr.io";

module.exports.getHandshakeResult = async function (username) {
  try {
    const { data } = await axios.get(HANDSHAKE_ENDPOINT, {
      username,
      module: MODULE,
      script: SCRIPT,
      organization: ORGANIZATION,
      project: PROJECT
    });
    const { handshakeTrack } = data;
    console.log("🚀 ~ file: util.js ~ line 20 ~ handshakeTrack", handshakeTrack);
    return handshakeTrack;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};
