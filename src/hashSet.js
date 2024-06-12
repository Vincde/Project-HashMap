// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member, import/extensions
import node from "./index.js";

export default class HashSet {
  constructor() {
    this.bucket = [];
    for (let i = 0; i < 16; i++) {
      this.bucket[i] = undefined;
    }
  }

  hash(key) {
    let hashCode = 0;
    let res = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      res = hashCode % this.bucket.length;
    }

    return res;
  }

  set(key) {
    const hashCode = this.hash(key);
    if (this.bucket[hashCode] === undefined) {
      this.bucket[hashCode] = node(key);
    }
  }
}
