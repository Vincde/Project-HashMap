(()=>{const e=(e,t)=>({key:e,value:t,next:null}),t=(()=>{const t=new Array(16).fill(void 0),n=e=>{let n=0,l=0;for(let r=0;r<e.length;r++)n=31*n+e.charCodeAt(r),l=n%t.length;return l};return{bucket:t,hash:n,set:(l,r)=>{const u=r,o=l,i=n(l);let x=t[i];if(void 0===x)return x=e(o,u),void(t[i]=x);if(x.key!==o){for(;null!==x.next;)if(x=x.next,x.key===o)return void(x.value=u);x.next=e(o,u),x=0}else x.value=u},get:e=>{const l=n(e);let r=t[l];if(void 0===r)return null;if(r.key===e)return r.value;for(;null!==r.next;)if(r=r.next,r.key===e)return r.value;return null},has:e=>{const l=n(e);let r=t[l];if(void 0===r)return!1;if(r.key===e)return!0;for(;null!==r.next;)if(r=r.next,r.key===e)return!0;return!1},remove:e=>{const l=n(e);let r=t[l];if(void 0===r)return!1;if(r.key===e)return null!==r.next?(t[l]=t[l].next,r=r.next,!0):(t[l]=void 0,r=void 0,!0);for(;null!==r.next&&r.next.key!==e;)r=r.next;if(r.next.key!==e)return!1;let u=r.next;return null!==r.next.next?(r.next=u.next,u=null,!0):(r.next=null,u=null,!0)},length:()=>{let e=0;for(let n=0;n<t.length;n++){let l=t[n];if(void 0!==l)for(e+=1;null!==l.next;)l=l.next,e+=1}return e}}})();t.set("ciao","darling"),t.set("hello","erere"),t.set("Hello","trtr"),t.set("hEllO","ilovepotatoes"),t.set("iloveu","234"),console.log(t.length())})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pCLFFBQVlKLElBQVJlLEVBRUYsSUFEQUMsR0FBYSxFQUNPLE9BQWJELEVBQUlyQixNQUNUcUIsRUFBTUEsRUFBSXJCLEtBQ1ZzQixHQUFhLENBR25CLENBRUEsT0FBT0EsQ0FBUyxFQUdvQyxFQUc3Q3BCLEdBRVhELEVBQUdZLElBQUksT0FBUSxXQUNmWixFQUFHWSxJQUFJLFFBQVMsU0FDaEJaLEVBQUdZLElBQUksUUFBUyxRQUNoQlosRUFBR1ksSUFBSSxRQUFTLGlCQUNoQlosRUFBR1ksSUFBSSxTQUFVLE9BQ2pCVSxRQUFRQyxJQUFJdkIsRUFBR1UsUyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub2RlID0gKGtleSwgdmFsdWUpID0+IHtcbiAgY29uc3QgbmV4dCA9IG51bGw7XG4gIHJldHVybiB7IGtleSwgdmFsdWUsIG5leHQgfTtcbn07XG5cbmNvbnN0IGhhc2hNYXAgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1Y2tldCA9IG5ldyBBcnJheSgxNikuZmlsbCh1bmRlZmluZWQpO1xuXG4gIGNvbnN0IGhhc2ggPSAoa2V5KSA9PiB7XG4gICAgbGV0IGhhc2hDb2RlID0gMDtcbiAgICBsZXQgcmVzID0gMDtcblxuICAgIGNvbnN0IHByaW1lTnVtYmVyID0gMzE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGhhc2hDb2RlID0gcHJpbWVOdW1iZXIgKiBoYXNoQ29kZSArIGtleS5jaGFyQ29kZUF0KGkpO1xuICAgICAgcmVzID0gaGFzaENvZGUgJSBidWNrZXQubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgY29uc3Qgc2V0ID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgIGNvbnN0IG5ld0tleSA9IGtleTtcbiAgICBjb25zdCBoYXNoS2V5ID0gaGFzaChrZXkpO1xuICAgIGxldCBwb2ludGVyID0gYnVja2V0W2hhc2hLZXldO1xuXG4gICAgaWYgKHBvaW50ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcG9pbnRlciA9IG5vZGUobmV3S2V5LCBuZXdWYWx1ZSk7XG4gICAgICBidWNrZXRbaGFzaEtleV0gPSBwb2ludGVyO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwb2ludGVyLmtleSA9PT0gbmV3S2V5KSB7XG4gICAgICBwb2ludGVyLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2hpbGUgKHBvaW50ZXIubmV4dCAhPT0gbnVsbCkge1xuICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dDtcbiAgICAgIGlmIChwb2ludGVyLmtleSA9PT0gbmV3S2V5KSB7XG4gICAgICAgIHBvaW50ZXIudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBvaW50ZXIubmV4dCA9IG5vZGUobmV3S2V5LCBuZXdWYWx1ZSk7XG5cbiAgICBwb2ludGVyID0gMDtcbiAgfTtcblxuICBjb25zdCBnZXQgPSAoa2V5KSA9PiB7XG4gICAgY29uc3QgaGFzaEtleSA9IGhhc2goa2V5KTtcblxuICAgIGxldCBwb2ludGVyID0gYnVja2V0W2hhc2hLZXldO1xuICAgIGlmIChwb2ludGVyID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuICAgIGlmIChwb2ludGVyLmtleSA9PT0ga2V5KSB7XG4gICAgICByZXR1cm4gcG9pbnRlci52YWx1ZTtcbiAgICB9XG4gICAgd2hpbGUgKHBvaW50ZXIubmV4dCAhPT0gbnVsbCkge1xuICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dDtcbiAgICAgIGlmIChwb2ludGVyLmtleSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBwb2ludGVyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IGhhcyA9IChrZXkpID0+IHtcbiAgICBjb25zdCBoYXNoS2V5ID0gaGFzaChrZXkpO1xuXG4gICAgbGV0IHBvaW50ZXIgPSBidWNrZXRbaGFzaEtleV07XG4gICAgaWYgKHBvaW50ZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwb2ludGVyLmtleSA9PT0ga2V5KSByZXR1cm4gdHJ1ZTtcbiAgICB3aGlsZSAocG9pbnRlci5uZXh0ICE9PSBudWxsKSB7XG4gICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0O1xuICAgICAgaWYgKHBvaW50ZXIua2V5ID09PSBrZXkpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCByZW1vdmUgPSAoa2V5KSA9PiB7XG4gICAgY29uc3QgaGFzaEtleSA9IGhhc2goa2V5KTtcblxuICAgIGxldCBwb2ludGVyID0gYnVja2V0W2hhc2hLZXldO1xuICAgIGlmIChwb2ludGVyID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocG9pbnRlci5rZXkgPT09IGtleSkge1xuICAgICAgaWYgKHBvaW50ZXIubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICBidWNrZXRbaGFzaEtleV0gPSBidWNrZXRbaGFzaEtleV0ubmV4dDtcbiAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBidWNrZXRbaGFzaEtleV0gPSB1bmRlZmluZWQ7XG4gICAgICBwb2ludGVyID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgd2hpbGUgKHBvaW50ZXIubmV4dCAhPT0gbnVsbCAmJiBwb2ludGVyLm5leHQua2V5ICE9PSBrZXkpIHtcbiAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHQ7XG4gICAgfVxuXG4gICAgaWYgKHBvaW50ZXIubmV4dC5rZXkgIT09IGtleSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgbGV0IHRtcCA9IHBvaW50ZXIubmV4dDtcblxuICAgIGlmIChwb2ludGVyLm5leHQubmV4dCAhPT0gbnVsbCkge1xuICAgICAgcG9pbnRlci5uZXh0ID0gdG1wLm5leHQ7XG4gICAgICB0bXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcG9pbnRlci5uZXh0ID0gbnVsbDtcbiAgICB0bXAgPSBudWxsO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGxlbmd0aCA9ICgpID0+IHtcbiAgICBsZXQgcmV0TGVuZ3RoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRtcCA9IGJ1Y2tldFtpXTtcbiAgICAgIGlmICh0bXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXRMZW5ndGggKz0gMTtcbiAgICAgICAgd2hpbGUgKHRtcC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgdG1wID0gdG1wLm5leHQ7XG4gICAgICAgICAgcmV0TGVuZ3RoICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0TGVuZ3RoO1xuICB9O1xuXG4gIHJldHVybiB7IGJ1Y2tldCwgaGFzaCwgc2V0LCBnZXQsIGhhcywgcmVtb3ZlLCBsZW5ndGggfTtcbn07XG5cbmNvbnN0IGFhID0gaGFzaE1hcCgpO1xuXG5hYS5zZXQoXCJjaWFvXCIsIFwiZGFybGluZ1wiKTtcbmFhLnNldChcImhlbGxvXCIsIFwiZXJlcmVcIik7XG5hYS5zZXQoXCJIZWxsb1wiLCBcInRydHJcIik7XG5hYS5zZXQoXCJoRWxsT1wiLCBcImlsb3ZlcG90YXRvZXNcIik7XG5hYS5zZXQoXCJpbG92ZXVcIiwgXCIyMzRcIik7XG5jb25zb2xlLmxvZyhhYS5sZW5ndGgoKSk7XG4iXSwibmFtZXMiOlsibm9kZSIsImtleSIsInZhbHVlIiwibmV4dCIsImFhIiwiaGFzaE1hcCIsImJ1Y2tldCIsIkFycmF5IiwiZmlsbCIsInVuZGVmaW5lZCIsImhhc2giLCJoYXNoQ29kZSIsInJlcyIsImkiLCJsZW5ndGgiLCJjaGFyQ29kZUF0Iiwic2V0IiwibmV3VmFsdWUiLCJuZXdLZXkiLCJoYXNoS2V5IiwicG9pbnRlciIsImdldCIsImhhcyIsInJlbW92ZSIsInRtcCIsInJldExlbmd0aCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9