![[Pasted image 20210629012317.png|500]]

Differentiation of |w|: 
![[Pasted image 20210629012401.png|300]]

Hence, the weight update equation is:
![[Pasted image 20210629012624.png|450]]

From the above formula:
-   If ==w is positive==
	-   the regularization parameter λ \> 0 will push w to be less positive, by subtracting λ from w.
-   If ==w is negative==
	-   the regularization parameter λ < 0 will push w to be less negative, by adding λ to w. hence this has the effect of pushing w towards 0.