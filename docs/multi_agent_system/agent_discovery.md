---
title: Agent Discovery
---

# Agent Discovery

## Problem statement

A discovery mechanism is needed for obtaining agent descriptions, supporting both local and global networks. It must accommodate updates to agent descriptions and handle the dynamic nature of agents, allowing for their constant evolution.

Agent metadata can be propagated across the network using various transport mechanisms:

* **Centralized Registry:** Agents can publish their metadata to a centralized Agent Registry, which serves as a repository for agent information.
* **Local Network Discovery:** For local networks, protocols like mDNS (Multicast DNS) can be used to propagate agent metadata and enable discovery,

## Web of Things

[W3C Web of Things (WoT)](https://www.w3.org/WoT/) offers a mechanism that things can dynamically propagate metadata using protocols like mDNS for local discovery and/or can register themselves on centralized directories for broader access. In LMOS, this approach can be adapted for agent discovery, where agents dynamically register and propagate their metadata to a centralized Agent Registry for efficient querying. This allows LMOS agents to discover each other in real time based on specific needs or capabilities.

### Centralized Registry

[W3C Web of Things (WoT) Discovery](https://www.w3.org/TR/wot-discovery/#architecture) describes how things can register themselves in a central directory, known as a Thing Description Directory (TDD), through a process that involves several steps:

1. **Directory Discovery:**
The Thing first needs to discover the Thing Description Directory (TDD). This can be done through various introduction mechanisms like mDNS, DNS-SD, or well-known URLs.

2. **TD Preparation:**
The Thing prepares its Thing Description (TD), which contains metadata about the Thing's capabilities, interfaces, and other relevant information.

3. **Registration Request:**
The Thing sends a registration request to the TDD. This is typically done using an HTTP POST.

4. **Updates:**
Things can update their registered TDs by sending new registration requests with updated information.

5. **Time-to-Live:**
Registrations often include a time-to-live value. Things must periodically refresh their registration or send keep-alive messages to maintain their presence in the directory.

### Local Network Discovery

[W3C Web of Things (WoT) Discovery](https://www.w3.org/TR/wot-discovery/#architecture) is using **mDNS (Multicast DNS)** and **DNS-SD (DNS Service Discovery)** on a local network to discover things.
Multicast DNS (mDNS) is a network protocol used for service discovery on a local network without relying on a centralized DNS server. Devices broadcast their presence on the network, and other devices can listen for these broadcasts to discover available services. It is commonly used in home networks (e.g., for discovering printers, smart TVs, etc.) and works in conjunction with DNS Service Discovery (DNS-SD) to advertise services.

1. **Agent Advertisement:**
WoT things advertise their presence on the local network by publishing mDNS records. These records contain information about the agent, including its name, IP address, and available services.

    - **Service Type:**
    WoT things use a specific service type for DNS-SD: "_wot._tcp". This allows other agents to easily identify and locate WoT-compatible agents on the network.

    - **TXT Records:**
    Additional information about the WoT thing is included in TXT records. These records may contain details such as:
        - The URL of the Thing Description (TD)
        - Metadata about the agents's capabilities

2. **Discovery Process:**
When a client or agent wants to discover WoT-compatible agents on the local network, it sends out mDNS queries for the "_wot._tcp" service type.
Things that match this service type respond with their mDNS records, allowing the client to learn about available WoT things and their capabilities.


3. **Retrieving Thing Descriptions:**
Once a client has discovered a WoT-compatible agent, it can retrieve the agents's Thing Description using the URL provided in the TXT records.
The Thing Description provides detailed information about the agents's properties, actions, and events.
