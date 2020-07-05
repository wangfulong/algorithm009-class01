/*
 * @lc app=leetcode id=547 lang=javascript
 *
 * [547] Friend Circles
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
// var findCircleNum = function(M) {
//   let visited = new Set();
//   let count = 0;
//   for (let i = 0; i < M.length; i++) {
//     if (!visited.has(i)) {
//       dfs(M, visited, i);
//       count++;
//     }
//   }
//   return count;
// };

// function dfs(M, visited, i) {
//   for (let j = 0; j < M.length; j++) {
//     if (M[i][j] == 1 && !visited.has(j)) {
//       visited.add(j);
//       dfs(M, visited, j);
//     }
//   }
// }





var findCircleNum = function(M) {
  let n = M.length;
  let uf = new UnionFind(n);
  for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
          if (M[i][j] == 1) uf.union(i, j);
      }
  }
  return uf.counter();
}

class UnionFind {
  constructor(n) {
      this.count = n;
      this.parent = [];
      for (let i = 0; i < n; i++) {
          this.parent[i] = i;
      }
  }

  find(p) {
      let parent = this.parent;
      while(parent[p] != p) {
          // 进行路径压缩
          parent[p] = parent[parent[p]];
          p = parent[p];
      }
      return p;
  }

  union(p, q) {
      const rootP = this.find(p);
      const rootQ = this.find(q);
      if (rootP == rootQ) return;
      this.parent[rootQ] = rootP;
      this.count--;
  }

  counter() {
      return this.count;
  }
}
// @lc code=end

