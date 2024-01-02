class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(url, title) {
    this.items[this.tailIndex] = { url, title };
    this.tailIndex++;
    console.log(this.items);
  }

  dequeue() {
    let removedElement = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return removedElement;
  }

  peek() {
    let peekElement = this.items[this.headIndex];
    console.log(this.items);
    return peekElement;
  }

  peekUrl() {
    return this.peek().url;
  }

  peekTitle() {
    return this.peek().title;
  }
  size() {
    return this.tailIndex - this.headIndex;
  }

  isEmpty() {
    if (this.tailIndex - this.headIndex === 0) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  getFirstFive() {
    let firstFiveQueue = [];
    for (
      let i = this.headIndex;
      i < Math.min(this.headIndex + 5, this.tailIndex);
      i++
    ) {
      firstFiveQueue.push(this.items[i].title);
    }

    return firstFiveQueue;
  }
}

module.exports = Queue;
