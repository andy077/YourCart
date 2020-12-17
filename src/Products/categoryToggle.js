

const categoryToggle = () => {
    const catMain = document.getElementsByClassName('category_main');
    const arrow = document.getElementById('catArrow');
    const catBtn = document.getElementById('cat_btn');
    if(catMain[0].style.display === 'flex') {
        catMain[0].style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
        catBtn.style.background = '#1e272e';
        catBtn.style.color = '#fff';
    }else {
        catMain[0].style.display = 'flex';
        arrow.style.transform = 'rotate(180deg)';
        catBtn.style.background = '#fff';
        catBtn.style.color = '#000';
        catBtn.style.border = 'solid 1px #000';
    }        
}

export default categoryToggle;