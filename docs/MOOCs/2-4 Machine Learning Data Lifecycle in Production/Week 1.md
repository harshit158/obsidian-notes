### Outline:
1. [[#^94c40e|Introduction]]
2. [[MOOCs/2-4 Machine Learning Data Lifecycle in Production/Week 1#^0f7e5e|Collecting Data]]
3. [[MOOCs/2-4 Machine Learning Data Lifecycle in Production/Week 1#^429163|Labelling Data]]
4. [[MOOCs/2-4 Machine Learning Data Lifecycle in Production/Week 1#^05de7f|Validating Data]]

## Introduction

^94c40e

![[Pasted image 20211103151142.png|800]]

🥊==Pipeline Orchestration Frameworks==
- Responsible for scheduling various components in an ML pipeline DAG 
- Help with pipeline automation
	- Airflow 
	- Celery
	- Kubeflow

---
## Collecting Data

^0f7e5e

### Importance of Data
"*Data is the hardest part of ML and the most important piece to get right...
Broken data is the most common cause of problems in production ML systems*" -- ==Uber==

"*No other activity in the ML lifecycle has a higher return on investment than improving the data a model has access to*" -- ==Gojek==

🥊 Meaningful Data:
- maximize predictive content
- remove non-informative data
- feature space coverage - cover the same space during testing as it was during training

🥊Garbage in , Garbage out

🥊Key Points:
- Understand users and translate needs into data problems
	- What kind of / how much data is available ?
	- What are the details and issues of your data ?
	- What are your predictive features ?
		- Do Feature engineering to maximize predictive signals from data
	- What are the labels you are tracking ?
	- What are your metrics ?
- **Source** (bias and fairness), **store** and **monitor** quality data responsibly

🥊Get to know your data:
- Identify data sources
- Check if data is refreshed - how often should we update training set
- Consistency for values, units, data types
- Monitor outliers and errors (eg: errors caused by bad sensors)

🥊Dataset issues:
- Inconsistent formatting
	- Does 0 represent 0 or 0.0 or that the measurement is missing
- **Compounding errors** from other ML models 
- **Monitor data sources** for system issues and outages

### Security, Privacy and Fairness

🥊Users privacy:
- Protect personally identifiable information:
	- **Aggregation** : Replace unique values with summary
	- **Redaction**: remove some data to create less complete picture

🥊Categories of human raters:
- Generalists
- Subject Matter Experts
- Your users


---
## Labelling Data

^429163

🥊Types of problems in ML systems:
1. Slow
![[Pasted image 20211107105819.png]]

3. Fast
![[Pasted image 20211107105851.png]]

🥊 "Understand" the model:
- Mispredictions dont have uniform cost to your business
- Data you have is rarely the data you wish you had
- ==Model objective is nearly always a proxy for your business objective==	
- Some %age of your customers may have a bad experience - try to decrease this

### Data and Concept change in Production ML
🥊 Detecting problems with deployed models
- Data and scope changes
- Monitor models and validate data to find problems early
- Changing ground truth: **label** new training data

🥊Types of problems

| Description | Easy | Hard | Really Hard |
| :--- | :--- | :---- | :--- |
| Ground truth | Changes slowly (months/years)| Changes Faster (weeks) | Changes very fast (days, hours, min)
| Model retraining <br>driven by | - Model improvements, Better data <br> - Changes in software and/or systems | - **Declining model performance** <br> - Model improvements, Better data <br> - Changes in software and/or systems| - Declining model performance <br> - Model improvements, Better data <br> - Changes in software and/or systems |
| Labelling | - Curated datasets <br> - Crowd Based | - **Direct Feedback** <br>- Crowd based | - Direct Feedback <br>- **Weak Supervision** |
| Example | Dogs and Cats |  | Market data |


### Data Labelling
Methods:
1. ==Direct Labelling== (Process feedback)
Eg: Actual vs Predicted click through. Idea is to get labels through model's predictions.
**Advantages**
	- Training dataset continuous creation
	- Labels evolve quickly
	- Captures strong label signals (clicking/not clicking is a very strong signal)
**Disadvantages**
	- Hindered by inherent nature of the problem
	- Failure to capture ground truth
	- Largely bespoke (custom) design. Not generalizable and hence cant be applied to many scenarios.
![[Pasted image 20211109013238.png]]

3. ==Human Labelling==
**Advantages**
	- More labels
	- Pure Supervised Learning
**Disadvantages**
	- Quality inconsistency
	- Slow
	- Expensive
	![[Pasted image 20211109014350.png]]

4. ==Semi Supervised Labelling==
![[Pasted image 20210811175759.png|600]]
An example use case is ==Graph based Label Propagation== as shown below:
![[Pasted image 20211123095146.png|300]]

5. ==Active Learning==
	- Family of algorithms for ==intelligently sampling== the data
	- Select the points to be labeled that would be most informative for model training
	- Typical lifecycle:
	![[Pasted image 20211123095722.png|600]]
	- The crux is the ==sampling techniques== which are as follows:
		- **Margin Sampling**:
		Label points the current model is least confident in

		- **Cluster-based sampling:**
		Sample from  well formed clusters to "cover" the entire space
		- **Query-by-committee:**
		Train an ensemble of models and sample points that generate disagreement
		- ** Region-based sampling:**
		Runs several active learning algorithms in different partitions of the space

1. ==Weak Supervision==
	- Start with unlabeled data,  without ground-truth labels
	- One or more weak supervision sources are used to label data:
		- A list of heuristics that can automate labelling
		- Typically provided by subject matter experts
	- Noisy labels have certain probability of being correct, not 100%
	- Objective is to learn a generative model to determine weights for weak supervision sources.
	- ==Snorkel==  is a #tool for weak supervision
	![[Pasted image 20211123102026.png|550]]

---
## Validating Data

^05de7f

![[Pasted image 20211109022220.png]]

1. **Data Drift**: A skew grows between Training and Serving data
 Degree of data and skew drift is typically measured by ==[[Distances|Chebyshev distance (L-infinity)]]==
	- **Schema Skew**: Inconsistent features / feature types; int != float
	- **Distribution Skew**: Distribution of feature values for training is different from serving.
	Caused by: 
	  - Faulty sampling method during training
	  - Different data sources for training and serving data
	  - Trend, seasonality, changes in data over time

2. **Concept Drift**: Interpretation of the relationship between the input predictors and target feature evolves
![[Pasted image 20211109021758.png]]

### Tensorflow Data Validation (TFDV)
🥊==TFDV== capabilities:
- Generates data statistics and browser visualizations
- Infers the data schema
- Performs validity checks against schema - check for outliers
- Detects training / serving skew - checks newly coming data against the existing one

TFDV workflow is given below:
1. First, stats from the training data is collected
2. It is then compared with serving data stats
3. This is used for identifying anomalies
![[Pasted image 20211109213509.png]]

---
==**Lab Notebook**==: https://github.com/harshit158/machine-learning-data-lifecycle-in-production/blob/main/C2_W1_Lab_1_TFDV_Exercise.ipynb

==**Assignment:**== https://github.com/harshit158/machine-learning-data-lifecycle-in-production/blob/main/C2W1_Assignment.ipynb

---