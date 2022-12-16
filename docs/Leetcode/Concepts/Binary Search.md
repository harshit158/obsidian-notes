
## Edge cases
- 1 element
- 2 elements


**Template 1:**

```python
def binarySearch(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    if len(nums) == 0:
        return -1

    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    # End Condition: left > right
    return -1
```
This is the ONE I USE.

**Template 2:**
```python
def binarySearch(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    if len(nums) == 0:
        return -1

    left, right = 0, len(nums)
    while left < right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid

    # Post-processing:
    # End Condition: left == right
    if left != len(nums) and nums[left] == target:
        return left
    return -1
```

**Template 3:**
```python
def binarySearch(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    if len(nums) == 0:
        return -1

    left, right = 0, len(nums) - 1
    while left + 1 < right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid
        else:
            right = mid

    # Post-processing:
    # End Condition: left + 1 == right
    if nums[left] == target: return left
    if nums[right] == target: return right
    return -1
```



### Python in-built module
```python
import bisect
A = [1,2,3,6,7,7,10]
	#0,1,2,3,4,5,6

(1) bisect.bisect_left
		# Returns index of element if it exists
		bisect.bisect_left(A, 6) -> 3
		# If there are multiple occurence, returns the FIRST occurence
		bisect.bisect_left(A, 7) -> 4
		# If target is not found
		bisect.bisect_left(A, 8) -> 6

(2) bisect.bisect_right
		# Returns index which comes just after that of target element
		bisect.bisect_right(A, 6) -> 4
		# If there are multiple occurence, returns the LAST occurence
		bisect.bisect_right(A, 7) -> 6
		# If target is not found (same as bisect_left)
		bisect.bisect_right(A, 8) -> 6

(3) bisect.bisect
	# same as bisect right
```

^0317e0

