**About the Week:**
- Covers Requirements and Challenges for Machine Learning Systems

![[Pasted image 20210529204503.png]]

This week is about Deployment
### Deployment Challenges:
- <u>Concept Drift and Data Drift</u>
	- Data distribution changes over time (Gradual / Sudden) 
	- Concept Drift  : X -> Y mapping function changes
	- Data Drift : Just the X changes

- <u>Software Engineering Issues</u>
	- Checklist of questions:
		- Realtime VS Batch
		- Cloud VS Edge/Browser
		- Compute Resources (CPU/GPU/memory)
		- Latency, throughput (QPS - Query Per Second)
		Latency -> How much delay in prediction is acceptable
		Throughput -> How many queries/sec can be handled
		- Logging : for monitoring the performance / getting more data
		- Security and Privacy:
		   Depends on the application / sensitivity of the data (Eg: EHR data should be confidential)

### Deployment Patterns

1. ==Shadow Mode==
	- Runs in parallel with humans
	- Used to assess the performance and decide whether to allow the model for real time decision

![[Pasted image 20210529212221.png]]

2. ==Canary Deployment==
	- Give only a small fraction of traffic (5%) to the model and assess performance
	- Ramp up the traffic gradually only if the model does good
	- Helps in spotting the models problems early on
 
![[Pasted image 20210529212532.png]]

3. ==Blue-green Deployment==
	- Switches traffic from BLUE system to GREEN system suddenly
	- Easy way to enable rollback

![[Pasted image 20210529212939.png]]

<br>==Degrees of Automation==
To what extent the ML model is penetrated in the workflow
![[Pasted image 20210529211819.png]]

### Monitoring
- Have a monitoring dashboard to analyse different metrics
![[Pasted image 20210530121134.png]]
- Brainstorm the things that could go wrong
- And for all these things, brainstorm statistics / metrics that will detect the problem
Examples of Metrics to track:
![[Pasted image 20210530121342.png]]

- Once metrics are in place, set thresholds for alarms to notify in case of faults
- Adapt metrics and thresholds over time

### Pipeline Monitoring
Monitor all the individual components of the pipeline using above ideas