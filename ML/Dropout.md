<iframe 
		width=550
		height=300
		src="https://www.youtube.com/watch?v=D8PJAL-MZv8">
</iframe>

Ref: [stackoverflow answer](https://stackoverflow.com/questions/54109617/implementing-dropout-from-scratch)

2 types of Dropout Implementation:
1. ==Direct Dropout==
![](https://i.stack.imgur.com/G8WvT.gif)

![](https://i.stack.imgur.com/OnN6y.gif)

3. ==Inverted Dropout== (most commonly used in frameworks)
Scaling activation function by (1-p) (if p is the dropout probability)

![enter image description here](https://i.stack.imgur.com/OKh1Y.gif)

```python
import numpy as np

pKeep = 0.8
weights = np.ones([1, 5])
binary_value = np.random.rand(weights.shape[0], weights.shape[1]) < pKeep
res = np.multiply(weights, binary_value)
res /= pKeep  # this line is called inverted dropout technique
print(res)
```