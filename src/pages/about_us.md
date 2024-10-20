---
title: About us
---

**An Open Letter about us, Our Journey, and the Direction we are headed**

> **"The art of a great painting is not in any one idea, nor in a multitude of separate tricks for placing all those pigment spots, but in the great network of relationships among its parts. Similarly, the agents, raw, that make our minds are by themselves as valueless as aimless, scattered daubs of paint. What counts is what we make of them."**  
> — Marvin Minsky, *The Society of Mind* (1987)

---

**To the Supporters of Open Ecosystems and Builders of a Collaborative Technology Future,**

When I first interacted with **Large Language Models (LLMs)**, it felt like engaging with microprocessors made of magical silicon that compute intelligence with instructions delivered in natural language. It was clear that computing had crossed a significant threshold. This wasn’t just a technological leap—it marked the beginning of a new paradigm for building computing applications. But with that realization came a critical question: **How can we build an open ecosystem for AI computing** before its utility is locked away in closed ecosystems, as we’ve seen with mobile computing, fragmented IoT and Smart Home ecosystems when compared to the openness and interoperability of the web/internet.

It was around the time that I joined Deutsche Telekom's AI task force to explore how **LLMs could be applied to customer sales and service**, The realization was that solving these challenges at scale wasn’t just about meeting immediate business needs , but an opportunity to design a **scalable, interoperable model that embodied the principles of openness** and could create an open ecosystem for AI development—one that would serve as a blueprint for how applied AI systems could evolve across industries and regions.

By mid-2023, existing frameworks for LLMs were largely focused on **RAG use cases**, with limited emphasis on the **foundational abstractions needed for scale, concurrency, and modularization**. Building a **robust, layered architecture** was essential to handle the complexity of solving **large-scale use cases across 10 countries**, with **diverse languages, business units, and regulatory requirements**. Drawing on **best practices from complex systems** like **network architectures and operating systems**, we aimed to create a **scalable foundation for multi-agent systems**—beyond mere **use-case-driven development**.

### **The Vision**

If we wanted to truly scale AI across these domains, we needed more than just early success with existing tools. We had to **rethink everything from the ground up**: building new computing models that combined **deterministic, instruction-based systems with non-deterministic elements**, figuring out how to parallelize development across teams, and ensuring that these fragile prompt driven AI systems could be managed, scaled, and evolved.

**Marvin Minsky’s concept of a "Society of Mind"** had always intrigued me as a brilliant example of distributed intelligent systems design. His vision of intelligence being built from many small, collaborative parts inspired the idea of creating a **multi-agent system**—where individual AI agents work together to tackle complex problems. If built with the same principles that drive the internet and **FOSS movements**, this concept represented the potential to **democratize applied AI development**.

To build something foundational like this would require not just technical skills but brilliant, principled minds working toward a shared goal. I was privileged to find the right team within Telekom—engineers and architects with diverse expertise, ranging from integrating hundreds of device types from various vendors using Web of Things (WoT), to building orchestration engines, operating platforms at scale, and fostering open-source communities.

### **The Founders and Builders**


**The founding team was formed with:**

