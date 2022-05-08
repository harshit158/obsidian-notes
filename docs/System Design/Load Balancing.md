Algorithms:
![What Is Load Balancing? Types, Configurations, and Best Tools - DNSstuff|900](https://www.dnsstuff.com/wp-content/uploads/2020/01/the-five-most-common-balancing-methods-1024x536.jpg)

- **Least Connection Method**
	-	Directs traffic to the server with the ==fewest active connections==.
	-	 Useful when there are a large number of persistent client connections which are unevenly distributed between the servers.

-   **Least Response Time Method**
	-   Directs traffic to the server with the ==fewest active connections== and the ==lowest average response time==.
	
-   **Least Bandwidth Method**
	-   Selects server that is currently serving the ==least amount of traffic== measured in <u>megabits per second (Mbps).</u>
	
-   **Round Robin Method**
	-   ==Cycles== through a list of servers and sends each new request to the next server. When it reaches the end of the list, it starts over at the beginning. 
	-   It is most useful when the servers are of equal specification and there are not many persistent connections.
	
-   **IP Hash**
	-   A ==hash of the IP address== of the client is calculated to redirect the request to a server.