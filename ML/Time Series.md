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
	-	Statistical properties of time series DO NOT change over time => Has constant Mean and Variance
	-	Ideally we want to have stationary time series
	-	Non-stationarity caused by:
		- Trend (increasing / decreasing) causes varying mean
		- Seasonal Nature causes changing variance
	- ==[[Dickey-Fuller Test]]== to check for stationarity

3. **==Seasonality==**:
4. **==Autocorrelation==**: 

### Approaches for Time Series Prediction
- Statistical Methods
	- ARIMA
- Machine Learning Methods
	- SVM / Linear Regression
	- Deep Learning based
		- LSTM / RNN
		- Prophet by Facebook

### 3 Step Process
Refs: 
https://www.kdnuggets.com/2018/03/time-series-dummies-3-step-process.html

-	**Step1**: Making data stationary
	-	Two ways:
		-	Difference the data - difference between consecutive observations
		-	Linear Regression
-	**Step2**: Building Time Series Model
-	**Step3**: Evaluating Model Accuracy

[[^]]