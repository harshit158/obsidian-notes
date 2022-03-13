### AutoCovariance Function 
- Time Series can be visualized as a realization of a stochastic process:
	- $X1, X2, X3, ...$ where $X_t \sim \text{distribution} (\mu, \sigma^2)$ 
	- Each time step is a random variable and hence can have its own distribution, mean, variance etc

- **Autocovariance Function**:
	- Covariance of two timestamps at "k" distance apart. "k" is known as lag.
	-  $\gamma(s,t)= Cov(X_s, X_t) = E[(X_s-\mu_s)(X_t-\mu_t)]$
	- $\gamma_k = \gamma(t, t+k) \approx c_k$ , 
	$c_k$ is known as ==covariance coefficient== and is the estimation of $\gamma_k$
	- $c_k=\dfrac{\sum_{t=1}^{N-k}(x_t-\bar{x})(x_{t+k}-\bar{x})}{N}$, where $\bar{x} = \dfrac{\sum_{t=1}^{N}x_t}{N}$
	- Since Stationarity is assumed, $\gamma_k$ is constant for each k (lag), no matter what the value of "t" is 


### AutoCorrelation Function 
- **Autocorrelation Function**:
	- Autocorrelation Coefficient between $X_t$ and $X_{t+k}$ : 
	$-1 \leq \rho_k = \dfrac{\gamma_k}{\gamma_o} \leq 1$
	- Estimation of Autocorrelation Coefficient at lag k:
	$r_k=\dfrac{c_k}{c_o}$
	Note: $r_o=\frac{c_0}{c_0}=1$ 
	- ==Correlogram==: Plots auto-correlation coefficients at different lags
	![|700](https://s3.amazonaws.com/quantstartmedia/images/qs-tsa-arp-dwn-correlogram.png)



### Random Walk Model
- $X_t=X_{t-1}+Z_t$ , where $Z_t$ is some random noise
$X_0 = 0, X_1=Z_1, X_2=Z_2$
Therefore, $X_t=\sum_{i=1}^{t}Z_i$  
$E[X_t]=\mu t$ and $Var[X_t]=\sigma^2 t$ which means the mean and variance depends on the timestep t

- Random Walk model is NOT stationary

![[Pasted image 20220308001607.png|700]]


### Moving Average Model of order q.  (MA(q))
- $X_t = Z_t + \theta_1Z_{t-1} + ... + \theta_qZ_{t-q}$
- Autocorrelation cuts off at lag q (Below is an example for q=2)
![[Pasted image 20220308002419.png|800]]

