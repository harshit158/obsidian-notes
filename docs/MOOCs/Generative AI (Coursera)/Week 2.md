### Fine-tuning
![[Pasted image 20230710234214.png]]


## Instruction Fine tuning
![[Pasted image 20230718234234.png]]


## Training data for instruction fine-tuning
- obtained using "prompt instruction templates"
![[Pasted image 20230719002746.png]]

![[Pasted image 20230724232913.png]]


## Catastrophic forgetting
- Results because of full fine-tuning
- It reduces its ability to perform other tasks

**How to avoid it ?**
- Fine tune on **multiple tasks** at the same time
- Use ==PEFT== (Parameter efficient fine tuning)  -> since this doesn't change the parameters of original model and adds only task specific small number of parameters


## Multi-task fine tuning
![[Pasted image 20230724233656.png]]
- Cons: Requires many examples of each task


## Flan 
- Fine Tune Language Net -> refers to multi-task trained version of the base model
- Eg: Flan-T5 and Flan-Palm

![[Pasted image 20230724234229.png]]


To generalise the models to various types of instructions of ==SAME task==, different templates of the same prompt are used:
![[Pasted image 20230724234349.png]]



## PEFT (Parameter Efficient Fine Tuning)

![[Pasted image 20230728145429.png]]

![[Pasted image 20230728145557.png]]


## PEFT 

![[Pasted image 20230728145625.png]]


![[Pasted image 20230728145848.png]]


![[Pasted image 20230728150324.png]]
- Since most of the LLM weights are in the self attention layers, LoRA is applied mainly to the self-attention layers
- There is a tradeoff between compute  required (rank size) and accuracy

- If there are different tasks for which fine tuning needs to be done, train LoRA parameters differently for each task
![[Pasted image 20230728151117.png]]

## Soft Prompt
![[Pasted image 20230728153838.png]]

![[Pasted image 20230728154009.png]]

![[Pasted image 20230728154055.png]]
- Same LLM works for different tasks - just add appropriate task specific tokens and it will work