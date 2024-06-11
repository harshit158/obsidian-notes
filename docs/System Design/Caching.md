### Outline
- [[#^4a9151|Introduction]]
- [[#^bbc670|Where is it used]]
- 
### Introduction
^4a9151

- Short term memory
- Limited space (temporary)
- Generally faster than parent memory
- Generally contains most recently accessed items

### Where is it used

^bbc670
- **Hardware level**
	- CPU: L1 cache -> L2 cache -> RAM
	- GPU

- **Services Level**
	- API Servers
	- CDN
	- DNS
	- Databases
	- Search Engines

- **Application Level**
	- Browser Cache
	- Web artifacts
	- Scientific computation
	- Simulations

### When to use
- Need to reduce load on primary data stores (DB)
- Data that you need is slow

### When NOT to use
- Speed to access data from cache == data store
- Cached data changes 🔴 **too frequently**
- Requests have low repetition

### How does cache work ?

![[Pasted image 20230215215510.png]]
- Cache server is ==not ideal for important data== since the data is stored in ==volatile memory==
- ==Cache Hit== 
- ==Cache Miss==
- 🔴 Cache Hit Ratio = Cache hit / Total requests
	- Important parameter while deciding to use cache
	- Desirable to be in the range of (0.8 - 0.95) / 80%-95%
	  
![[Pasted image 20240531080358.png|600]]

### Types of Cache
**(1) Application Server Cache**
	![[Pasted image 20240529214230.png|500]]
- Cache within application server
- Can be in-memory / storage discs
- Good for single server but cache miss increases in case of multiple servers across load balancers -> Distributed cache

**(2) Distributed Cache**
	![[Pasted image 20240529214758.png|400]]
- Each node has small part of cached data
- Requests are routed using consistent hashing

**(3) Global Cache**
- In distributed cache - AS have dual responsibility - handling requests and maintaining cache
- As we scale - a separate cache layer is maintained
- Every request will go to this cache space and if data is not found it will go to underlying primary store
- ![[Pasted image 20240529215243.png|500]]

(4) **CDN**
- [[CDN]] can be considered a type of cache
- It stores large static files (HTML / CSS / JS etc)

### Cache invalidation
- Cache might contain stale data once the main data has been modified

#### Cache writing policies / Invalidation techniques

1. **Write through cache**
	1. Updates both cache and db ==together==
	2. No loss of data
	3. Writes could be slow
	4. Useful where there is frequent re-read of data (Eg: stock price application)
	   ![[Pasted image 20240531073447.png|400]]
	   
2. **Write behind cache**
	1. Data is first written to Cache and then to DB
	2. Faster since cache is mostly in-memory which will be fast
	3. Could be data loss if cache goes down and could not write to DB
	4. Useful in cases where some data loss is fine but availability is important
	   ![[Pasted image 20240531073354.png|400]]
3. **Write around cache**
	1. Data written directly to DB
	2. There is a chance of stale data in cache - hence there is a parameter TTL (==Time To Live==) after which the queries will directly go to DB instead of cache
	3. No chance of data loss
	4. Suitable for apps that don't frequently re-read data
	   ![[Pasted image 20240531073721.png|500]]


### Eviction Policies

- Cache resources are costlier than disk
- Hence better to keep only those records which have higher probability of being accessed in the future
- Eviction policies for cache systems:
	1. **Random Placement**
		1. Randomly select any item from cache and remove it whenever necessary
		   
	2. **Least Recently Used (==LRU==)**
		- <mark style="background: #BBFABBA6;">Most popular</mark> due to decent hit rate in several scenarios
		- Eg: Maintaining hot news feed where a store which is not being read / visited are removed
		- Implemented through **Linked Hash Map** (refer [[146. LRU Cache]])
		  
	3. **Least Frequently Used (==LFU==)**
		- Counts frequency of item
		- Removes item which is used least
		- <mark style="background: #FF5582A6;">Cons</mark> : New items that just entered cache are subject to being removed soon
		- Quite uncommon in production systems 
		- **Implementation**
			- Keep Minheap based on usage and a hashmap for tracking cache elements
			- Remove top element from heap and remove same element from hashmap as well
		  
	4. **Most Recently Used (==MRU==)**
		- Removes most recently used item
		- Suitable in cases where user is less interested in checking out latest data / item
		- Eg: Video recommendation
			- MRU cache can be maintained for each user
			- Once a video is watched - it can be removed from cache
		- Eg: Tinder
			- Once you have seen a person recently - you won't like seeing her again
		- Implementation: similar to LRU
		  
	5. **First in First out (==FIFO==)**