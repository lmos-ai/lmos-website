---
title: Agent Lifecycle Management
---

# Agent Lifecycle Management

Agent Lifecycle Management and Canary Release Management are critical components for safely rolling out new versions of agents to specific channels or customer groups in a multi-agent system like LMOS. 

## Importance of Canary Release Management

* **Risk Mitigation:** Releasing an agent to a specific channel or group allows you to detect and resolve issues before they affect all users. For example, if a new billing agent version introduces a bug, limiting its release to a small group ensures that only a subset of users experiences the problem, making it easier to contain and address.

* **Customized Rollouts:** Channels may have unique requirements or capabilities. For instance, a new sales agent feature might be relevant only to customers using the web channel. Testing in this specific context ensures the feature is functional and valuable for the intended audience.

* **Performance Validation:** New features or updates may introduce performance impacts. Testing in a controlled environment, such as a subset of users interacting through an IVR channel, helps verify that the new agent performs with low latency.

* **User Feedback and Iteration:** Early rollout to specific groups allows gathering real-world feedback that can guide further improvements. For instance, releasing a new contract agent to a small subset of beta users in a mobile app might reveal usability issues or feature gaps that weren't evident during development.

## Example of Canary Release Use Cases

* Web vs. IVR: Suppose a tenant has both a web channel and an IVR channel. A new customer support agent feature may work well in text-based interactions but needs adjustments for voice-based interactions. By releasing the agent update only to the web channel first, developers can refine the agent's logic for IVR scenarios before enabling it there.