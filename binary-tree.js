/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let minLength = 0
    if (this.root){
      minLength ++;
      const toTraverseQueue = [this.root];
      while (toTraverseQueue.length){
        const current = toTraverseQueue.pop();
        if(current.left === null || current.right === null ){
          minLength ++;
          return minLength;
        }
        toTraverseQueue.push(current.left);
        toTraverseQueue.push(current.right);
      }
    }
    return minLength;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let maxLength = 0;
    if (this.root){
      const toTraverseQueue = [{ node: this.root, depth: 1 }]; 
  
      while (toTraverseQueue.length) {
        const { node, depth } = toTraverseQueue.shift();
    
        maxLength = Math.max(maxLength, depth);
    
        if (node.left) toTraverseQueue.push({ node: node.left, depth: depth + 1 });
        if (node.right) toTraverseQueue.push({ node: node.right, depth: depth + 1 });
      }
    }
    return maxLength;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  // maxSum() {
  //   let sum = 0;
  //   if (this.root){
  //     const maxSumPath = [this.root];
  //     while (maxSumPath.length){
  //       const current = maxSumPath.pop();
  //       if(current.left && current.left.val > current.right.val){
  //         maxSumPath.push(current.left)
  //       }
  //       else if (current.right && current.left.val < current.right.val){
  //         maxSumPath.push(current.right)
  //       }
  //       sum += current.val;
  //     }
  //   }
  //   return sum;
  // }
  maxSum() {
    let sum = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      sum = Math.max(sum, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return sum;
  }


  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let closest = null;
    const checkingQueue = [this.root];
      while(checkingQueue.length){
        const current = checkingQueue.pop();
        if (current.val > lowerBound && (current.val < closest || closest === null)){
          closest = current.val
        }
        if (current.right)checkingQueue.push(current.right);
        if (current.left)checkingQueue.push(current.left);
      }
    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
