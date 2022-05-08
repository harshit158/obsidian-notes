|Horizontal Scaling | Vertical Scaling
|:--  | :-- |
|Load balancing required | Not required |
| Resilient | Single Point of failure |
|Slower: Network Calls ([[RPC]]) |Faster: Inter process communication |
| Scales well basis number of users | Harware limit |

🥊How to describe load ?
- Requests / sec -> ==webserver==
- Ratio of Reads to Writes -> ==database==
- Number of simultaneous active users -> ==chat room==
- Hit rate -> ==cache==

When the load increases, the performance gets affected
🥊Performance Metrics:
- Throughput -> ==Batch== processing system (like Hadoop)
Throughput can be described as:
	-	Number of records we can access per second
	-	Total time it takes to run a job on a dataset of a certain size
- Response time -> ==Online== system