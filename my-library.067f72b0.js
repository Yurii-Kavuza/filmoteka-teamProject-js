var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequirea226;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var c={id:e,exports:{}};return t[e]=c,n.call(c.exports,c,c.exports),c.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequirea226=n);const c={watched:document.querySelector(".js-btn-watched"),queue:document.querySelector(".js-btn-queue")};function i(){c.queue.classList.contains("library__btn--current")?(c.queue.classList.remove("library__btn--current"),c.watched.classList.add("library__btn--current")):c.watched.classList.add("library__btn--current")}c.watched.addEventListener("click",i),c.queue.addEventListener("click",(function(){c.watched.classList.contains("library__btn--current")?(c.watched.classList.remove("library__btn--current"),c.queue.classList.add("library__btn--current")):c.queue.classList.add("library__btn--current")}));var a=n("b5rV1"),u=n("9kkjz");const l=document.querySelector(".library_watched"),s=document.querySelector(".listFilm");l.addEventListener("click",(()=>d("watchedList")));function d(e){let t=(0,a.getStorage)(e);if(void 0===t||0===t.length)s.innerHTML="",console.log("error: нічого не добавлено ");else{const e=(r=t,n=u.watchedMarkup,r.reduce(((e,t)=>e+n(t)),""));s.innerHTML="",s.insertAdjacentHTML("beforeend",e)}var r,n}document.querySelector(".library_queue").addEventListener("click",(()=>d("queueList"))),n("bO1YF"),n("kYzA7"),n("310RO"),n("1pynF"),i(),d("watchedList");
//# sourceMappingURL=my-library.067f72b0.js.map
