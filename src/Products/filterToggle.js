

    const filterToggle = () => {
        const filMain = document.getElementsByClassName('filter_main');
        const filArrow = document.getElementById('filterArrow');
        const filBtn = document.getElementById('filter_btn');
        if(filMain[0].style.display === 'flex') {
            filMain[0].style.display = 'none';
            filArrow.style.transform = 'rotate(0deg)';     
            filBtn.style.background = '#1e272e';
            filBtn.style.color = '#fff';
        }else {
            filMain[0].style.display = 'flex';
            filArrow.style.transform = 'rotate(180deg)';
            filBtn.style.background = '#fff';
            filBtn.style.color = '#000';
            filBtn.style.border = 'solid 1px #000';
        }        
    }

    export default filterToggle;