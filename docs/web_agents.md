---
title: Web of Agents
sidebar_position: 1
---

# Web of Agents

## Current Challanges

### Closed ecosystems

Many current multi-agent frameworks are built around specific ecosystems, which limits their ability to incorporate diverse third-party agents.  <br></br>
This limitation hampers innovation and reduces the overall utility of a multi-agent framework, as it cannot leverage the full spectrum of available agents.

### Lack of standardized data formats
Many frameworks use proprietary or non-standard data formats for agent interactions, making it difficult for agents to interpret and exchange information. <br></br>
This lack of standardization can lead to integration issues and increased complexity when collaborating with other agents. Without a standardized format for agent metadata, different agents may use varying schemas or data structures to describe their capabilities, services, and requirements. This inconsistency creates barriers for agents trying to discover and interact with one another, as each agent may interpret metadata differently. 

### Single Network vs Internet

Many frameworks run multi-agent systems on a single network, which is not representative of real-world scenarios where agents can be distributed across various networks and locations.<br></br>
This limitation prevents frameworks from accurately modeling the interactions and dynamics that occur in distributed systems, thus affecting their scalability and applicability in practical situations.


### Fixed Communication protocol

The communication protocol in many frameworks is fixed. For example some frameworks might only support HTTP for communication, excluding other widely used protocols like MQTT (Message Queuing Telemetry Transport) or WebSockets. <br></br>
This limitation can hinder agents that would benefit from real-time communication or lightweight messaging. Some frameworks enforce a fixed request-response pattern, restricting agents to this interaction style and preventing more dynamic communication patterns such as publish-subscribe or event-driven architectures. 
This forces developers to adopt specific communication patterns that may not align with their needs. 

### Limited Dynamic Team Formation

Existing frameworks often have predefined team structures, which can inhibit the ability of agents to form dynamic teams based on different demands.<br></br>
This inflexibility means agents may not be able to quickly regroup in response to changing conditions.


## Web of Things

