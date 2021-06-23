![[Pasted image 20210606230001.png]]

==Proposal==
On-device system which consists of various components for GEC, which solves:
- Data privacy
- Runs offline (no need of internet connection)

==Method==
- **Dataset**
	Data is generated to obtain the ==parallel== corpus. 
	Ungrammatical sentences are generated (from correct sentences) as follows (after POS tagging each sentence):
	- ==Delete:==
		A specified POS tag is simply dropped: 
		Eg: "he is a good person" -> "he is good person"  (dropped article)

	- ==Insert==
		A specific word is added at random position
		Eg: "she is running around the house" -> "she is ==a== running around the house"

	- ==Substitute==
		The form of a POS tagged word is changed using predefined word-forms table
		Eg: they are ==going== to school -> they are ==went== to school

	Final training data consists of ==9M samples== (including error and error-free docs)
	
- **System Architecture**:
	Consists of following pipeline:
	![[Pasted image 20210606232514.png]]	
	- ==Spell Checker==:
		- ==Edit-Distance== based system to check for spellings
		- Each word is compared with English vocab (100k english words) stored in [Marisa Trie](https://github.com/pytries/marisa-trie)
		- Also maintain another Trie of 50k words for:
			- Handling capitalization of proper nouns 
			- Censoring abusive words

	- ==DNN Model== 
		Two architectures are explored:
		- Seq-to-Seq architecture (Neural Machine Translation approach)
		![[Pasted image 20210606233837.png]]

		- Sequence Tagging
			Predicts word level edit operation that needs to be done. 
			400 transformations are defined for every time step. These are of 2 types:
			- ==Grammatical==: 
				Eg: *Noun_Singular_Plural* -> changes singular word to its plural form: cat -> cats
			- ==Standard==
				Eg: *Keep, Delete*

		![[Pasted image 20210606233918.png]]

	- ==N-gram Filter==
		Tackles the limitations of DNN model in previous step, which can make false corrections.
		They introduce statistical ==n-gram based language model== filter that calculates ==likelihood== of input vs output sentence 
		from the DNN, and the one with more score is kept

		![[Pasted image 20210606232744.png]]

	- ==Rule Corrector==
	Above steps can't handle rarely occurring errors.
	Hand crafted rules are formed on top of POS tags

![[Pasted image 20210606235846.png]]

![[Pasted image 20210606235237.png]]
