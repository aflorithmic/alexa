const apiaudio = require("apiaudio").default
apiaudio.configure({ apiKey: "your key here"});
text = `
    <<soundSegment::intro>>
    <<sectionName::intro>> 
    Hey {{username}}, London underground to get full mobile network by end of twenty twentyfour.
    The first stations to be connected, will include Bank, and Oxford Circus. <break time="2s"/>
    <<soundSegment::main>>
    <<sectionName::main>> 
    London mayor, who was re elected last month said. I promised Londoners that if they re elected 
    me for a second term as a mayor, I would deliver four gee throughout the tube network.
    Transport for London explained that work on some of the capitals busiest station, including 
    Oxford Circus and Tottenham Court Road would begin soon, with plans for them to be among the 
    first fully connected stations by the end of next year.
    <<soundSegment::outro>>
    <<sectionName::outro>>
    <break time="1s"/> This news was delivered to you by Always Up To Date.
    Check out our webpage for the latest news. 
    <<soundEffect::effect1>>
    `
template = "headlines"
audience = {"username": "Sam"}

async function create_audio(text, template, audience){
    try {
        const script = await apiaudio.Script.create({ scriptText: text, scriptName: "mynews" })
        console.log("scriptId: ", script.scriptId)
        const speechRequest = await apiaudio.Speech.create({ scriptId: script.scriptId, voice: "en-GB-RyanNeural", audience:[audience]});
        const masteringRequest = await apiaudio.Mastering.create({scriptId: script.scriptId, public: true, soundTemplate: template, audience:[audience]});
        const masteringResult = await apiaudio.Mastering.retrieve(script.scriptId, audience, _public=true);
        console.log(masteringResult.url)
        return masteringResult.url
    } catch (e) {
        console.error(e);
    }
};

create_audio(text, template, audience)



