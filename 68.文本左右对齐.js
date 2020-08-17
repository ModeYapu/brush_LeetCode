/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const appendLine = (words, maxWidth, res, start) => {
    if (start >= words.length) {
      return res;
    }
    // 存储本行的单词
    let rowArr = [words[start]],
      // 记录当前的单词以及单词间至少一个空格的总长度。
      count = words[start].length,
      i = start + 1;
    // i < words.length 且 count 加上最新的单词长度小于 maxWidth
    while (i < words.length && count + words[i].length < maxWidth) {
      // 记录单词及单个空格的长度
      count += words[i].length + 1;
      rowArr.push(words[i]);
      i++;
    }

    let rowStr = "";
    if (i < words.length) {
      // 总共的空格数
      let space = maxWidth - count + rowArr.length - 1;
      // 每一个单词间的空格数
      let eachSpace = parseInt(space / (rowArr.length - 1));
      // 多余的空格数
      let extSpace = space % (rowArr.length - 1);
      for (let j = 0; j < rowArr.length; j++) {
        rowStr += rowArr[j];
        if (j !== rowArr.length - 1) {
          let space = eachSpace;
          // 多余的空格依次填充于前面的单词之间
          if (extSpace > 0) {
            space += 1;
            extSpace--;
          }
          while (space-- > 0) {
            rowStr += " ";
          }
        }
      }
    } else {
      // 若为最后一行，单词间仅有一个空格。
      for (let j = 0; j < rowArr.length; j++) {
        if (j < rowArr.length - 1) {
          rowStr += rowArr[j] + " ";
        } else {
          rowStr += rowArr[j];
        }
      }
    }
    // 填充空格于单行字符串末尾，处理最后一行以及单行只有一个单词的情况。
    while (rowStr.length < maxWidth) {
      rowStr += " ";
    }

    res.push(rowStr);
    return appendLine(words, maxWidth, res, i);
  };

  return appendLine(words, maxWidth, [], 0);
};
// @lc code=end
