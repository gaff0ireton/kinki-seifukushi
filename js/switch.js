// 定数

const companyButton = document.querySelector('.aCompany');
const therapistButton = document.querySelector('.aTherapist');
const footer = document.querySelector('.footer');
const ulSwitch = document.querySelector('.switch');
const companyTab = document.querySelector('.companyTab');
const therapistTab = document.querySelector('.therapistTab');

// 定数

// 処理

companyButton.addEventListener('click', function () {
    if (!companyTab.classList.contains('openTab')) {
        companyTab.classList.add('openTab');
        therapistTab.classList.remove('openTab');

        if (!footer.classList.contains('colorCompany')) {
            footer.classList.add('colorCompany');
            footer.classList.remove('colorTherapist');
        }

        if (!ulSwitch.classList.contains('companySwitch')) {
            ulSwitch.classList.add('companySwitch');
            ulSwitch.classList.remove('therapistSwitch');
        }

    }
});

therapistButton.addEventListener('click', function () {
    if (!therapistTab.classList.contains('openTab')) {
        therapistTab.classList.add('openTab');
        companyTab.classList.remove('openTab');

        if (!footer.classList.contains('colorTherapist')) {
            footer.classList.add('colorTherapist');
            footer.classList.remove('colorCompany');
        }

        if (!ulSwitch.classList.contains('therapistSwitch')) {
            ulSwitch.classList.add('therapistSwitch');
            ulSwitch.classList.remove('companySwitch');
        }
    }
});

// 処理