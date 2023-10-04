const viewMoreBtn = document.getElementById("view-more-btn")
const articleFour = document.getElementById("article-four")
const articleFive = document.getElementById("article-five")
const articleSix = document.getElementById("article-six")
let isViewed = false

viewMoreBtn.addEventListener(`click`, function() {
    if(isViewed === false) {
        articleFour.style.display = "block"
        articleFive.style.display = "block"
        articleSix.style.display = "block"
        viewMoreBtn.style.display = "none"
        isViewed === true
    }
})