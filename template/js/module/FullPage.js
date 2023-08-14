export default function FullPage() {
    // var fullpages = document.querySelector("#fullpage");
    // const header = document.querySelector(".header");
    // const section = document.querySelectorAll("#fullpage .section")
    // if (fullpages) {
    //     if (window.innerWidth > 1200) {
    //         const fphome = new fullpage(fullpages, {
    //             menu: '#menu',
    //             autoScrolling: true,
    //             scrollHorizontally: true,
    //             licenseKey: "gplv3-license",
    //             responsiveWidth: 1200,
    //             anchors: ["homes", "about", "profile", "selection", "journey", "position", "ourvalue", "countdown"],
    //             // navigation: true,

    //             onLeave: function (origin, destination) {
    //                 if (!destination.isFirst) {
    //                     header.classList.add("sticky");
    //                 } else {
    //                     // header.classList.remove("sticky");
    //                     header.classList.add("trans");
    //                 }
    //                 if (destination.index == 1) {
    //                     header.classList.add("white");
    //                     header.classList.remove("trans");
    //                     // header.classList.remove("sticky");
    //                 } else {
    //                     header.classList.remove("white");
    //                 }
    //                 if (destination.index == 2) {
    //                     // header.classList.remove("sticky");
    //                     header.classList.add("trans");
    //                 }
    //                 if (section) {
    //                     section.forEach((item, sectionIndex) => {
    //                         if (sectionIndex <= destination.index) {
    //                             item.classList.add('is-active')
    //                         }
    //                     })
    //                 }

    //             },
    //             afterLoad: function (origin, destination) {
    //                 if (!destination.isFirst) {
    //                     header.classList.add("sticky");
    //                 } else {
    //                     header.classList.remove("sticky");
    //                     // header.classList.add("trans");
    //                 }
    //                 // if (destination.index == 1) {
    //                 //     // header.classList.add("white");
    //                 //     // header.classList.remove("trans");
    //                 //     // header.classList.remove("sticky");
    //                 // } else {
    //                 //     header.classList.remove("white");
    //                 // }
    //                 // if (destination.index == 2) {
    //                 //     // header.classList.remove("sticky");
    //                 //     header.classList.add("trans");
    //                 // }
    //                 // if (section) {
    //                 //     section.forEach((item, sectionIndex) => {
    //                 //         if (sectionIndex <= destination.index) {
    //                 //             item.classList.add('is-active')
    //                 //         }
    //                 //     })
    //                 // }
    //             }


    //         });
    //         const popUp = document.querySelector('.popup')
    //         const popClose = document.querySelector('.popup-close')
    //         const popOver = document.querySelector('.popup-overlay')
    //         const popItem = document.querySelectorAll('.position-item')
    //         popItem.forEach(item => {
    //             item.addEventListener('click', ()=> {
    //                 if ($(popUp).hasClass('open')) {
    //                     fphome.setMouseWheelScrolling(false);
    //                 } else {
    //                     fphome.setMouseWheelScrolling(true);
    //                 }
    //             })
    //         })
    //         popClose.addEventListener('click', ()=> {
    //             fphome.setMouseWheelScrolling(true);
    //         })
    //         popOver.addEventListener('click', ()=> {
    //             fphome.setMouseWheelScrolling(true);
    //         })
            
    //     }
    // }

    // let headerHeight = header.clientHeight;
    // const contactPage = document.querySelector('.sec-contact')
    // if (contactPage && window.innerWidth > 1200) {
    //     let height = window.innerHeight - headerHeight;
    //     console.log(height)

    //     contactPage.style = `height: ${height}px`
    // }


    // const heightDevice = document.querySelectorAll(".fp-tableCell");
    // if (heightDevice[0]) {
    //     let heightItem = heightDevice[0].getBoundingClientRect().height;
    //     console.log(heightDevice)
    //     if (heightItem < 900 && window.innerWidth > 1200) {
    //         $(".sec-middle").addClass("check-device")
    //         $(".section.footer").addClass("check-device")
    //     }
    // }
}