The [W3C Web of Things (WoT) Architecture](https://www.w3.org/WoT/) can significantly contribute to an open multi-agent architecture by providing a standardized framework for the discovery, interaction, and integration of diverse agents across different networks. Drawing on our principles (Openness, Interoperability, Security and Transparency), the W3C WoT's approach aligns closely with LMOS's vision of an open, scalable, and interoperable AI ecosystem.

Web of Things can us help in building an open multi-agent architecture:

1. **Agent Discovery and Description:**
WoT offers standardized mechanisms for agent discovery and description through its Thing Description (TD) format. This allows agents to express their capabilities and services in a consistent, machine-readable way. By implementing a common protocol like TD, agents in the LMOS framework can broadcast their functionalities dynamically, facilitating real-time discovery by other agents. This capability helps eliminate barriers to integration and enhances collaboration among diverse agents.

2. **Interoperability Across Diverse Networks:**
WoT uses open standards to ensure interoperability among different devices and services, even when they are implemented on different platforms. Similarly, in an open multi-agent architecture, agents often need to communicate across different platforms and protocols (HTTP, MQTT, WebSockets, etc.). WoT ensures that agents, regardless of their underlying technology or platform, can communicate and collaborate seamlessly across different networks, following open, protocol-agnostic principles.

3. **Dynamic Agent Discovery and Metadata Propagation:**
In WoT, devices and services can dynamically propagate metadata using protocols like mDNS for local discovery and can register on centralized directories for broader access. In LMOS, this approach can be adapted for agent discovery, where agents dynamically register and propagate their metadata to a centralized Agent Registry for efficient querying. This allows LMOS agents to discover each other in real time based on specific needs or capabilities, similar to how WoT devices discover and interact with services.

4. **Security and Trust:**
WoT places a strong emphasis on secure communication and privacy through security mechanisms that protect data and ensure trustworthiness between devices. In LMOS’s multi-agent system, data privacy and security are paramount. The same WoT security frameworks can be applied to ensure that communication between AI agents remains secure, agents adhere to privacy standards, and sensitive data is protected throughout agent interactions.

5. **Group Management and Collaboration:**
WoT allows for the grouping and orchestration of multiple devices into larger systems to perform more complex tasks. In an open multi-agent system, this principle can be applied to group management, where LMOS agents form dynamic teams to collaboratively solve complex problems. Agents can establish trust relationships within these groups, much like how WoT devices can be securely managed in clusters or "webs" of things.

6. **Extensibility and Flexibility:**
Both WoT and LMOS prioritize extensibility and flexibility in their architectures. WoT's design allows for the easy addition of new devices or services without disrupting existing functionalities. Similarly, LMOS’s modular architecture supports the integration of new agents or tools without requiring extensive system overhauls. This flexibility fosters an adaptable ecosystem that can evolve with emerging technologies and changing user needs.

7. **Adaptive Communication Patterns:**
WoT supports various interaction patterns, including request-response, event-driven, and publish-subscribe models. By incorporating these adaptive communication patterns, multi-agent systems can allow agents to choose the most suitable method for their interactions based on specific tasks and contexts. This flexibility enhances collaboration efficiency.

8. **Cross-Domain Collaboration**:
WoT’s interoperability principles allow agents from different domains (e.g., smart homes, industrial automation, healthcare) to collaborate effectively. This cross-domain interaction broadens the scope of problem-solving capabilities, allowing agents to tackle complex challenges that span multiple sectors and applications, ultimately enhancing the utility and innovation of multi-agent systems.

9. **Standardized Testing and Validation:**
The establishment of common protocols and formats within WoT can enable standardized testing and validation of agents.

### Agent Description example

This example illustrates how a Weather Agent can be modeled using a Thing Description, with HTTP as the primary communication protocol, although alternative protocols may also be utilized. The Agent is secured through Basic Authentication, but other security schemes, such as OAuth2 tokens, can also be used.

```json
{
    "@context": [
        "https://www.w3.org/2022/wot/td/v1.1",
        {
            "htv": "http://www.w3.org/2011/http#",
            "ex": "https://weatherai.example.com",
        },
        "https://schema.org/"
    ],
    "id": "urn:uuid:6f1d3a7a-1f97-4e6b-b45f-f3c2e1c84c77",
    "title": "WeatherAgent",
    "@type": "ex:Agent",
    "ex:metadata": {
        "ex:vendor": {
            "ex:name": "WeatherAI Inc.",
            "ex:url": "https://weatherai.example.com"
        },
        "ex:model": {
            "ex:name": "gpt-4o",
            "ex:provider": "Azure"
        },
        "ex:serviceIntegration": {
            "ex:weatherAPI": "OpenWeatherMap",
            "ex:apiVersion": "v2.5",
            "ex:apiDocumentation": "https://openweathermap.org/api"
        },
        "ex:dataPrivacy": {
            "ex:dataRetentionPeriod": "30 days",
            "ex:anonymizationMethod": "HASHING"
        },
        "ex:interaction": {
            "ex:supportedLanguages": ["en_US", "de_DE"],
            "ex:interactionMode": ["text", "voice"]
        },
        "ex:compliance": {
            "ex:regulatoryCompliance": "GDPR"
        }
    },
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic",
            "in": "header"
        }
    },
    "security": "basic_sc",
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

### Node.js example

Here's a simple example of how you can interact with the Weather Agent from a Node.js application using `node-wot`, without needing to know whether it's an AI Agent or a traditional device.

```javascript
const WoT = require('@node-wot/core');
const HttpClientFactory = require('@node-wot/binding-http');

async function fetchWeather(question, interactionMode) {
    try {
        // Request the Thing Description from the Weather Agent
        const td = await WoT.requestThingDescription("http://weatheragent.example.com/td");
        
        // Consume the Thing Description
        const thing = await WoT.consume(td);

        // Prepare input parameters for the action
        const inputParams = {
            question: question,
            interactionMode: interactionMode
        };

        // Invoke the getWeather action
        const weatherResponse = await thing.invokeAction("getWeather", inputParams);
        const weatherData = await weatherResponse.value();
    } catch (err) {
        console.error("Error fetching weather:", err);
    }
}

// Example usage
const question = 'What is the weather in berlin?'; 
const interactionMode = 'text';
fetchWeather(question, interactionMode);
```