## Data Formats
![[Pasted image 20220509085651.png|600]]


### Row Major vs Column Major formats


![[Pasted image 20220509101753.png]]
- Famous Paradigms:
	- **CSV** -> Row Major | Consecutive elements in a row are stored next to each other in Memory
		- Better, if want to access features for a particular observation
	- **Parque**t -> Column Major
		- Better, if want to access Timestamps for all the observations

- Row-major formats are better when you have to do a ==lot of writes==, whereas 
  Column-major ones are better when you have to do a ==lot of column-based reads==.

- Pandas Dataframe is in Column Major format -> Access items column wise, not row wise

```python
for col in df.columns:
	for item in df[col]:
		pass
```
is faster than 
```python
for i in range(nrows):
	for item in df.iloc[i]:
		pass
```


### Text Vs Binary format
- Text formats (Eg: CSV) take more space than Binary formats (Eg: Parquet)
- Parquet format preferred by AWS S3, as it is faster to unload and consumers less storage