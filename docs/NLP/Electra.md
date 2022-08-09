## Electra
==Efficiently learning an Encoder that Classifies Token Replacements Accurately==

---

🔥  **Difference** between ==pre-training objectives== of BERT and Electra ?**
- BERT is trained using ==MLM== and ==NSP==, whereas
Electra is trained only using ==RTD== (Replaced Token Detection)

🔥 **RTD (Replaced Token Detection) ?**
Similar to MLM but instead of masking a token with the **\[MASK\]** token, here we ==replace== a token with a different token and train the model to **classify** whether the given **tokens are actual or replaced tokens**.

🔥 **Training Electra**
Contains 2 components:
- <mark style="background: #BBFABBA6;">Generator</mark> (BERT)
	- Used  for generating replacements, which is the training data for discriminator
	- In other words, does the MLM part
	
- <mark style="background: #BBFABBA6;">Discriminator</mark> 
	- Classifies if the token is replaced or is original. This becomes the Electra once the training is done
![[BERT Variants 2022-08-09 10-57-27.excalidraw|800]]
![[Electra 2022-08-09 14-59-32.excalidraw|800]]


> [!tip] **Advantages of ELECTRA when compared to BERT** ?
> 
> Problem (1) with MLM:
> - ==[MASK]==  token appears while pre-training but doesn't occur while fine-tuning
> - This creates a MISMATCH between pre-training and fine-tuning
> - Solved in RTD since, we don't use any masking 
> 
> Problem (2) with MLM:
> - There are 15% tokens marked as [Mask] in MLM, hence ==training signal to model is only those 15%== since it predicts only those masked tokens
> - In ELECTRA, ==training signal is all tokens==, since it classifies each word to be replaced or original