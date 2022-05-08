Ref:
- [How does centering make a difference in PCA ?](https://stats.stackexchange.com/questions/189822/how-does-centering-make-a-difference-in-pca-for-svd-and-eigen-decomposition)
- [Relationship between SVD and PCA](https://stats.stackexchange.com/questions/134282/relationship-between-svd-and-pca-how-to-use-svd-to-perform-pca)

---
==Principal Directions== / Axes : Before projection (Eigenvectors)
==Principal Components== : After projection (XV or )

### Two Approaches:
(Assuming X is nxm matrix, where n is the number of observations and m is number of features )
1. **Using [[Eigen Decomposition]]**
	1. Data -> [[Covariance matrix and Correlation]] -> Eigen Decomposition
	(==Doesn't require centering==, because its done implicitly while calculating covariance matrix)
	
	2. Data -> $X^TX / (n-1)$ -> Eigen Decomposition
	(==Requires centering==)
	
	After Eigen decomposition, 	==$X=Q\Lambda Q^{-1}$==
	- Principal Directions: given by Q (eigen matrix)
	- Principal Components: XQ

2. **Using [[SVD]]**
	(==Requires centering==)
	
	After SVD, ==$X=UDV^T$==
	The columns of V are like the eigenvectors in the previous approach
	- Principal Directions: V (right singular vectors)
	- Principal Components: $XV = UDV^TV = UD$

![|700](http://ethen8181.github.io/machine-learning/dim_reduct/img/pca_versus_svd.png)

The idea is to get $U$ matrix, so that we get the new projected vectors in lower dimensional space as:
$z = U^TX$

And $U$ can be calculated as follows:
![[Pasted image 20210708195539.png|600]]