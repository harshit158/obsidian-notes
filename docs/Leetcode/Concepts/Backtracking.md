Ref:
https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/

Backtracking Template:

```python
def backtrack(candidate):
    if find_solution(candidate):
        output(candidate)
        return
    
    # iterate all possible candidates.
    for next_candidate in list_of_candidates:
        if is_valid(next_candidate):
            # try this partial candidate solution
            place(next_candidate)
            # given the candidate, explore further.
            backtrack(next_candidate)
            # backtrack
            remove(next_candidate)
```

Generally 4 elements in a Backtracking function:
- **nums**: The original array which we got as an input
- **result**: Generally the result array which contains all the solutions 
- **idx** **/** **visited / openN;closedN**: Some identifier which tells about the current index in the nums that is getting processed
- **cur**: Which contains the partial solution thus far


Examples:
- [[22. Generate Parentheses]]
- [[78. Subsets]]
- [[79. Word Search]]
- [[797. All Paths From Source to Target]]
- [[17. Letter Combinations of a Phone Number]]
- [[46. Permutations]]