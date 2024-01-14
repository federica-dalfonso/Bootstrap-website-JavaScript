//icon color
const bookmarks = document.getElementsByClassName("fa-bookmark");

for (element of bookmarks) {
    element.addEventListener("mouseenter", (event) => {
        event.target.classList.add("fa-solid");
    });
    element.addEventListener("mouseleave", (event) => {
        event.target.classList.remove("fa-solid");
    })
}

//card shadow
const cards = document.getElementsByClassName("card");

for (box of cards) {
    box.addEventListener ("mouseenter", (event) => {
        event.target.classList.add("zoom");
});
box.addEventListener ("mouseleave", (event) => {
    event.target.classList.remove("zoom");
})
}
