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
![[Pasted image 20220525200533.png|right-wrap|center]]



## Model Compression
- 3 approaches to reduce inference latency:
	- Make it do inference faster
	- Make the model smaller
	- Make the hardware its deployed on run faster


![[C7 - Model Deployment and Prediction Service 2022-06-03 11.53.57.excalidraw|900| center]]

1. [[Low-Rank Factorization]]
2. [[Knowledge Distillation]]
3. [[Pruning]]
4. [[Quantization]]


## ML on cloud and on Edge
🥊 Advantages on Edge deployment:
- Handles sensitive data
- High stability since doesn't need internet connection


### Compiling and Optimizing Models for Edge Devices
🥊 Different hardware backends have different compute primitives:
![[Pasted image 20220629091908.png]] 

🥊 Adapting framework (pytorch, tf) for every type of backend (cpu, gpu, tpu) is intensive, hence ==Intermediate Representation (IR)==   ("middleman")
- From the original code for a model, compilers generate a series of high- and low-level
  IRs before generating the code native to a hardware backend so that it can run on that hardware backend
  ![[Pasted image 20220629092514.png]]
- This is ==lowering== - “lower” your high-level framework code into low-level hardware-native code

#### Model Optimization
- **Performance often slows down** because generated machine code might not be efficient. 
- The speed up can be done at the compiling stage by the compilers. For eg: They can look at the operators in the computation graph - convolutions / loops / cross-entropy 
- Two ways to optimize ML models: 
	- ==Local==:
		- ==**Vectorization**==
			- Given a loop or a nested loop, instead of executing it one item at a time, execute multiple elements contiguous in memory at the same time to reduce latency caused by data I/O.
			  
		- **==Parallelization==**
			- Given an input array (or _n_-dimensional array), divide it into different, independent work chunks, and do the operation on each chunk individually.
			  
		- **==Loop Tiling==**
			- Change the data accessing order in a loop to leverage **hardware’s memory layout and cache**. This kind of optimization is hardware dependent. A good access pattern on CPUs is not a good access pattern on GPUs.
			  
		- ==**Operator Fusion**==
			- Fuse multiple operators into one to avoid redundant memory access. For eg: Combine everything in one for loop instead of doing multiple passes over the array
 
			![[Pasted image 20220630162046.png]]
			

	- ==Global==
		- Optimize the graph itself: Horizontal and Vertical fusing different components of the graph

![[Pasted image 20220630162206.png]]


#### ML for optimization
- Idea is to use ML to identify which parts of the graph can be fused to increase the speed. Some ML powered compilers are: 
	- ==cuDNN autotune== : Only works for convolution operators
	- ==autoTVM== :  (more general solution)
		  1.  It first breaks your computation graph into subgraphs.
		  2. It predicts how big each subgraph is.
		  3. It allocates time to search for the best possible path for each subgraph.
		  4. It stitches the best possible way to run each subgraph together to execute the entire graph.

### ML in Browsers
- Two options to run ML in browsers:
	- Using ==Javascript== itself - Tensorflow.js, brain.js
	- Using ==WebAssembly (WASM)== - open standard that allows to run executable programs in browsers. 
		  - Build ML models (Tf, torch) and then compile it to WASM. This gives executable file that you can just use with JS.
		  - WASM (is faster than JS) but still slower than native codes on edge devices




## Summary
Trend with increasing power of hardwares
![[Pasted image 20220630170116.png]]