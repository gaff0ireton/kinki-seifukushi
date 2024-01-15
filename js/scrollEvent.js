// 定数


// 定数

// 処理

// companyButton.addEventListener('click', function () {
//     if (!companyTab.classList.contains('openTab')) {
//         companyTab.classList.add('openTab');
//         therapistTab.classList.remove('openTab');

//         if (!footer.classList.contains('colorCompany')) {
//             footer.classList.add('colorCompany');
//             footer.classList.remove('colorTherapist');
//         }

//         if (!ulSwitch.classList.contains('companySwitch')) {
//             ulSwitch.classList.add('companySwitch');
//             ulSwitch.classList.remove('therapistSwitch');
//         }

//     }
// });

// therapistButton.addEventListener('click', function () {
//     if (!therapistTab.classList.contains('openTab')) {
//         therapistTab.classList.add('openTab');
//         companyTab.classList.remove('openTab');

//         if (!footer.classList.contains('colorTherapist')) {
//             footer.classList.add('colorTherapist');
//             footer.classList.remove('colorCompany');
//         }

//         if (!ulSwitch.classList.contains('therapistSwitch')) {
//             ulSwitch.classList.add('therapistSwitch');
//             ulSwitch.classList.remove('companySwitch');
//         }
//     }
// });

// 処理

// ここから


const footerHedaerclick = document.querySelector('.footer');
const ulSwitchHedaerclick = document.querySelector('.switch');
const companyTabHedaerclick = document.querySelector('.companyTab');
const therapistTabHedaerclick = document.querySelector('.therapistTab');


const mainElement = document.getElementById("main");

function scrollMain() {
    mainElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'  // 'start', 'center', 'end', 'nearest'
    });
}

const clickCompany = document.querySelector(".company");

clickCompany.addEventListener('click', function () {
    scrollMain();
    if (!companyTabHedaerclick.classList.contains('openTab')) {
        companyTabHedaerclick.classList.add('openTab');
        therapistTabHedaerclick.classList.remove('openTab');

        if (!footerHedaerclick.classList.contains('colorCompany')) {
            footerHedaerclick.classList.add('colorCompany');
            footerHedaerclick.classList.remove('colorTherapist');
        }

        if (!ulSwitchHedaerclick.classList.contains('companySwitch')) {
            ulSwitchHedaerclick.classList.add('companySwitch');
            ulSwitchHedaerclick.classList.remove('therapistSwitch');
        }

    }

});

function otherPageLink(){
    clickCompany.addEventListener('click', function () {
        scrollMain();
        if (!companyTabHedaerclick.classList.contains('openTab')) {
            companyTabHedaerclick.classList.add('openTab');
            therapistTabHedaerclick.classList.remove('openTab');
    
            if (!footerHedaerclick.classList.contains('colorCompany')) {
                footerHedaerclick.classList.add('colorCompany');
                footerHedaerclick.classList.remove('colorTherapist');
            }
    
            if (!ulSwitchHedaerclick.classList.contains('companySwitch')) {
                ulSwitchHedaerclick.classList.add('companySwitch');
                ulSwitchHedaerclick.classList.remove('therapistSwitch');
            }
    
        }
    
    });
}



// function scrollWork() {
//     sec02Element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'  // 'start', 'center', 'end', 'nearest'
//     });
// }

const clickTherapist = document.querySelector(".therapist");

clickTherapist.addEventListener('click', function () {
    scrollMain();
    if (!therapistTabHedaerclick.classList.contains('openTab')) {
        therapistTabHedaerclick.classList.add('openTab');
        companyTabHedaerclick.classList.remove('openTab');

        if (!footerHedaerclick.classList.contains('colorTherapist')) {
            footerHedaerclick.classList.add('colorTherapist');
            footerHedaerclick.classList.remove('colorCompany');
        }

        if (!ulSwitchHedaerclick.classList.contains('therapistSwitch')) {
            ulSwitchHedaerclick.classList.add('therapistSwitch');
            ulSwitchHedaerclick.classList.remove('companySwitch');
        }
    }
});

const contactElement = document.getElementById("contact");

function scrollContact() {
    contactElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'  // 'start', 'center', 'end', 'nearest'
    });
}

const clickContact = document.querySelector(".contact");

clickContact.addEventListener('click', function () {
    scrollContact();
});



// スクロール検知用の関数
function handleScroll() {
    // .movieWrap要素を取得
    const movieWrap = document.querySelector('.movieWrap');

    // .headerBox要素を取得
    const headerBox = document.querySelector('.headerBox');

    // .movieWrapと.headerBoxの位置とサイズを取得
    const movieRect = movieWrap.getBoundingClientRect();
    const headerRect = headerBox.getBoundingClientRect();

    // 画面の高さを取得
    const windowHeight = window.innerHeight;

    // .movieWrapが画面外に出ているか判定
    const isMovieOutOfViewport = movieRect.bottom < 0 || movieRect.top > windowHeight;

    // 画面外に出ている場合は.headerBoxにheaderBoxScクラスを追加、そうでない場合は削除
    if (isMovieOutOfViewport) {
        headerBox.classList.add('headerBoxSc');
    } else {
        headerBox.classList.remove('headerBoxSc');
    }
}

// スクロールイベントにhandleScroll関数を登録
window.addEventListener('scroll', handleScroll);

// ページ読み込み時にも初回の判定を行う
window.addEventListener('load', handleScroll);
