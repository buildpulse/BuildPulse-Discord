const axios = require('axios');
const core = require('@actions/core');

(async () => {
  const bpData = (await axios(
    {
      url: 'https://buildpulse.io/api/repos/rabatta-aps/rabatta/tests',
      headers: {
        Authorization: `token ${core.getInput('buildPulse-api-token')}`
      }
    }
  )).data;

  const tests = bpData.tests;

  tests.sort((a, b) => {
    return b.disruptiveness - a.disruptiveness;
  });

  let content = '__**The most flaky tests the last 14 days**__\n```';

  for (let i = 0; i < 3 && i < tests.length; i++) {
    const test = tests[i];
    content += `Disruptiveness: ${test.disruptiveness} - ${test.name}\n`;
  }

  content += '```';

  axios({
    method: 'POST',
    url: core.getInput('discord-webhook'),
    data: {
      content: content
    }
  });
})();
