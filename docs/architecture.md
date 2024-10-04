---
title: Architecture
sidebar_position: 1
---

# Architecture

## LMOS in the CNCF Ecosystem

LMOS (Language Model Operating System) currently addresses the **application layer**, focusing on **AI agent collaboration and lifecycle management** in the cloud-native environment. 

![LMOS](assets/LMOS_1.png)


### 1. Kubernetes for Orchestration & Scalability

 Kubernetes serves as the foundation for LMOS, providing a platform to orchestrate and scale AI agents efficiently. It handles resource allocation, pod management, and agent scaling.

### 2. Istio for Traffic Management & Security

Traffic Management: LMOS leverages Istio to route traffic between AI agents. Istio’s service mesh capabilities ensure efficient traffic distribution through intelligent routing and load balancing. Istio enables canary rollouts, allowing LMOS to test new agent versions by sending a portion of traffic to updated agents while minimizing risks to production environments.

Security:

   * mTLS (Mutual TLS): Istio secures inter-agent communication with mTLS, ensuring that agents communicate over encrypted channels.
   * Role-Based Access Control (RBAC): Istio enforces access control, ensuring only authorized agents can interact with other AI agents.

### 3. LMOS Control Plan for Agent Lifecycle Management

LMOS Control Plane extends Kubernetes, adding custom logic for AI agent orchestration such as Agent traffic routing and Tenant/Channel management .

### 4. ArgoCD & GitOps for Continuous Delivery
ArgoCD and Argo Rollouts implement GitOps workflows to automate the deployment of agents and perform controlled, automated canary releases. This allows for seamless updates to AI agents with minimal manual intervention.


## Core Components of LMOS

To realize its vision of simplifying AI agent development, LMOS introduces several core components:

![LMOS](assets/LMOS_2.png)

### 1. Agent ReaCtor

LMOS offers a simple yet powerful Kotlin framework called [Agent ReaCtor (ARC)](https://lmos-ai.github.io/arc/) for developers of all skill levels to build intelligent AI agents. Built on the JVM and Kotlin for best-in-class performance, ARC delivers rapid prototyping, and seamless collaboration between developers and data scientists

### 2. Agent Registry

The Agent Registry is reusing the Kubernetes Service registry and serves as a centralized hub for storing and managing AI agents' metadata enabling agent discovery and collaboration.

### 3&4. LMOS Runtime

The LMOS Runtime orchestrates collaboration between multiple AI agents, similar to how an OS manages processes and assigns tasks.

It is a component designed to manage and route conversations to the most suitable agents based on their capabilities. It leverages the LMOS Operator and LMOS Router to dynamically resolve and route user queries to the appropriate agents. This project extends the functionalities of the original lmos-operator and lmos-router by integrating them into a cohesive runtime environment.

The LMOS Runtime directs user queries to an agent based on its capabilities. It fetches the list of all installed agents applicable to the tenant and channel from lmos-operator, and uses lmos-router to dynamically resolve the most appropriate agent for each query. The user queries are then forwarded to the selected agent, and the response is returned to the client.

#### Key Aspects:
- **Collaborative Multi-Agent Management**: Ensures agents collaborate to resolve complex customer queries.
- **Capability-Based Task Assignment**: Dynamically assigns tasks to the most capable agents based on their registered capabilities.
- **Integration with LMOS Router**: The Runtime works closely with the Router to manage agent task assignments and memory sharing.

### 5. LMOS Router

The **LMOS Router** acts as the traffic controller for user queries, ensuring they are routed to the agent with the most relevant capabilities.

#### Matching Techniques:
- **LLM-Based Approach**: Uses a language model to understand the semantics of the user query and intelligently match it to agents.
- **Vector-Based Approach**: Uses vector embeddings (e.g., cosine similarity) to compute the closeness between a query and agent capabilities for fast, large-scale matching.

### 6. LMOS Operator

The **LMOS Operator** is a Kubernetes operator designed to dynamically resolve Channel requirements based on the capabilities of installed Agents within a Kubernetes cluster (environment).

A “Channel” refers to a digital interface that enables communication between an AI system and its users. Channels can be diverse, such as web, mobile apps, IVR systems, or messaging platforms, each potentially requiring different sets of capabilities.

For instance, a web channel might need a comprehensive set of customer support capabilities, while an IVR channel might only start with a subset of the customer support capabilities. Additionally, the LMOS Operator supports advanced deployment strategies like canary releases, allowing new Agent capabilities to be rolled out gradually to a subset of users within a Channel.

The LMOS Operator enables defining which capabilities should be provided through channels and dynamically resolves which Agents are providing these capabilities. This dynamic resolution ensures that the right capabilities are always available in the Kubernetes cluster (environment).

#### Key Features:
- **Dynamic Capability Resolution**: The Operator dynamically resolves which agents have the required capabilities for specific channels (e.g., web, mobile, IVR).
- **Advanced Deployment Strategies**: It supports **canary releases** to gradually roll out new agent features.
- **Channel Reconciler**: Watches for changes in channel resources and triggers reconciliation, matching capabilities with agents.


