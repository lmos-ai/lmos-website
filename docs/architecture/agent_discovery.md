---
title: Agent Discovery
---

# Agent Discovery

A discovery mechanism is needed for obtaining agent descriptions, supporting both local and global networks. It must accommodate updates to agent descriptions and handle the dynamic nature of agents, allowing for their constant evolution.


Agent metadata propagation within a network is crucial for enabling effective discovery, communication, and collaboration between agents in a multi-agent system.

Agent metadata is propagated across the network using various transport mechanisms:
* **Explicit Signaling:** Agents can explicitly signal their metadata to other agents or central registries. This allows agents to announce their capabilities and attributes.
* **Centralized Registry:** Agents can publish their metadata to a centralized Agent Registry, which serves as a repository for agent information.
* **Local Network Discovery:** For local networks, protocols like mDNS (Multicast DNS) can be used to propagate agent metadata and enable discovery,