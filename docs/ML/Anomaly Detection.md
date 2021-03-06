Types of Anomalies:
---
1. Point Anomalies
2. Contextual Anomalies
3. Collective Anomalies
 

Types of Approaches:
---
- ==Density== Based
	- KNN
	- Local Outlier Factor (LOF)
	- Isolation Forest

- ==[[Clustering]]== Based
	- K-Means and other clustering algos

- Support Vector Machine Based (==One-Class== Based)	
	- One-Class SVM

- ==Reconstruction== Error based
	- [[PCA]]
	- Autoencoder

## For Time Series:
- [Neptune Blog | # Anomaly Detection in Time Series: 2021](https://neptune.ai/blog/anomaly-detection-in-time-series)
- https://medium.com/bukalapak-data/time-series-anomaly-detection-simple-yet-powerful-approaches-4449ffe1ca12
![|900](https://miro.medium.com/max/1182/1*5kUgnjnrfJhxL47BeXl1JQ.png)

https://towardsdatascience.com/effective-approaches-for-time-series-anomaly-detection-9485b40077f1

1. Isolation Forest


![](https://miro.medium.com/max/2592/1*q8J3Gc94eBvY4gOn9UTCaQ.gif)
Note: ==Shewhart Control Chart== is a chart that shows the control lines (3 sigma for example) and anything beyond that is an anomaly 
![[Pasted image 20220202140859.png|500]]
