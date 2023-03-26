const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var tabTitles = $$(".tabs-title-item");
var tabContents = $$(".tabs-content-item");

var activeTitle = $(".tabs-title-item.active");
var line = $(".tabs-title .line");

requestIdleCallback(function () {
    line.style.left = activeTitle.offsetLeft + "px";
    line.style.width = activeTitle.offsetWidth + "px";
});

tabTitles.forEach(function (tab, index) {
    const titleContent = tabContents[index];
    tab.onclick = function () {
        $(".tabs-title-item.active").classList.remove("active");
        $(".tabs-content-item.active").classList.remove("active");
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
        this.classList.add("active");
        titleContent.classList.add("active");
    };
});
