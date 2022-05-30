const { default: axios } = require("axios");

module.exports.getApiAudio = async function(username = "") {
    try {
        console.log("RETURNING URL!");
        return "https://v1.api.audio/url/4b9d60/multiple_speakers.mp3";
    } catch (ex) {
        console.log(ex);
        throw ex;
    }
};