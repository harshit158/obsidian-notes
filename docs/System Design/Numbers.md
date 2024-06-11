## 2's power
```
Power    Approx Value (Bytes)       Bytes
-----------------------------------------
10                 1 thousand        1 KB
16                65 thousand       64 KB
20                  1 million        1 MB
30                  1 billion        1 GB
32                  4 billion        4 GB
40                 1 trillion        1 TB
50              1 quadrillion        1 PB
```

### Handy numbers for requests calculations.

```
Numbers for requests calculations
---------------------------------
2.5 million seconds per month

1 million reqs/month   -->  .4 reqs/sec
2.6 million reqs/month -->   1 reqs/sec
5 million reqs/month   -->   2 reqs/sec
10 million reqs/month  -->   4 reqs/sec
100 million reqs/month -->  40 reqs/sec
1 billion reqs/month   --> 400 reqs/sec
```


## Objects
```
- Single Char: 2 bytes
- int: 4 bytes
- Long / Double / Float: 8 bytes
- File: 100 KB
- Web Page: 100 KB (not including images)
- Picture: 200 KB
- Short Posted Video: 2MB
- Steaming Video: 50MB per minute
- Long/Lat: 8B
```

## Number of requests
https://matthewdbill.medium.com/back-of-envelope-calculations-cheat-sheet-d6758d276b05

![[Pasted image 20240422174043.png]]

- x **KB** * y **Million** users = xy **GB** (Ex: 1 KB data (1000 bytes) * 1 million user (1,000,000) = 1,000,000,000 = 1 GB of storage)
- x **MB** * y **Million** users = xy **TB**


### Time approximations
- Count of days in 5 year
- Seconds in a day: 86400 ==> 100,000

### Storage Units

1. **Kilobyte (KB)**: 1 KB = 1024 bytes.
2. **Megabyte (MB)**: 1 MB = 1024 KB.
3. **Gigabyte (GB)**: 1 GB = 1024 MB.
4. **Terabyte (TB)**: 1 TB = 1024 GB.
5. **Petabyte (PB)**: 1 PB = 1024 TB.
6. **Exabyte (EB)**: 1 EB = 1024 PB.
7. **Zettabyte (ZB)**: 1 ZB = 1024 EB.
8. **Yottabyte (YB)**: 1 YB = 1024 ZB