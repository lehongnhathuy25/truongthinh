export default function CollapseModule() {
  const clBlock = document.querySelectorAll(".collapse-block");

  if (clBlock) {
    clBlock.forEach((item) => {
      const clBody = item.querySelectorAll(".collapse-body");
      const clItems = item.querySelectorAll(".collapse-item");
      console.log(clItems);
      if (clBody) {
        $(clBody[0]).slideDown();
        clBody[0].parentElement.classList.add("active");
      }
      const head = item.querySelectorAll(".collapse-head");
      head.forEach((item) => {
        item.addEventListener("click", () => {
          clBody.forEach((item) => {
            $(item).slideUp();
          });
          clItems.forEach((item) => {
            $(item).removeClass("active");
          });
          const body = item.parentElement.querySelector(".collapse-body");
          if (body.style.display == "none" || body.style.display == "") {
            $(body).slideDown();
            $(item.parentElement).addClass("active");
          } else {
            $(body).slideUp();
            $(item.parentElement).removeClass("active");
          }
        });
      });
    });
  }
  const clBlockc = document.querySelectorAll(".collapse-blockc");

  if (clBlockc) {
    clBlockc.forEach((item) => {
      const clBody = item.querySelectorAll(".collapse-bodyc");
      const clItems = item.querySelectorAll(".collapse-itemc");
      console.log(clItems);
      if (clBody) {
        $(clBody[0]).slideDown();
        clBody[0].parentElement.classList.add("active");
      }
      const head = item.querySelectorAll(".collapse-headc");
      head.forEach((item) => {
        item.addEventListener("click", () => {
          clBody.forEach((item) => {
            $(item).slideUp();
          });
          clItems.forEach((item) => {
            $(item).removeClass("active");
          });
          const body = item.parentElement.querySelector(".collapse-bodyc");
          if (body.style.display == "none" || body.style.display == "") {
            $(body).slideDown();
            $(item.parentElement).addClass("active");
          } else {
            $(body).slideUp();
            $(item.parentElement).removeClass("active");
          }
        });
      });
    });
  }

  const clfree = document.querySelector(".collapse-blockf");

  if (clfree) {
    const clItems = clfree.querySelectorAll(".collapse-itemf");
    clItems.forEach((items) => {
      const head = items.querySelector(".collapse-headf");
      const body = items.querySelector(".collapse-bodyf");
      head.addEventListener("click", () => {
        $(body).slideToggle();
        head.parentElement.classList.toggle("active");
      });
      $(body).slideUp();
    });
  }

  const clfrees = document.querySelector(".cl-blockf");

  //   if (clfrees) {
  //     const clItems = clfrees.querySelectorAll(".cl-itemf");
  //     clItems.forEach((items) => {
  //       const head = items.querySelector(".cl-headf");
  //       const body = items.querySelector(".cl-bodyf");
  //       head.addEventListener("click", () => {
  //         $(body).slideToggle();
  //         head.parentElement.classList.toggle("active");
  //       });
  //       $(body).slideUp();
  //     });
  //   }
  if (clfrees) {
    const clItems = clfrees.querySelectorAll(".cl-itemf");
    clItems.forEach((items, index) => {
      const head = items.querySelector(".cl-headf");
      const body = items.querySelector(".cl-bodyf");

      head.addEventListener("click", () => {
        // Ẩn tất cả các phần tử body trừ phần tử hiện tại
        clItems.forEach((item) => {
          const itemBody = item.querySelector(".cl-bodyf");
          if (itemBody !== body) {
            $(itemBody).slideUp();
            item.classList.remove("active");
          }
        });

        // Hiển thị/ẩn phần tử body hiện tại
        $(body).slideToggle();
        items.classList.toggle("active");
      });

      // Ẩn tất cả các phần tử body trừ phần tử đầu tiên
      if (index !== 0) {
        $(body).slideUp();
        items.classList.remove("active");
      }
    });
  }
  const vat = document.querySelector(".vat");
  if (vat) {
    const vatcheck = vat.querySelector(".recheck-item");

    vatcheck.addEventListener("click", () => {
      if (!$(vatcheck).hasClass("active")) {
        vat.classList.add("open");
      } else {
        vat.classList.remove("open");
      }
    });
  }
}
