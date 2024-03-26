## RLHF (Reinforcement Learning from Human Feedback)

- To align model's responses to human values - ==HHH== :
	- Helpful
	- Honest
	- Harmless
- ![[Pasted image 20240110212943.png]]

- In RLHF, human labelers score a dataset of completions by the original model based on alignment criteria like helpfulness, harmlessness, and honesty. This dataset is used to ==train the reward model== that scores the model completions during the RLHF process.