const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const bookmarkBtnDiv = document.querySelector('.bookmarkBtnDiv');
const bookmarkBtn = document.querySelector('.bookmarkBtn');
const showRewardBtn = document.getElementById('showReward');
const rewardSection = document.querySelector('.reward');
const close = document.querySelector('.close');
const radioInput = document.querySelector(".radio");
const brHeaders = document.querySelectorAll(".br_header");
const brFooters = document.querySelectorAll('.br_footer');


brHeaders.forEach((brHeader) => {
    brHeader.addEventListener("click", function () {
        const checkedRadios = document.querySelectorAll(".br_header .radio:checked");
        checkedRadios.forEach((radio) => {
            radio.checked = false;
        });
        const radioInput = brHeader.querySelector(".radio");
        radioInput.checked = true;

        brFooters.forEach((brFooter) => {
            brFooter.classList.remove("brf_show");
        });

        const brFooter = brHeader.closest('.bookmark_about_inner').querySelector('.br_footer');
        brFooter.classList.add('brf_show');
    });
});


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
    overlay.classList.toggle('show-overlay');
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
