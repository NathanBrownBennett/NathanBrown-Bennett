# Device Provisioning Toolkit — BstudioB case study

## The problem

Choosing a device is often treated as a price or specification exercise. In practice, the decision also depends on security posture, support life, update policy, procurement context and how the device will be configured after purchase.

## What I built

The Device Provisioning Toolkit turns that decision into a repeatable workflow for personal, business and government use. It combines device discovery, structured comparison and security guidance so that a recommendation is connected to an actionable setup plan.

The working application supports:

- filtering across 13+ device and security criteria;
- security scoring from 0–100 with benchmark scores;
- multi-vendor purchase links and live market search;
- a five-minute cache with database fallback for resilience;
- a practical security guide and debloat tools;
- responsive views for desktop and mobile use.

## Engineering evidence

The prototype is built with Flask, SQLite, Pandas and Bootstrap 5. Playwright end-to-end coverage verifies the main journey; the project README records 7/7 E2E tests passing at the time of the latest local validation.

## Why it matters

The toolkit is an example of my wider approach: start with a security question, make the decision criteria visible, then build something that helps a person or organisation act. It is research translated into a usable system rather than a static comparison table.

## Current status

This is a working prototype and portfolio case study. The next BstudioB step is to validate the workflow with real procurement scenarios, tighten the data-update process and decide which parts should become a hosted product or client-facing pilot.

## Links

- [Device Provisioning Toolkit source repository](https://github.com/NathanBrownBennett/Dynamic-Flowchart-For-Device-Provisioning-)
- [Nathan Brown-Bennett portfolio](https://nathanbrownbennett.github.io/NathanBrown-Bennett/)
- [BstudioB](https://bstudiob.co.uk/)
