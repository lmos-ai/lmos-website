---
title: Agent Communication
---

# Agent Communication

Agents should be able to communicate using open protocols, but the architecture must provide flexibility in choosing the best protocol for each agent’s purpose. Rather than enforcing a single transport protocol like HTTP, MQTT, or AMQP, the system should allow agents to select and adapt protocols based on their needs.

A higher abstraction layer on top of the actual transport protocols can significantly enhance the flexibility and efficiency of multi-agent systems:

* **Interoperability:** Agents using different transport protocols can still communicate seamlessly through the abstraction layer, which handles the translation between protocols.
* **Simplified Development:** Developers can focus on agent logic and behavior rather than the intricacies of various transport protocols. This abstraction reduces the complexity of agent implementation.
* **Future-proofing:** As new transport protocols emerge or existing ones evolve, the abstraction layer can be updated to support them without requiring changes to the agents themselves.

