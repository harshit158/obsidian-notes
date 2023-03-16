# Approaches
1. Top Down with Memoization
	- The one without memoization is expensive (typical recursion)
2. Bottom Up with Tabulation

Tricks:
- Whenever you see a question that asks for the maximum or minimum of something, consider Dynamic Programming as a possibility

Steps:
1.  Start with the recursive backtracking solution
2.  Optimize by using a memoization table (top-down dynamic programming)
3.  Remove the need for recursion (bottom-up dynamic programming)
   This can either start from dp[0] or dp[-1]
   Eg: [this](https://leetcode.com/problems/jump-game/solution/#:~:text=Approach%203%3A%20Dynamic%20Programming%20Bottom%2Dup) starts from reverse direction
4.  Apply final tricks to reduce the time / memory complexity

# Patterns
[Grokking Dynamic Programming Patterns for Coding Interviews](https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews/m2G1pAq0OO0?aid=5082902844932096&utm_source=google&utm_medium=cpc&utm_campaign=bid_manipulation&utm_content=dynamic&utm_term=&utm_campaign=%5BCourse%5D+Bit+Manipulation&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=12577945673&hsa_grp=120129464112&hsa_ad=507682162072&hsa_src=g&hsa_tgt=aud-597782228546:dsa-1265146601474&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw5auGBhDEARIsAFyNm9EXZjLHUQ0msNZfgkvmJBFdxMv0M3NgwzY-q_KS_S8dkxq7iEoZss4aAgnoEALw_wcB#1-overlapping-subproblems)

[Leetcode Explore Card](https://leetcode.com/explore/featured/card/dynamic-programming/)