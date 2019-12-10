const btns = document.querySelectorAll('.filter-btn');
const storeItems = document.querySelectorAll('.store-item');
const searchBox = document.getElementById('search-item');
const lBCon = document.querySelector('.lightbox-container');
const lBItem = document.querySelector('.lightbox-item');
const images = document.querySelectorAll('.store-img');
const lBBtn = document.querySelectorAll('.lightbox-control');
const lBClose = document.querySelector('.lightbox-close');

let imageList = [];
let imgCount = 0;

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
});

images.forEach(image => {
    imageList.push(image.src);
});

storeItems.forEach(item => {
    item.addEventListener('click', e => {
        let image = e.target.src;
        lBItem.style.backgroundImage = `url(${image})`;
        lBCon.classList.add('show');
        imgCount = imageList.indexOf(image);
    });
});

lBBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('btnLeft')){
            imgCount--;
            if(imgCount < 0){
                imgCount = imageList.length - 1;
            }
        }
        if(btn.classList.contains('btnRight')){
            imgCount++;
            if(imgCount >= imageList.length){
                imgCount = 0;
            }
        }
        lBItem.style.backgroundImage = `url(${imageList[imgCount]})`;
    });
});

lBClose.addEventListener('click', () => {
    lBCon.classList.remove('show');
});