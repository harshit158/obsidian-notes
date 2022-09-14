[Link](https://drive.google.com/file/d/1-tDwRjPcmWm62j7k24fuGnxxZevIyJpP/view?usp=sharing)

- **What is Self Supervised Learning**
	- Labels are automatically generated based on 
		- data attributes and 
		- definition of pre-training tasks
	- Loss is defined as:
$$L_{SSL} = \lambda_1L_{PT-1} + \lambda_2L_{PT-2} + ... +\lambda_mL_{PT-m}$$
where $L_{PT-K}$ represents loss functions of different pre-training tasks

- There can be multiple pre-training tasks in a model - for eg: BERT has 2 pre-training tasks


- **Types of Self Supervised Learning**
	- ==Generative SSL== : Allows model to learn by Decoding the encoded input. Eg:
		- <mark style="background: #BBFABBA6;">Autoregressive</mark> LM (GPT) : Generating Token based on past context
		- <mark style="background: #BBFABBA6;">Autoencoding</mark> LM (MLM in BERT) : Generating token based on unmasked tokens (bidirectional)
		- <mark style="background: #BBFABBA6;">Hybrid</mark> LM : XLNet
		
	- ==Contrastive SSL== : Learns by Comparing
		- NSP (Next Sentence Prediction)

	- ==Adversarial SSL==: Learns by identifying whether tokens in input sentence are replaced or shuffled or randomly substituted.
		- RTD (Replaced Token Detection) in ELECTRA
		- STD (Shuffled Token Detection)
		- RTS (Random Token Substitution)
		
>[!tip] Tip
>Pre-training and then fine tuning has become a common norm

- **Pre-training Steps**
	- Prepare training corpus
	- Generate Vocab
	- ==Design Pretraining Tasks==
		- Causal Language Modelling (CLM)
		- Masked Language Modelling (MLM)
		- Replaced token Detection (RTD)
		- Shuffled Token Detection (STD)
		- Random Token Substitution (RTS)
		- Swapped Language Modelling (SLM)
		- Translation Language Modelling (TLM)
		- Alternate Language Modelling (ALM)
		- Sentence Boundary Objective (SBO)
		- Next Sentence Prediction (NSP)
		- Sentence Order Prediction (SOP)
		- Sequence-to-Sequence Prediction (Seq2Seq LM)
		- Denoising Auto Encoder (DAE)

	- ==Choose Pre-training method==
	  ![[Pasted image 20220824152121.png]]
	- Choose Training Dynamics


- **Embeddings**
  Based on whether they represent the input data or provide additional information to the model
  Types:
	- **Main**: Embeddings about the data itself
	- **Auxiliary**: 
		- Provides additional information to the model
		- Each has its own purpose

![[Pasted image 20220826004242.png]]


Conventional NLP + Quantum 
What is the objective of this branch of NLP ? Is it superior in terms of speed, accuracy, better text understanding, memory requirements .. etc ?
Are these models / approaches already being used in production ?