1. [**Robert Winkler**](https://www.linkedin.com/in/robert-winkler-36b69b31a/), creator of [Resilience4J](https://resilience4j.readme.io) and an expert in building Web of Things (WoT) platforms;
2. [**Jasbir Singh**](https://www.linkedin.com/in/jasbir-singh-9135b666/), an expert in orchestration systems and a contributor to [Netflix Conductor](https://github.com/Netflix/conductor);
3. [**Patrick Whelan**](https://www.linkedin.com/in/patrick-whelan-069180b0/), open-source maintainer of several Kotlin frameworks and a builder of Web of Things services at scale;
4. [**Amant Kumar**](https://www.linkedin.com/in/amant-kumar-a7811548/), a relentless problem-solver with a hacker's mindset.

**As our vision grew, we were later joined by other brilliant minds, each contributing their unique expertise and passion to push the boundaries of what we could achieve:**

5. [**Patrick Schwager**](https://link-to-patrick-schwager), platform engineer who built and operated IoT platforms at scale;
6. [**Kai Kreuzer**](https://www.linkedin.com/in/kai-kreuzer-9445294/), creator of the [openHAB](https://www.openHAB.org) home automation OSS ecosystem, who has built an open-source community across the globe towards an open ecosystem for home automation;
7. [**Bharat Bhushan**](https://www.linkedin.com/in/bharat-b-8658b6171/), who built platforms of scale in the broadband ecosystem;
8. [**Rahul Jamwal**](https://www.linkedin.com/in/rahulj111/), a process engineer by heart, who set up our agent development lifecycle and processes;
9. [**Maximilian Erren**](https://www.linkedin.com/in/maximilian-erren-2b3755292/), a versatile engineer acting as our open-source gatekeeper.


### **Building the Platform**

Together, we started betting on **Kotlin as our preferred language** and **JVM as our runtime**, foreseeing the concurrency needs of agents at scale. Our vision was to **democratize AI agent development** within Telekom using **Domain-Specific Languages (DSLs)** that reduce the entry barrier for AI agent development and a platform that would handle all the complexities of **running, maintaining, communicating, and discovering agents**.

It was a challenging move. Few in the JVM world were exploring this space( around August 2023), and convincing the rest of the task force, where business results took precedence, wasn’t easy. But over a weekend, we ported our entire **LangChain** RAG implementation into Kotlin, marking the beginning of the **Large Model Operating System (LMOS)** in October 2023.

We set out to build not just another tool but an **entire ecosystem**—one that could handle the complexity of enterprise use cases while being scalable and adaptable. Our journey began with solving business problems, but as we progressed, it became clear that we needed more foundational constructs.  We developed

1. A **"kernel"** that defines the construct to chain deterministic and non-deterministic program modules.
2. A [**DSL for Agent Development**](https://github.com/lmos-ai/arc) to streamline and democratize agent development.
3. A [**Agents control plane**](https://github.com/lmos-ai/lmos-operator) for LMOS with Kubernetes as the native runtime for agents, managing the discovery, registration, lifecylce mgmt of agents.
4. A [**Multi Agent Router**](https://github.com/lmos-ai/lmos-router) to allow agent intent discovery and propagation, enabling multi-strategy agent workflows to be built.
5. An [**Agent Systems Runtime**](https://github.com/lmos-ai/lmos-runtime) to bootstrap a system composed of agents


We developed an **agent development lifecycle** that allowed a pair to build an agent within days including telco systems integration. We brought down steadily the time to develop a  business use case from many weeks of development to 2.5 days (average).

Our platform no longer **binds us to a specific programming language or framework for AI agents**. Instead, it allows us to **work with any AI agent framework**, as we focus on **standardization and agent discovery**—a crucial step toward fostering an **open and interoperable ecosystem**.

### **The Results**

Our platform was put to the test in production, where it **outperformed vendor products powered by LLMs by 38%** (as measured by human handover rate). We achieved a **90% answer rate with less than 2% risk**, handling over **a million customer queries across different channels** as of Oct 2024 . This early success validated our vision. By democratizing AI agent development, we enabled engineers and data scientists—even those relatively new to LLMs—to build AI agents without requiring deep expertise in the underlying frameworks. Most importantly, it allowed us to scale the development and deployment of use cases in parallel, all while being rooted in domain-driven design.

Our platform, LMOS, became the foundation for a **factory to build, run, and operate AI agents**, capable of scaling effortlessly across different domains. We drastically reduced the time required to build agent use cases and ensured that our approach could work in real-world, high-demand environments like telecommunications.

### **The Mission**

As we look forward, the goal is not just to build scalable AI systems and platforms—it’s to **shape the future of AI Applications development**. Our aim is to ensure that the next wave of computing stays **open, collaborative, and built on principles that benefit everyone**, while safeguarding against the emergence of monopolies that could control access and incentives to the applications we build.

Our mission is to set the standards for an open ecosystem where **agents become the foundational construct** where we have solutions by design to these questions

1. How do we create **transparent, open networks** where the benefits of AI are shared and rooted in societal values?
2. How do we prevent **monopolies from forming** and controlling the agents' landscape?
3. How do we ensure that the **developers and innovators who build these systems are fairly rewarded**?
4. How do we embed **governance models and regulations** as a fundamental part of these systems, **baked in by design**?

This is the mission of LMOS

### **Join Us**

We believe that, much like **Linux** and the **internet**, LMOS has the potential to shape or inspire ideas on  how applied AI evolves to be open and collaborative, driven by shared innovation and incentives.

If you look at the parallels, Linux emerged from Europe, and the internet was born at CERN in Switzerland. In that same spirit of innovation, we hope that the foundations we've built for LMOS across **Europe and India** will pave the way for a new era in open and collaborative AI development.

Quoting again Minsky, 

**"True intelligence is not about singular agents acting alone but about the collaboration between different agents, each doing their specialized task. The art of a great painting is in the great network of relationships among its parts."**

Our values lie in the **principles we embody in the systems we design**, just as they exist in the **relationships we nurture as a team**. We believe in the power of **collaboration**—those relationships that allowed us to pursue this mission during spare hours and weekends, working together with a sense of **camaraderie** and shared purpose. We are building the very **networks—superhighways—for agents to interact, discover, live, and communicate**. And just as we are growing those networks for agents, we are also growing in our relationships as a team, bound by **trust, shared goals, and the belief in what we are building together**.

Our mission is to bring such a community together—not driven by closed incentives, but by a shared vision of what the future of AI could be. **The journey has just begun.** There is still much to build, and we must move fast. We invite developers, innovators, and visionaries to join us in creating a better future for AI through our **GitHub organization**.

With unwavering commitment and a united vision for an open Agent Computing future,

[**Arun Joseph**](https://www.linkedin.com/in/arun-joseph-ab47102a/)
