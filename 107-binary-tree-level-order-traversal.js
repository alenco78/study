/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    console.log('root: ', root);
    console.log(typeof(root));
    //console.log('root9: ', root.9);
    
    if(!root) return [];
    let queue = [root];
    let result = [];

    while(queue.length) {
        let len = queue.length;
        result.push(queue.map(node => {
            //console.log('node: ', node);
            //console.log('node.val: ', node.val);
            //console.log('node.left: ', node.left);
            return node.val;
        }));
        console.log('result: ', result);

        while(len--){
            let node = queue.shift();
            console.log('node in 2: ', node);
            if(node.left) queue.push(node.left);
            console.log('node.left: ', node.left);
            if(node.right) queue.push(node.right);
            console.log('node.left: ', node.right);
        }
    }
    console.log('final result', result);
    return result.reverse();
};