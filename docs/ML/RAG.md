![[Pasted image 20240407170333.png]] 

Original META post (https://ai.meta.com/blog/retrieval-augmented-generation-streamlining-the-creation-of-intelligent-natural-language-processing-models/)
- RAG has two sources of knowledge
	- ==Parametric | Closed book== - (the one that seq2seq models store in their parameters)
	- ==Non-parametric | Open Book== (the one that RAG gets from retrieved docs from a corpus)

RAG VS Fine-tuning
- https://www.rungalileo.io/blog/optimizing-llm-performance-rag-vs-finetune-vs-both

### Retrieval Methods
- Similarity Search
- **[[MMR]] - Maximum Marginal Relevance**
	- Solves redundancy among the retrieved documents
- Multi-query retrieval
- **Contextual Compression**
	- If many docs are retrieved and docs are long - it's not possible to fit everything into context while passing to LLM context
- Multi-vector retrieval
- Parent Document retrieval
- **Self-query**
	- Query sometimes contains metadata that can be additionally applied as a filter to get more relevant results
- Time-weighted retrieval

- Good ref for overall stats: [LangChain State of AI 2023](https://blog.langchain.dev/langchain-state-of-ai-2023/)

**Tips to handle Short Context Windows**:

![[Pasted image 20240407230608.png]]