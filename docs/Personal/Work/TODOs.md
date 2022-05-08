TODOs:
- [ ] Presentation / Product:
	- [ ] Integrate filters inside the platform
	- [ ] Feedback mechanism for each anomaly
	- [ ] Add metrics for visualization
	- [ ] Upload a file and plot results for each feature and selected configurations
	- [ ] Deployment

- [ ] Algorithm / Approach:
	- [ ] FFT and ACF to identify seasonality automatically
	- [ ] Establish benchmark based on CISCO's dataset
	- [ ] Multistep Forecasting / Amazon Forecast and visualization in the app
	- [ ] Trend / Changepoint detection using Luminaire
	- [ ] Evaluate unsupervised anomaly detection algorithms using EM and MV curves (https://arxiv.org/pdf/1607.01152.pdf)

- [ ] Offload to GPU platform
- [ ] Compare data of similar streams
- [ ] Dash platform
	- [ ] Select periodicity for calculating baselines
	- [ ] Forecasting timesteps length
- [ ] Try Exponential weighted moving average
- [ ] Read DARN Paper
- [ ] Plots for different aggregations
- [ ] Read applied paper on time series from Eugene
- [ ] Start Pytorch implementation
- [ ] Read about time error project 

Possible TODOs:
1. 


**03 / 08 / 2022**
- [ ] Distributed Training:
	- [ ] Training: Spark
	- [ ] Serving: Ray
- [ ] Identify the seasonality from the data automatically
	- [ ] Using FFT from Kats (https://towardsdatascience.com/how-to-detect-seasonality-outliers-and-changepoints-in-your-time-series-5d0901498cff#:~:text=FFTDetector%20%E2%80%94%20Fast%20Fourier%20Transform%20Seasonality%20Detector)
- [ ] Test on Packet Loss
- [ ] While re-training the model, use a context vector from the past time series to feed it along with the next batch


**03 / 03 / 2022**
- [ ] Prophet on original 10s interval data:
	- Predictions not responsive to daily spikes
	- Probably because of noise which can be controlled by:
		- Sampling / Smoothing data (reducing data by some fraction) using Rolling Averages
		- Aggregation at the level of Min / Hours
- [ ] Training prophet on each of:
	- Min / 15 min / 30 min / 1 hour / 1 day / 1 week - This worked
	- Comments for 15 min predictions:
		- Downward trend for farther time stamps
			- 🔥 Re-training
				- When ?
					- Confidence band / Uncertainty widens
					- Performance metric degrades / Loss Curves
				- On What ? 2 Weeks of data
		- ==Aggregation can mislead== the model if ==re-training== is not done
- [ ] Prophet on multiple streams
	- [ ] Seasonal 1 
	- [ ] Seasonal 2
	- [ ] Irregular 3 - Aggregation matters - ==Too high-level will miss the anomalies==

Possible Research / Novelty:
- [ ] Automatic Appropriate Segmentation
- [ ] Automatic identification of horizon length
- [ ] Why patterns in some whereas none in others ?
- [ ] RCA



- I am currently involved in 5 projects
- Cloud solutions 