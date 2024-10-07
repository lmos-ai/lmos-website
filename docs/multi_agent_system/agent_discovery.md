---
title: Agent Discovery
---

# Agent Discovery

A discovery mechanism is needed for obtaining agent descriptions, supporting both local and global networks. It must accommodate updates to agent descriptions and handle the dynamic nature of agents, allowing for their constant evolution.

Agent metadata can be propagated across the network using various transport mechanisms:

* **Centralized Registry:** Agents can publish their metadata to a centralized Agent Registry, which serves as a repository for agent information.
* **Local Network Discovery:** For local networks, protocols like mDNS (Multicast DNS) can be used to propagate agent metadata and enable discovery,