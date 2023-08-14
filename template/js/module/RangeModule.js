export default function RangeModule() {
  const rangeBlock = document.querySelectorAll(".range-block");
  if (rangeBlock) {
    rangeBlock.forEach((range) => {
      const rangeInputs = range.querySelectorAll(".range-input input");
      const progress = range.querySelector(".range-slider .progress");
      const priceMinHtml = range.querySelector(".range-item.min .price");
      const priceMaxHtml = range.querySelector(".range-item.max .price");
      const priceMin = priceMinHtml.dataset.minPrice;
      const priceMax = priceMaxHtml.dataset.maxPrice;
      // priceMinHtml.innerHTML = priceMin / 1000000 + " triệu";
      // priceMaxHtml.innerHTML = priceMax / 1000000 + " triệu";


      // if(priceMin > 1000000) {
      //   priceMinHtml.innerHTML = priceMin / 1000000 + " triệu";
      // }else {
      //   priceMinHtml.innerHTML = priceMin;
      // }

      // if(priceMax > 1000000) {
      //   priceMaxHtml.innerHTML = priceMax / 1000000 + " triệu";
      // }else {
      //   priceMaxHtml.innerHTML = priceMax;
      // }

      // if (priceMin > 1000000000) {
      //   priceMinHtml.innerHTML = priceMin / 1000000000 + " tỷ";
      // } else {
      //   priceMinHtml.innerHTML = priceMin / 1000000 + " triệu";
      // }

      // if (priceMax > 1000000000) {
      //   priceMaxHtml.innerHTML = priceMax / 1000000000 + " tỷ";
      // } else {
      //   priceMaxHtml.innerHTML = priceMax / 1000000 + " triệu";
      // }

      let priceString = priceMin.toString().split('');
      if (priceString.length > 9) {
        priceMinHtml.innerHTML = `${priceMin / 1000000000} tỷ`;
      } else if (priceString.length <= 9 && priceString.length > 6) {
        priceMinHtml.innerHTML = `${priceMin / 1000000} triệu`;
      } else if (priceString.length <= 6 && priceString.length > 3) {
        priceMinHtml.innerHTML = `${priceMin}`;
      } else {
        priceMinHtml.innerHTML = `${priceMin}`;
      }

      let priceStrings = priceMax.toString().split('');
      if (priceString.length > 9) {
        priceMaxHtml.innerHTML = `${priceMax / 1000000000} tỷ`;
      } else if (priceStrings.length <= 9 && priceStrings.length > 6) {
        priceMaxHtml.innerHTML = `${priceMax / 1000000} triệu`;
      } else if (priceStrings.length <= 6 && priceStrings.length > 3) {
        priceMaxHtml.innerHTML = `${priceMax}`;
      } else {
        priceMaxHtml.innerHTML = `${priceMax}`;
      }

      let priceGap = 100000;
      if (rangeInputs && progress) {
        let minVal = parseInt(rangeInputs[0].value);
        let maxVal = parseInt(rangeInputs[1].value);
        progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
        progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";

        rangeInputs.forEach((item) => {
          item.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInputs[0].value);
            let maxVal = parseInt(rangeInputs[1].value);
            if (maxVal - minVal < priceGap) {
              if (e.target.className === "range-min") {
                rangeInputs[0].value = maxVal - priceGap;
              } else {
                rangeInputs[1].value = minVal + priceGap;
              }
            } else {
              progress.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
              progress.style.right =
                100 - (maxVal / rangeInputs[1].max) * 100 + "%";
            }
          });
        });
        rangeInputs[0].addEventListener("input", () => {
          let minVal = parseInt(rangeInputs[0].value);
          // if (minVal > 1000000000) {
          //   priceMinHtml.innerHTML = minVal / 1000000000 + " tỷ";
          // } else {
          //   priceMinHtml.innerHTML = minVal / 1000000 + " triệu";
          // }
          let priceString = minVal.toString().split('');
          if (priceString.length > 9) {
            priceMinHtml.innerHTML = `${minVal / 1000000000} tỷ`;
          } else if (priceString.length <= 9 && priceString.length > 6) {
            priceMinHtml.innerHTML = `${minVal / 1000000} triệu`;
          } else if (priceString.length <= 6 && priceString.length > 3) {
            priceMinHtml.innerHTML = `${minVal}`;
          } else {
            priceMinHtml.innerHTML = `${minVal}`;
          }
        });
        rangeInputs[1].addEventListener("input", () => {
          let maxVal = parseInt(rangeInputs[1].value);
          // if (maxVal > 1000000000) {
          //   priceMaxHtml.innerHTML = maxVal / 1000000000 + " tỷ";
          // } else {
          //   priceMaxHtml.innerHTML = maxVal / 1000000 + " triệu";
          // }
          let priceStrings = maxVal.toString().split('');
          if (priceStrings.length > 9) {
            priceMaxHtml.innerHTML = `${maxVal / 1000000000} tỷ`;
          } else if (priceStrings.length <= 9 && priceStrings.length > 6) {
            priceMaxHtml.innerHTML = `${maxVal / 1000000} triệu`;
          } else if (priceStrings.length <= 6 && priceStrings.length > 3) {
            priceMaxHtml.innerHTML = `${maxVal}`;
          } else {
            priceMaxHtml.innerHTML = `${maxVal}`;
          }
        });
      }
    });
  }
  const btnRs = document.querySelector('.btn-rs')
  if (btnRs) {
    btnRs.addEventListener('click', () => {
      $(btnRs).closest('form').find('.recheck-item').removeClass('active')
    })
  }
}
