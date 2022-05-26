- There are two parts of a model that you can export:
	- the model definition
	- the model’s parameter values

## Batch Prediction and Online Prediction
- 3 main modes of predictions:
	(1) ==Batch== prediction
	  -> Uses only **batch features**
	  
	  ![[Pasted image 20220524211849.png]]
	  
	(2) ==Online== prediction
	  -> Uses only **batch features** (eg: Embeddings)
	  
	  ![[Pasted image 20220524211952.png]]
	  
	  
	(3) ==Online== prediction / Streaming prediction
	  -> Uses **both batch and streaming** features
	  
	  ![[Pasted image 20220524212222.png]]
	  

- Batch Prediction -> known as -> ==Synchronous== prediction
  Online Prediction -> known as -> ==Asynchronous== prediction

- Streaming features -> computed from streaming data
  Online features -> more general / any feature used for online prediction


- Batch prediction VS Online prediction
  ![[Pasted image 20220524212407.png]]


### From Batch Prediction to Online Prediction
- Batch prediction -> Good when you want to generate a lot of predictions and don’t need the results immediately. 
	- Don’t have to use all the predictions generated. 
	- For example, you can make predictions for all customers on how likely they are to buy a new product, and reach out to the top 10%.

- Problem Batch prediction -> Makes model less responsive to users’ change preferences
  Eg: Netflix doesn't change recommendations until next batch of recommendations is generated. 

- Batch prediction is preferred when Online prediction isn't **fast** enough or **cheap** enough

- Components required to overcome latency challenge of online prediction:
	- Real Time pipeline -> Extract streaming features, input them in a model, return prediction in real time
	- Model that can generate predictions at a speed acceptable to its end users


### Unifying Batch pipeline and Streaming pipeline

- Common source of bugs is having two separate pipelines for inference and training
![[Pasted image 20220525200655.png]]

- A better way will be to unify both stages like the one below
![[Pasted image 20220525200533.png]]