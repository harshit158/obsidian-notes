- Open source ==Container Orchestration Tool==
- Helps ==manage containerized applications==

Why do we need K8s ?
- Rise of Microservices based architecture as against Monolith architecture, led to several services packaged in the form of containers

![[Pasted image 20230213135130.png|500]]
Basic concepts:
- Pod is the smallest unit (generally 1 pod per application)
- Each pod is its own self-contained server, ha ving its own IP adrs
- Pods get deleted frequently and each of its replacement gets its own IP adrs.
  To overcome this, services are used which has two functions:
	  - permanent IP adrs
	  - load balancer
- 

![[Pasted image 20230213134327.png]]

