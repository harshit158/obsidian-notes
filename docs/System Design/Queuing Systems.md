Components:

1. Producer
	1. Service that generates a message
	2. Adds to a broker
	3. Waits until the broker acknolw
	   
2. Broker
	1. Keeps track of connected Producers and Consumers   
	2. Stores messages until message is consumed by consumers or set threshold is passed
	   
3. Consumer
	1. Consumes the message
	2. Provides the acknowledgement that it has processed the message


==Arrival Rate:== This measures how fast new items are coming into the queue.
==Service Rate:== This measures how fast items in the queue are being handled

### Assumptions of Queuing systems:
- Arrivals have ==Poisson== distribution
- Service times have ==Exponential== distribution
- Arrivals and Service times are all independent
### When to use it
- Decoupling heavy weight processing like image processing / sending emails
- Process batch of data
	- If the backend server is overloaded - then the producer can push messages to broker and the server can pick items one by one and process them at it's speed
- Smoothen up spiky workload
	- In case of high number of requests - instead of sending data directly to service - push it to queue so that none of the requests fail and service can process it conveniently


### Issues with queueing systems
- **<mark style="background: #FF5582A6;">Issue1</mark> : Producers are faster than consumers:**
	- Drop some messages if possible
	- Provide larger buffer (increase size of broker)
	- Add more consumers to increase rate of message consumption
	- Apply ==back pressure== : indicate producers to either stop / slow down rate of message generation

- **<mark style="background: #FF5582A6;">Issue2</mark> : Node (Broker) crashes**
	- Persist data for durability guarantee
	- Create a high availability architecture to reduce downtime

- <mark style="background: #FF5582A6;">Issue3</mark> : **Head of the line blocking**
	  If the next message always causes error - it keeps on going back to queue
		![[Pasted image 20240529210530.png]]
	- Configure limited number of **fixed retries**
	- Configure ==Dead Letter Queue== (DLQ) - the failed messages are put into this different queue


### Types of Message Brokers

- **Queue**
	- Each message is delivered to ==one consumer==
	- Consumers can be added to parallelize processing
	- Eg: SQS (AWS), Queues in Kafka
	- ![[Pasted image 20240529211057.png|500]]

- **Topics**
	- Similar to message broadcasting
	- Every message is delivered to each consumer
	![[Pasted image 20240529211029.png|500]]
	- Eg: SNS (AWS), Topics in Kafka
	  (Max size of SNS message: 256 KB)
	  SNS matches topic to a list of subscribers who have subscribed to that topic and delivers the message to each of those subscribers
	![[Pasted image 20240529212720.png|500]]