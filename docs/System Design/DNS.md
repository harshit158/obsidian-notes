### DNS
- Translates Domain Names (eg: geeksforgeeks.org) to IP


![[Pasted image 20240425165733.png]]
The complete adrs above is know as ==Fully Qualified Domain Name (FQDN)==

### DNS Resolution Process

**3 types of servers involved:**
- ==Recursive DNS Resolver==
	- This receives the domain name for which the IP adrs is to be found
	- Manages entire DNS resolution process
  
- ==Root== server
	- First point of contact in DNS resolution process
	- Returns IP adrs of TLD server that contains info about top level domain (`.com` / `.org`)
	  
- ==TLD (Top-Level Domain)== server
	- Returns IP of Authoritative server containing info about requested domain name (`example`)

- ==Authoritative== server
	- This returns the final IP adrs

![[Pasted image 20240425173409.png]]

**Steps:**
- The client queries a local DNS resolver, which checks its cache for the corresponding IP address.  

> [!NOTE] DNS Resolver
> **DNS resolver** is a client that sends DNS queries to DNS servers to resolve domain names to IP addresses. Resolver runs on a client machine or is provided by the client's network provider


- If the resolver has the IP address in its cache, it returns it to the client. Otherwise, it forwards the query to a root DNS server.  
- The root DNS server responds to the query with the IP address of the top-level domain server (TLD), such as .com, .org, or .net.  
- The resolver then sends a query to the TLD server, which response with the IP address of the authoritative DNS server for the domain name.  
- The authoritative DNS server is responsible for maintaining the DNS records for the domain name and responds to the resolver with the IP address of the web server associated with the domain name.  
- The resolver ==caches== the info for a certain period of time (TTL - time to live)
  The resolver returns the IP address to the client, which then connects to the web server using that IP address.

![[Pasted image 20240425171640.png]]

### DNS Records

![[Pasted image 20240425174713.png]]