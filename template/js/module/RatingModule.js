export default function RatingModule() {
    const star = document.querySelectorAll('.rating .stars');

    star.forEach((item, index) => {
        item.addEventListener('click', () => {

            star.forEach((item2, i) => {
                if (i <= index) {
                    item2.classList.add('active')
                } else {
                    item2.classList.remove('active')

                }
            })
        })
    })
}