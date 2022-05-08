Ref:
https://github.com/allenai/naacl2021-longdoc-tutorial

- Will be targeting context with >500-1000 tokens
- ==Limitations== of existing approaches:
	- RNN/LSTM -> sequential input, slow for long sequences
	- [Self attention cost in Transformers](Transformers#^ce649a)
	- Pre-trained LMs limited to 512 tokens (eg: BERT)

- ==Solutions==:
	- Hierarchial modelling of text
	- Graph based 
	- Graph with external knowledge
	- Transformers based (https://github.com/allenai/naacl2021-longdoc-tutorial/blob/main/slides/part3-long-sequence-transformers.pdf)
![[Pasted image 20211004232631.png|800]]