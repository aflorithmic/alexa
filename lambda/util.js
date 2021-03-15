const { default: axios } = require("axios");

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
