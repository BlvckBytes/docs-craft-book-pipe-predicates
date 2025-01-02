---
sidebar_position: 1
slug: /
---

# Overview

There exists a collection of game-mechanical features, all packaged and configurable via the plugin [CraftBook](https://enginehub.org/craftbook); one being their ingenious [Pipes](https://craftbook.enginehub.org/en/3.x/mechanics/pipes/)-system, which allows its users to transport items in between containers efficiently, enabling automatic sorting systems and the like. While actually using this extension in a day-to-day situation, I noticed how I constantly found myself restricted by the limiting nature of numeric item-ids when it comes to specifying output-filters; this plugin of mine aims at integrating my versatile [ItemPredicateParser](https://blvckbytes.github.io/docs-item-predicate-parser) seamlessly into the experience, in order to vastly increase the user's freedom.

TODO: Add preview gif

## Targetting Outputs

In order to create as little friction while configuring pipe-outputs as possible, targetting nodes is rather flexible and sensible: simply look at any part of the output, be it the container, the piston, or the sign itself; this way, pipes can be configured without having to be able to physically access the sign, which can be a life-saver in crowded setups.

## Commands And Permissions

The command's name and aliases are arbitrarily configurable; going forward, `/pipr` (**pi**pe **pr**edicate) represents said main-command, with various actions being realized via sub-commands thereof.

### Get Entered Predicate

Retrieve the pipe-output's current predicate, exactly as entered (possibly containing partial syllables).

Command: `/pipr Get-Entered`\
Permission: `craftbookpipepredicates.command.pipepredicate.read`

### Get Expanded Predicate

Retrieve the pipe-output's current predicate, in its fully expanded version.

Command: `/pipr Get-Expanded`\
Permission: `craftbookpipepredicates.command.pipepredicate.read`

### Set Predicate With Default Language

Initialize or overwrite the pipe-output's current predicate using the language configured as a default in the plugin's configuration-file.

Command: `/pipr Set <predicate>`\
Permission: `craftbookpipepredicates.command.pipepredicate.modify`

### Set Predicate With Custom Language

Initialize or overwrite the pipe-output's current predicate using a language chosen from the list of supported languages.

Command: `/pipr Set-Localized <language> <predicate>`\
Permission: `craftbookpipepredicates.command.pipepredicate.modify`

### Remove Existing Predicate

Remove a possibly existing predicate and thereby exit predicate-mode on the pipe-output at hand.

Command: `/pipr Remove`\
Permission: `craftbookpipepredicates.command.pipepredicate.modify`

### Reload Configuration

Reloads the configuration-file `config.yml` as well as its configured pre-processor input (language-file), reflecting changes immediately.

Command: `/pipr Reload`\
Permission: `craftbookpipepredicates.command.pipepredicate.reload`

## Protection-Checks

Since pipe-predicates are attached to a pipe's output-piston's sign virtually, meaning without the requirement of interacting with the world itself, in order to determine whether the player is allowed to read/modify the attached predicate on the sign in question, a *fake* sign-edit event is produced: if said event is not cancelled by any other plugin, the user may execute their command - otherwise, execution is denied. In short: in order to be able to work with predicates, one needs to possess the priviledges to edit the corresponding sign. This simple yet effective check should account for all various protection-systems and scenarios.