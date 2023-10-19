const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const bookmarkBtnDiv = document.querySelector('.bookmarkBtnDiv')
const bookmarkBtn = document.querySelector('.bookmarkBtn')

menu.addEventListener('click', toggler)
overlay.addEventListener('click', toggler)

function toggler() {
    nav.classList.toggle('show-nav');
    overlay.classList.toggle('show-overlay');
}

bookmarkBtnDiv.addEventListener('click', () => {
    bookmarkBtnDiv.classList.toggle('bookmarked');
    if (bookmarkBtnDiv.classList.contains('bookmarked')) {
        bookmarkBtn.innerText = `Bookmarked`
    } else {
        bookmarkBtn.innerText = `Bookmark`
    }
});
