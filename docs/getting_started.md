---
title: Getting Started
---

# Getting Started

The [LMOS Demo](https://github.com/lmos-ai/lmos-demo) serves as a starting point for testing LMOS. While we are still in the process of migrating projects to Open Source and adopting Open Standards, the core concepts are already available for testing. <br />
The LMOS Demo launches a container that internally sets up Kubernetes (Minikube), along with Istio, Kiali, Grafana, and Prometheus, into which the LMOS components are installed.

## Prerequisites

Before you begin, ensure the following tools are installed and running on your local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Setup LMOS locally

### Step 1: Open the Repository in a Dev Container

1. Clone the repository:
    ```shell
    git clone https://github.com/lmos-ai/lmos-demo.git
    cd lmos-demo
    ```

2. Open the repository in Visual Studio Code:

3. Open the Command Palette (F1 or Ctrl+Shift+P) and select `Remote-Containers: Reopen in Container`. This will build and open the repository in a Docker-based development container.

### Step 2: Set OpenAI Connection Details
Once inside the development container, set up the necessary environment variables for OpenAI API access in the `.env` and `arc_config.env` files.
This OpenAPI access is used by the `lmos-runtime` and ARC agents.

#### .env
```
OPENAI_API_KEY="<INSERT KEY HERE>"
OPENAI_URL="https://gpt4-uk.openai.azure.com"
OPENAI_MODELNAME="GPT4o-mini"
```

#### arc_config.env
```
ARC_AI_CLIENTS_0_ID=GPT-4o
ARC_AI_CLIENTS_0_MODELNAME=GPT4o-mini
ARC_AI_CLIENTS_0_CLIENT=azure
ARC_AI_CLIENTS_0_APIKEY=<INSERT KEY HERE>
ARC_AI_CLIENTS_0_URL=<INSERT URL HERE>
```

### Step 3: Check the Setup

To verify the installation of LMOS, run:

```
kubectl get pods
```

Output:

```
NAME                               READY   STATUS    RESTARTS   AGE
lmos-operator-c45887647-bcwf8      2/2     Running   0          4m16s
lmos-runtime-85654bc6bc-chvrj      2/2     Running   0          4m15s
```

The status has to be `2/2 Running`.

Two agents have been installed, you can list them with 

```
kubectl get agents
```

Output:

```
NAME                AGE
arc-news-agent      2m34s
arc-weather-agent   2m35s
```

One channel has been defined, using the capability of the weather-agent.

You can list available channels with the following command:

```
kubectl get channels
```

Output:

```
NAME               RESOLVE_STATUS
acme-web-stable    RESOLVED
```

The `RESOLVE_STATUS` of the channel has to be `RESOLVED`, which means the required capabilities have been resolved.
If the status is `UNRESOLVED`, you can check the reason with: 

```
kubectl get channel acme-web-stable -o yaml
```

Output:
```
apiVersion: lmos.ai/v1
kind: Channel
metadata:
  name: acme-web-stable
  labels:
    tenant: acme
    channel: web
    version: 1.0.0
    subset: stable
spec:
  requiredCapabilities:
    - name: get-weather-forecast
      version: ">=1.0.4"
```

You can list the resolved channelroutings with:

```
kubectl get channelroutings
```

And look at a specific channel routing with:

```
kubectl get channelrouting acme-web-stable -o yaml
```

### Step 4: Access Kiali and Grafana

To visualize your setup, various ports have been forwarded for LMOS, Kiali, Prometheus, Jaeger, Grafana and ArgoCD. You can access these tools at

- Kiali: http://localhost:20001
- Grafana: http://localhost:3000
- Prometheus: http://localhost:9090
- Jaeger: http://localhost:9411
- ArgoCD: http://localhost:3100
- LMOS Runtime: http://localhost:8081

### Step 5: Execute a POST request

You can use Postman or the `test_runtime.sh` script to send a test request to the LMOS runtime. 
The `lmos-runtime` is uses the `lmos-router` to route the request to the appropriate agent.

To test the weather agent, run:

```
./test_runtime.sh
```

Output:

```
{"content":"The weather in London is 21 degrees."}
```

You will see that the weather-agent has responded. 


## Develop your own agent

With ARC, we offer a Kotlin-based framework for developing agents. 
ARC comes with its own dedicated [documentation](https://lmos-ai.github.io/arc/docs/index).

