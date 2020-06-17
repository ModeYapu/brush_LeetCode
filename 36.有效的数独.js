/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Map()
    let cols = new Map()
    let boxs = new Map() 
    
    for(let i = 0; i < board.length; i++) {
        rows.set(`rows${i}`, new Map())
        cols.set(`cols${i}`, new Map())
        boxs.set(`boxs${i}`, new Map())
    }
    
    for(let i = 0; i < board.length; i++) {
        
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] == '.') continue
            let boxIndex = (~~(i/3))*3 + ~~(j/3)
            
            let row = rows.get(`rows${i}`)
            let col = cols.get(`cols${j}`)
            let box = boxs.get(`boxs${boxIndex}`)
            
            if(row.has(board[i][j]) || col.has(board[i][j]) || box.has(board[i][j])) {
                return false
            } else {
                row.set(board[i][j], 1)
                col.set(board[i][j], 1)
                box.set(board[i][j], 1)
            }
        }
    }
    return true
};
// @lc code=end
