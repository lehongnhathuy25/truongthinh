// export default function Tooltip() {
//     const item = document.querySelectorAll(".prod-item");

//     item.forEach((item) => {
//         const tooltip = item.querySelector('.prod-item-tooltip')
//         item.addEventListener("mouseenter", (event) => {
//             tooltip.style.opacity = "1";
//             tooltip.style.visibility = "visible";
//         });

//         item.addEventListener("mousemove", (event) => {
//             tooltip.style.top = `${event.clientY + 10}px`;
//             tooltip.style.left = `${event.clientX}px`;
//             checkViewport(tooltip);
//         });

//         item.addEventListener("mouseleave", () => {
//             tooltip.style.opacity = "0";
//             tooltip.style.visibility = "hidden";
//         });
//     });

//     function checkViewport(item) {
//         //   check viewport
//         // const element = document.querySelector(".tooltip");

//         const rect = element.getBoundingClientRect();
//         if (rect.right > window.innerWidth - 45) {
//             item.style.left = window.innerWidth - rect.width - 45 + "px";
//         } else if (rect.left < 0) {
//             item.style.left = "0px";
//         }
//         if (rect.bottom > window.innerHeight) {
//             item.style.top = window.innerHeight - rect.height + "px";
//         } else if (rect.top < 0) {
//             item.style.top = "0px";
//         }
//     }

// }