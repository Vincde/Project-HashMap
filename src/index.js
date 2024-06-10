const node = (key, value) => {
  const next = null;
  return { key, value, next };
};

const hashMap = () => {
  const bucket = new Array(16).fill(undefined);
  const loadFactor = 0;

  const hash = (key) => {
    let hashCode = 0;
    let res = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      res = hashCode % bucket.length;
    }

    return res;
  };

  const set = (key, value) => {
    const newValue = value;
    const newKey = key;
    const hashKey = hash(key);
    let pointer = bucket[hashKey];

    if (pointer === undefined) {
      pointer = node(newKey, newValue);
      bucket[hashKey] = pointer;
      return;
    }

    if (pointer.key === newKey) {
      pointer.value = newValue;
      return;
    }

    while (pointer.next !== null) {
      pointer = pointer.next;
      if (pointer.key === newKey) {
        pointer.value = newValue;
        return;
      }
    }

    pointer.next = node(newKey, newValue);

    pointer = 0;
  };

  const get = (key) => {
    const hashKey = hash(key);

    let pointer = bucket[hashKey];
    if (pointer === undefined) return null;
    if (pointer.key === key) {
      return pointer.value;
    }
    while (pointer.next !== null) {
      pointer = pointer.next;
      if (pointer.key === key) {
        return pointer.value;
      }
    }

    return null;
  };

  const has = (key) => {
    const hashKey = hash(key);

    let pointer = bucket[hashKey];
    if (pointer === undefined) return false;
    if (pointer.key === key) return true;
    while (pointer.next !== null) {
      pointer = pointer.next;
      if (pointer.key === key) return true;
    }

    return false;
  };

  const remove = (key) => {
    const hashKey = hash(key);

    let pointer = bucket[hashKey];
    if (pointer === undefined) return false;
    if (pointer.key === key) {
      if (pointer.next !== null) {
        bucket[hashKey] = bucket[hashKey].next;
        pointer = pointer.next;
        return true;
      }
      bucket[hashKey] = undefined;
      pointer = undefined;
      return true;
    }

    while (pointer.next !== null && pointer.next.key !== key) {
      pointer = pointer.next;
    }

    if (pointer.next.key !== key) return false;

    let tmp = pointer.next;

    if (pointer.next.next !== null) {
      pointer.next = tmp.next;
      tmp = null;
      return true;
    }

    pointer.next = null;
    tmp = null;
    return true;
  };

  const length = () => {
    let retLength = 0;
    for (let i = 0; i < bucket.length; i++) {
      let tmp = bucket[i];
      if (tmp !== undefined) {
        retLength += 1;
        while (tmp.next !== null) {
          tmp = tmp.next;
          retLength += 1;
        }
      }
    }

    return retLength;
  };

  const clear = () => {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] !== undefined && bucket[i] !== null) {
        bucket[i].next = null;
        bucket[i] = undefined;
      }
    }
  };

  const keys = () => {
    const res = [];

    for (let i = 0; i < bucket.length; i++) {
      let tmp = bucket[i];
      if (tmp !== null && tmp !== undefined) {
        res.push(tmp.key);
        while (tmp.next !== null) {
          tmp = tmp.next;
          res.push(tmp.key);
        }
      }
    }
    return res;
  };

  const values = () => {
    const res = [];

    for (let i = 0; i < bucket.length; i++) {
      let tmp = bucket[i];
      if (tmp !== null && tmp !== undefined) {
        res.push(tmp.value);
        while (tmp.next !== null) {
          tmp = tmp.next;
          res.push(tmp.value);
        }
      }
    }
    return res;
  };

  const entries = () => {
    const res = [[]];
    let countArr = 0;

    for (let i = 0; i < bucket.length; i++) {
      let tmp = bucket[i];
      if (tmp !== null && tmp !== undefined) {
        res[countArr] = [tmp.key, tmp.value];
        countArr += 1;
        while (tmp.next !== null) {
          tmp = tmp.next;
          res[countArr] = [tmp.key, tmp.value];
          countArr += 1;
        }
      }
    }
    return res;
  };

  return {
    bucket,
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
};

const aa = hashMap();

aa.set("ciao", "darling");
aa.set("hello", "erere");
aa.set("Hello", "trtr");
aa.set("hEllO", "ilovepotatoes");
aa.set("iloveu", "234");
console.log(aa.entries());
