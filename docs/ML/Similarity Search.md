Challenge in Similarity Search is to perform search in case of billion+ data points
- The Search has to be Fast but Accurate as well (generally there is a trade-off)
- To make it efficient (fast), the vectors are stored in ==Indexes== , wherein they are modified in such a way that the search becomes feasible
- The candidate vectors are then compare with Query vector using "Cosine similarity" or "Euclidean distance"
- There are different **Types of Indexes**:
	- ==**Flat and Accurate==:**
		- Vectors that are fed into these indexes are NOT modified, hence "flat"
		- This is similar to [[KNN]] , since the Query vector is compared to every other vector and there is no reduction in the search scope
		- Possible **Optimizations**:
			- (1) Reduce Vector Size
			- (2) Reduce Search Scope: Eg clustering of vectors and comparing the query vector to the centroids of these clusters instead of individual vectors
		- These optimizations means that we are <u> no longer performing an exhaustive nearest-neighbours search and don't scan the entire dataset.</u> Hence these approaches are known as ==Approximate Nearest Neighbors Search (ANN)==

 
![[Similarity Search 2022-08-06 19-09-13.excalidraw|900]]


**Libraries**:
- Annoy | Spotify
- FAISS | Facebook
- Scann | Google
- SPTAG | Microsoft
- DiskANN | Microsoft

**Types of Indexing Methods**:
- Graph based Index
- Space Partition Based Index
- Encoding Based Index
(Ref: https://www.youtube.com/watch?v=3Zg1iKRxgkU)


**Resources / Tutorials:**
- [NLP for Semantic Search Course](https://www.pinecone.io/learn/dense-vector-embeddings-nlp/