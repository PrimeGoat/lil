const Node = function(data) {
  return {
    value: data,
    next: null
  }
}

const Lil = function() {
  return {
    addToStart: function(value = "") {
      const element = Node(value);
      if(this.head == null) {
        this.head = element;
        this.tail = element;
      } else {
        let tempStart = this.head;
        this.head = element;
        tempStart.last = element;
        element.next = tempStart;
      }
    },

    addToEnd: function(value = "") {
      const element = Node(value);

      if(this.tail == null) {
        this.head = element;
        this.tail = element;
      } else {
        let tempEnd = this.tail;
        this.tail = element;
        tempEnd.next = element;
        element.prev = tempEnd;
        }
    },

    removeFromStart: function() {
      let out = this.head;
      this.head = out.next;
      this.head.prev = null;

      return out.value;
    },

    removeFromEnd: function() {
      let out = this.tail;
      console.log("out is ")
      console.log(out)
      this.tail = out.prev;
      this.tail.next = null;

      return out.value;
    },

    head: null,
    value: "",
    tail: null
  }
}


const lil = Lil();
lil.addToEnd(10);
lil.addToEnd(20);
lil.addToEnd(30);
lil.addToEnd(40);

console.log("Value is " + lil.next.next.value);
console.log(lil.removeFromEnd());
console.log(lil.tail);

function printObj(obj) {
  console.log("VALUE: " + obj.value);
  console.log("PREV: ");
  console.log(obj.prev);
  console.log("END OF PREV.  NEXT:");
  console.log(obj.next);
  console.log("END OF NEXT\n");
}


if (typeof Node == 'undefined') {
  Node = undefined;
}

if (typeof Lil == 'undefined') {
  Lil = undefined;
}



module.exports = {
  Lil,
  Node,
}
