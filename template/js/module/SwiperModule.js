export default function SwiperModule() {
    const megas = document.querySelectorAll(".megas-nav")
    megas.forEach(item => {
        const swiperMegas = item.querySelector('.swiper')
        const prev = item.querySelector('.prev')
        const next = item.querySelector('.next')
        const num = item.querySelector('.num')
        var swiper = new Swiper(swiperMegas, {
            navigation: {
                prevEl: "megas-nav .ctrl-prev",
                nextEl: "megas-nav .ctrl-next",
            },
            pagination: {
                el: num,
                type: "custom",
                renderCustom: function (swiper, current, total) {
                    return '<span class="fraction-current">' + ('' + current).slice(-2);
                }
            },
        });
    })

    var swiper = new Swiper(".megas-brand .swiper", {
        slidesPerView: 10.3,
        spaceBetween: 8,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    const prodBox = document.querySelectorAll('.prod-block')
    prodBox.forEach(items => {
        const swiperBlock = items.querySelector('.swiper')
        const prev = items.querySelector('.ctrl-prev')
        const next = items.querySelector('.ctrl-next')
        const pagi = items.querySelector('.swiper-pagination')
        var swiperBox = new Swiper(swiperBlock, {
            slidesPerView: 2,
            spaceBetween: 8,
            navigation: {
                nextEl: next,
                prevEl: prev
            },
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                },
                440: {
                    slidesPerView: 4,
                    spaceBetween: 8,
                },
                640: {
                    slidesPerView: 5,
                    spaceBetween: 8,
                },
                800: {
                    slidesPerView: 6,
                    spaceBetween: 16,
                },
                990: {
                    slidesPerView: 7,
                    spaceBetween: 18,
                }
            }
        });
    });

    var swiperthumb = new Swiper(".prod-detail-thumb .swiper", {
        slidesPerView: 5,
        spaceBetween: 12,
        direction: 'vertical',
    });
    var swipermain = new Swiper(".prod-detail-main .swiper", {
        speed: 800,
        navigation: {
            prevEl: ".prod-detail-main .ctrl-prev",
            nextEl: ".prod-detail-main .ctrl-next",
        },
        thumbs: {
            swiper: swiperthumb,
        }
    });

    var swiperRelate = new Swiper(".prod-relate-slide .swiper", {
        navigation: {
            prevEl: ".prod-relate-slide .ctrl-prev",
            nextEl: ".prod-relate-slide .ctrl-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            520: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            680: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        }
    });


    var swiperPopThumbs = new Swiper(".popup-infor-thumb .swiper", {
        slidesPerView: 3,
        spaceBetween: 12,
        breakpoints: {
            400: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
            480: {
                slidesPerView: 5,
                spaceBetween: 16,
            },
            690: {
                slidesPerView: 7,
                spaceBetween: 16,
            },
            800: {
                slidesPerView: 9,
                spaceBetween: 12,
            }
        }
    });
    var swiperPopMain = new Swiper(".popup-infor-main .swiper", {
        navigation: {
            prevEl: ".popup-infor-thumb .ctrl-prev",
            nextEl: ".popup-infor-thumb .ctrl-next",
        },
        thumbs: {
            swiper: swiperPopThumbs,
        }
    });


    var swiperCir = new Swiper(".project-link .swiper", {
        slidesPerView: 3,
        spaceBetween: 8,
        navigation: {
            prevEl: ".project-link .ctrl-prev",
            nextEl: ".project-link .ctrl-next",
        },
        breakpoints: {
            450: {
                slidesPerView: 4,
                spaceBetween: 8,
            },
            560: {
                slidesPerView: 5,
                spaceBetween: 8,
            },
            690: {
                slidesPerView: 6,
                spaceBetween: 16,
            },
            900: {
                slidesPerView: 7,
                spaceBetween: 24,
            }
        }
    });
    var swiperVid = new Swiper(".sole-video-wr .swiper", {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
            prevEl: ".sole-video-wr .ctrl-prev",
            nextEl: ".sole-video-wr .ctrl-next",
        },
        breakpoints: {
            450: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 24,
            }
        }
    });



    var swiperViewContent = new Swiper(".ab-view-content-slide .swiper", {
        effect: "fade",
        navigation: {
            prevEl: ".ab-view-content-slide .ctrl-prev",
            nextEl: ".ab-view-content-slide .ctrl-next",
        },
        pagination: {
            el: ".ab-view-flex .ab-view-img-pagi",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
            },
        },
    });
    const dn = document.querySelectorAll('.ab-view-content .ab-view-pagi-it');

    var swiperViewGrid = new Swiper(".ab-view-img-slide", {
        effect: "fade",
        grabCursor: true,
        pagination: {
            el: ".ab-view-content .ab-view-progress",
            type: "progressbar",
        },
        navigation: {
            prevEl: ".ab-view-img .ctrl-prev",
            nextEl: ".ab-view-img .ctrl-next",
        },
        on: {
            slideChange: function (e) {
                var activeIndex = this.activeIndex;
                dn.forEach((item, index) => {
                    if (index <= activeIndex) {
                        item.classList.add('active')
                    } else {
                        item.classList.remove('active')
                    }
                })
            }
        }
    });

    swiperViewContent.controller.control = swiperViewGrid
    swiperViewGrid.controller.control = swiperViewContent

    const swiperSlide = document.querySelectorAll('.ab-slide-wr .swiper-slide')
    const total = swiperSlide.length;
    let totalFloor = Math.floor(total / 2)
    var swiperAbSlide = new Swiper(".ab-slide-wr .swiper", {
        speed: 500,
        spaceBetween: 0,
        centeredSlides: true,
        initialSlide: totalFloor,
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 0,
            },
            400: {
                slidesPerView: 1.5,
                spaceBetween: 0,
            },
            540: {
                slidesPerView: 2.3,
                spaceBetween: 0,
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 0,
            }
        }
    });

    var swiperContent = new Swiper(".ab-slide-content .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        effect: "fade",
    });

    var swiperYear = new Swiper(".ab-slide-year .swiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 500,
        centeredSlides: true,
        initialSlide: totalFloor,
        navigation: {
            prevEl: ".ab-slide-year .ctrl-prev",
            nextEl: ".ab-slide-year .ctrl-next",
        },
        thumbs: {
            swiper: swiperContent,
        }
    });


    swiperAbSlide.controller.control = swiperYear
    swiperYear.controller.control = swiperAbSlide

    var swiperCerti = new Swiper(".ab-certi-slide .swiper", {
        slidesPerView: 3,
        spaceBetween: 24,
        pagination: {
            el: ".ab-certi-slide .ctrl-progress",
            type: 'progressbar',
        },
        navigation: {
            prevEl: ".ab-certi-slide .ctrl-prev",
            nextEl: ".ab-certi-slide .ctrl-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            400: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        }
    });


    var swiperHome = new Swiper(".home-bn .swiper", {
        effect: "fade",
        speed: 700,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        pagination: {
            el: ".home-bn .home-bn-pagi",
            clickable: true
        },
        
        navigation: {
            prevEl: ".home-bn .ctrl-prev",
            nextEl: ".home-bn .ctrl-next",
        },
    });

    var swiperSol = new Swiper(".home-sol .swiper", {
        pagination: {
            el: ".home-sol .home-sol-progress",
            type: 'progressbar',
            clickable: true
        },
        navigation: {
            prevEl: ".home-sol .ctrl-prev",
            nextEl: ".home-sol .ctrl-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            400: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            560: {
                slidesPerView: 3,
                spaceBetween: 8,
            },
            900: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 24,
            }
        }
    });

    const homePJ = document.querySelectorAll('.home-pj-swiper')
    homePJ.forEach(item => {
        const swiperPJ = item.querySelector('.swiper');
        var swiperSol = new Swiper(swiperPJ, {
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 8,
                },
                400: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                }
            }
        });
    })

    var swiperCusContent = new Swiper(".home-cus-content .swiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        grabCursor: true,
        effect: "fade",
        pagination: {
            el: ".home-cus-content .ctrl-pagi",
            clickable: true
        },
        navigation: {
            prevEl: ".home-cus .ctrl-prev",
            nextEl: ".home-cus .ctrl-next",
        },
    });

    var swiperBrand = new Swiper(".home-cus-brand .swiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        effect: "fade",
    });

    swiperCusContent.controller.control = swiperBrand
    swiperBrand.controller.control = swiperCusContent

    const homeProd = document.querySelectorAll('.home-prod-slide')
    homeProd.forEach(items => {
        const swiperProds = items.querySelector('.swiper')
        const prev = items.querySelector('.ctrl-prev')
        const next = items.querySelector('.ctrl-next')
        var swiperHomeProd = new Swiper(swiperProds, {
            navigation: {
                prevEl: prev,
                nextEl: next,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 8,
                },
                350: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                680: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                }
            }
        });
    })

    var swiperHomeEvent = new Swiper('.home-event-wr .swiper', {
        navigation: {
            prevEl: '.home-event-wr .ctrl-prev',
            nextEl: '.home-event-wr .ctrl-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 8,
            },
            520: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            680: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        }
    });


    var swiperEvents = new Swiper('.news-event-list .swiper', {
        navigation: {
            prevEl: '.news-event-list .ctrl-prev',
            nextEl: '.news-event-list .ctrl-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 24,
            }
        }
    });
}
