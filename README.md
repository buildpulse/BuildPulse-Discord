# BuildPulse-Discord
A Github Action for reporting test information from BuildPulse to a Discord channel

```yml
- name: Send Digest
  uses: Rabatta-ApS/BuildPulse-Discord@v1.0
  with:
    buildPulse-api-token: ${{ secrets.BUILDPULSE_API_TOKEN }}
    discord-webhook: ${{ secrets.DISCORD_BUILDPULSE_WEBHOOK }}
```