---
title: What is an Agent?
sidebar_position: 3
---

# What is an Agent?

In the context of LMOS an **agent** is a specialized software program that **uses the capabilities of a machine learning model** to perform specific tasks. 
An agent typically has a clear goal or objective it aims to achieve, which is dependent on the task it's designed to perform. The goal drives how the agent interacts with data, models, or APIs to accomplish its task.

In LMOS agents can have a state (properties), can perform actions and emit events. State represents the agent’s current configuration or context. Actions define the tasks the agent can perform, making it interactive and task-oriented. Events allow the agent to proactively notify users or systems of significant changes. 

Some examples:

* A weather agent's goal is to retrieve and deliver accurate weather information. It can understand natural language queries like "What’s the weather today?" using a large language model (LLM), fetch the relevant data from a weather service API, and present the information back to the user in natural language.
* A sales agent might respond to inquiries about product availability by fetching data from inventory databases.

Key principles:
- **Identifiable**: Each agent has a unique identifier.
- **Single-Responsibility:** Each agent is created to fulfill a particular purpose or solve a defined problem.
- **Autonomy:** The agent strives to achieve its goal with minimal human supervision.
- **Adaptability:** Depending on the environment or feedback, the agent may adjust its behavior to meet its goal more effectively.

But agents can also use other models in addition to Large Language Models (LLMs). While LLMs are great for understanding and generating natural language, agents can also integrate other types of AI models and tools depending on the task. 

For example:

* **Computer Vision Models:** Agents can use models like Convolutional Neural Networks (CNNs) or Vision Transformers for tasks involving image recognition or object detection. For instance, an agent might analyze images from a camera to detect objects or people.

* **Speech Recognition Models:** Agents can integrate Automatic Speech Recognition (ASR) models to convert spoken language into text. This is useful for voice assistants that need to understand spoken commands.

* **Reinforcement Learning Models:** In scenarios requiring decision-making and learning over time (like games or robotics), agents might use Reinforcement Learning models to make better decisions based on feedback from their environment.

* **Time-Series Models:** For tasks like forecasting (e.g., predicting stock prices or weather conditions), agents might use statistical models or deep learning models like LSTMs (Long Short-Term Memory networks) for processing time-series data.

* **Recommendation Systems:** Agents handling recommendations (like suggesting products or content) might use collaborative filtering or content-based filtering models.

* **Planning & Optimization Algorithms:** In scenarios like logistics or scheduling, agents can employ optimization algorithms or models designed to solve problems like resource allocation.
