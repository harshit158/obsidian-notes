## Data Formats
![[Pasted image 20220509085651.png|600]]


### Row Major vs Column Major formats


![[Pasted image 20220509101753.png]]
- Famous Paradigms:
	- **CSV** -> Row Major | Consecutive elements in a row are stored next to each other in Memory
		- Better, if want to access features for a particular observation
	- **Parque**t -> Column Major
		- Better, if want to access Timestamps for all the observations

- Row-major formats are better when you have to do a ==lot of writes==, whereas 
  Column-major ones are better when you have to do a ==lot of column-based reads==.

- Pandas Dataframe is in Column Major format -> Access items column wise, not row wise

```python
for col in df.columns:
	for item in df[col]:
		pass
```
is faster than 
```python
for i in range(nrows):
	for item in df.iloc[i]:
		pass
```


### Text Vs Binary format
- Text formats (Eg: CSV) take more space than Binary formats (Eg: Parquet)
- Parquet format preferred by AWS S3, as it is faster to unload and consumers less storage


## Data Models
### Relational Model
- Data is organized into relations (table is just a visual representation of a "relation")
- Relation is a collection of tuples
- Both rows and columns in a relation are unordered (they can be shuffled)

![[Pasted image 20220510080335.png]]

- **Normalization** is a technique to reduce data redundancy by separating contents in different tables. Types - 1NF, 2NF, etc

- SQL: ==Declarative language==:  Specify the outputs you want, and the computer figures out the steps needed to get you the queried outputs
  Python: ==Imperative Language==: Specify the steps needed for an action and the computer executes these steps to return the outputs

- Just like SQL, there can be ==Declarative ML== - specify the task and the feature schema - model building will be taken care of by the framework
	- Eg: **Ludwig** by Uber, **H2O AutoML**



### NoSQL
- Two types of Non relational models:
	- **Document Model**
	  The document model targets use cases where data comes in self-contained documents and relationships between one document and another are rare
	  
	- **Graph Model**
	  Targets use cases where relationships between data items are common and important

- Queries that are made possible in one Data model, is very hard in other data models


### Structured Vs Unstructured
- Structured Data adheres to schema
  Unstructured Data doesn't have to
  
- **Data Lake**: 
	- A repository for storing ==unstructured== data
	- Usually used to store RAW data before processing
  **Data Warehouse**: 
	- For ==structured== data
	- Stores data that has been processed and ready to be used

![[Pasted image 20220510083623.png|600]]

