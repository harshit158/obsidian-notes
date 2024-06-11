### Load Balancer

- Distributed traffic across a group of servers
- Has 3 Responsibilities:
	- Routing requests
	- Keeping metadata
	- Keeping track of health of servers

![[Pasted image 20240427155310.png|500]]

### Load Balancing Algorithms:

![What Is Load Balancing? Types, Configurations, and Best Tools - DNSstuff|700](https://www.dnsstuff.com/wp-content/uploads/2020/01/the-five-most-common-balancing-methods-1024x536.jpg)

- **Least Connection Method**
	- Directs traffic to the server with the ==fewest active connections==.
	- When to use:
		- When there are a large number of persistent client connections which are unevenly distributed between the servers (huge variance in response times)

-   **Least Response Time Method**
	-   Directs traffic to the server with the ==fewest active connections== and the ==lowest average response time==.
	
-   **Least Bandwidth Method**
	-   Selects server that is currently serving the ==least amount of traffic== measured in <u>megabits per second (Mbps).</u>
	- When to use:
		- Streaming application (Eg: Netflix)
	
-   **Round Robin Method**
	-   ==Cycles== through a list of servers and sends each new request to the next server. When it reaches the end of the list, it starts over at the beginning. 
	-   It is most useful when the servers are of equal specification and there are not many persistent connections.
	- <mark style="background: #FF5582A6;">CONS</mark> : It doesn't take into account server load - it will keep on sending requests even if the server is overloaded / slow.

-  **Weighted Round Robin**
	- Distributes loads as per the weights (RAM available) of the server
	- When to use:
		- Non-uniform infrastructure
		- Uniform response times

-   **IP Hash**
	-   A ==hash of the IP address== of the client is calculated to redirect the request to a server.
	- Same URL always goes to the same server
	- Hence can **cache** user related data on that server


### Benefits
- Easy rolling upgrades
- Can provide predictive analytics to estimate future load
- Protects against DDOS attacks since it distributes traffic across servers

### Request routing in LBs
- Tracks ==health== of servers in the cluster
- Tracks ==metadata== of servers 
- Routes as per algorithms on metadata

### Types

Based on ==OSI (Open Systems Interconnection)== - there are two types

- **==Layer 4== Load Balancer**
	- Based on Transport Layer
	- Also known as "**Network Load Balancing**"
	- Uses information available in network and transport layer protocols such as IP adrs, TCP / UDP ports, etc
	- These LBs don't inspected the content of the data packets
	  
- **==Layer 7== Load Balancer**
	- Based on Application Layer
	- Also known as "**HTTPS Load Balancing**"
	- This type of LB can access content of data packets and hence make routing decisions based on HTTP headers / URLs/ cookies etc

- ![[Pasted image 20240427150745.png]]

### Placement of Load Balancers
- Between clients and Application servers
- Between Application servers and Database servers
- Between Application servers and Cache servers

![[Pasted image 20240426084003.png]]
### Scaling Load Balancers

![[Pasted image 20240427161004.png]]

- Multiple LBs are used and ==Registry Service== is used to now keep track of everything
- Earlier responsibilities of Load Balancers such as health check of servers / tracking metadata are now handled by Registry service
- Helps in synchronizing data across multiple load balancers
- Eg: Zookeeper