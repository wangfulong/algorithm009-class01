/*
 * @lc app=leetcode id=874 lang=javascript
 *
 * [874] Walking Robot Simulation
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let hashObstacle = {};
  for (let i = 0; i < obstacles.length; i++) {
    hashObstacle[obstacles[i][0] + ' ' + obstacles[i][1]] = true;
  }
  let x = 0, y = 0, max = 0, direction = 0;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] == -2) {
      direction = (direction + 3) % 4;
    } else if (commands[i] == -1) {
      direction = (direction + 1) % 4;
    } else {
      while (commands[i]--) {
        let nextX = x + directions[direction][0];
        let nextY = y + directions[direction][1];
        if (hashObstacle[nextX + ' ' + nextY]) break;
        x = nextX;
        y = nextY;
      }
      max = Math.max(max, x * x + y * y);
    }
  }
  return max;
};
// @lc code=end

