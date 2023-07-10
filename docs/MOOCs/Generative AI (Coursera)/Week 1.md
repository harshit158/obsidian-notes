## Relative size of Base Models
![[Pasted image 20230629213032.png]]


## In-Context Learning
- Zero short
- One-shot
- Few-shot

![[Pasted image 20230705014312.png]]

- ==Context window== is a constraint for passing the context to the model while giving examples for few shots

## Generative configuration - inference parameters
![[Pasted image 20230705020408.png]]
- Parameters divided into two categories:
    - Amount of generated text
        - max_len
    - Creativity in generated text
        - top_p
        - top_k
        - temperature

- The platform is stable now - it used to break earlier 




## Pre-training large language models
![[Pasted image 20230709115431.png]]

## Efficient multi-GPU compute strategies
Strategies depend on whether LLM can fit on a single GPU or not:
- ==Can fit==
	- Distributed Data Parallel (==DDP==)
	- One full copy of model and training parameters are stored on each GPU
	  ![[Pasted image 20230709181433.png|700]]
	![[Pasted image 20230709181721.png]]


- ==Can't fit==
	- Fully Sharded Data Parallel (==FSDP==)
		- Helps in cases where LLM can't be fit on a single GPU
		- The stored data is distributed across different GPUs
		- Unlike DDP, weights are synced up before each forward pass and backward pass
	![[Pasted image 20230709182022.png]]

## Scaling Laws and Compute Optimal Models
- Chinchilla paper commented that:
	- LLMs are in general ==over parametrized== and ==under trained==
	- Smaller models could perform as well if given enough data