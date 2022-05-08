==Multicollinearity Issue==
$X^TX$ -> not invertible when features are collinear ([[Multicollinearity]])
Solved by [[Ridge Regression]] where the solution ==$w=(X^TX+\lambda I)^{-1}X^Ty$== involves inverting ==$(X^TX+\lambda I)$== instead of $X^TX$

**Assumptions:**
1. Each observation is independent (because error terms are independent) ^320904
2. Residuals (errors) are normally distributed and on average 0
3. Errors all have the same variance (homoscedastic)
4. There is a linear relationship between independent and dependent variables


#### Heteroskedasticity
- ==variance of the residual term==, or error term, in a regression model ==varies widely==

#### Homoskedasticity
- ==variance of the residual term==, or error term, in a regression model is ==constant==. That is, the error term does not vary much as the value of the predictor variable changes.
- One of the assumptions in Linear Regression

![Learn Heteroskedasticity in 2 minutes | by Dmitry Yemelyanov | Riga Data  Science Club | Medium|700](https://miro.medium.com/max/901/1*M2187QiB0o0I6r0JfM0JBg.jpeg)