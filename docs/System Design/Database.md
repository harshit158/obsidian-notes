Types:
1. Relational DB (**RDBMS/SQL Database**)
2. Non-Relational DB (**NoSQL Database**)
   4 categories:
   - Key-value Stores
   - Graph Stores
   - Column Stores
   - Document Stores

## Non-Relational DB
- Joins are not supported
- Advantageous if:
	- Application requires ==low-latency==
	- Data is ==unstructured==
	- You only need to ==serialize/deserialize== data
	- Need to ==store massive amount== of data


## Database Replication
- ==Master== DB only supports ==write operations==
- ==Slave== DB supports ==read operations==
- Most applications require higher ratio of reads to writes, hence more number of Slave DBs than Master DBs

> [!info] Writes are 40 times more expensive than reads

