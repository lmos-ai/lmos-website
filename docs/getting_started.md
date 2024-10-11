---
title: Getting Started
---

# Getting Started

## Test LMOS locally

The [LMOS Demo](https://github.com/lmos-ai/lmos-demo) serves as a starting point for testing LMOS. While we are still in the process of migrating projects to Open Source and adopting Open Standards, the core concepts are already available for testing. <br />
The LMOS Demo launches a container that internally sets up Kubernetes (Minikube), along with Istio, Kiali, Grafana, and Prometheus, into which the LMOS components are installed.

**Prerequisites**:

Before you begin, ensure the following tools are installed and running on your local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### 1. Open the Repository in a Dev Container

1. Clone the repository:
    ```shell
    git clone https://github.com/lmos-ai/lmos-demo.git
    cd lmos-demo
    ```

2. Open the repository in Visual Studio Code:

3. Open the Command Palette (F1 or Ctrl+Shift+P) and select `Remote-Containers: Reopen in Container`. This will build and open the repository in a Docker-based development container.

### 2. Set OpenAI Connection Details
Once inside the development container, set up the necessary environment variables for OpenAI API access in the `.env` file.
This OpenAPI access is used by the `lmos-runtime` and the agents.

```
OPENAI_APIKEY="<your-openai-api-key>"
OPENAI_MODELNAME="gpt-4o-mini"
OPENAI_URL="https://api.openai.com"
```

### 3. Check the Setup

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

### 4. Access Kiali and Grafana

To visualize your setup, various ports have been forwarded for LMOS, Kiali, Prometheus, Jaeger, Grafana and ArgoCD. You can access these tools at

- Kiali: http://localhost:20001
- Grafana: http://localhost:3000
- Prometheus: http://localhost:9090
- Jaeger: http://localhost:9411
- ArgoCD: http://localhost:3100
- LMOS Runtime: http://localhost:8081

### 5. Execute a POST request

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


## Deploy LMOS on your Kubernetes cluster

This guides provides instructions to install `lmos-operator` and `lmos-runtime` on your Kubernetes cluster.

**Prerequisites:**

Before proceeding with the installation, ensure you have the following prerequisites:

- Kubernetes cluster (v1.19 or newer).
- Helm installed (`v3` or newer).
- Access to the OpenAI API.
- The `OPENAI_API_KEY` and `OPENAI_API_URL` values should be available.

### 1. Install lmos-operator

To install `lmos-operator` using Helm, run the following command:

```bash
helm upgrade --install lmos-operator oci://ghcr.io/lmos-ai/lmos-operator-chart \
  --version 0.0.4-SNAPSHOT
```

### 2. Create Kubernetes Secret for OpenAI

Next, you need to create a Kubernetes secret that contains your OpenAI API key. Replace "$OPENAI_API_KEY" with your actual OpenAI API key.

```bash
kubectl create secret generic lmos-runtime --from-literal=OPENAI_API_KEY="$OPENAI_API_KEY"
```

### 3. Install lmos-runtime

Now, install `lmos-runtime` using Helm. Replace the environment variables with the appropriate values:

- "$OPENAI_API_URL": Your OpenAI API URL (e.g., https://api.openai.com).
- GPT4o-mini: The desired OpenAI model (in this case, GPT4o-mini).

```bash
helm upgrade --install lmos-runtime oci://ghcr.io/lmos-ai/lmos-runtime-chart \
  --version 0.0.8-SNAPSHOT \
  --set openaiApiUrl="$OPENAI_API_URL" \
  --set openaiApiModel=GPT4o-mini \
  --set agentRegistryUrl=http://lmos-operator.default.svc.cluster.local:8080
```

### 4. Verifying Installation
To ensure both components are installed and running correctly, use the following commands to check the status of the pods:

```bash
kubectl get pods
```

You should see both lmos-operator and lmos-runtime pods in a running state.

## Develop your own agent

With ARC, we offer a Kotlin-based framework for developing agents. 
ARC comes with its own dedicated [documentation](https://lmos-ai.github.io/arc/docs/index).

