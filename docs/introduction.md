---
title: Introduction
sidebar_position: 1
---

# What is LMOS?

**LMOS (Language Model Operating System)** is a platform designed to simplify and accelerate the development of LLM-powered agents in the cloud. Drawing inspiration from traditional operating systems, LMOS abstracts the complexities of working with large language models, memory management, and tool integration, enabling developers to focus on building intelligent agents without worrying about infrastructure.


---

## The Operating System Analogy

Much like how an operating system manages hardware resources and provides an environment for applications, **LMOS** acts as a virtual "OS" for AI agents. Instead of hardware, LMOS abstracts key AI components such as language models, memory, knowledge injection, and tool access. 

- **Cloud-Native Design**: Built on top of Kubernetes, LMOS operates in a scalable cloud environment.
- **Control Plane Extension**: LMOS introduces a control plane that extends Kubernetes' orchestration capabilities, akin to how an OS manages processes and system resources.

This allows AI agents to operate efficiently and collaborate seamlessly, much like applications on a traditional OS, all while hiding the underlying complexity.

---

## Simplifying AI Agent Development

The vision behind LMOS is to create a **simplified, production-ready environment** for building AI agents. By abstracting the complexities of LLMs, LMOS enables developers to create agents as easily as they would develop applications on an OS.

## Powerful, Flexible, and Production-Ready

LMOS offers a **simple yet powerful framework** for developers of all skill levels to build intelligent AI agents. Built on the JVM and Kotlin for best-in-class performance, LMOS delivers powerful customization hooks, rapid prototyping, and seamless collaboration between developers and data scientists.

- **Real-World Readiness**: LMOS supports advanced deployment strategies such as **canary releases** to test agent capabilities before broader rollout.
- **Scalability & Reliability**: With robust memory management, knowledge injection, and integrated tooling, LMOS is designed for high performance and large-scale deployment.

---

## Core Components of LMOS

To realize its vision of simplifying AI agent development, LMOS introduces several core components:

### 1. LMOS Operator

The **LMOS Operator** is a Kubernetes operator responsible for dynamically managing the deployment and capabilities of AI agents within the Kubernetes environment.

#### Key Features:
- **Dynamic Capability Resolution**: The Operator dynamically resolves which agents have the required capabilities for specific channels (e.g., web, mobile, IVR).
- **Advanced Deployment Strategies**: It supports **canary releases** to gradually roll out new agent features.
- **Channel Reconciler**: Watches for changes in channel resources and triggers reconciliation, matching capabilities with agents.

### 2. LMOS Runtime

The **LMOS Runtime** orchestrates collaboration between multiple AI agents, similar to how an OS manages processes and assigns tasks.

#### Key Aspects:
- **Collaborative Multi-Agent Management**: Ensures agents collaborate to resolve complex customer queries.
- **Capability-Based Task Assignment**: Dynamically assigns tasks to the most capable agents based on their registered capabilities.
- **Integration with LMOS Router**: The Runtime works closely with the Router to manage agent task assignments and memory sharing.

### 3. LMOS Router

The **LMOS Router** acts as the traffic controller for user queries, ensuring they are routed to the agent with the most relevant capabilities.

#### Matching Techniques:
- **LLM-Based Approach**: Uses a language model to understand the semantics of the user query and intelligently match it to agents.
- **Vector-Based Approach**: Uses vector embeddings (e.g., cosine similarity) to compute the closeness between a query and agent capabilities for fast, large-scale matching.
