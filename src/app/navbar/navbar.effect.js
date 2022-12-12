document.querySelector(".search-open").addEventListener("click", () => {
    let searchBar = document.querySelector(".search-bar");
    searchBar.classList.add("active");
});
document.querySelector(".search-close").addEventListener("click", () => {
    let searchBar = document.querySelector(".search-bar");
    searchBar.classList.remove("active");
});
console.log(document.querySelector(".menu-icon"))
document.querySelector(".menu-icon").addEventListener("click", () => {
    console.log("wtf")
    let menuButton = document.querySelector(".menu-section-holder");
    if (menuButton.classList.contains("active")) {
        menuButton.classList.remove("active")
    } else {
        menuButton.classList.add("active")
    }
})
/* Polyfill for forEach function on nodes from: https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
/* End of Polyfill */

document.querySelectorAll(".menu-section").forEach(node => node.addEventListener("click", () => {
    if (node.classList.contains("menu-active")) {
        node.classList.remove("menu-active")
    } else {
        node.classList.add("menu-active")
    }
}))