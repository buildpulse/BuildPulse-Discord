# BuildPulse-Discord
[BuildPulse](https://buildpulse.io) is a CI observability platform that can help you find and [fix flaky tests](https://buildpulse.io/products/flaky-tests).

This Github Action is for reporting test information from BuildPulse to a Discord channel using a [Discord Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

```yml
- name: Send Digest
  uses: Rabatta-ApS/BuildPulse-Discord@v2.1.0
  with:
    buildPulse-api-token: ${{ secrets.BUILDPULSE_API_TOKEN }}
    discord-webhook: ${{ secrets.DISCORD_BUILDPULSE_WEBHOOK }}
```
### Repository 
By default the action fetches tests from the repository that it is being run in. Alternatively, you can specify another repository using the **repository** input.
```yml
- name: Send Digest
  uses: Rabatta-ApS/BuildPulse-Discord@v2.1.0
  with:
    buildPulse-api-token: ${{ secrets.BUILDPULSE_API_TOKEN }}
    discord-webhook: ${{ secrets.DISCORD_BUILDPULSE_WEBHOOK }}
    repository: facebook/react
```
