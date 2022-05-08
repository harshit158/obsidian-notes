https://www.coursera.org/learn/machine-learning-data-lifecycle-in-production/home/week/3

## Data Journey and Data Storage
### Data Journey
Environment Versioning: ==Docker, Terraform==
Data Version: ==DVC==, ==Git-LFS==

### Intro to ML Metadata
🥊 ML Metadata (*pip install ml-metadata*) #lib:
- Tracks metadata flowing between different components in pipeline
- Supports multiple storage backends
- Benefits:
- ![[Pasted image 20211119094952.png|600]]

🥊 **Metadata: TFX Component architecture** 

![[Pasted image 20211119093658.png|700]]

🥊 ML Metadata terminology
![[Pasted image 20211119094439.png|500]]

🥊 Metadata stored
![[Pasted image 20211119094528.png|600]]

🥊 Inside Metadata Store
![[Pasted image 20211122095509.png|800]]

  
🥊 Every run of a production ML pipeline generates metadata about its components, their executions (e.g. training runs), and the resulting artifacts (e.g. trained models). **ML metadata (MLMD)** registers this information in a database called the **Metadata Store**. This metadata store can be stored on backend database such as Local DB, SQL, MySQL

---
**==Lab (Walkthrough of ML Metadata):==** https://www.coursera.org/learn/machine-learning-data-lifecycle-in-production/ungradedLab/NdqsU/ml-metadata/lab?path=%2Fnotebooks%2FC2_W3_Lab_1_MLMetadata.ipynb%23Define-ML-Metadata%27s-Storage-Database 


## Evolving Data
### Schema Development
![[Pasted image 20211122103031.png|600]]

🥊Evolving data leads to schema changes over time. Tracking schema helps in:
- Identifying data drift / data skew problems
- Finding Anomalies
Sometimes, we have to go back and change the original schema to acccomodate for new data

![[Pasted image 20211122103701.png|600]]

🥊Reliability during data evolution:
Platform needs to be resilient to disruptions from:

![[Pasted image 20211122103901.png|600]]

🥊Scalability during data evolution:
Platform must scale during:
![[Pasted image 20211122104221.png|600]]

🥊Advantages of platform designed with these principles:
![[Pasted image 20211122104412.png|600]]

🥊 Schema inspection can be useful:
![[Pasted image 20211122104532.png|600]]

### Schema environments
- We need to have multiple versions of schema to accomodate evolving data:
![[Pasted image 20211122105323.png|600]]

- The SERVING and TRAINING schemas might be different
	- For eg: The target column might not be present during SERVING
	- Hence maintain different schemas for different environments

---
**==Lab (Iterative Schema with TFX and ML Metadata==**: https://www.coursera.org/learn/machine-learning-data-lifecycle-in-production/ungradedLab/4MQJR/iterative-schema/lab

---

## Enterprise Data Storage
### Feature Stores
- Many modelling problems use identical or similar features
![[Pasted image 20211122130843.png|600]]

- Key aspects of Feature Store:
	- Managing feature data from a single person to large enterprise
	- Scalable and performant access to feature data in training and serving
	- Provide consistent and point-in-time correct access to feature data
	- Enable discovery, documentation, and insights into your features

#### Data Warehouse:
![[Pasted image 20211122133502.png|600]]

🥊 Features of Data Warehouse
 - **subject oriented**: The data stored revolves around a certain topic
 - Integrated: The data is collected from different sources such as relational databases, files etc. It maintains a timestamp to keep track of when it was generated
 - Non-volatile: Previous data is not erased when new data is added
 - Time Variant: Can fetch data based on time that can be used to see how the data has evolved
 
![[Pasted image 20211122133953.png|600]]

🥊Advantages:
![[Pasted image 20211122134111.png|600]]

🥊Differences between **Data Warehouse** and **Databases**:
![[Pasted image 20211122134252.png|600]]

#### Data Lakes
A data lake is a system or repository of data stored in its natural and raw format, which is usually in the form of blobs or files. 

![[Pasted image 20211122134525.png|600]]

🥊Differences between **Data Warehouse** and **Data Lakes**:
![[Pasted image 20211122135158.png|600]]

FEAST is an  example of feature store

---
**==Assignment  (Data pipeline components for Production ML)==: https://www.coursera.org/learn/machine-learning-data-lifecycle-in-production/programming/U5mtv/data-pipeline-components-for-production-ml/lab?path=%2Fnotebooks%2FC2W3_Assignment.ipynb

---