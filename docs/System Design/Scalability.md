🥊How to describe load ?
- Requests / sec (OR) Response time -> ==webserver==
- Ratio of Reads to Writes -> ==database==
- Number of simultaneous active users  / Latency-> ==chat room==
- Hit rate -> ==cache==

When the load increases, the performance gets affected
🥊Performance Metrics:
- Throughput -> ==Batch== processing system (like Hadoop)
Throughput can be described as:
	-	Number of records we can access per second
	-	Total time it takes to run a job on a dataset of a certain size
- Response time -> ==Online== system

### Handling Load
| Horizontal Scaling                | Vertical Scaling                    |
|:--------------------------------- |:----------------------------------- |
| Load balancing required           | Not required                        |
| Resilient                         | Single Point of failure             |
| Slower: Network Calls ([[RPC]])   | Faster: Inter process communication |
| Scales well basis number of users | Hardware limit                      |
| Easier to upgrade                 | Harder to upgrade                   |
| Easier to implement               | Harder                              |

### Percentiles
- These are used to define ==SLA== (Service Level Agreements)
- Eg: 99.99%ile of the response time => 200 ms 
  (Customer can ask for refund if the SLA is breached)

### Recommendation
- First scale vertically till certain point and then horizontally

![[Pasted image 20240427163257.png]]