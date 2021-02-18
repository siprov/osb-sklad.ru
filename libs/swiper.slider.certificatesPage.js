import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
            function initSwiper(containerSelector) {
                const options = {
                    navigation: {
                        nextEl: '.leftCertificates',
                        prevEl: '.rightCertificates'
                    },
                    slidesPerView: 4,
                    spaceBetween: 30,
                    preloadImages: false,
                };
        return new Swiper(containerSelector + ' .swiper-container', options);
        }

        function initPortfolio (
            containerSelector = '#slider',
            // itemsContainerSelector ='#slider .slider_sertificates'
        ) {
            const $categoriesButtons = $('.slider-categories-nav').find(
            '.slider-categories-nav__item'
          );
        //   console.log($categoriesButtons);
        //   const $itemsContainer = $(itemsContainerSelector);
          const itemsSwiper = initSwiper(containerSelector);
          const $items = $('.sertificate-slider-slide', containerSelector).clone();

          function activateCategoryButton($button) {
            const categoryId = $button.data('categoryId');
            $categoriesButtons.removeClass('active');
            $button.addClass('active');

            const $newSlides = $items.filter(function() {
              const categories = $(this).data('categories');
              return categories ? categories.indexOf(categoryId) !== -1 : false;
            });

            itemsSwiper.removeAllSlides();
            itemsSwiper.appendSlide($newSlides.toArray());
          }

          if ($categoriesButtons && $categoriesButtons.length) {
            activateCategoryButton($categoriesButtons.first());
            $categoriesButtons.on('click', function() {
              activateCategoryButton($(this));
            });
          }
        };

        initPortfolio();

        let tabs_certificates = document.querySelectorAll('.button_certificates');
        let tabsArray = [];
        let selectTabsArray = [];

        for (let tab_certificates of tabs_certificates) {
            tabsArray.push(tab_certificates);
        }

        for (let i = 0; i <= tabsArray.length - 1; i ++) {
            tabsArray[i].onclick = function () {
                selectTabsArray[0] = tabsArray[i];
                selectTabsArray[0].classList.add('tabSelect_certificates');
                for (let j = 0; j <= tabsArray.length - 1; j ++) {
                    if (tabsArray[j] !== selectTabsArray[0]) {
                        console.log('x');
                        tabsArray[j].classList.remove('tabSelect_certificates');
                    }
                }
            }
        }