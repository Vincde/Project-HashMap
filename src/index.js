const node = (key, value) => {
  const next = null;
  return { key, value, next };
};

const hashMap = () => {
  const bucket = new Array(16).fill(undefined);

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

  return { bucket, hash, set };
};

const aa = hashMap();

aa.set("ciao", "darling");
aa.set("hello", "erere");
aa.set("Hello", "trtr");
console.log(aa);
