const axios = require('axios');
const core = require('@actions/core');

  (async () => {
    const bpToken = core.getInput('buildPulse-api-token');
    core.debug(bpToken);
    if (!bpToken) core.setFailed('Missing BuildPulse API token');
    const discordWebhook = core.getInput('discord-webhook');
    core.debug(discordWebhook);
    if (!discordWebhook) core.setFailed('Missing Discord webhook');
    const repo = core.getInput('repository') || process.env.GITHUB_REPOSITORY;
    let bpData;
    try {
      bpData = (await axios(
        {
          url: `https://buildpulse.io/api/repos/${repo}/tests`,
          headers: {
            Authorization: `token ${bpToken}`
          }
        }
      )).data;
    } catch (e) {
      core.setFailed(`Failed to communicate with BuildPulse: ${e}`);
    }
  
    const tests = bpData.tests;
  
    tests.sort((a, b) => {
      return b.disruptiveness - a.disruptiveness;
    });
  
    let content = '__**The most flaky tests the last 14 days**__\n```';
  
    if (tests.length > 0) {
      for (let i = 0; i < 3 && i < tests.length; i++) {
        const test = tests[i];
        content += `Disruptiveness: ${test.disruptiveness} - ${test.name}\n`;
      }
    } else {
      content += 'No flaky tests found!';
    }
  
    content += '```';
  
    try {
      await axios({
        method: 'POST',
        url: discordWebhook,
        data: {
          content: content
        }
      });
    } catch (e) {
      core.setFailed(`Failed to communicate with Discord: ${e}`);
    }
  })();

