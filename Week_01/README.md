学习笔记
##### 理解哨兵节点移动 指针
```
function Node(val) {
  this.val = val;
  this.next = null;
}

let head = new Node(-1);
let temp = new Node(2);
let pre = head; // pre && head 引用同时指向head

pre.next = temp; // pre, head 的next都为temp

// pre = pre.next;  //pre 引用移到pre.next, 放开注释看log
console.log(head);
console.log(pre);
```
