const e=document.querySelector("body"),t=document.querySelector("[data-start"),d=document.querySelector("[data-stop");let n=null;function o(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.style.backgroundColor=t}d.disabled=!0,t.addEventListener("click",(function(){n=setInterval(o,1e3),t.disabled=!0,d.disabled=!1})),d.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.4088b50f.js.map
