(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{464:function(n,t,e){"use strict";e.r(t);var l=e(12),i=Object(l.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"_117-填充每个节点的下一个右侧节点指针-ii"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_117-填充每个节点的下一个右侧节点指针-ii"}},[n._v("#")]),n._v(" 117. 填充每个节点的下一个右侧节点指针 II")]),n._v(" "),e("p",[n._v("标签（空格分隔）： 广度优先")]),n._v(" "),e("hr"),n._v(" "),e("p",[n._v("给定一个二叉树\nstruct Node {\nint val;\nNode *left;\nNode *right;\nNode *next;\n}\n填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。\n初始状态下，所有 next 指针都被设置为 NULL。")]),n._v(" "),e("p",[n._v("进阶：")]),n._v(" "),e("ul",[e("li",[n._v("你只能使用常量级额外空间。")]),n._v(" "),e("li",[n._v("使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。")])]),n._v(" "),e("p",[n._v("示例：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("输入：root = [1,2,3,4,5,null,7]\n输出：[1,#,2,3,#,4,5,7,#]\n解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。  \n序列化输出按层序遍历顺序（由 next 指针连接），'#' 表示每层的末尾。\n")])])]),e("p"),n._v(" "),e("p",[n._v("提示：")]),n._v(" "),e("ul",[e("li",[n._v("树中的节点数小于 6000")]),n._v(" "),e("li",[n._v("-100 <= node.val <= 100")])]),n._v(" "),e("p",[n._v("解答")]),n._v(" "),e("p",[n._v("每次保存每一层的所有节点，遍历每一层节点前，保存上一个节点，第一个节点之后next指向下一个节点。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("/**\n * // Definition for a Node.\n * function Node(val, left, right, next) {\n *    this.val = val === undefined ? null : val;\n *    this.left = left === undefined ? null : left;\n *    this.right = right === undefined ? null : right;\n *    this.next = next === undefined ? null : next;\n * };\n */\n/**\n * @param {Node} root\n * @return {Node}\n */\nvar connect = function(root) {\n    if (root === null) {\n        return null;\n    }\n    const queue = [root];\n    while (queue.length) {\n        const n = queue.length;\n        let last = null;\n        for (let i = 1; i <= n; ++i) {\n            let f = queue.shift();\n            if (f.left !== null) {\n                queue.push(f.left);\n            }\n            if (f.right !== null) {\n                queue.push(f.right);\n            }\n            if (i !== 1) {\n                last.next = f;\n            }\n            last = f;\n        }\n    }\n    return root;\n};\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);