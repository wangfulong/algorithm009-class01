学习笔记
### 数组｜链表｜跳表
#### 练习题目
##### Array
1. 两数之和
11. 盛最多水的容器
283. 移动零
70. 爬楼梯
15. 三数之和
26. 删除排序数组中的重复项
189. 旋转数组
88. 合并两个有序数组
66. 加一

##### Linked List
21. 合并两个有序链表
206. 反转链表 - Reverse Linked List
24. 两两交换链表中的节点 - Swap Nodes in Pairs
141. 环形链表 - Linked List Cycle
142. 环形链表 II - Linked List Cycle II
146. [LRU Cache - Linked list： LRU 缓存机制](https://leetcode-cn.com/problems/lru-cache/)
25. K 个一组翻转链表 - Reverse Nodes in k-Group
#### 扩展知识
- [Java 源码分析（ArrayList）](http://developer.classpath.org/doc/java/util/ArrayList-source.html)
- [Linked List 的标准实现代码](https://www.geeksforgeeks.org/implementing-a-linked-list-in-java-using-class/)
- [Linked List 示例代码](http://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/code/LinkedList.java)
- [Java 源码分析（LinkedList）](http://developer.classpath.org/doc/java/util/LinkedList-source.html)
- [Redis - Skip List](https://redisbook.readthedocs.io/en/latest/internal-datastruct/skiplist.html)

### 栈 ｜ 队列 ｜ 优先队列 ｜ 双端队列
#### 练习题目
20. 有效的括号
155. 最小栈
84. 柱状图中最大的矩形
239. 滑动窗口最大值
622. 设计循环队列 
641. 设计循环双端队列 - Design Circular Deque
42. 接雨水 - Trapping Rain Water
#### 扩展知识

- [Java 的 PriorityQueue 文档](https://docs.oracle.com/javase/10/docs/api/java/util/PriorityQueue.html)
- [Java 的 Stack 源码](http://developer.classpath.org/doc/java/util/Stack-source.html)
- [Java 的 Queue 源码](http://fuseyism.com/classpath/doc/java/util/Queue-source.html)
- [Python 的 heapq](https://docs.python.org/2/library/heapq.html)
- [高性能的 container 库](https://docs.python.org/2/library/collections.html)



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
