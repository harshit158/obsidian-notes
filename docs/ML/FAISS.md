- Forms clusters of dense vectors and performs Product Quantization
- Uses GPU to calculate distances in parallel

**Steps:**
- Given a query vector, see which cell it belongs to
- Get all the vectors that belong to that cell
- Perform final similarity computation with these extracted vectors


![[Pasted image 20230610141733.png]]