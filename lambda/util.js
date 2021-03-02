const { default: axios } = require("axios");

const organization = "aflr";
const module = "baobub";
const project = "handshake";
const script = "handshake";

const HANDSHAKE_ENDPOINT = "https://handshake.aflr.io";

module.exports.getHandshakeResult = async function (username) {
  try {
    const { data } = await axios.get(HANDSHAKE_ENDPOINT, {
      username,
      module,
      script,
      organization,
      project
    });
    const { handshakeTrack } = data;
    return handshakeTrack;
  } catch (ex) {
    console.log(ex);
    throw ex;
  }
};
