**About the Week:**
- Model strategies and challenges in model development 
- Error analysis for different data types
- How to cope with class imbalance and skewed datasets

This week will focus on: Modelling 
![[Pasted image 20210531160625.png]]


## Selecting and training a model
### Establish a baseline
https://www.coursera.org/learn/introduction-to-machine-learning-in-production/lecture/KYu4T/establish-a-baseline

==Setting Baseline depends on type of data:==
- Unstructured: Text, Image, Audio
	- Humans are really good at it, hence HLP can be used
- Structured: Long excel sheets
	- HLP shouldn't be used since humans are bad it

==Ways of establishing a baseline:==
- Human level performance (HLP)
- Literature search for state-of-the-art / open source
- Quick and dirty implementation 
- Performance of older system

Baseline helps to indicate what might be possible. 
For eg: using HLP can give a sense of irreducible error

https://blog.ml.cmu.edu/2020/08/31/3-baselines/

### Tips for Getting started
https://www.coursera.org/learn/introduction-to-machine-learning-in-production/lecture/1Qwxh/tips-for-getting-started

==Getting started on Modelling:==
- Literature search to see whats possible
- Find open source implementation
- Pick a reasonable algo with GOOD data since that will outperform a complex algo with bad data

==Sanity Check== 
Overfit on a small subset of data


## Error Analysis and performance auditing
https://techcommunity.microsoft.com/t5/azure-ai/responsible-machine-learning-with-error-analysis/ba-p/2141774
### Error analysis example
https://www.coursera.org/learn/introduction-to-machine-learning-in-production/lecture/0wecB/error-analysis-example

Analyse the errors and ==tag each of them== with categories in which it is failing.
In below example, tags are car_noise, people_noise, low_bandwidth

![[Pasted image 20210607222156.png|500]]

Some more examples of tags in other problem statements
![[Pasted image 20210607222619.png|500]]

![[Pasted image 20210607222728.png|500]]


### Prioritizing what to work on
https://www.coursera.org/learn/introduction-to-machine-learning-in-production/lecture/6kFkv/prioritizing-what-to-work-on

**Two Step Process:**
1. ==Analyse the above tags with the below questions and find out what to prioritize to work on:==
	- How much room for improvement there is (by comparing with HLP)
	- How frequently that category appears  (% of data that the corresponds to this tag)
	- How easy is to improve accuracy in category
	- How important it is to improve this category

Eg:
![[Pasted image 20210607223555.png|550]]


2. ==Adding / Improving data for tags identified in above step==:
	- Collect more data
	- Use Data Augmentation
	- Improve label accuracy / data quality

### Skewed Dataset
Use Precision - Recall. 
It can also be used for ==Multiple Classes==
![[Pasted image 20210607224459.png|500]]


### Performance Auditing
==Auditing framework==
1. Brainstorm the ways the system might go wrong.
	- Performance on subsets of data (ethnicity, gender)
	- How common are certain errors (Fp, FN)
	- Performance on rare classes

2. Establish metrics to assess performance on these issues on appropriate slices of data
Tensorflow has a tool for this: ==[Tensorflow Model Analysis (TFMA)](https://github.com/tensorflow/model-analysis)==

3. Get business / product owner buy-in


## Data Iteration
![[Pasted image 20210615170825.png|500]]

### Data Augmentation

The gap between Model and HLP can be minimized by augmenting dataset corresponding to the input type that causes the largest gap
![[Pasted image 20210615171757.png]]


==Goal of Data Augmentation==:
Create realistic examples that:
1. The algorithm does poorly on, but
2. humans (or other baseline) do well on

==Checklist while generating new data:==
- Does it sound realistic
- Is x -> y mapping clear (can human do it properly ) -> reinforces point 2 above
- Is algorithm currently doing poorly on it -> reinforces point 1 above

### Can adding data hurt ?
![[Pasted image 20210615174433.png|500]]

### Adding features
If its not possible to augment data by generating more examples, ==add additional features for the existing examples==

![[Pasted image 20210615180540.png|500]]

### Experiment Tracking
https://neptune.ai/blog/ml-experiment-tracking
![[Pasted image 20210615181000.png|800]]