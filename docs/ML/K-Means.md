==Voronoi Tesselation==
![k-means clustering and Voronoi sets | R-bloggers](http://f.hypotheses.org/wp-content/blogs.dir/253/files/2015/02/k-means-5-groups-1-version-1-2.png)

How to find K ?
- ==Elbow== Method
Choose k at the elbow point

- ==Silhouette== Analysis
Determine degree of separation between clusters

### Initialization Tricks
- Use  multiple restarts
- Initialize with hierarchial clustering
- Select more than K points, keep most widely separated points
- Bisecting K-Means
- ==K-Means++==

### Speed ups
- Elkan's accelerated KMeans
- Hamerly's accelerated KMeans

### KMeans limitations
- Differing ==Sizes==:
![[Pasted image 20210710195049.png|500]]
- Differing ==Densities==
![[Pasted image 20210710195136.png|500]]
- ==Non-globular== shapes
![[Pasted image 20210710195221.png|500]]
K-Means works well in clusters that can be encapsulated in ==non-overlapping== spheres. This is to ensure that each point of a particular cluster is closer to its own center than any other cluster center.
	- For eg: it cannot handle case where 2D points lie on a concentric ring, since they cannot be enclosed in two ==non-overlapping== circles.