const node = (key, value) => {
  const next = null;
  return { key, value, next };
};

const hashMap = () => {
  let bucket = new Array(16).fill(undefined);
  let loadFactor = 0.75;

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
      // eslint-disable-next-line no-use-before-define
      loadFactor = length() / bucket.length;
      // eslint-disable-next-line no-use-before-define
      if (loadFactor > 0.75) rehashing();
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
    // eslint-disable-next-line no-use-before-define
    loadFactor = length() / bucket.length;
    // eslint-disable-next-line no-use-before-define
    if (loadFactor > 0.75) rehashing();
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
        // eslint-disable-next-line no-use-before-define
        loadFactor = length() / bucket.length;
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
      // eslint-disable-next-line no-use-before-define
      loadFactor = length() / bucket.length;
      return true;
    }

    pointer.next = null;
    tmp = null;
    // eslint-disable-next-line no-use-before-define
    loadFactor = length() / bucket.length;
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

  const rehashing = () => {
    const newArr = entries();

    bucket = new Array(32).fill(undefined);

    loadFactor = newArr.length / bucket.length;

    for (let i = 0; i < newArr.length; i++) {
      set(newArr[i][0], newArr[i][1]);
    }
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
    rehashing,
  };
};

const aa = hashMap();

aa.set("ciao", "darling");
aa.set("hello", "erere");
aa.set("Hello", "trtr");
aa.set("hEllO", "ilovepotatoes");
aa.set("iloveu", "234");
aa.set("sdkjsefois", "22334");
aa.set("qwe", "23674");
aa.set("uuuu", "237894");
aa.set("iiii", "2348989");
aa.set("aaaau", "234234");
aa.set("zzzzu", "23411");
aa.set("ixxxxxveu", "234444");
aa.set("qqqqqqq", "23422");
aa.set("rtyryrty", "23422");
aa.set("yuiyuiy", "23422");
aa.set("iopiop", "23422");
console.log(aa);
