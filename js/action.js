const btns = document.querySelectorAll('.btn');
const storeItems = document.querySelectorAll('.store-item');
const searchBox = document.getElementById('search-item');

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        storeItems.forEach(item => {
            if(filter === 'all'){
                item.style.display = 'block';
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = 'block';
                }else{
                    item.style.display = 'none';
                }
            }
        })
    })
});

searchBox.addEventListener('keyup', e => {
    const search = e.target.value.toLowerCase().trim();
    storeItems.forEach(item => {
        if(item.textContent.includes(search)){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
})