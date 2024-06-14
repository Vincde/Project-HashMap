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
    } else if (this.bucket[hashCode].key === key) {
      this.bucket[hashCode].key = key;
    } else {
      let tmp = this.bucket[hashCode];
      while (tmp.next !== null) {
        tmp = tmp.next;
        if (tmp.key === key) {
          tmp.key = key;
          return;
        }
      }
      tmp.next = node(key);
    }
  }

  get(key) {
    const hashCode = this.hash(key);

    if (this.bucket[hashCode] === null || this.bucket[hashCode] === undefined) {
      return false;
    }

    if (this.bucket[hashCode].key === key) {
      return key;
    }
    let tmp = this.bucket[hashCode];
    while (tmp.next !== null) {
      tmp = tmp.next;
      if (tmp.key === key) {
        return key;
      }
    }
    return null;
  }

  has(key) {
    const hashCode = this.hash(key);

    if (this.bucket[hashCode] === null || this.bucket[hashCode] === undefined)
      return false;

    if (this.bucket[hashCode].key === key) {
      return true;
    }
    let tmp = this.bucket[hashCode];
    while (tmp.next !== null) {
      tmp = tmp.next;
      if (tmp.key === key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    const hashCode = this.hash(key);
    let tmp = this.bucket[hashCode];

    if (this.bucket[hashCode] === null || this.bucket[hashCode] === undefined)
      return false;

    if (this.bucket[hashCode].key === key) {
      this.bucket[hashCode] = tmp.next;
      tmp.next = null;
    } else {
      while (tmp.next !== null && tmp.next.key !== key) {
        tmp = tmp.next;
      }

      if (tmp.next.key !== key) return null;

      if (tmp.next.next === null) {
        tmp.next = null;
        return true;
      }

      tmp.next = tmp.next.next;
    }

    return null;
  }

  length() {
    let tmp = this.bucket;
    let count = 0;

    for (let i = 0; i < this.bucket.length; i++) {
      tmp = this.bucket[i];
      if (tmp !== undefined) {
        count += 1;

        while (tmp.next !== null) {
          tmp = tmp.next;
          count += 1;
        }
      }
    }

    return count;
  }

  clear() {
    const tmp = this.bucket;

    for (let i = 0; i < tmp.length; i++) {
      tmp[i] = undefined;
    }
  }

  keys() {
    const resArr = [];
    let tmp;

    for (let i = 0; i < this.bucket.length; i++) {
      tmp = this.bucket[i];
      if (tmp !== undefined) {
        resArr.push(tmp.key);

        while (tmp.next !== null) {
          tmp = tmp.next;
          resArr.push(tmp.key);
        }
      }
    }
    return resArr;
  }

  entries() {
    const resArr = [[]];
    let count = 0;
    let tmp;

    for (let i = 0; i < this.bucket.length; i++) {
      tmp = this.bucket[i];
      if (tmp !== undefined) {
        resArr[count] = [tmp.key, null];
        count += 1;
        while (tmp.next !== null) {
          tmp = tmp.next;
          resArr[count] = [tmp.key, null];
          count += 1;
        }
      }
    }

    return resArr;
  }
}
