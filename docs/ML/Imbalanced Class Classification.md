**1. Assymetric Loss functions**

**2. Oversampling:**
- ==SMOTE== (Synthetic Minority Oversampling Technique)
	- Synthesize elements for the minority class, in the vicinity of already existing elements

![](https://miro.medium.com/max/918/0*UrGYcz_Ab-HTo4-B.png)

**3. Undersampling:**
- ==Cluster Centroids==
	- Cluster data points and remove points from large clusters with <u>random sampling</u>

- ==Tomek Links==
	- Select all those pairs of data points a, b such that:
		- a's nearest neighbour is b
		- b's nearest neighbour is a
		- a and b belong to different classes
		- Among a and b, remove <u>only the one belonging to majority class</u>
	- Advantages:
		- A more clear decision boundary is created
		- Mojority class is undersampled

![Handling Imbalanced Data- Machine Learning, Computer Vision, NLP](https://editor.analyticsvidhya.com/uploads/85598tomek.png)


**While Training**:
- <mark style="background: #BBFABBA6;">Balanced batching strategy:</mark> 
	- This algorithm ==distributes classes across batches== to balance the data set
	- To prevent oversampling rare classes and undersampling frequent ones, it keeps the number of examples per batch roughly ==proportional to the relative number of examples== in the overall data set.

[[RASA Chatbot]]