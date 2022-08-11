Title:
[Catching Unusual Traffic Behavior using TF–IDF-based Port Access Statistics Analysis](https://arxiv.org/pdf/2111.06080.pdf)


Notes:
- Use TF-IDF to distinguish interesting port-access activities from other activities
- Total ports - 65k (can be thought of as vocab)
- TF-IDF ==analogy==:
	- Port access -> Word
	- Number of port accesses -> Number of occurrences of Word
	- Port access statistics for one day -> document
	- Number of documents -> number of days they collected data (did it for ==30 days==)
- Inferences:
	- if considerable access to a specific port -> ==tf-value increases==
	- if the port occured on many different days -> ==idf becomes smaller==
- Hence a document can contain ==max 65k== different words

**Noise Filtering**
- Almost all ports occur everyday -> IDF values will be same for all ports
- Keep a threshold -> if a port occurs less than that -> it is considered absent
	- 📍  What about anomalous logs -> it will appear less and get filtered out
- Noisy port numbers are similar to the idea of "stop words" -> their IDF doesn't make sense