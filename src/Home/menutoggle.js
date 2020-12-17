


const menuToggle = () => {
    const menu = document.getElementById('menu');
    const menuList = document.getElementsByClassName('menuList');

    if (menu.style.maxHeight === '300px') {
        menu.style.maxHeight = '0px';
    } else {
        menu.style.maxHeight = '300px';
    }
    for (var i = 0; i < menuList.length; i++) {
        menuList[i].style.display = 'block';
    }
}


export default menuToggle;