- "%%writefile"
Can write the contents of a jupyter notebook cell to an external file

- "%%capture"
Captures and doesn't print the output of a cell 

- Arguments in a deep learning project can be in a class

```python
class args:
    model = "../input/anferico-bert-for-patents/"
    max_len = 32
    accumulation_steps = 1
    batch_size = 64
    epochs = 5
    learning_rate = 2e-5

args.max_len
```

- Getting the filename without the extension, given the full path 
```python
from pathlib import Path
Path(filename).stem  => returns filename without extension
Path(filename).name  => returns filename WITH extension
```

- Pandas -> df.==query==("A > 2 or F > 4")
  Use the conditions inside a string. Much easier to use

- Get absolute paths 
current_module_path = os.path.abspath(__file__)
parent_directory = os.path.abspath(os.path.join(current_module_path, "../../"))

### For working with python paths
- https://towardsdatascience.com/simple-trick-to-work-with-relative-paths-in-python-c072cdc9acb9