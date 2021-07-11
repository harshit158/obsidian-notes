![[Pasted image 20210619184727.png]]

## Define Data and Establish Baseline
### Type of Data Problems
![[Pasted image 20210619185937.png]]

<u>**Unstructured vs Structured data**</u>
- ==Unstructured Data:==
	- May or may not have huge collection of unlabeled examples x
	- Humans can label more data
	- Data augmentation more likely to be helpful

- ==Structured Data:==
	- May be more difficult to obtain more data
	- Human labelling may not be possible

<u>**Small Vs Big data**</u>
- ==Small Data:==

	-  Clean labels are critical
	-  Can manually look through dataset and clean labels
	-  Can get all the labellers talk to each other
-  ==Big Data:==
	-  Emphasis on data process



---
### Small Data and Label Consistency
![[Pasted image 20210630214243.png]]

- Its crucial for small data to have clean labels
- However, even big data problems have small data challenges too

---
### Improving label consistency

🥊 How to increase label consistency:
![[Pasted image 20210630215054.png|500]]

🥊 Have a class / label to ==capture uncertainty==
![[Pasted image 20210630215849.png|600]]


---
### Human Level Performance

🥊 What is the use of HLP ?
- In academia, establish and ==beat a benchmark== to support publication
- It helps establish a more ==reasonable target==. 
It helps in estimating Bayes Error / irreducible error to help with error analysis and prioritization
- =="Prove"== that ML system is superior to humans, and that businesses should adopt this. (This is ==not preferred== however)

🥊 Raising HLP
- When label y comes from humans, HLP << 100% may indicate ambiguous labeling instructions.
- Improving labeling consistency will raise, HLP but also will make it more difficult for the ML model to match this improved accuracy.