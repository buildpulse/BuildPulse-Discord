# BuildPulse-Discord
A Github Action for reporting test information from [BuildPulse](https://buildpulse.io) to a Discord channel using a [Discord Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

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
### Example
See the most disruptive tests so you know exactly where to focus first for maximum impact.

<img width="1183" alt="Screenshot of message posted by BuildPulse-Discord action" src="https://user-images.githubusercontent.com/2988/150837405-bd4c355c-dacd-4b46-91e3-1046c7d7e58b.png">

The disruptiveness ratio shows the proportion of test runs that failed due to a flaky outcome. For the first test shown above, we see that 41% of the test runs failed due to flakiness.
