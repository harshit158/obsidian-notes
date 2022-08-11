Links:

---
Notes:
- 3 components:
	- **log key** anomaly detection model
		- Used for ==Execution Path Anomaly detection==
		- LSTM model ; multi-class classifier ; requires normal data to train
		- Similar to training classic ==language modelling==
		>[!warning]
		>In our case, there can't be overlapping events across tasks
		>Maybe it is solved by workflow model


	- **parameter** value anomaly detection model
		- Used for ==Parameter value and performance anomaly detection==
		- Each log has a parameter vector; Can be considered as a ==multi-variate time series== 
		- 
	- **workflow** model
		- Separate the paths that each task follows