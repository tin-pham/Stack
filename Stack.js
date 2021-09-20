import LinkedList from "./LinkedList/LinkedList.js";

export default class Stack extends LinkedList {
	constructor(value = null) {
		super(value);
	}
	peek() {
		if (this.isEmpty()) {
			console.log("The stack is empty");
			return;
		}
		return this.head.value;
	}
	pop() {
		if (this.isEmpty()) {
			throw new Error("The stack is empty");
		}
		return super.removeFirst();
	}

	push(element) {
		super.prepend(element);
	}
	display() {
		process.stdout.write(`|         |\n`);

		let trav = this.head;
		process.stdout.write(`|    ${trav.value}    | <-- head\n`);
		trav = trav.next;

		while (trav !== null) {
			process.stdout.write(`|    ${trav.value}    |\n`);
			trav = trav.next;
		}

		process.stdout.write("-----------\n");
	}
}

const stack = new Stack(1);
stack.push(2);
stack.push(3);
for (let element of stack) {
	console.log(element);
}
