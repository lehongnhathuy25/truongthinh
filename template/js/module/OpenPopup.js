export default function OpenPopup() {
    const popupClose = document.querySelectorAll(".popup-close");
    const popupOverlay = document.querySelectorAll(".popup-overlay");
    const body = document.getElementsByTagName("body")[0];
    const popup = document.querySelectorAll(".popup");
    if (popupClose) {
        popupClose.forEach((item) => {
            item.addEventListener("click", () => {
                popup.forEach((item) => {
                    item.classList.remove("open");
                    body.classList.remove("no-scroll");
                });
            });
        });
    }
    if (popupOverlay) {
        popupOverlay.forEach((item) => {
            item.addEventListener("click", () => {
                popup.forEach((item) => {
                    item.classList.remove("open");
                    body.classList.remove("no-scroll");
                });
            });
        });
    }

    const popupOpens = document.querySelectorAll(".popup-open");
    if (popupOpens) {
        popupOpens.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const idString = item.getAttribute("data-popup");
                if (popup) {
                    popup.forEach((item) => {
                        if (item.getAttribute("data-popup-id") == idString) {
                            item.classList.add("open");
                            body.classList.add("no-scroll");
                        }
                    });
                }
            });
        });
    }
    const btnActive = document.querySelector('.stt_btn')
    const showActive = document.querySelector('.stt')
    const iconActive = document.querySelectorAll ('.show_icon')
    if( btnActive){
        btnActive.onclick = function(e){
            showActive.classList.toggle('show')
            iconActive.forEach((i)=>{
                const changeIcons= i.classList.contains("show")
                if( changeIcons){
                    i.classList.remove('show')
                }
                else{
                    i.classList.add('show')
                }
            })
        }
    }
    
}
