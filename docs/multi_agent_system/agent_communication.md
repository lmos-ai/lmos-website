---
title: Agent Communication
---

# Agent Communication

## Problem statement

Agents should be able to communicate using open protocols, but the architecture must provide flexibility in choosing the best protocol for each agent’s purpose. Rather than enforcing a single transport protocol like HTTP, MQTT, or AMQP, the system should allow agents to select and adapt protocols based on their needs.

A higher abstraction layer on top of the actual transport protocols can significantly enhance the flexibility and efficiency of multi-agent systems:

* **Interoperability:** Agents using different transport protocols can still communicate seamlessly through the abstraction layer, which handles the translation between protocols.
* **Simplified Development:** Developers can focus on agent logic and behavior rather than the intricacies of various transport protocols. This abstraction reduces the complexity of agent implementation.
* **Future-proofing:** As new transport protocols emerge or existing ones evolve, the abstraction layer can be updated to support them without requiring changes to the agents themselves.

## Web of Things

[W3C Web of Things (WoT)](https://www.w3.org/WoT/) abstracts transport protocols through the use of protocol bindings. 

### Protocol Bindings in WoT

Protocol bindings provide a way to map the abstract interactions defined in a Thing Description (TD) to concrete protocols. This abstraction allows WoT to support a wide range of existing and future IoT protocols without changing the core architecture.

**Key Aspects:**

1. **Abstract Interaction Model:**
   WoT defines an abstract interaction model based on Properties, Actions, and Events. This model is protocol-agnostic and can be mapped to various concrete protocols.

2. **Protocol-specific Vocabularies:**
   Each supported protocol has a specific vocabulary that defines how the abstract interactions are realized using that protocol.

3. **Flexibility:**
   Protocol bindings allow Things to use multiple protocols simultaneously, enabling broader interoperability.

### Implementation of Protocol Bindings

**TD Protocol Field:**
The Thing Description includes a "forms" field for each interaction affordance (Property, Action, or Event). This field specifies the protocol binding details:

- The protocol scheme (e.g., "http", "coap", "mqtt")
- Protocol-specific options
- The concrete endpoint URL

**Example:**
```json
{
    "@context": [
        "https://www.w3.org/2022/wot/td/v1.1",
        {
            "htv": "http://www.w3.org/2011/http#"
        },
        "https://schema.org/"
    ],
    "id": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",
    "title": "WeatherAgent",
    "actions": {
        "getWeather": {
            "description": "Fetches weather information based on user input.",
            "safe": true, //  Used to signal that there is no internal state changed when invoking the action. 
            "idempotent": false, // Informs whether the Action can be called repeatedly with the same result.
            "synchronous": true,
            "input": {
               "type": "object",
                "properties": {
                    "question": {
                        "type": "string"
                    },
                    "interactionMode": {
                        "type": "string",
                        "enum": ["text", "voice"]
                    }
                },
                "required": ["question","interactionMode"]
            },
            "output": {
                "type": "string",
                "description": "Natural language output providing weather information."
            },            
            "forms": [
                {
                    "op": "invokeaction",
                    "href": "https://weatherai.example.com/weather",
                    "contentType": "application/json",
                    "htv:methodName":"POST"
                }
            ]
        }
    }
}
```