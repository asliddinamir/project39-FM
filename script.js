const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const bookmarkBtnDiv = document.querySelector('.bookmarkBtnDiv');
const bookmarkBtn = document.querySelector('.bookmarkBtn');
const showRewardBtn = document.getElementById('showReward');
const rewardSection = document.querySelector('.reward');
const close = document.querySelector('.close');
const radioInputs = document.querySelectorAll(".radio");
const brHeaders = document.querySelectorAll(".br_header");
const brFooters = document.querySelectorAll('.br_footer');
const amountBacked = document.querySelector('.amountBacked');
const backers = document.querySelector('.backers');
const meter = document.querySelector('.meter');
const pledgeInputs = document.querySelectorAll('.pledgeInput');


radioInputs.forEach((radioInput) => {
    radioInput.addEventListener('change', () => {
        const pledgeValue = parseFloat(radioInput.getAttribute('data-pledge-value'));
        if (!isNaN(pledgeValue)) {
            // Update the amount backed and format it
            const totalAmount = parseFloat(amountBacked.textContent.replace(/[^0-9.]/g, ''));
            amountBacked.textContent = `$${(totalAmount + pledgeValue).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

            // Update the meter value
            meter.value = totalAmount + pledgeValue;

            // Increment the backers by 1
            const totalBackers = parseInt(backers.textContent.replace(/,/g, ''));
            backers.textContent = (totalBackers + 1).toLocaleString();
        }
    });
});

function formatNumberWithCommas(number) {
    // Convert the number to a string and remove trailing .0 if it exists
    const formattedNumber = number.toString().replace(/\.0$/, '');
    // Add commas for thousands separator
    return formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateAmountFormatAndBacked() {
    let totalAmount = parseFloat(amountBacked.textContent.replace(/[^0-9.]/g, ''));
    let totalBackers = parseInt(backers.textContent.replace(/,/g, ''));

    pledgeInputs.forEach((pledgeInput) => {
        const inputValue = parseFloat(pledgeInput.value);
        if (!isNaN(inputValue)) {
            // Update the total amount backed and format it
            totalAmount += inputValue;
            const formattedTotalAmount = formatNumberWithCommas(totalAmount);
            amountBacked.textContent = `$${formattedTotalAmount}`;

            // Update the meter value
            meter.value = totalAmount;

            // Increment the backers by 1
            totalBackers += 1;
            backers.textContent = totalBackers.toLocaleString();
            pledgeInput.value = ''; // Clear the input field
        }
    });
}


// Add an event listener to each pledge input
pledgeInputs.forEach((pledgeInput) => {
    pledgeInput.addEventListener('change', () => {
        updateAmountFormatAndBacked();
    });
});

updateAmountFormatAndBacked();



const continueButtons = document.querySelectorAll('.continueBtn');
continueButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const pledgeInput = button.closest(".br_footer").querySelector('.pledgeInput');
        const inputValue = parseFloat(pledgeInput.value);
        if (!isNaN(inputValue)) {
            // Update the amount backed with the input value
            updateAmountFormatAndBacked();
            pledgeInput.value = ""; // Clear the input field
        }
    });
});

brHeaders.forEach((brHeader) => {
    brHeader.addEventListener("click", function () {
        radioInputs.forEach((radioInput) => {
            radioInput.checked = false;
        });

        const radioInput = brHeader.querySelector(".radio");
        radioInput.checked = true;
        updateAmountFormatAndBacked();

        brFooters.forEach((brFooter) => {
            brFooter.classList.remove("brf_show");
        });

        const brFooter = brHeader.closest('.bookmark_about_inner').querySelector('.br_footer');
        brFooter.classList.add('brf_show');
    });
});

close.addEventListener('click', () => {
    rewardSection.classList.remove('fixed-reward');
    overlay.classList.remove('show-overlay');
});

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
