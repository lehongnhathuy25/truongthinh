export default function VerticalScroll() {
    var scrollContainer = document.querySelector('.scroll-container');
    var scrollHandle = document.querySelector('.scroll-handle');
    var isDragging = false;
    var lastY = 0;
    if (scrollContainer) {
        scrollContainer.addEventListener('mousedown', function (e) {
            isDragging = true;
            lastY = e.clientY;
            scrollContainer.classList.add('grabbing');
        });

        scrollContainer.addEventListener('mouseup', function () {
            isDragging = false;
            scrollContainer.classList.remove('grabbing');
        });

        scrollContainer.addEventListener('mousemove', function (e) {
            if (!isDragging) return;
            var delta = e.clientY - lastY;
            lastY = e.clientY;
            var newScrollTop = scrollContainer.scrollTop + delta;
            requestAnimationFrame(function () {
                scrollContainer.scrollTop = newScrollTop;
            });
        });

        scrollContainer.addEventListener('mouseleave', function () {
            isDragging = false;
            scrollContainer.classList.remove('grabbing');
        });
    }


    const social = document.querySelector('.socialbox');
    if (social) {
        const socialItem = social.querySelector('.clicked');
        const socialIcon = social.querySelector('.socialbox-icon');
        const mail = document.querySelector('.socialbox-item-mail')

        
        let isOpen = false;
        socialIcon.addEventListener('click', () => {
            if (isOpen == false) {
                social.classList.add('open')
                isOpen = true;
            } else {
                social.classList.remove('open')
                $('.socialbox-item-mail').removeClass('open')
                isOpen = false;
            }
        })

        socialItem.addEventListener('click', () => {
            if (!mail.classList.contains('open')) {
                mail.classList.add('open')
            } else {
                mail.classList.remove('open')
            }
        })

    }
}