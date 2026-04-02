<img src="/assets/img/OvermindLogo.png" width=825>

[<img src="/assets/img/buttons/download.png" height=22>](https://github.com/grgisme/OvermindForged/releases)   [<img src="/assets/img/buttons/patchNotes.png" height=22>](CHANGELOG.md)   [<img src="/assets/img/buttons/documentation.png" height=22>](https://bencbartlett.github.io/overmind-docs/)

### Current release: [OvermindForged - Modernized Edition]

- See the [changelog](CHANGELOG.md) for patch notes
- Submit an issue or PR to help adapt the bot to the latest API features!

---

# About OvermindForged

<img align="right" src="/assets/img/exampleRoomBanner2.png" width=325>

### What is OvermindForged?

**OvermindForged** is a modernized, community-driven revitalization of the legendary [Overmind](https://github.com/bencbartlett/Overmind) Screeps AI originally developed by Ben Bartlett. The Zerg-swarm intelligence architecture remains intact, but we are actively reforging internal APIs to ensure this bot can survive and thrive in modern Screeps environments. 

*(Note: We will **not** be running this adaptation on the official Screeps MMO servers ourselves, but others are entirely welcome to use it!)*

### Integrated Community PRs & Issue Fixes
To combat the stall problem and get the bot compatible with modern server API standards, the following critical patches originally submitted by the Screeps community have been integrated into OvermindForged:

- **PR #212 (Update to the new Store interface)** *by @wmonk*: Replaces deprecated `.carry` and `.energy` usages across the logistics network layout with the strict `Store` API required by Screeps 4.0+.
- **PR #191 (Refactor deprecated isRoomAvailable)** *by @Mirzian*: Updates scouting logic to accommodate the removal of `Game.map.isRoomAvailable`, natively using the new `getRoomStatus` mappings.
- **PR #183 (Fix vacatePos movement bug)** *by @bittflo (Florian)*: Fixes a critical movement evaluation bug where any Zerg instances failed to respect the forced `vacatePos` override, causing cascading blockages.
- **PR #177 (cherry pick: 0 = false, check for key exists)** *by @ikiris (Blake Dunlap)*: Fixes a nasty JS truthy bug evaluated as `0 = false` that prevents managers from shifting efficiently.
- **PR #194 (Fix inverted colon logic for global cache metrics)** *by @gswagner*: Fixes the key recall string for `GlobalCache` and `costMatrix`.
- **PR #189 (Fix invadercore attack bug causing paralyzation)** *by @bittflo*: Logic fix preventing invaderCores from stalling `npcDefense` execution and paralyzing spawns.
- **PR #178 (Nuke response prioritization)** *by @ikiris (Blake Dunlap)*: Refactors worker fortification evaluations and avoids leapfrogging `neededRampartHits`.
- **PR #145 (Novice protection)** *by @mroy*: Adds League of Automated Nations querying to Cartographer bounding segment properties.
- *(More legacy PR tracking and mechanic upgrades coming soon!)*

### Can I use Overmind as my bot?
If you're new to Screeps, we recommend writing your own AI. However, if you want to use OvermindForged on a private server or the MMO, feel free!

# Installation

### Out of the box
If you just want to run Overmind without modification, you can copy the compiled `main.js` file attached to the [latest release](https://github.com/bencbartlett/Overmind/releases) into your script. While Overmind is fully automated by default, it can be run with varying levels of autonomy; refer to the [Overmind wiki](https://github.com/bencbartlett/Overmind/wiki) for how to configure and operate the bot.

### Compiling from source
To install the full codebase, download or clone the repository. (Please note that while the latest release of Overmind should always be stable, the latest commit may contain unstable features.) Navigate to the Overmind root directory and run ```npm install```. To compile and deploy the codebase, create a `screeps.json` file from the [example file](https://github.com/bencbartlett/Overmind/blob/master/screeps.example.json), then do one of the following actions:

- Compile and deploy to public server: `npm run push-main`
- Compile and deploy to private server: `npm run push-pserver`
- Compile without deploying: `npm run compile`

Overmind uses `rollup` to bundle the compiled TypeScript into a single `main.js` file. The codebase includes functionality to compute checksums for internal validation - if you have a different version of `rollup` installed globally, different checksums may be computed and some functionality will be disabled. Please ensure the local installation of `rollup` found in `node_modules` is used.

### Setting up the Grafana dashboard

Overmind includes a [Grafana dashboard](https://github.com/bencbartlett/Overmind/tree/master/assets/Grafana%20Dashboards) (shown below) which tracks detailed operating statistics. To set up the dashboard:

1. Register for grafana service at [screepspl.us](https://screepspl.us/services/grafana)
2. Setup the [ScreepsPlus hosted agent](https://screepspl.us/services/hosted-agent/) (simpler) or use the NodeJS agent [on a free micro instance of Google Compute](https://github.com/bonzaiferroni/bonzAI/wiki/Screepspl.us-agent-with-Compute-Engine).
3. Import the dashboard from [Overmind.json](https://github.com/bencbartlett/Overmind/blob/master/assets/Grafana%20Dashboards/Overmind.json) and change `$User` to your username.
4. Enjoy your pretty graphs!

![](/assets/img/dashboard_compacted_2.png)

# Design overview

Check out the [Overmind wiki](https://github.com/bencbartlett/Overmind/wiki) for in-depth explanations of parts of the design of the AI. (Click the diagram below to see a higher-resolution version.)

![[AI structural schematic](/assets/AIdiagram.png)](https://raw.githubusercontent.com/bencbartlett/Overmind/master/assets/img/AIdiagram.png)

