![[Designing a Rate Limiter 2023-03-06 13-13-11.excalidraw]]

- Generally not implemented inside the web-servers but inside a ==middleware== known as ==API Gateway==

**Algorithms:**
- **Token bucket**
	- Takes following parameters
		- ==Bucket size==: Max number of tokens allowed in the bucket
		- ==Refill rate==: Number of tokens put into the bucket every second
	- Have different buckets for different API endpoints:
		- Eg: Number of IP adrses / Number of requests per second
	- ==Pros==
		- Allows burst of traffic for short periods as long as there are enough tokens left in the bucket
--- 
- **Leaking bucket**
	- Implements FIFO (==queue==) to process requests at a ==fixed rate==
	- Parameters:
		- ==Bucket size==: Equal to the queue size.  Holds requests to be processed at a fixed rate
		- ==Outflow rate==: How many requests can be processed at a fixed rate (Eg: per second) 
- Fixed window counter
- Sliding window log
- Sliding window counter


- In-memory options are good for storing ==counters== to implement rate limiting - ==Redis== is a popular option


--- 
**Rate Limited in a Distributed Env**
Challenges:
- **Race condition**
	- Solved using **Lua script** and ==Sorted sets== data structure
- **Synchronization issue**
	- This happens when multiple rate limiters are used in a distributed fashion
	- One solution is to use ==sticky sessions== but not recommended
	- Better solution is to use ==centralized data store== like Redis