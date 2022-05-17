## Sampling
- Cases where Sampling is necessary:
	- When don't have access to all possible data - the training data is just a subset of real world data
	- When its infeasible to process all data that we have access to - and we have to sample some data so that it fits into memory
	- When trying a new model - we might first want to quickly train it on a small dataset before running it on the full data


- Two types of Sampling methods:
	- (A) **Non-Probability Sampling Methods**
	  
		(1) **Convenience Sampling**
		(2) **Snowball Sampling**
		(3) **Judgment Sampling**
		(4) **Quota Sampling**

	- (B) **Random Sampling**
		(1) Simple Random Sampling
		(2)  
		(3)
		(4)


### Non-Probability Sampling
- **Cons** of Non-Probability Sampling
	- Selected data not representative of entire data - riddled with selection baises
	  But in some cases, it is still useful

- **Examples** where Non-probability Sampling is used:
	- ==Language modelling== - training data is from sources that are easily available - Wikipedia, Reddit. 
	  Hence, not representative of the entire language
	- Data for ==Sentiment analysis== of general text - this is collected just from IMDB and Amazon reviews - biases towards users willing to write reviews
	- Data for ==Self driving cars== - mostly trained in CA, which has sunny weather, lacks diverse climates

- Non-probability Sampling can be quick way to get started but not reliable


### Simple Random Sampling
- Equal probability is given to all samples
- **Drawback:**
	- Rare categories of data is not selected
	  Models trained on this data think that this data doesn't exist

### Stratified Sampling
- Population is divided into groups belonging to different classes and then it is sampled
  Eg: 1% each from class A and class B instead of 1% from entire population
- Each group is called ==stratum==
- **Drawback**:
	- Not always possible to divide population into groups
	  Eg: When a sample can belong to different groups (multilable tasks)

### Weighted Sampling
- Each sample is given a weight, according to which it is sampled
- **Pros**:
	- Allows to use domain expertise
	  Eg: If recent data is more useful, can give more weightage to recent observations
	- Helps if data comes from different distributions
	  Eg: If red and blue samples are 25%, 75%, but if both of them have equal probability to happen, red can be given more weightage so that it gets selected


### Reservoir Sampling
- Used for streaming data
- Suppose k elements need to be selected from streaming data
  - This algo ensures that each incoming nth data has probability of $\frac{k}{n}$ of being in the reservoir
  - Each element in the reservoir has $\frac{k}{n}$ probability of being there
  - All samples have equal chance of being selected
  - If we stop the algorithm at any time, all samples in the reservoir have been sampled with the correct probability.

- **Algorithm**:
	- (1) Copy the first k elements from the input array to the output array.
	- (2) Iterate from k to (n-1) (both inclusive). In each iteration jj:
		- 2.1 Generate a random number num from 0 to j.
		- 2.2 If num is less than kk, replace the element at index num in the output array with the item at index j in the input array. 

![[Pasted image 20220517113941.png]]


### Importance Sampling
- Allows us to sample from a distribution when we only have access to another distribution.
- Eg: If we want to sample from P(x), but all we have Q(x)
  Simply sample from Q(x) and weigh it by P(x)/Q(x)