## Stationarity: generalizing from an individual to a group

^9cd811

### Stationarity - Intuition and Definition
Ref: [Stationarity : Intuition and definition](https://d18ky98rnyall9.cloudfront.net/_9ea06758bd41cded9788592bdac148a3_Stationarity---Intuition-and-Definition.pdf?Expires=1648166400&Signature=dJCxzd990oRpmqGeH1dB7xXiLKG1clFXW2dJGAZB7ykx2eXH4F4~Xc~w6PRCsDHGEAQZ9UJ7mrZc2hsZrhvfUQ8fVyIL-WspDG6OetqGR~Tl4PGNv0gDy9YMzi9q3r9xgjNxUrd2ciL3W6m8Oo4e2AjkSSGrS1tvGCo1fMIlqfM_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)
-> Time Series is a realization of Stochastic process, and hence there could be many time series originating by single stochastic process
![[Pasted image 20220322202707.png|400]]
Each of the above time series is a realization of the Stochastic process
-> Need to compute **Joint distribution of full set of random variables** to fully understand the Stochastic process that generated it

-> **Challenge**: How to infer anything about properties of a stochastic process from a single realization ?
Ans: Introduce ==Strict Stationarity== which says that:
Joint distribution of X(t1), X(t2), .. X(tk) is same as Joint distribution of $X(t1+\tau), X(t2+\tau), X(tk+\tau)$ 

**Implication** : Distribution of X(t1) is same as $X(t1+\tau)$  (for k=1)
This means that ==random variables are identically distributed, though not necessarily independent== 
Hence, Mean: $\mu(t)=\mu$, Variance: $\sigma^2(t) = \sigma$ 

**Implication for Autocovariance:** Joint Distribution of X(t1), X(t2) is same as $X(t1+\tau)$ , $X(t2+\tau)$  (for k=1)
That is, ==Joint distribution depends only on the lag spacing==, hence it doesn't matter where the two random variables are. All that mattes is that
they are "lag" distance apart.
Autocovariance function: $\gamma(t1, t2) = \gamma(t2-t1) = \gamma(\tau)$  (How ?)


## The Backshift Operator applied to MA(q) and AR(p)
### Backshift Operator
Backward shift operator is defined as:
$$BX_t = X_{t-1}$$
$$B^2X_t = BBX_t = BX_{t-1} = X_{t-2}$$
Example, for Random Walk:
$$X_t = X_{t-1} + Z_t$$
$$X_t = BX_t + Z_t $$
