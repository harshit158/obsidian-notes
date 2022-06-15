- Systems use ==32 bits== to represent information (==single precision floating point==)
- Instead use ==16 bits (half precision)== 



![[Quantization 2022-06-15 12-57-16.excalidraw|700]]
- **Advantages:**
	- Allows to Increase batch size
	- Less precision speeds up computation, which further reduces training time and inference latency.

- **Disadvantages:**
	- Can represent a smaller range of values
	- Leads to rounding errors that can lead to big performance changes
	- Leads to under/over-flow and rendering it to 0


- **Quantization can happen**:
	- ==During Training== (Quantization aware training) -> models are trained in lower precision
		- Larger models on same hardware
	- ==After Training== -> models trained in single-precision-floating-point and later quantized for inference