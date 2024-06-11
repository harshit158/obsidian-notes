- Open source ==Container Orchestration Tool==
- Helps ==manage containerized applications==

Why do we need K8s ?
- Rise of Microservices based architecture as against Monolith architecture, led to several services packaged in the form of containers

![[Pasted image 20230213135130.png|500]]
Basic concepts:
- Pod is the smallest unit (generally 1 pod per application)
- Each pod is its own self-contained server, having its own IP adrs
- Pods get deleted frequently and each of its replacement gets its own IP adrs.
  To overcome this, services are used which has two functions:
	  - permanent IP adrs
	  - load balancer
- 

![[Pasted image 20230213134327.png]]

Ref: https://www.youtube.com/watch?v=qmDzcu5uY1I
This is a good channel for 

Kubernetes project structure:
- `deployment.yaml` specifies things like "replicacount" which is number of pods that are created.
- `values.yaml` contains the default values for variables defined in `deployment.yaml` and `configmap.yaml`
	- These default values are overwritten in each env by their own `values-env.yaml` file