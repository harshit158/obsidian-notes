### Latent Dirichlet Allocation
Ref:
- Statquest https://www.youtube.com/watch?v=azXCzI57Yfc

---
In PCA, we are interested in finding the axes that encode the most variations in the original dataset
But in LDA, we are interested in ==maximizing separability between the known number of categories==

![Classification of NIR spectra by Linear Discriminant Analysis in Python|700](https://nirpyresearch.com/wp-content/uploads/2018/11/PCAvsLDA.png)

---
How does LDA create new axes ?
1. Maximize distance between means of known categories
2. Minimize variation (known as "scatter") within each category
![[Pasted image 20210711121139.png|700]]

---
**Similarities** to [[PCA]]:
- Both try to reduce dimensions
- Both rank new axis in order of importance
	- ==PC1== (first new axis that PCA creates) accounts for most variation in the data
	- ==LD1== (first new axis that LDA creates) accounts for most variation between the categories
- Both give information as to what features are driving the new axes