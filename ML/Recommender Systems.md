## Collaborative Filtering

### Matrix Factorization:
- One of the collaborative filtering algorithms
- Need to learn two matrices from user-item matrix:
	- Users Matrix: Contains ==user embeddings==
	- Item Matrix: Contains ==item embeddings==

![Diagram of matrix factorization. | Download Scientific Diagram|700](https://www.researchgate.net/profile/Jun-Xu-67/publication/321344494/figure/fig1/AS:702109309751298@1544407312766/Diagram-of-matrix-factorization.png)


- This learning of embeddings is done using NN:
	- Initialise the two embeddings randomly
	- These are concatenated -> single vector
	- The output of this vector is forced to be the same as the ratings

![recommendation system neural network cheap online|800](https://miro.medium.com/max/2212/1*7nWtYGckwtP-7EPIB8ZMmQ.png)