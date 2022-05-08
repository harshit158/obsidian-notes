Knowledge graph embedding Models:
- TransE
- TransR
- RotatE

The main components of generating a Knowledge Graph are:
ref: [Stanford tutorial](https://web.stanford.edu/class/cs520/2020/notes/How_To_Create_A_Knowledge_Graph_From_Text.html)
- ==Entities== extraction -> these are the nodes in a KG
	- Eg: Nouns (Subject and Object) in a sentence
- ==Relations== extraction -> these are generally edges in a KG
	- Eg: Verb in a sentence
- ==Entity resolution== -> to handle multiple mentions of same entity (node)

**Approaches for extracting Relations:**
- Using Syntactic Patterns
	- [[Hearst Patterns]] 
- Using Supervised ML

Ways to build a knowledge graph from text:
 - ==SVO triplets== extraction from text -> S and O are entities (node) and V is the relation (edge)
[[RDF]] is used to exchange this data.