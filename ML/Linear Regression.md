==Multicollinearity Issue==
$X^TX$ -> not invertible when features are collinear ([[Multicollinearity]])
Solved by [[Ridge Regression]] where the solution ==$w=(X^TX+\lambda I)^{-1}X^Ty$== involves inverting ==$(X^TX+\lambda I)$== instead of $X^TX$

**Assumptions:**
1. Each observation is independent ^320904
2. Residuals are normally distributed
3. There is a linear relationship between independent and dependent variables