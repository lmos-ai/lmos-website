---
title: LMOS Router
---

# LMOS Router

The **LMOS Router** is a vital component of the LMOS architecture. It utilizes agent metadata to identify the most suitable agent for a given task based on their capabilities. The Router supports three methods:

- **LLM-based approach:** Uses a language model to understand and match a task with agent capabilities.
- **Vector-based approach:** Uses semantic similarity to find the most suitable agent for a task.
- **Hybrid approach:** Extracts abstract requirements from the query using an LLM and then searches for an agent using semantic similarity. 

## Routing Methods

### LLM-Based Approach

Uses advanced language models like OpenAI's GPT-3.5 to understand the context and semantics of user queries.

**Pros:**
- Understands complex queries and context.
- Flexible and adaptable to various scenarios.
- Utilizes state-of-the-art NLP techniques.

**Cons:**
- Expensive due to commercial language model costs.
- Higher response times.
- Dependent on external APIs with potential rate limits.

### Vector-Based Approach

Uses vector embeddings to represent queries and agent capabilities, comparing them using cosine similarity.

**Pros:**
- Fast and efficient for large-scale data.
- Scalable to handle more agents and queries.
- Independent of external APIs.

**Cons:**
- Limited in understanding complex queries.
- Requires initial setup and regular updates.
- Needs maintenance for embedding updates.

### Hybrid Approach

Extracts abstract requirements from the query using an LLM and then searches for an agent using semantic similarity.

**Pros:**
- Balances the strengths of both LLM and Vector-based approaches.
- Better understanding of complex queries than vector-based alone.
- More efficient than LLM-based alone.

**Cons:**
- Still dependent on external APIs for LLM.
- Requires integration of both LLM and vector-based systems.

### Comparison Table

| Feature                  | LLM-Based Approach | Vector-Based Approach | Hybrid Approach       |
|--------------------------|--------------------|-----------------------|-----------------------|
| Contextual Understanding | High               | Moderate              | High                  |
| Flexibility              | High               | Moderate              | High                  |
| Efficiency               | Moderate           | High                  | High                  |
| Scalability              | Moderate           | High                  | High                  |
| Cost                     | High               | Low                   | High                  |
| Latency                  | Higher             | Lower                 | High                  |
| Dependency               | High               | Low                   | High                  |
| Setup Complexity         | Low                | High                  | High                  |
| Maintenance              | Low                | High                  | High                  |