const { getApiAudio } = require("../lambda/util");
async function test_utils(){
    return await getApiAudio("matt");
  };
test_utils()