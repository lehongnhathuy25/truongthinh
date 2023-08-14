export default function ItemModule () {
    const item = document.querySelectorAll(".prod-item");
    item.forEach(items => {
        const addToggle = items.querySelector('.prod-add');
        const addBtn = items.querySelector('.prod-add-circle');
        addBtn.addEventListener('click', ()=> {
            addToggle.classList.toggle('open')
        })
    })
}