Ref:
https://eugeneyan.com/writing/bootstrapping-data-labels/

3 approaches to bootstrap labels
1. ==Semi-supervised learning==
	- Train a high-precision model on labeled data
	-   Predict on unlabeled data
	-   Select the ==most confident== predictions as pseudo-labels; add them to training data
	-   Train another model on labels and pseudo-labels
	-   Repeat until you have sufficient high confidence pseudo-labels

![[Pasted image 20210811175759.png|700]]

3. ==Active learning==
4. ==Weak Supervision==