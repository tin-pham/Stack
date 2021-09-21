# Stack

Simple stack data structure write in JavaScript

## How to use

-   Just clone this project to your repository with this script
-   I used LinkedList to implement the Stack, so you need to clone the LinkedList package too, by '--recurse-submodules' flag

```shell
git clone https://github.com/tin-pham/Stack --recurse-submodules
```

-   After that just import the code to your project

```javascript
import Stack from "./Stack/Stack.js";
```

-   _If you using HTML remember add `type: "module"` to your `<script>` tag_

```html
<script type="module"></script>
```

## Method
```
peek() -> return the top element
pop() -> return and remove the top element
push() -> add the element to the top
display() -> visuallize the stack

```
* Some useful method inherit from LinkedList
```
indexOf(element) -> return the index of the elementstart from the head pointer
(Use display() method to visuallize this)

isEmpty() -> check if the stack is empty or not

contains(element) -> check if the element inside the Stack

length: getter -> return the length of the stack
```
