// class LLNode{
// 	constructor(value){
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class SingleLL{
// 	constructor(){
// 		this.head = null;
// 		this.tail = this.head;
// 		this.length = 0;
// 	}

// 	size(){
// 		return `hello I am LL, My Size is ${this.length}`;
// 	}

// 	append(value){
// 		const newNode = new LLNode(value);
// 		const lastNode = this.tail;
// 		lastNode.next = newNode;
// 		this.tail = newNode;
// 		this.length++;
// 		return this.printList()
// 	}

// 	prepend(value){
// 		const newNode = new LLNode(value);
// 		if(!this.head){
// 			this.head = newNode;
// 			this.tail = newNode;
// 			this.length++;
// 			return this.printList();
// 		}else{
// 			newNode.next = this.head;
// 			this.head = newNode;
// 			this.length++;
// 			return this.printList();
// 		}

// 	}

// 	printList(){
// 		let current = this.head;
// 		console.log('LL', current);
// 		while(current){
// 			console.log(current.value)
// 			console.log('--->');
// 			current = current.next;
// 		}
// 		return 'No LL exists'
// 	}

// 	insertAt(position, data){
// 		if(position === 0){
// 			return this.prepend(data);
// 		}else if(position === this.length){
// 			return this.append(data)
// 		}else{
// 			let i = 0;
// 			let prev,current = this.head;
// 			while(position > i){
// 				prev = current;
// 				current = current.next;
// 				i++;
// 			}

// 			let node = new LLNode(data);
// 			node.next = prev.next;
// 			prev.next = node;
// 			this.length++;
// 			return this.printList();
// 		}
// 	}

// 	getElementAtIndex(pos){
// 		if(pos < 0 || pos > this.length){
// 			return `hey, I don't have this index`
// 		}
// 		let i = 0;
// 		let current = this.head;
// 		while(current){
// 			if(i === pos){
// 				console.log('he;;;',current.value)
// 				return current.value
// 			}
// 			current = current.next;
// 			i++;
// 		}

// 	}

// 	removeAtStart(){
// 		if(!this.head){
// 			return false
// 		}else{
// 			let removeNode = this.head;
// 			this.head = removeNode.next;
// 			removeNode = null;
// 			this.length--;
// 			return this.printList() 
// 		}
// 	}

// 	removeAtEnd(){
// 		let prev, current = this.head;
// 		while(current.next){
// 			prev = current
// 			current = current.next;
// 		}	
// 		let removNode = current;
// 		removNode = null;
// 		prev.next = null;
// 		this.tail = prev;
// 		this.length--;
// 		return this.printList();

// 	}
// 	removeAtIndex(pos){
// 		let count = 0;
// 		let prev,current = this.head;
// 		while(count<pos){
// 			count++
// 			prev = current
// 			current = current.next;
			
// 		}
// 		prev.next = current.next;
// 		current = null
// 		this.length--;
// 		return this.printList()
// 	}
	
// }

// const ll = new SingleLL()
// ll.prepend(4);
// ll.prepend(5)
// ll.prepend(6);
// ll.append(8);
// ll.insertAt(3,9);
// // ll.getElementAtIndex(3)
// ll.removeAtEnd()
// // ll.removeAt(2)
// ll.removeAtIndex(1)
// console.log(ll)


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB){
        return null
    }
    
    let lengthA = 0;
    let lengthB = 0
    let listA = headA;
    let listB = headB;
    
    while(listA){
        lengthA++;
        listA = listA.next;
    }
     
    while(listB){
        lengthB++;
        listB = listB.next;
    }
    
    let currA = headA;
    let currB = headB;
    
    if(lengthA > lengthB){
        let temp = lengthA - lengthB;
        while(temp-- > 0){
            currA = currA.next;
        }
        
    }else if(lengthB > lengthA){
        let temp = lengthB - lengthA;
        while(temp-- > 0){
            currB = currB.next;
        }
    }
        
    while(currA !== currB){
        currA = currA.next;
        currB = currB.next;
    }
    
    return currA;
    
}

var insert = new getIntersectionNode()
insert(1,2,4)
insert(1,3,4)
console.log(insert)