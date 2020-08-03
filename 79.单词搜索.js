/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // 单词中字母全部匹配，说明可以搜索到，返回true
  if (!word.length) {
    return true;
  }

  const key = `${row}-${col}`;
  // 越界、之前访问过、单词首字母和当前元素不相同，返回false
  if (
    row >= board.length ||
    row < 0 ||
    col >= board[0].length ||
    col < 0 ||
    visited[key] ||
    board[row][col] !== word[0]
  ) {
    return false;
  }

  visited[key] = true;
  word = word.slice(1);
  // 下、上、右、左搜索（顺序不重要）
  const success =
    __exist(board, word, row + 1, col, visited) ||
    __exist(board, word, row - 1, col, visited) ||
    __exist(board, word, row, col + 1, visited) ||
    __exist(board, word, row, col - 1, visited);

  // success为false时，就是回溯
  visited[key] = success;
  return success;
};
// @lc code=end
