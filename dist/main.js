(()=>{const e=(e,t)=>({key:e,value:t,next:null}),t=(()=>{let t=new Array(16).fill(void 0),l=.75;const n=e=>{let l=0,n=0;for(let r=0;r<e.length;r++)l=31*l+e.charCodeAt(r),n=l%t.length;return n},r=(r,o)=>{const i=o,f=r,x=n(r);let v=t[x];if(void 0===v)return v=e(f,i),t[x]=v,l=u()/t.length,void(l>.75&&s());if(v.key!==f){for(;null!==v.next;)if(v=v.next,v.key===f)return void(v.value=i);v.next=e(f,i),l=u()/t.length,l>.75&&s(),v=0}else v.value=i},u=()=>{let e=0;for(let l=0;l<t.length;l++){let n=t[l];if(void 0!==n)for(e+=1;null!==n.next;)n=n.next,e+=1}return e},o=()=>{for(let e=0;e<t.length;e++)void 0!==t[e]&&null!==t[e]&&(t[e]=void 0);t=[void 0]},i=()=>{const e=[[]];let l=0;for(let n=0;n<t.length;n++){let r=t[n];if(null!=r)for(e[l]=[r.key,r.value],l+=1;null!==r.next;)r=r.next,e[l]=[r.key,r.value],l+=1}return e},s=()=>{const e=i();o(),t=new Array(32).fill(void 0),l=e.length/t.length;for(let t=0;t<e.length;t++)r(e[t][0],e[t][1])};return{hash:n,set:r,get:e=>{const l=n(e);let r=t[l];if(void 0===r)return null;if(r.key===e)return r.value;for(;null!==r.next;)if(r=r.next,r.key===e)return r.value;return null},has:e=>{const l=n(e);let r=t[l];if(void 0===r)return!1;if(r.key===e)return!0;for(;null!==r.next;)if(r=r.next,r.key===e)return!0;return!1},remove:e=>{const r=n(e);let o=t[r];if(void 0===o)return!1;if(o.key===e)return null!==o.next?(t[r]=t[r].next,o=o.next,l=u()/t.length,!0):(t[r]=void 0,o=void 0,!0);for(;null!==o.next&&o.next.key!==e;)o=o.next;if(o.next.key!==e)return!1;let i=o.next;return null!==o.next.next?(o.next=i.next,i=null,l=u()/t.length,!0):(o.next=null,i=null,l=u()/t.length,!0)},length:u,clear:o,keys:()=>{const e=[];for(let l=0;l<t.length;l++){let n=t[l];if(null!=n)for(e.push(n.key);null!==n.next;)n=n.next,e.push(n.key)}return e},values:()=>{const e=[];for(let l=0;l<t.length;l++){let n=t[l];if(null!=n)for(e.push(n.value);null!==n.next;)n=n.next,e.push(n.value)}return e},entries:i}})();t.set("ciao","darling"),t.set("hello","erere"),t.set("Hello","trtr"),t.set("hEllO","ilovepotatoes"),t.set("iloveu","234"),t.set("sdkjsefois","22334"),t.set("qwe","23674"),t.set("uuuu","237894"),t.set("iiii","2348989"),t.set("aaaau","234234"),t.set("zzzzu","23411"),t.set("ixxxxxveu","234444"),t.set("qqqqqqq","23422"),t.set("rtyryrty","23422"),t.set("yuiyuiy","23422"),t.set("iopiop","23422"),console.log(t)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0IsUUFBUUMsSUFBSWhDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJkZXYtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgbm9kZSA9IChrZXksIHZhbHVlKSA9PiB7XG4gIGNvbnN0IG5leHQgPSBudWxsO1xuICByZXR1cm4geyBrZXksIHZhbHVlLCBuZXh0IH07XG59O1xuXG5jb25zdCBoYXNoTWFwID0gKCkgPT4ge1xuICBsZXQgYnVja2V0ID0gbmV3IEFycmF5KDE2KS5maWxsKHVuZGVmaW5lZCk7XG4gIGxldCBsb2FkRmFjdG9yID0gMC43NTtcblxuICBjb25zdCBoYXNoID0gKGtleSkgPT4ge1xuICAgIGxldCBoYXNoQ29kZSA9IDA7XG4gICAgbGV0IHJlcyA9IDA7XG5cbiAgICBjb25zdCBwcmltZU51bWJlciA9IDMxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBoYXNoQ29kZSA9IHByaW1lTnVtYmVyICogaGFzaENvZGUgKyBrZXkuY2hhckNvZGVBdChpKTtcbiAgICAgIHJlcyA9IGhhc2hDb2RlICUgYnVja2V0Lmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIGNvbnN0IHNldCA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICBjb25zdCBuZXdLZXkgPSBrZXk7XG4gICAgY29uc3QgaGFzaEtleSA9IGhhc2goa2V5KTtcbiAgICBsZXQgcG9pbnRlciA9IGJ1Y2tldFtoYXNoS2V5XTtcblxuICAgIGlmIChwb2ludGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBvaW50ZXIgPSBub2RlKG5ld0tleSwgbmV3VmFsdWUpO1xuICAgICAgYnVja2V0W2hhc2hLZXldID0gcG9pbnRlcjtcblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICBsb2FkRmFjdG9yID0gbGVuZ3RoKCkgLyBidWNrZXQubGVuZ3RoO1xuXG4gICAgICBpZiAobG9hZEZhY3RvciA+IDAuNzUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgIHJlaGFzaGluZygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHBvaW50ZXIua2V5ID09PSBuZXdLZXkpIHtcbiAgICAgIHBvaW50ZXIudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aGlsZSAocG9pbnRlci5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0O1xuICAgICAgaWYgKHBvaW50ZXIua2V5ID09PSBuZXdLZXkpIHtcbiAgICAgICAgcG9pbnRlci52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgcG9pbnRlci5uZXh0ID0gbm9kZShuZXdLZXksIG5ld1ZhbHVlKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICBsb2FkRmFjdG9yID0gbGVuZ3RoKCkgLyBidWNrZXQubGVuZ3RoO1xuXG4gICAgaWYgKGxvYWRGYWN0b3IgPiAwLjc1KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgIHJlaGFzaGluZygpO1xuICAgIH1cbiAgICBwb2ludGVyID0gMDtcbiAgfTtcblxuICBjb25zdCBnZXQgPSAoa2V5KSA9PiB7XG4gICAgY29uc3QgaGFzaEtleSA9IGhhc2goa2V5KTtcblxuICAgIGxldCBwb2ludGVyID0gYnVja2V0W2hhc2hLZXldO1xuICAgIGlmIChwb2ludGVyID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuICAgIGlmIChwb2ludGVyLmtleSA9PT0ga2V5KSB7XG4gICAgICByZXR1cm4gcG9pbnRlci52YWx1ZTtcbiAgICB9XG4gICAgd2hpbGUgKHBvaW50ZXIubmV4dCAhPT0gbnVsbCkge1xuICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dDtcbiAgICAgIGlmIChwb2ludGVyLmtleSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBwb2ludGVyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IGhhcyA9IChrZXkpID0+IHtcbiAgICBjb25zdCBoYXNoS2V5ID0gaGFzaChrZXkpO1xuXG4gICAgbGV0IHBvaW50ZXIgPSBidWNrZXRbaGFzaEtleV07XG4gICAgaWYgKHBvaW50ZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwb2ludGVyLmtleSA9PT0ga2V5KSByZXR1cm4gdHJ1ZTtcbiAgICB3aGlsZSAocG9pbnRlci5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0O1xuICAgICAgaWYgKHBvaW50ZXIua2V5ID09PSBrZXkpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCByZW1vdmUgPSAoa2V5KSA9PiB7XG4gICAgY29uc3QgaGFzaEtleSA9IGhhc2goa2V5KTtcblxuICAgIGxldCBwb2ludGVyID0gYnVja2V0W2hhc2hLZXldO1xuICAgIGlmIChwb2ludGVyID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocG9pbnRlci5rZXkgPT09IGtleSkge1xuICAgICAgaWYgKHBvaW50ZXIubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICBidWNrZXRbaGFzaEtleV0gPSBidWNrZXRbaGFzaEtleV0ubmV4dDtcbiAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dDtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgIGxvYWRGYWN0b3IgPSBsZW5ndGgoKSAvIGJ1Y2tldC5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgYnVja2V0W2hhc2hLZXldID0gdW5kZWZpbmVkO1xuICAgICAgcG9pbnRlciA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHdoaWxlIChwb2ludGVyLm5leHQgIT09IG51bGwgJiYgcG9pbnRlci5uZXh0LmtleSAhPT0ga2V5KSB7XG4gICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0O1xuICAgIH1cblxuICAgIGlmIChwb2ludGVyLm5leHQua2V5ICE9PSBrZXkpIHJldHVybiBmYWxzZTtcblxuICAgIGxldCB0bXAgPSBwb2ludGVyLm5leHQ7XG5cbiAgICBpZiAocG9pbnRlci5uZXh0Lm5leHQgIT09IG51bGwpIHtcbiAgICAgIHBvaW50ZXIubmV4dCA9IHRtcC5uZXh0O1xuICAgICAgdG1wID0gbnVsbDtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgbG9hZEZhY3RvciA9IGxlbmd0aCgpIC8gYnVja2V0Lmxlbmd0aDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHBvaW50ZXIubmV4dCA9IG51bGw7XG4gICAgdG1wID0gbnVsbDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICBsb2FkRmFjdG9yID0gbGVuZ3RoKCkgLyBidWNrZXQubGVuZ3RoO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGxlbmd0aCA9ICgpID0+IHtcbiAgICBsZXQgcmV0TGVuZ3RoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRtcCA9IGJ1Y2tldFtpXTtcbiAgICAgIGlmICh0bXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXRMZW5ndGggKz0gMTtcbiAgICAgICAgd2hpbGUgKHRtcC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgdG1wID0gdG1wLm5leHQ7XG4gICAgICAgICAgcmV0TGVuZ3RoICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0TGVuZ3RoO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVja2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYnVja2V0W2ldICE9PSB1bmRlZmluZWQgJiYgYnVja2V0W2ldICE9PSBudWxsKSB7XG4gICAgICAgIGJ1Y2tldFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgYnVja2V0ID0gW3VuZGVmaW5lZF07XG4gIH07XG5cbiAgY29uc3Qga2V5cyA9ICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVja2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdG1wID0gYnVja2V0W2ldO1xuICAgICAgaWYgKHRtcCAhPT0gbnVsbCAmJiB0bXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXMucHVzaCh0bXAua2V5KTtcbiAgICAgICAgd2hpbGUgKHRtcC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgdG1wID0gdG1wLm5leHQ7XG4gICAgICAgICAgcmVzLnB1c2godG1wLmtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBjb25zdCB2YWx1ZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRtcCA9IGJ1Y2tldFtpXTtcbiAgICAgIGlmICh0bXAgIT09IG51bGwgJiYgdG1wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzLnB1c2godG1wLnZhbHVlKTtcbiAgICAgICAgd2hpbGUgKHRtcC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgdG1wID0gdG1wLm5leHQ7XG4gICAgICAgICAgcmVzLnB1c2godG1wLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIGNvbnN0IGVudHJpZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gW1tdXTtcbiAgICBsZXQgY291bnRBcnIgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWNrZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0bXAgPSBidWNrZXRbaV07XG4gICAgICBpZiAodG1wICE9PSBudWxsICYmIHRtcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc1tjb3VudEFycl0gPSBbdG1wLmtleSwgdG1wLnZhbHVlXTtcbiAgICAgICAgY291bnRBcnIgKz0gMTtcbiAgICAgICAgd2hpbGUgKHRtcC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgdG1wID0gdG1wLm5leHQ7XG4gICAgICAgICAgcmVzW2NvdW50QXJyXSA9IFt0bXAua2V5LCB0bXAudmFsdWVdO1xuICAgICAgICAgIGNvdW50QXJyICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICBjb25zdCByZWhhc2hpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3QXJyID0gZW50cmllcygpO1xuXG4gICAgY2xlYXIoKTtcbiAgICBidWNrZXQgPSBuZXcgQXJyYXkoMzIpLmZpbGwodW5kZWZpbmVkKTtcblxuICAgIGxvYWRGYWN0b3IgPSBuZXdBcnIubGVuZ3RoIC8gYnVja2V0Lmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgc2V0KG5ld0FycltpXVswXSwgbmV3QXJyW2ldWzFdKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBoYXNoLFxuICAgIHNldCxcbiAgICBnZXQsXG4gICAgaGFzLFxuICAgIHJlbW92ZSxcbiAgICBsZW5ndGgsXG4gICAgY2xlYXIsXG4gICAga2V5cyxcbiAgICB2YWx1ZXMsXG4gICAgZW50cmllcyxcbiAgfTtcbn07XG5cbmNvbnN0IGFhID0gaGFzaE1hcCgpO1xuXG5hYS5zZXQoXCJjaWFvXCIsIFwiZGFybGluZ1wiKTtcbmFhLnNldChcImhlbGxvXCIsIFwiZXJlcmVcIik7XG5hYS5zZXQoXCJIZWxsb1wiLCBcInRydHJcIik7XG5hYS5zZXQoXCJoRWxsT1wiLCBcImlsb3ZlcG90YXRvZXNcIik7XG5hYS5zZXQoXCJpbG92ZXVcIiwgXCIyMzRcIik7XG5hYS5zZXQoXCJzZGtqc2Vmb2lzXCIsIFwiMjIzMzRcIik7XG5hYS5zZXQoXCJxd2VcIiwgXCIyMzY3NFwiKTtcbmFhLnNldChcInV1dXVcIiwgXCIyMzc4OTRcIik7XG5hYS5zZXQoXCJpaWlpXCIsIFwiMjM0ODk4OVwiKTtcbmFhLnNldChcImFhYWF1XCIsIFwiMjM0MjM0XCIpO1xuYWEuc2V0KFwienp6enVcIiwgXCIyMzQxMVwiKTtcbmFhLnNldChcIml4eHh4eHZldVwiLCBcIjIzNDQ0NFwiKTtcbmFhLnNldChcInFxcXFxcXFcIiwgXCIyMzQyMlwiKTtcbmFhLnNldChcInJ0eXJ5cnR5XCIsIFwiMjM0MjJcIik7XG5hYS5zZXQoXCJ5dWl5dWl5XCIsIFwiMjM0MjJcIik7XG5hYS5zZXQoXCJpb3Bpb3BcIiwgXCIyMzQyMlwiKTtcbmNvbnNvbGUubG9nKGFhKTtcbiJdLCJuYW1lcyI6WyJub2RlIiwia2V5IiwidmFsdWUiLCJuZXh0IiwiYWEiLCJoYXNoTWFwIiwiYnVja2V0IiwiQXJyYXkiLCJmaWxsIiwidW5kZWZpbmVkIiwibG9hZEZhY3RvciIsImhhc2giLCJoYXNoQ29kZSIsInJlcyIsImkiLCJsZW5ndGgiLCJjaGFyQ29kZUF0Iiwic2V0IiwibmV3VmFsdWUiLCJuZXdLZXkiLCJoYXNoS2V5IiwicG9pbnRlciIsInJlaGFzaGluZyIsInJldExlbmd0aCIsInRtcCIsImNsZWFyIiwiZW50cmllcyIsImNvdW50QXJyIiwibmV3QXJyIiwiZ2V0IiwiaGFzIiwicmVtb3ZlIiwia2V5cyIsInB1c2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==