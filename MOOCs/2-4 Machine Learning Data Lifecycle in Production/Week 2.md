## Feature Engineering
### Feature Engineering Techniques
🥊Techniques
![[Pasted image 20211110102807.png]]
1. **Scaling**
Converts values from their natural range to prescribed range: Eg [0,255] -> [-1,1]
==Advanatages:==
	1. Neural nets converge faster
	2. Do away with Nans during training
	3. For each feature, the model learns the right weights

2. **Normalization**
![[Pasted image 20211110103423.png|200]]
![[Pasted image 20211110103554.png]]

3. **Standardization (Z-score)**
![[Pasted image 20211110103754.png]]
5. 

Note: ==Try both standardization and normalization and compare the results, as sometimes it leads to drastic difference==

🥊Dimensionality reduction in Embeddings:
- [[PCA]]
- [[t-SNE]]
- [[UMAP | UMAP (Uniform manifold approximation and projection)]]

### Feature Crosses
- A x B
- A x B x C x D

## Feature Transformation at Scale
### Preprocessing Data at Scale
🥊 Think about:
![[Pasted image 20211110202909.png|700]]
🥊 Preprocessing granularity:
- The transformations that are "==Full-pass==" can be afforded during training since we have the entire dataset, but during serving, since we just have single samples, anything that requires the characteristics of the whole dataset needs to be saved.
![[Pasted image 20211110203305.png]]


### Tensorflow Transform
![[Pasted image 20211110214423.png|800]]

🥊 Inside Tensorflow Extended
![[Pasted image 20211110214723.png]]

🥊 tf.Tranform Layout
- As a result of applying tf.Transform:
	- ==Transform graph== gets created
This graph can be applied to both training and serving scenarios and different modes as well such as tensorflow.js, tensorflow lite, tensorflow mobile

![[Pasted image 20211110215225.png|700]]

🥊 Two graphs get created:
- Tf.Transform graph
- Model training graph
![[Pasted image 20211110215346.png|700]]

🥊 tf.Transform ==Analyzers==
- These are like Tf operations that make a pass over the data and collect the constants required for preprocessing
- Run only once during the training
- ![[Pasted image 20211110215914.png]]


🥊Benefits of using Tf.Transform:
- Emitted tf.graph holds all necessary constants and transformations
- Focus on data perprocessing only at training time
- Works in-line during both training and serving
- No need for perprocessing code at serving time
- Consistently applied transformations irrespective of deployment platform such as lite, js etc




## Feature Selection
### Feature Spaces:
- N dimensional space defined by your N features

🥊 Feature Space Coverage:
Ensure that Train/Eval is representative of the Serving dataset:
- Same numerical ranges
- Same classes
- Similar characteristics of image data
- Similar vocabulary, syntax and semantics for NLP data

### Feature Selection:
🥊Why is feature selection needed:
- Reduce Storage and I/O requirements 
- Minimize training and inference costs
These points become important when dealing with terabytes of data or serving millions of requests

🥊Feature selection methods:

![[Pasted image 20211113094617.png|700]]
- #### Supervised
	-  Uses feature-target variable relationship
	-  Selects those contributing the most

![[Pasted image 20211113100920.png|700]]

1. ##### ==Filter Methods:==:
Filter methods ranks each feature based on some ==univariate metric== / ==statistical tests==  and then selects the highest ranking features. 
These methods are ==independent of the model== itself. 
![[Pasted image 20211113102025.png|600]]
**Metrics can be:**
- **Variance**: Features with least variances are removed
- **Correlation**
The idea is that ==Correlated features== are usually redundant -> Remove them
Different Correlation coefficients:
	- Pearson's correlation
	- **Kendall Tau Rank Correlation Coefficient**: Monotonic relationships and small sample size
	- **Spearman's Rank correlation Coefficient**: Monotonic relationships

- **Mutual information**
- **Univariate Statistical Tests (Univariate feature selection)**
	- Anova F-Test
	- Chi squared Test
	
	
	==Note==: 
	- Can use sklearn's **SelectKBest** with appropriate scoring function (as shown below). Should be careful considering the type of features
	- When using these, its important to note the types of features and target variable:

|Method | Feature type | Target type| 
| :-- | :-- | :-- |
| Pearson Correlation| numeric| numeric (also works when target is 0/1 encoded)
| ANOVA f-test| numeric | categorical 
| Chi-squared| categorical | categorical

	
2. **==Wrapper Methods==**

![[Pasted image 20211116170500.png|600]]
- **Forward Selection**
	- Iterative, greedy method
	- Starts with 1 feature
	- Evaluate model performance when adding each of the additional features, one at a time
	- Add next feature that gives the best performance
	- Repeat until there is no improvement

- **Backward Selection**
	- Start with all features
	- Evaluate model performance when removing each of the included features, one a time 
	- Remove next feature that gives the best performance
	- Repeat until there is no improvement
- **Recursive Feature Elimination (RFE)**
	- Select a model for evaluating feature importance (Eg: Random forest)
	- Select the desired number of features
	- Fit the model
	- Rank features by importance
	- Discard least important features (in each loop, some features are eliminated)
	- Repeat until the desired number of feature remains

3. **==Embedded Methods==**

	- Combines the qualities of filter + wrapper methods
	- Some models already have intrinsic properties that select the best features when it is constructed.
	- Eg: [[L1 Regularization (Lasso)]] and [[L2 Regularization (Ridge)]]

🥊Differences
![Feature Selection using Wrapper Method - Python Implementation|700](https://editor.analyticsvidhya.com/uploads/84353IMAGE1.png)

-  #### Unsupervised
	-  Feature target <u>relationship not considered</u>
	-  Removes redundant features (correlation)
---
**==LAB (Feature Selection)==** : https://www.coursera.org/learn/machine-learning-data-lifecycle-in-production/ungradedLab/eFGsV/feature-selection/lab?path=%2Fnotebooks%2FC2_W2_Lab_3_Feature_Selection.ipynb


![[Pasted image 20211116180907.png]]
- Different methods were tried above
- Using Domain knowledge + above results -> decidet the set of features to finally use
- If going with F1 score, **F-test** is more optimal than **Strong features** and **Subset features**, since it uses the least number of features
- There is a tradeoff between Score and nuimber of features used by that method

==**Assignment**==: https://www.coursera.org/learn/machine-learning-data-lifecycle-in-production/programming/LDWvs/feature-engineering/lab?path=%2Fnotebooks%2FC2W2_Assignment.ipynb

---