Parameters in RF can be divided into:
(To avoid overfitting, they should be increased or decreased is in the brackets) Double check
- That ==control Bias==:
	- max_depth (↓)
	- min_sample_split (↑)
	- max_leaf_nodes (↑)
- That ==control Variance==
	- n_estimators (↑)
	- max_sample (↑)
	- max_features (↑)