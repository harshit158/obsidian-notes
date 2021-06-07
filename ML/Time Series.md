### Applications of Time Series

### Time series Types based on 
1. No. of Time dependent Variables
==Univariate== forecasting => Single time-dependent variable
==Multivariate== forecasting => More than one time-dependent variable

2. No. of values to predict in future
	a) ==One-Step== forecasting	
	b) ==Multi-Step== forecasting
 
	
### Properties
1. **==Stationarity==**:
	-	Statistical properties of time series DO NOT change over time. 
		Following are the <u>conditions for stationarity</u>:
		-	Mean is constant
		-	Variance is constant
		-	There is no Seasonality

	-	Ideally we want to have stationary time series

	- How to <u>check for stationarity</u>:
		- Visually
		- Global vs Local test (eg Mean of small range VS Mean of entire time series range)
		- [[Augmented Dickey-Fuller Test]] (ADF)

	- How to <u>make Data Stationary</u> ^013637
		- Differencing - difference between consecutive observations
		- Linear Regression

3. **==Seasonality==**:
4. **==Autocorrelation==**: 
	- Represents the degree of similarity between a given time series and lagged version of itself over successive time intervals
	- Measures the relationship between a variable's current value and its past values
	- Can't use OLS (linear regression) since autocorrelation violates independence assumption [[Linear Regression#^320904]]

### Approaches for Time Series Prediction
- Statistical Methods [[Time Series#^2c75e3]]
- Machine Learning Methods
	- SVM / Linear Regression
	- Deep Learning based
		- LSTM / RNN
		- Prophet by Facebook

### 3 Step Process
Refs: 
https://www.kdnuggets.com/2018/03/time-series-dummies-3-step-process.html

-	**Step1**: Making data stationary [[Time Series#^013637]]
-	**Step2**: Building Time Series Model
-	**Step3**: Evaluating Model Accuracy



### Statistical Methods
^2c75e3

Strategies in increasing order of complexity
1. ==Naive Method==

![[Pasted image 20210527171853.png]]

4. ==Average Method==

![[Pasted image 20210527171958.png]]

6. ==Exponential Smoothing==

![[Pasted image 20210527172049.png]]

7. ==Auto Regression==

![[Pasted image 20210527172136.png]]

8. ==Moving Average Model==

![[Pasted image 20210527172215.png]]

10. ==ARMA== (Autoregressive Moving Average)
	- ARMA (p,q)

![[Pasted image 20210527172357.png]]


11. ==ARIMA== (Autoregressive **Integrated** Moving Average)
	- ARIMA (p,d,q)
	- ARIMA (p,0,q) = ARMA(p,q)
