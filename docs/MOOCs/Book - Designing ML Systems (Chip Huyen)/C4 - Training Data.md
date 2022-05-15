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