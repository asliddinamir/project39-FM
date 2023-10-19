const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const bookmarkBtnDiv = document.querySelector('.bookmarkBtnDiv');
const bookmarkBtn = document.querySelector('.bookmarkBtn');
const showRewardBtn = document.getElementById('showReward');
const rewardSection = document.querySelector('.reward');
const close = document.querySelector('.close');

close.addEventListener('click', () => {
    rewardSection.classList.remove('fixed-reward')
    overlay.classList.remove('show-overlay');
})

showRewardBtn.addEventListener('click', () => {
    rewardSection.classList.toggle('fixed-reward');
    overlay.classList.toggle('show-overlay');
    if (rewardSection.classList.contains('fixed-reward')) {
        nav.classList.remove('show-nav');
    }
});

menu.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
    overlay.classList.add('show-overlay');
    if (nav.classList.contains('show-nav')) {
        rewardSection.classList.remove('fixed-reward');
    }
});

overlay.addEventListener('click', () => {
    nav.classList.remove('show-nav');
    overlay.classList.remove('show-overlay');
    rewardSection.classList.remove('fixed-reward');
});

bookmarkBtnDiv.addEventListener('click', () => {
    bookmarkBtnDiv.classList.toggle('bookmarked');
    if (bookmarkBtnDiv.classList.contains('bookmarked')) {
        bookmarkBtn.innerText = `Bookmarked`;
    } else {
        bookmarkBtn.innerText = `Bookmark`;
    }
});
