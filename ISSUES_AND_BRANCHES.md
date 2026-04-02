# Overmind Tracking: Issues and Branches

## Branch Accounting

This is a comprehensive review of the active remote branches in the original Overmind repository and our decision for each:

*   `master`: **Accepted**. This served as the v0.5.2 stable baseline for the `OvermindForged` fork. We are applying surgical stabilization fixes and mechanical upgrades to this branch directly to satisfy the TickForge parity testing environment.
*   `dev` (v0.6.0-dev): **Skipped/Rejected**. This branch contained massive, incomplete structural refactors of the bot architecture. Porting fixes to it or trying to stabilize it proved impossible as its core game loop was severely disjointed. All bugs unique to it (e.g. Issue #213) have been ignored.
*   `dependabot/npm_and_yarn/rollup-2.79.2`: **Skipped/Rejected**. OvermindForged has already explicitly overhauled the entire compilation pipeline naturally from legacy Rollup to modern Rollup v4 natively, bypassing these stale robotic PR dependency bumps.

## Deferred / Unaddressed Open Issues & PRs

We've evaluated the open pull requests and bug reports on the original repository. Many have been deferred or parked because our current priority is mechanical stability inside the TickForge engine.

### Unaddressed Critical Fixes (Scheduled for Later):
These issues and PRs identify valid bugs that we will eventually want to integrate as we finalize simulation testing:

*   **PR #172 (`lol fixed playerhostiles`)**: The legacy Overmind mistypes `isPlayer` vs `isHuman` causing a catastrophic blindness to hostile player invasions. Must be merged whenever we need PvP coverage in TickForge.
*   **PR #177 (`0 = false, check for key exists`)**: Valid Javascript bug fix for an identity check that fails when evaluating index 0. Will be implemented during Manager optimizations.
*   **PR #183 (`Fix vacatePos & autoRun`)**: Forced pushing stalls the movement loops; this PR elegantly patches the stall validation checks. 
*   **PR #194 (`cost matrix recall wasn't using the right key`)**: Crucial memory caching fix for global cost matrices.
*   **PR #171 (`fix non move multi boosts`)**: Needs review for any high-RCL boosting operations.
*   **PR #189 (`Fix guard amount for invaderCore attacking`)**: Essential for any simulation scenarios involving `InvaderCores`, which crash Overmind natively because they were added post-development.
*   **PR #178 (`Nuke response`)**: Important base-defense prioritization algorithms fixing how Ramparts behave during incoming Nukes.
*   **PR #145 (`Novice protection: detect novice and respawn zones`)**: Vital for public server bot execution; low priority inside isolated simulation environments.

### Unaddressed Original Issues Tracking (Investigation Required):
These are unconfirmed legacy bug reports that may or may not surface during TickForge evaluation logic executions:

*   **Issue #152 (`SourceReaperOverlord paralysis in Sector Centers`)**: The bot can CPU loop endlessly if a Sector Center has SK mining rooms without active KeeperLairs.
*   **Issue #157 (`Worker Job-Pile Cluster`)**: Multiple workers will target identical unbuilt structures natively and fetch from identical dropping piles, capping workflow efficiency at low RCL.
*   **Issue #205 (`room.drops[resourceType] is not iterable TypeError`)**: Could be a stale memory cache prototype poisoning issue or an edge case with strict typing iterations.

*Note: For issues and PRs determined to NEVER be implemented (such as typed-screeps conversions or irrelevant dependency upgrades), see the README.md deferred logic block directly.*
