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

### Toolchain Modernization (TS 5.5 & Rollup v4)
To ensure long-term stability natively within the TickForge ecosystem, OvermindForged has been structurally upgraded:
- **TypeScript 5.5**: Upgraded from legacy `v3.2` to `^5.5.0`. Resolved securely over 101 strict-typing and accessor-override compilation cascades dynamically spanning 66 native files structurally.
- **Rollup v4**: Migrated gracefully to Rollup v4 using the modern `@rollup/plugin-*` native configurations, safely bundling ES2022 payloads flawlessly explicitly!
- **Node 20+ CI**: Hardened `package.json` locking explicitly to enforce modern runtime resolution compatibility!

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

### Integrated Community Issue Resolutions
In addition to pull request integrations, several fatal bugs identified on the legacy issue tracker have been addressed to stabilize TickForge execution:
- **TickForge Strict-Mode Parity (Memory GC Bug)**: Guarded cleanup routines in `Memory.ts` (`cleanCreeps`, `cleanColonies`, `cleanFlags`) to avoid illegal `delete global["undefined"]` calls which induce full V8 unhandled errors under strict `isolated-vm` execution on both the native MMO and TickForge instances. 
- **TickForge Feature Stability (Unowned Construction Site Checks)**: Expanded `RoomPlanner.ts` `removeMisplacedConstructionSites()` evaluating `site.owner` references with proper null/falsy protections to comfortably handle externally injected structural ladder targets.
- **Issue #152 (SourceReaperOverlord paralysis)**: Fixes a severe bug where center-core SK rooms lacking a `KeeperLair` caused Reapers to loop `goTo()` calls indefinitely.
- **Issue #157 (Worker Economy Dogpiling)**: Fixes early-game pacing limitations where `Workers` would cluster onto identically-weighted singular `build` or `repair` targets. Tasks are now weighted against their concurrent targeting densities via `minBy` distancing.
- **Issue #205 (room.drops TypeError exception)**: Hardened the `Overseer` logistics array mappings by adding `Array.isArray()` checks to mitigate prototype poisoning cascading into pipeline exceptions.
- **Issue #182 & #184 (isRoomAvailable Deprecation)**: Updated `Overseer.ts` to utilize the modern `Game.map.getRoomStatus(roomName).status` check, squashing compilation errors and runtime warnings.
- **Issue #187 (Respawn/Newbie zone borders)**: Addressed via earlier PR #145 integration.

### Deferred Issue Tracking
We audited the remaining open issues on the original repository and deferred them. The following represent structural tracking logic for why they were bypassed:
- **#217**: Classified as a Feature Request (UI element for colony major projects).
- **#213**: Reported against `v0.6.0-dev` branch, inapplicable to our `v0.5.2` core architecture.
- **#204, #185, #176**: Ambiguous reports without reproducible tracebacks ("Numerous errors", "Problem Compiling", "Low RCL issues"). Given our stable compile against TickForge using modern Node, these are resolved by our environment updates.
- **#203 (No melee defenders), #201 (No transports)**: Highly situational edge-cases or player macro-misconfigurations. We opted to evaluate these dynamically in upcoming simulation runs rather than preemptively patching based on incomplete screenshots.
- **#202 (Completes own terminal orders)**: Minor economic leakage bug; secondary priority compared to fixing the survival/mining loops.

#### Permanently Rejected (Never to be Integrated)
We have evaluated the following legacy PRs and determined they will **never** be implemented, as they actively conflict with the modern `OvermindForged` ecosystem:
- **PR #216 & PR #208 (Rollup / Yarn Dep Bumps)**: Irrelevant dependency bumps for antiquated bundlers (`rollup 2.x`). We successfully ripped and replaced the entire backend natively with Rollup v4, rendering these moot.
- **PR #209 (typed-screeps namespace migration)**: Massive typings overhaul converting legacy structural typings. Extremely high risk of blinding or destroying hard-coded `Overmind` property mappings.
- **PR #115 (Assimilator Integration)**: Contains code explicitly written for `Screeps Assimilator` multi-player neural mappings. Totally useless and heavily conflicting inside isolated sandbox engine testing like TickForge.
- **PR #190 & PR #192 (Cosmetic log loops)**: Excessive style changes causing massive merge conflicts for almost zero runtime value.

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

