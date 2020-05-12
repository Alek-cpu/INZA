const sidebar = document.querySelector('.sidebar');
const toggleSidebar = document.querySelector('.toggle-wrap .toggle');
const svgColor = document.querySelector('.toggle .fil__svg');
const profileMnuItem = document.querySelector('nav.mnu');
let items = profileMnuItem.querySelectorAll('nav.mnu > a > div.mnu-item > div.mnu-item__name');
const profileContainer = document.querySelector('div.sidebar-container');
let SetItems = profileContainer.querySelectorAll('div.sidebar-container > div.setItem > div.mnu-item > div.mnu-item__name');
const profileInfoDiv = document.querySelector('.profile-block');
let profileInfoElem = profileInfoDiv.querySelectorAll('.profile-block > .profileTxtElem');
const containerSwitch = document.querySelector('.container');
const sidebarInner = document.querySelector('.profile, .mnu-item');
const shortName = document.querySelector('div.name span.kit');
const sidebarInnerCheck = document.querySelector('.sidebar-name-inner');




toggleSidebar.addEventListener('click', toggleChecked);


function toggleChecked (e) {
    svgColor.classList.toggle( 'checkedToggle');
    sidebar.classList.toggle('goSidebar');

    for (let elem of items) {
        elem.classList.toggle('profileMnuItem');
    }

    for (let elemSetItem of SetItems) {
        elemSetItem.classList.toggle('profileMnuItem');
    }

    for (let txtElem of profileInfoElem) {
        txtElem.classList.toggle('profileMnuItem');
    }

    containerSwitch.classList.toggle('containerToggle');
    sidebarInner.classList.toggle('sidebarInner');
    shortName.classList.toggle('clearkit');
    sidebarInnerCheck.classList.toggle('sidebarInnerCheck');
}

/*THIS*/