---
title: Introduction
sidebar_position: 1
---

# Introduction

## Our vision
Our vision is to create a **sovereign and open platform and ecosystem for intelligent agents** that enables seamless development, deployment, and integration across various industries. This vision is realized by the **LMOS (Language Model Operating System)**, which is built on open standards and tools, allowing organizations to innovate and collaborate without the constraints of closed systems.

Our commitment — Openness, Interoperability, Security, and Transparency — guides the development of our platform. We believe that systems built on these principles foster collaboration and innovation.

**Openness:** Embrace open standards and protocols to foster collaboration, innovation, and accessibility within the intelligent agent ecosystem, over closed proprietary systems that hinder collaboration and innovation.

**Interoperability:** Ensure seamless communication and interaction between diverse intelligent agents, allowing them to work across platforms and ecosystems, over isolated systems or lock-ins that restrict interoperability and limit user choice.

**Transparency and Accountability:** Prioritize transparency in agent design, operation, and decision-making processes, promoting user trust and accountability for ethical behavior, over opaque systems that conceal operations and lack accountability.

**Data Privacy and Security:** Uphold robust security measures and privacy standards to protect sensitive data, ensuring user confidentiality and trustworthiness of intelligent agents, over insecure systems that compromise user privacy and expose data to unauthorized access.

By aligning our development with these core principles, we aim to create a trustworthy and open multi-agent platform.

## An open multi-agent architecture

In an open multi-agent architecture, the goal is to enable seamless discovery of agent capabilities and services, while ensuring efficient communication between agents across diverse networks. The [W3C Web of Things Architecture](https://www.w3.org/TR/wot-architecture11/) provides a strong foundation for developing an open Web of Agents architecture.

The key requirements for an open multi-agent architecture are:

- **Agent Description Specification**  
   A standardized format is essential for describing the capabilities and metadata of intelligent agents. This specification should offer an appropriate level of abstraction to ensure interoperability across a wide range of agent platforms and domains.

- **Agent Discovery Process**  
   A discovery mechanism is needed for obtaining agent descriptions, supporting both local and global networks. It must accommodate updates to agent descriptions and handle the dynamic nature of agents, allowing for their constant evolution.

- **Metadata Propagation Protocol**  
   Agents should be able to propagate metadata using suitable protocols. For local network discovery and registration, mDNS (Multicast DNS) can be used. For broader network discovery, agents can publish their metadata to a centralized Agent Registry.

- **Agent Registry**  
   A centralized Agent Registry is necessary, serving as a repository where agents can register themselves and query information about other registered agents. This would facilitate easy discovery and integration across networks.

- **Dynamic Agent Discovery**  
   Agents should have the ability to dynamically discover other agents. They can query the Agent Registry based on specific criteria, such as capabilities or metadata, ensuring the right agents are matched for a given task.

- **Agent Communication Protocol**  
   Agents should be able to communicate using open protocols, but the architecture must provide flexibility in choosing the best protocol for each agent’s purpose. Rather than enforcing a single transport protocol like HTTP, MQTT, or AMQP, the system should allow agents to select and adapt protocols based on their needs.

- **Group Management**  
   The architecture should support the creation and management of agent groups. This functionality allows the formation, management, and dissolution of agent groups while enforcing trust relationships among agents within the group. It enhances collaboration and coordination across agents in the system.


## What is LMOS?

**LMOS (Language Model Operating System)**  revolutionizes AI development by simplifying the creation and management of LLM-powered agents in the cloud. Designed to abstract away the complexities, LMOS enables developers to focus on building scalable, intelligent agents without getting bogged down by infrastructure challenges. 

1. **Simplified AI Agent Development:**
LMOS abstracts the intricacies of LLMs, memory management, and tool access. Just as an operating system manages applications and hardware, LMOS acts as a virtual "OS" for AI agents, letting you focus on creating intelligent agents rather than dealing with backend infrastructure.

2. **Agent Lifecycle Management:**
LMOS supports real-world deployment strategies, including canary releases and advanced routing techniques based on Natural Language Understanding (NLU). This allows businesses to safely introduce new agent features and capabilities in a controlled, incremental manner, ensuring stability and minimizing risks during updates.

3. **Cloud-Native Scalability:**
Built on Kubernetes, LMOS ensures seamless scalability for AI agents. Whether you're managing a few agents or deploying hundreds, LMOS dynamically scales to meet the growing needs of your enterprise, ensuring consistent, high-performance operations.

4. **Collaboration and Efficiency:**
LMOS enables AI agents to work together efficiently, just like applications on a traditional operating system. Through advanced orchestration, LMOS allows agents to share tools, memory, and knowledge, making them more adaptable and capable of handling complex, real-world queries.

5. **Powerful Extensibility:**
LMOS offers a modular, extensible design, enabling fast prototyping and high customizability. Developers can easily extend LMOS's capabilities, integrating new tools and adding features that suit the unique needs of their applications.

6. **Intelligent Task Management:**
With its integrated LMOS Runtime and Router, LMOS intelligently routes tasks to the most suitable AI agent based on their capabilities. Using both LLM-based and vector-based approaches, LMOS ensures fast, accurate query matching and optimal agent selection.

## Core Components of LMOS

To realize its vision of simplifying AI agent development, LMOS introduces several core components:

### 1. Agent ReaCtor

LMOS offers a simple yet powerful Kotlin framework called [Agent ReaCtor (ARC)](https://lmos-ai.github.io/arc/) for developers of all skill levels to build intelligent AI agents. Built on the JVM and Kotlin for best-in-class performance, ARC delivers rapid prototyping, and seamless collaboration between developers and data scientists

### 2. LMOS Operator

The **LMOS Operator** is a Kubernetes operator responsible for dynamically managing the deployment and capabilities of AI agents within the Kubernetes environment.

#### Key Features:
- **Dynamic Capability Resolution**: The Operator dynamically resolves which agents have the required capabilities for specific channels (e.g., web, mobile, IVR).
- **Advanced Deployment Strategies**: It supports **canary releases** to gradually roll out new agent features.
- **Channel Reconciler**: Watches for changes in channel resources and triggers reconciliation, matching capabilities with agents.

### 3. LMOS Runtime

The **LMOS Runtime** orchestrates collaboration between multiple AI agents, similar to how an OS manages processes and assigns tasks.

#### Key Aspects:
- **Collaborative Multi-Agent Management**: Ensures agents collaborate to resolve complex customer queries.
- **Capability-Based Task Assignment**: Dynamically assigns tasks to the most capable agents based on their registered capabilities.
- **Integration with LMOS Router**: The Runtime works closely with the Router to manage agent task assignments and memory sharing.

### 4. LMOS Router

The **LMOS Router** acts as the traffic controller for user queries, ensuring they are routed to the agent with the most relevant capabilities.

#### Matching Techniques:
- **LLM-Based Approach**: Uses a language model to understand the semantics of the user query and intelligently match it to agents.
- **Vector-Based Approach**: Uses vector embeddings (e.g., cosine similarity) to compute the closeness between a query and agent capabilities for fast, large-scale matching.
