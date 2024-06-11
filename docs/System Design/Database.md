## Outline:
- [Replication](#^f4e1e2)
- 

Types:
1. Relational DB (**RDBMS/SQL Database**)
2. Non-Relational DB (**NoSQL Database**)
   4 categories:
   - Key-value Stores
   - Graph Stores
   - Column Stores
   - Document Stores

## Relational DB
- ACID compliant
## Non-Relational DB
- Joins are not supported
- Advantageous if:
	- Application requires ==low-latency==
	- Data is ==unstructured==
	- You only need to ==serialize/deserialize== data
	- Need to ==store massive amount== of data
- Choice of DB is dependent on use cases:
	- **Key-Value store:**
		- Eg: Redis, Memcache, DynamoDB
		- Use Cases: Session details, in-memory data caching
		- Can provide very fast read-write operation
	- **Document based DB**
		- Eg: MongoDB
		- Use Cases: Can power almost all use cases
		- Supports complex queries
		- Generally json based
	- **Text Search**
		- Eg: Elastic Search
		- Use Cases: Log analysis, full text search
		- Based on Lucene library
		- Search within large text
	- **Graph Databases**
		- Eg: Neo4j
		- Use Cases: Navigate deep hierarchies, discover inter-relationships between items
		- Data stored in nodes and edges
	- **Time Series Database**
		- Eg: InfluxDB, Timescale DB
		- Use Cases: IoT based application
		- Optimized for storing data in the form of pairs of time and value

## Database Replication
- ==Master== DB only supports ==write operations==
- ==Slave== DB supports ==read operations==
- Most applications require higher ratio of reads to writes, hence more number of Slave DBs than Master DBs

> [!info] Writes are 40 times more expensive than reads


## Common data types
**Storing time**
- Datetime - costly since it needs to be translated to db native format 
- Epoch - preferred for large scale
- Number - preferred for large scale

**Storing Long Text**
- Varchar
- Text
- Blob
- Json


### Eventual consistency
Eventual Consistency is a guarantee that when an update is made in a distributed database, that update will eventually be reflected in all nodes that store the data, resulting in the same response every time the data is queried.

---
# Replication

^f4e1e2

- What is replication ?
	- Maintaining multiple copies of data
	- On different physical machines connected over network
	- As far away from each other

![[Pasted image 20240606074454.png|500]]

- Why replication ?
	- Keeping data geographically closer to user
	- Increasing read throughput
	- Support both below use cases (by directing one type of queries to one node and the other to other node)
		- Analytical
		- Transactional
- Challenges:
	- Cost
	- Lags / consistency
	- High bandwidth
	- Complicated architecture

### Replication Mode

1. ==**Synchronous**==
	- All nodes need to acknoledge back that they have received the data
	- <mark style="background: #BBFABBA6;">Pros</mark> : Most recent copy of data on each replica
	- <mark style="background: #FF5582A6;">Cons</mark> : 
		- High latency writes
		- Chances of downtime increases if any node goes down

![[Pasted image 20240606075506.png|500]]


2. ==**Asynchronous**==
	- Writes are written to ==one of the nodes== and then propagated in the network
	- <mark style="background: #BBFABBA6;">Pros</mark> :
		- Faster writes
		- Reduced / no downtime
	- <mark style="background: #FF5582A6;">Cons</mark> :
		- Writes may get lost 
		- Can have ==replication lag==

![[Pasted image 20240606075722.png|500]]

--- 
### Types of Replication
![[Pasted image 20240513193504.png]]

#### (1/2) Leader Follower Replication

- Also called Primary - Secondary
- Also called Master - Slave
- Each node stores a copy of data called ==Replica==
- Uses ==Async== mode
- Eg: MySQL / Postgres / MongoDB
![[Pasted image 20240606080503.png|500]]

**Internal Working**
- Writes are taken on Primary
- Written on Primary's local store
- Primary generates a ==replication log==
- Secondary reads these logs and replay them in same order

**Replication Log**
![[Pasted image 20240606080850.png|250]]
- Similar to copy of data
- Maintained as monotonically increasing sequence
- Recommended to keep as buffer (limited storage)
- Keep ==static view== of data
	- The time at which data on Primary is created may not be the time at which it's created on *Slaves* due to lags - hence fields like "CreatedAt" should be consistent across master and slaves and should be equal to that of Primary
- Can be used in PIT (Point in Time Recovery)


**How to setup a new secondary**
- Take a consistent snapshot of Primary DB (Not the RL Id)
- Copy data to secondary's machine 
- Connect secondary to primary
- Replay replication log
- Once finished - ready to power reads

**How to handle outages**
- If secondary fails: Setup new secondary
- If primary fails: Call for ==election==

**Elections**
- Mechanism to elect a new primary in case of outage
- Standard algorithms - ==Paxos / Raft==
- If primary fails - each secondary gets votes based on latest Replication Log ID stored on them to show which one has the most recent data

![[Pasted image 20240606083819.png]]

**Why do we generally have odd number of nodes ?**
- So that election mechanism is sorted out


#### Replication Lag
- In production - async replication is generally used
- But secondaries can be left behind => Replication lag
- Expected that secondaries will eventually catch up


#### (2/2) Multi-Leader Replication
- Primary - Secondary replication with ==more than 1 Primary==
- Improves scalability and availability of the database

![[Pasted image 20240607075255.png|500]]
(One Primary at each client location - IN and US in this case)

##### **Use Cases**
- Globally Distributed System
	- <mark style="background: #BBFABBA6;">Pros</mark> 
		- Low latency read-write (because of cluster in close proximity)
		- Each DC can operate independently
		- High tolerance to network fault
	- <mark style="background: #FF5582A6;">Cons</mark> 
		- Conflict Resolution - What if different changes on same object happens at different DCs - how should the final data look like
		- Configuration pitfalls like auto-increment keys, triggers, integrity constraints
- Clients with offline operation / Realtime collaboration
	- Each device has it's own local datastore (Primary)
	- They sync with remote datastore (Primary)
	  ![[Pasted image 20240607080152.png|600]]
	- <mark style="background: #BBFABBA6;">Pros</mark> :
		- Seamless UX
		- Easy to develop
	- <mark style="background: #FF5582A6;">Cons</mark> :
		- Replication lag could be high magnitude (even in days)
			- What if some user didn't come back online for 30 days - no way to sync his data
		- Conflict Resolution
	- Eg:
		- Calendar apps, GIT
		- Google Drive

##### Conflict Resolution
- Most prominent issue with multi-leader replication
- Can happen due to concurrent writes
- Can lead to ==split-brain problem== ![[Pasted image 20240607080746.png|600]]


##### Conflict Resolution Techniques

**Approach1: Last Write Wins**
- Each write is timestamped
- System keeps writes with latest timestamp
- Since T2  > T1 in above diagram - we will keep Primary 2 data

**Approach2: Fixed Routing**
- All writes on same record are handled by same primary
- Similar to single leader replication
- Offers better availability as compared to single leader replication
  ![[Pasted image 20240607081400.png]]

**Other Approaches**:
- Custom algorithms
- Merging changes
- Manual resolution


##### **Replication Topology**
- Propagation of data across leaders
1. **==Broadcasting==** 
	- Writes issued to every other node
	- Network congestion Nx(N-1)
	- Robust, guarantee of message delivery
	  ![[Pasted image 20240607082352.png|500]]
	  
2. ==**Ring**==
	- Less robust
	- Susceptible to node failures
	- Total N message devliveries
	- Propagation delays
	  ![[Pasted image 20240607082444.png|500]]

3. ==**Start**==
	- Data from any primary first goes to central node from where it gets passed to all other primary nodes
	- Less robust
	- Susceptible to node failures
	- Total N message deliveries
	- Any message could be delivered in ==2 hops==
	- Single point of failure
	  ![[Pasted image 20240607082620.png|500]] 


--- 
#### Leaderless Replication
- No concept of leader / follower
- Every replica is expected to have wholesome data
- A client sends requests to all / some replicas in parallel
Eg: Implementation in Cassandra / DynamoDB
![[Pasted image 20240609130409.png]]

##### Quorum
- Total Nodes (N) = 5
- Read Thresholds (R) = 3 (Min number of nodes that should give read confirmation)
- Write Thresholds (W) = 3 

**Understanding reads and writes:**
1. Read / Write requests are handled at **co-ordinator**
2. Incoming read / write requests are sent to R+/W+ nodes
3. Coordinator waits for R/W confirmations to send a successful confirmation back
4. Else returns error

**Majority Quorum**
- If R+W > N -> ==majority quorum==
- Here - it is expected that one will get updated and ==latest data every time==
- Generally W=R=(N+1)/2 - hence W+R > N


> [!NOTE] Quorums can be defined in different ways as per the application needs
> Eg: 
> - For READ heavy application: R = 2, W = 4, N = 5
>-  For WRITE heavy application: R=4, W=2, N=5

**Updating older values**
1. **Read Repair**
	- Detect stale values when read requests were fired
	- Update newer values to replicas
	- Works well for values that are frequently read
     
2. **Anti-Entropy Process**
	- Background process to check for differences
	- Update missing data
	- May have significant delays
	- Works well for values that are not used frequently



# Sharding
![[Pasted image 20240610080414.png]]

- Way of dividing data among different machines
- Each shard is a DB in itself
- Shards are defined in such a way that each piece belong to one shard
- Efficient way to horizontally scale data
- Allows parallel processing

<mark style="background: #BBFABBA6;">Advantages</mark> 
- Overcomes hardware limits - can scale infinitely
- Optimizes backup and restores 
- Highly efficient in case of globally distributed application
- Can handle higher write throughput

<mark style="background: #FF5582A6;">Disadvantages</mark> 
- Increase in cost of ownership
- Increases operational overhead - need to manage more machines
- Data models dependent on "joins" can become more expensive and not feasible in certain times
- No native support always


## Types of Shards
- **Fair:** Data spread fosters even load distribution
- **Skewed**: Data spread fosters ==hotspots== (Shard with disproportionately high load)

## Sharding Strategies

![[Database 2024-06-10 08-14-29.excalidraw|700]]

1. ==**Random Key Strategy**==
	- Randomly assign any key to any partition
	- Very fast writes (O(1))
	- Terribly slow reads O(N) - go through each shard to search for the key
	  ![[Pasted image 20240610081641.png]]

2. ==**Key Range Strategy**==
	- Pre-allocation key range per partition
	- Can be sensitive to data access partition
	- Can lead to skewed partitioning
	- Eg: Time Series data
	  ![[Pasted image 20240610081812.png]]
3. ==**Hash Partitioning**==
	- Data distribution based on simple hash like (%N)
	- Fosters even distribution of keys
	- ==Range queries== could be costly 
		- Find data for keys in range (1->100) - here hash needs to be calculated for each key and searched
	- Data redistribution in case of scaling up / down could be costly
	  ![[Pasted image 20240610082004.png]]


## Options to consider before sharding
- Purging - removing unimportant data
- Data archival / data tiering
- Logical separation of data

---
# Rebalancing

(Moving data from one node to another within the cluster, so that it leads to fair data distribution)

- Depending on how you configure shards, data can become ==unbalanced==
	- Some shards may have more insertion
	- Some may have large documents / rows
- Leads to too much load on a single shard - Rebalance to fix this

### Expectations while rebalancing:
1. **Minimum data movement**: Fast and will minimize network and disk I/O
2. **Availability during rebalancing**: DB should accept reads and writes while rebalancing
3. **Fair Partitioning**: Post partitioning, load should be shared fairly between nodes in the cluster.

### Rebalancing Strategies

![[Database 2024-06-11 07-40-39.excalidraw|700]]

1. **==Hash Based== (%N)**
	- Total number of nodes in the cluster
	- Partitions can be fair but could grow over time
	- Readjusting N is very costly - will have to move majority of the keys
	- Hence not preferred
	- Eg: Below - if the number of node changes to 5 -> around 75% of original data will have to be reshuffled in this approach
![[Pasted image 20240611074531.png]]

2. ==**Fixed No. of Partitions**==
	- Every node have fixed number of partitions
	- On addition / removal of nodes we move some partition from every node to new node
	- Can be limited by total no. of partitions - Eg: below - we can have max 12 nodes each having one partition

![[Pasted image 20240611075152.png]]


3. ==**Dynamic Partitions**==
	- Similar to fixed no of partition but newer partitions are created within shards upon reaching certain data threshold

![[Pasted image 20240611075559.png]]


# Consistent Hashing

- Also called ==Hash Ring==
- Overcomes drawbacks of hash based rebalancing
- Distributes data in a way that minimizes reorganization when nodes are added / removed 
![[Pasted image 20240611075907.png|400]]

## Handling hotspots:

![[Pasted image 20240611080135.png]]


