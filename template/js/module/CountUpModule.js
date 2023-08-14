export default function CountUpModule() {
  // $(document).ready(function () {
  //   $('.as-number .count').counterUp({
  //     delay: 5,
  //     time: 3000
  //   });
  // });

  let a = 0;
  let counterBlock = document.querySelector(".counter-js");
  if (counterBlock) {
    let oTop = counterBlock.offsetTop - window.innerHeight;
    $(window).on("scroll", function () {
      if (a == 0 && $(window).scrollTop() > oTop) {
        console.log($(".numb-count").attr("data-count"));
        $(".numb-count").each(function () {
          let $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },

            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum) < 10 ? `${Math.floor(this.countNum)}` : `${Math.floor(this.countNum)}`);
              },
              complete: function () {
                $this.text(Math.floor(this.countNum) < 10 ? `${Math.floor(this.countNum)}` : `${Math.floor(this.countNum)}`);
              },
            }
          );
        });
        a = 1;
      }
    });
  } else {
    return;
  }

  // co dau phay

  $(document).ready(function () {
    const counters = $('.counts');
    const duration = 2000;
    let startTimes = Array(counters.length).fill(null);
    var isCountersVisible = Array(counters.length).fill(false);

    function formatNumber(number) {
      if (number >= 1000) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        return number.toString();
      }
    }

    function updateCounter(timestamp, index) {
      if (!startTimes[index]) startTimes[index] = timestamp;
      let progress = timestamp - startTimes[index];
      let targetValue = parseInt(counters.eq(index).data('count'));

      let counter = Math.floor((progress / duration) * targetValue);
      counters.eq(index).text(formatNumber(counter));

      if (progress < duration) {
        requestAnimationFrame(function (timestamp) {
          updateCounter(timestamp, index);
        });
      } else {
        counter = targetValue;
        counters.eq(index).text(formatNumber(counter));
      }
    }

    $(window).scroll(function () {
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      counters.each(function (index) {
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
          if (!isCountersVisible[index]) {
            isCountersVisible[index] = true;
            requestAnimationFrame(function (timestamp) {
              updateCounter(timestamp, index);
            });
          }
        }
      });
    });
  });
}