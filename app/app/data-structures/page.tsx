import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/code-block';

export default function DataStructuresPage() {
  const dataStructures = [
    {
      id: 'stack',
      name: 'Stack',
      description: 'LIFO (Last In, First Out) data structure',
      complexity: {
        push: 'O(1)',
        pop: 'O(1)',
        peek: 'O(1)',
        space: 'O(n)'
      },
      implementation: `class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}`,
      usage: `// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.size()); // 2`
    },
    {
      id: 'queue',
      name: 'Queue',
      description: 'FIFO (First In, First Out) data structure',
      complexity: {
        enqueue: 'O(1)',
        dequeue: 'O(1)',
        front: 'O(1)',
        space: 'O(n)'
      },
      implementation: `class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}`,
      usage: `// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2
console.log(queue.size()); // 2`
    },
    {
      id: 'linked-list',
      name: 'Linked List',
      description: 'Linear data structure with nodes connected by pointers',
      complexity: {
        insert: 'O(1)',
        delete: 'O(1)',
        search: 'O(n)',
        space: 'O(n)'
      },
      implementation: `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  deleteFirst() {
    if (!this.head) return null;
    
    const deletedNode = this.head;
    this.head = this.head.next;
    this.size--;
    return deletedNode.data;
  }

  deleteLast() {
    if (!this.head) return null;
    
    if (!this.head.next) {
      const deletedNode = this.head;
      this.head = null;
      this.size--;
      return deletedNode.data;
    }
    
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    
    const deletedNode = current.next;
    current.next = null;
    this.size--;
    return deletedNode.data;
  }

  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(' -> ');
  }
}`,
      usage: `// Example usage
const list = new LinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);
console.log(list.print()); // "1 -> 2 -> 3"
console.log(list.search(2)); // true
list.deleteFirst();
console.log(list.print()); // "2 -> 3"`
    },
    {
      id: 'binary-tree',
      name: 'Binary Tree',
      description: 'Tree data structure with at most two children per node',
      complexity: {
        insert: 'O(log n)',
        search: 'O(log n)',
        delete: 'O(log n)',
        space: 'O(n)'
      },
      implementation: `class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new TreeNode(data);
    
    if (!this.root) {
      this.root = newNode;
      return;
    }
    
    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(data) {
    return this.searchNode(this.root, data);
  }

  searchNode(node, data) {
    if (!node) return false;
    
    if (node.data === data) return true;
    
    if (data < node.data) {
      return this.searchNode(node.left, data);
    } else {
      return this.searchNode(node.right, data);
    }
  }

  // Inorder traversal (Left -> Root -> Right)
  inorderTraversal(node = this.root, result = []) {
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.data);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }

  // Preorder traversal (Root -> Left -> Right)
  preorderTraversal(node = this.root, result = []) {
    if (node) {
      result.push(node.data);
      this.preorderTraversal(node.left, result);
      this.preorderTraversal(node.right, result);
    }
    return result;
  }

  // Postorder traversal (Left -> Right -> Root)
  postorderTraversal(node = this.root, result = []) {
    if (node) {
      this.postorderTraversal(node.left, result);
      this.postorderTraversal(node.right, result);
      result.push(node.data);
    }
    return result;
  }
}`,
      usage: `// Example usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(tree.search(7)); // true
console.log(tree.inorderTraversal()); // [3, 5, 7, 10, 15]
console.log(tree.preorderTraversal()); // [10, 5, 3, 7, 15]`
    },
    {
      id: 'hash-table',
      name: 'Hash Table',
      description: 'Data structure that maps keys to values using hash function',
      complexity: {
        insert: 'O(1)',
        search: 'O(1)',
        delete: 'O(1)',
        space: 'O(n)'
      },
      implementation: `class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    
    // Check if key already exists
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return;
      }
    }
    
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }
}`,
      usage: `// Example usage
const ht = new HashTable();
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");

console.log(ht.get("maroon")); // "#800000"
console.log(ht.keys()); // ["maroon", "yellow", "olive"]
console.log(ht.values()); // ["#800000", "#FFFF00", "#808000"]`
    },
    {
      id: 'heap',
      name: 'Min/Max Heap',
      description: 'Complete binary tree with heap property',
      complexity: {
        insert: 'O(log n)',
        extract: 'O(log n)',
        peek: 'O(1)',
        space: 'O(n)'
      },
      implementation: `class MinHeap {
  constructor() {
    this.heap = [];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  hasParent(index) {
    return this.parentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.leftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.rightChildIndex(index) < this.heap.length;
  }

  parent(index) {
    return this.heap[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.heap[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.rightChildIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    
    return item;
  }

  heapifyDown() {
    let index = 0;
    
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.leftChildIndex(index);
      
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.rightChildIndex(index);
      }
      
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      
      index = smallerChildIndex;
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}`,
      usage: `// Example usage
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(4);
minHeap.insert(15);
minHeap.insert(20);
minHeap.insert(30);

console.log(minHeap.peek()); // 4
console.log(minHeap.remove()); // 4
console.log(minHeap.peek()); // 10`
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Data Structures Implementation</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to implement fundamental data structures in JavaScript. Each implementation includes 
          time complexity analysis and practical usage examples.
        </p>
      </div>

      <div className="grid gap-6">
        {dataStructures.map((ds) => (
          <Card key={ds.id} className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{ds.name}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {ds.description}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Insert: {ds.complexity.insert}</Badge>
                  <Badge variant="outline">Search: {ds.complexity.search}</Badge>
                  <Badge variant="outline">Space: {ds.complexity.space}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="implementation" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="implementation">Implementation</TabsTrigger>
                  <TabsTrigger value="usage">Usage Example</TabsTrigger>
                  <TabsTrigger value="complexity">Complexity</TabsTrigger>
                </TabsList>
                
                <TabsContent value="implementation" className="mt-4">
                  <CodeBlock code={ds.implementation} language="javascript" />
                </TabsContent>
                
                <TabsContent value="usage" className="mt-4">
                  <CodeBlock code={ds.usage} language="javascript" />
                </TabsContent>
                
                <TabsContent value="complexity" className="mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Time Complexity</h4>
                      <div className="space-y-1 text-sm">
                        <div>Insert: <Badge variant="secondary">{ds.complexity.insert}</Badge></div>
                        <div>Search: <Badge variant="secondary">{ds.complexity.search}</Badge></div>
                        <div>Delete: <Badge variant="secondary">{ds.complexity.delete || 'N/A'}</Badge></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Space Complexity</h4>
                      <div className="space-y-1 text-sm">
                        <div>Storage: <Badge variant="secondary">{ds.complexity.space}</Badge></div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• <strong>Stack:</strong> Perfect for undo operations, function call stack, and bracket matching</li>
          <li>• <strong>Queue:</strong> Ideal for task scheduling, breadth-first search, and print spooling</li>
          <li>• <strong>Linked List:</strong> Great for dynamic memory allocation and when you need frequent insertions/deletions</li>
          <li>• <strong>Binary Tree:</strong> Excellent for hierarchical data and efficient searching</li>
          <li>• <strong>Hash Table:</strong> Best for fast lookups, caching, and removing duplicates</li>
          <li>• <strong>Heap:</strong> Perfect for priority queues, scheduling algorithms, and finding min/max efficiently</li>
        </ul>
      </div>
    </div>
  );
}
