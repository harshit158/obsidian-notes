- Netrounds has already done this .. how exactly its different from what we are trying to do
- Thresholding is being used to identify the anomalies
- Is it about forecasting or analysing the past events ?
	- How far into the future we are trying to predict ?
- What are the different aspects of the service netrounds is currently tracking:
	- quality 
	- availability
- ab in the name: refers 2 locations that we specify and then track the metrics between them
- Netrounds is based on a thesis ?
- What are the next steps that you would take ?
- Packet loss/Average delay/Maximum delay

**AIOPs**
- https://docs.broadcom.com/doc/the-definitive-guide-to-aiops
- https://www.juniper.net/us/en/research-topics/what-is-aiops.html#:~:text=AIOps%2C%20or%20artificial%20intelligence%20for,and%20systems%20incidents%20more%20quickly
- https://www.sevone.com/resources/blog/anomaly-detection-challenging-task-in-todays-dynamic-networks/
- https://www.sinch.com/blog/dynamic-threshold-estimation-for-anomaly-detection/
- https://ieeexplore.ieee.org/document/8460047 (DARN : Dynamic Baselines for real time network monitoring)
- https://docs.appdynamics.com/21.9/en/application-monitoring/business-transactions/business-transaction-performance/dynamic-baselines (App Dynamics)
	- Includes the definition of hourly, weekly and monthly baselines
- https://arxiv.org/pdf/1802.04431.pdf (Detecting Spacecraft Anomalies Using LSTMs and Nonparametric Dynamic Thresholding)
- https://arxiv.org/abs/1803.10769 (Network Traffic Anomaly Detection using RNN)
- https://www.sciencedirect.com/science/article/pii/S0140366421000426#b101 (Deep Learning for Network Traffic monitoring and Analysis)
- https://www.youtube.com/watch?v=0frTKMakaOs (CISCO AI network analysis)
- https://github.com/cisco-ie/telemetry (CISCO Telemetry dataset)
- https://www.splunk.com/pdfs/ebooks/the-essential-guide-to-aiops.pdf (Essentials guide to AIOPs)


Use cases:
- Anomaly detection
	- Dynamic baselining (The meat of AIOPs)
	- Univariate Vs Multivariate Anomalies
- Causal analysis
- Prediction
- Alarm management
- Intelligent remediation


How do you define timing / time error ?
What is meant by recovering the time ?
What are the 4 time stamps ?
What is the exact problem statement ? 
- Identifying the faulty node ? 
- What is the input and output ?
What is the purpose of identifying 
- Constant and Dynamic time error 
Is it related to path tracing ?



- Questions to ask before doing a time series forecasting
- Is it a time series dataset ?
- If yes, is it possible to even forecast values ?
- Are there any seasonal patterns ? (hourly, weekly, monthly, yearly)


- The data that is collected .. 
- Have questions regarding two scenarios:
	- Everything is working 
	- Goes beyond budget
- What is the action plan based on the analysis that the tool does ?
- What would have been your next steps ?
- If everything remains within the budget, is there any point in further analysing this scenario .. 
- is there anything that we are interested in ? 
- Can we have all the data sources required to do the RCA ?


1. How do you visualize the final deliverables ? 
2. Suppose we develop something, can we expect any kind of feedback ?
3. Who is the end user in timing ops ? Who is the end user ?
4. We are the consultancy, Kamatchi is the client 
5. Is this a software project or a Machine Learning one ? This involves full stack implementations ..
6. Juniper is a networking company .. And hard to believe there is nothing around this .. which analyses the network traffic .. 
There must be some already implemented frameworks ..
8. Its getting to the same point in terms of AIOPs



1. Two Reasons
	1. For Evaluation purposes and comparision of algorithms
	2. To visualize the performance of the algorithms .. real time algos are different from the static ones
		1. For example, adaptation part wherein the baselines get adjusted based on the trend
2. Different models for features and streams
3. Lets assume, we have this platform, how do we go about evaluating it.
