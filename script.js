function toggleInfo(elem) {
    var info = elem.nextElementSibling;
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}