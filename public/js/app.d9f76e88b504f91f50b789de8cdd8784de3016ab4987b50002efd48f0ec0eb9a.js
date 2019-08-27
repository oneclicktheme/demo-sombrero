/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$('.modal-toggle').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('overflow-hidden');
  $('.modal').toggleClass('is-visible');
});
$(document).ready(function () {
  // Color Picker Tool Js
  var themeSwitchers = document.querySelectorAll('.default-switch');
  var dynamicInputs = document.querySelectorAll('input.input-color-picker');

  var handleThemeUpdate = function handleThemeUpdate(cssVars) {
    var root = document.querySelector(':root');
    var keys = Object.keys(cssVars);
    keys.forEach(function (key) {
      root.style.setProperty(key, cssVars[key]);
      $.fn.changeColorForm(key, cssVars[key]);
    });
  };

  themeSwitchers.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var bgColor = e.target.getAttribute('data-bg-color');
      var color = e.target.getAttribute('data-color');
      handleThemeUpdate({
        '--primary-bg-color': bgColor,
        '--primary-color': color
      });
      $("input.input-color-picker[data-id='color']").val(color);
      $("input.input-color-picker[data-id='bg-color']").val(bgColor);
    });
  });
  dynamicInputs.forEach(function (item) {
    item.addEventListener('input', function (e) {
      var cssPropName = "--primary-".concat(e.target.getAttribute('data-id'));
      handleThemeUpdate(_defineProperty({}, cssPropName, e.target.value));
    });
  });

  $.fn.changeColorForm = function (key, color) {
    $("form[name=contact] input[name='".concat(key, "']")).val(color);
  };
});

(function () {
  'use strict';
  /*----------------------------------------
   Detect Mobile
   ----------------------------------------*/

  var isMobile = {
    Android: function Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };
  /*----------------------------------------
   Carousel
   ----------------------------------------*/

  var owlCarousel = function owlCarousel() {
    var owl = jQuery('.owl-carousel-carousel');
    owl.owlCarousel({
      items: 3,
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      smartSpeed: 800,
      autoHeight: true,
      navText: ["<i class='icon-keyboard_arrow_left owl-direction'></i>", "<i class='icon-keyboard_arrow_right owl-direction'></i>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    var owl = jQuery('.owl-carousel-fullwidth');
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      smartSpeed: 800,
      autoHeight: true,
      autoplay: true,
      navText: ["<i class='icon-keyboard_arrow_left owl-direction'></i>", "<i class='icon-keyboard_arrow_right owl-direction'></i>"]
    });
    var owl = jQuery('.owl-work');
    owl.owlCarousel({
      stagePadding: 150,
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      mouseDrag: false,
      autoWidth: true,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      navText: ["<i class='icon-chevron-thin-left'></i>", "<i class='icon-chevron-thin-right'></i>"],
      responsive: {
        0: {
          items: 1,
          stagePadding: 10
        },
        500: {
          items: 2,
          stagePadding: 20
        },
        600: {
          items: 2,
          stagePadding: 40
        },
        800: {
          items: 2,
          stagePadding: 100
        },
        1100: {
          items: 3
        },
        1400: {
          items: 4
        }
      }
    });
  };
  /*----------------------------------------
   Slider
   ----------------------------------------*/


  var flexSlider = function flexSlider() {
    jQuery('.flexslider').flexslider({
      animation: "fade",
      prevText: "",
      nextText: "",
      slideshow: true
    });
  };
  /*----------------------------------------
   Animate Scroll
   ----------------------------------------*/


  var contentWayPoint = function contentWayPoint() {
    var i = 0;
    jQuery('.probootstrap-animate').waypoint(function (direction) {
      if (direction === 'down' && !jQuery(this.element).hasClass('probootstrap-animated')) {
        i++;
        jQuery(this.element).addClass('item-animate');
        setTimeout(function () {
          jQuery('body .probootstrap-animate.item-animate').each(function (k) {
            var el = jQuery(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');

              if (effect === 'fadeIn') {
                el.addClass('fadeIn probootstrap-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft probootstrap-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight probootstrap-animated');
              } else {
                el.addClass('fadeInUp probootstrap-animated');
              }

              el.removeClass('item-animate');
            }, k * 30, 'easeInOutExpo');
          });
        }, 100);
      }
    }, {
      offset: '95%'
    });
  };

  var navbarState = function navbarState() {
    jQuery(window).scroll(function () {
      var $this = jQuery(this),
          st = $this.scrollTop();

      if (st > 5) {
        jQuery('.probootstrap-navbar').addClass('scrolled');
      } else {
        jQuery('.probootstrap-navbar').removeClass('scrolled');
      }
    });
  };

  var initPhotoSwipeFromDOM = function initPhotoSwipeFromDOM(gallerySelector) {
    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function parseThumbnailElements(el) {
      var thumbElements = el.childNodes,
          numNodes = thumbElements.length,
          items = [],
          figureEl,
          linkEl,
          size,
          item;

      for (var i = 0; i < numNodes; i++) {
        figureEl = thumbElements[i]; // <figure> element
        // include only element nodes

        if (figureEl.nodeType !== 1) {
          continue;
        }

        linkEl = figureEl.children[0]; // <a> element

        console.log(figureEl);
        size = linkEl.getAttribute('data-size').split('x'); // create slide object

        item = {
          src: linkEl.getAttribute('href'),
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10)
        };

        if (figureEl.children.length > 1) {
          // <figcaption> content
          item.title = figureEl.children[1].innerHTML;
        }

        if (linkEl.children.length > 0) {
          // <img> thumbnail element, retrieving thumbnail url
          item.msrc = linkEl.children[0].getAttribute('src');
        }

        item.el = figureEl; // save link to element for getThumbBoundsFn

        items.push(item);
      }

      return items;
    }; // find nearest parent element


    var closest = function closest(el, fn) {
      return el && (fn(el) ? el : closest(el.parentNode, fn));
    }; // triggers when user clicks on thumbnail


    var onThumbnailsClick = function onThumbnailsClick(e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
      var eTarget = e.target || e.srcElement; // find root element of slide

      var clickedListItem = closest(eTarget, function (el) {
        return el.tagName && el.tagName.toUpperCase() === 'FIGURE';
      });

      if (!clickedListItem) {
        return;
      } // find index of clicked item by looping through all child nodes
      // alternatively, you may define index via data- attribute


      var clickedGallery = clickedListItem.parentNode,
          childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;

      for (var i = 0; i < numChildNodes; i++) {
        if (childNodes[i].nodeType !== 1) {
          continue;
        }

        if (childNodes[i] === clickedListItem) {
          index = nodeIndex;
          break;
        }

        nodeIndex++;
      }

      if (index >= 0) {
        // open PhotoSwipe if valid index found
        openPhotoSwipe(index, clickedGallery);
      }

      return false;
    }; // parse picture index and gallery index from URL (#&pid=1&gid=2)


    var photoswipeParseHash = function photoswipeParseHash() {
      var hash = window.location.hash.substring(1),
          params = {};

      if (hash.length < 5) {
        return params;
      }

      var vars = hash.split('&');

      for (var i = 0; i < vars.length; i++) {
        if (!vars[i]) {
          continue;
        }

        var pair = vars[i].split('=');

        if (pair.length < 2) {
          continue;
        }

        params[pair[0]] = pair[1];
      }

      if (params.gid) {
        params.gid = parseInt(params.gid, 10);
      }

      return params;
    };

    var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
      var pswpElement = document.querySelectorAll('.pswp')[0],
          gallery,
          options,
          items;
      items = parseThumbnailElements(galleryElement); // define options (if needed)

      options = {
        // define gallery index (for URL)
        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
        getThumbBoundsFn: function getThumbBoundsFn(index) {
          // See Options -> getThumbBoundsFn section of documentation for more info
          var thumbnail = items[index].el.getElementsByTagName('img')[0],
              // find thumbnail
          pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
              rect = thumbnail.getBoundingClientRect();
          return {
            x: rect.left,
            y: rect.top + pageYScroll,
            w: rect.width
          };
        }
      }; // PhotoSwipe opened from URL

      if (fromURL) {
        if (options.galleryPIDs) {
          // parse real index when custom PIDs are used
          // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
          for (var j = 0; j < items.length; j++) {
            if (items[j].pid == index) {
              options.index = j;
              break;
            }
          }
        } else {
          // in URL indexes start from 1
          options.index = parseInt(index, 10) - 1;
        }
      } else {
        options.index = parseInt(index, 10);
      } // exit if index not found


      if (isNaN(options.index)) {
        return;
      }

      if (disableAnimation) {
        options.showAnimationDuration = 0;
      } // Pass data to PhotoSwipe and initialize it


      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    }; // loop through all gallery elements and bind events


    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].setAttribute('data-pswp-uid', i + 1);
      galleryElements[i].onclick = onThumbnailsClick;
    } // Parse URL and open gallery if it contains #&pid=3&gid=1


    var hashData = photoswipeParseHash();

    if (hashData.pid && hashData.gid) {
      openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
  };

  var galleryMasonry = function galleryMasonry() {
    // isotope
    if (jQuery('.portfolio-feed').length > 0) {
      var $container = $('.portfolio-feed');
      $container.imagesLoaded(function () {
        $container.isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer'
          }
        });
      });
    }
  };

  var stellarInit = function stellarInit() {
    if (!isMobile.any()) {
      jQuery(window).stellar();
    }
  };

  var dateTimePicker = function dateTimePicker() {
    jQuery('#time').timepicker();
    jQuery('#date').datepicker({
      'format': 'm/d/yyyy',
      'autoclose': true
    });
  }; // Page Nav


  var clickMenu = function clickMenu() {
    jQuery('.navbar-nav a:not([class="external"])').click(function (event) {
      var section = jQuery(this).data('nav-section'),
          navbar = jQuery('.navbar-nav');

      if (isMobile.any()) {
        jQuery('.navbar-toggle').click();
      }

      if (jQuery('[data-section="' + section + '"]').length) {
        jQuery('html, body').animate({
          scrollTop: jQuery('[data-section="' + section + '"]').offset().top - 55
        }, 500, 'easeInOutExpo');
      }

      event.preventDefault();
      return false;
    });
  }; // Reflect scrolling in navigation


  var navActive = function navActive(section) {
    var $el = jQuery('.navbar-nav');
    $el.find('li').removeClass('active');
    $el.each(function () {
      jQuery(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
    });
  };

  var navigationSection = function navigationSection() {
    var $section = jQuery('section[data-section]');
    $section.waypoint(function (direction) {
      if (direction === 'down') {
        navActive(jQuery(this.element).data('section'));
      }
    }, {
      offset: '150px'
    });
    $section.waypoint(function (direction) {
      if (direction === 'up') {
        navActive(jQuery(this.element).data('section'));
      }
    }, {
      offset: function offset() {
        return -jQuery(this.element).height() - 155;
      }
    });
  };

  jQuery(function () {
    contentWayPoint();
    navbarState();

    if (jQuery('.probootstrap-gallery').length > 0) {
      initPhotoSwipeFromDOM('.probootstrap-gallery');
    }

    galleryMasonry();
    stellarInit();
    dateTimePicker();
    clickMenu();
    navigationSection();
  });
  jQuery(window).load(function () {
    owlCarousel();
    flexSlider();
  });
})();

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleNotFoundError: Module not found: Error: Can't resolve '../fonts/icomoon/icomoon.eot' in '/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/src/sass'\n    at factory.create (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/webpack/lib/Compilation.js:888:10)\n    at factory (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/webpack/lib/NormalModuleFactory.js:401:22)\n    at resolver (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/webpack/lib/NormalModuleFactory.js:130:21)\n    at asyncLib.parallel (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/webpack/lib/NormalModuleFactory.js:224:22)\n    at /Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/neo-async/async.js:2830:7\n    at /Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/neo-async/async.js:6877:13\n    at normalResolver.resolve (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/webpack/lib/NormalModuleFactory.js:214:25)\n    at doResolve (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/Resolver.js:184:12)\n    at hook.callAsync (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn0 (eval at create (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at resolver.doResolve (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:37:5)\n    at hook.callAsync (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn0 (eval at create (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at hook.callAsync (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn0 (eval at create (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at resolver.doResolve (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:42:38)\n    at hook.callAsync (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn43 (eval at create (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at hook.callAsync (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn0 (eval at create (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at resolver.doResolve (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:42:38)\n    at hook.callAsync (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn1 (eval at create (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at hook.callAsync (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn0 (eval at create (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at fs.stat (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:22:13)\n    at process.nextTick (/Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:73:15)\n    at process.internalTickCallback (internal/process/next_tick.js:70:11)");

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/nirajan/Sites/oct-templates/restaurant/restuarant-1/demo-sombrero/themes/demosombrero/src/sass/app.scss */"./src/sass/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyIkIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsImRvY3VtZW50IiwicmVhZHkiLCJ0aGVtZVN3aXRjaGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkeW5hbWljSW5wdXRzIiwiaGFuZGxlVGhlbWVVcGRhdGUiLCJjc3NWYXJzIiwicm9vdCIsInF1ZXJ5U2VsZWN0b3IiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJmbiIsImNoYW5nZUNvbG9yRm9ybSIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiYmdDb2xvciIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImNvbG9yIiwidmFsIiwiY3NzUHJvcE5hbWUiLCJ2YWx1ZSIsImlzTW9iaWxlIiwiQW5kcm9pZCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwiQmxhY2tCZXJyeSIsImlPUyIsIk9wZXJhIiwiV2luZG93cyIsImFueSIsIm93bENhcm91c2VsIiwib3dsIiwialF1ZXJ5IiwiaXRlbXMiLCJsb29wIiwibWFyZ2luIiwibmF2IiwiZG90cyIsInNtYXJ0U3BlZWQiLCJhdXRvSGVpZ2h0IiwibmF2VGV4dCIsInJlc3BvbnNpdmUiLCJhdXRvcGxheSIsInN0YWdlUGFkZGluZyIsIm1vdXNlRHJhZyIsImF1dG9XaWR0aCIsImF1dG9wbGF5VGltZW91dCIsImF1dG9wbGF5SG92ZXJQYXVzZSIsImZsZXhTbGlkZXIiLCJmbGV4c2xpZGVyIiwiYW5pbWF0aW9uIiwicHJldlRleHQiLCJuZXh0VGV4dCIsInNsaWRlc2hvdyIsImNvbnRlbnRXYXlQb2ludCIsImkiLCJ3YXlwb2ludCIsImRpcmVjdGlvbiIsImVsZW1lbnQiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwic2V0VGltZW91dCIsImVhY2giLCJrIiwiZWwiLCJlZmZlY3QiLCJkYXRhIiwicmVtb3ZlQ2xhc3MiLCJvZmZzZXQiLCJuYXZiYXJTdGF0ZSIsIndpbmRvdyIsInNjcm9sbCIsIiR0aGlzIiwic3QiLCJzY3JvbGxUb3AiLCJpbml0UGhvdG9Td2lwZUZyb21ET00iLCJnYWxsZXJ5U2VsZWN0b3IiLCJwYXJzZVRodW1ibmFpbEVsZW1lbnRzIiwidGh1bWJFbGVtZW50cyIsImNoaWxkTm9kZXMiLCJudW1Ob2RlcyIsImxlbmd0aCIsImZpZ3VyZUVsIiwibGlua0VsIiwic2l6ZSIsIm5vZGVUeXBlIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwic3BsaXQiLCJzcmMiLCJ3IiwicGFyc2VJbnQiLCJoIiwidGl0bGUiLCJpbm5lckhUTUwiLCJtc3JjIiwicHVzaCIsImNsb3Nlc3QiLCJwYXJlbnROb2RlIiwib25UaHVtYm5haWxzQ2xpY2siLCJldmVudCIsInJldHVyblZhbHVlIiwiZVRhcmdldCIsInNyY0VsZW1lbnQiLCJjbGlja2VkTGlzdEl0ZW0iLCJ0YWdOYW1lIiwidG9VcHBlckNhc2UiLCJjbGlja2VkR2FsbGVyeSIsIm51bUNoaWxkTm9kZXMiLCJub2RlSW5kZXgiLCJpbmRleCIsIm9wZW5QaG90b1N3aXBlIiwicGhvdG9zd2lwZVBhcnNlSGFzaCIsImhhc2giLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsInBhcmFtcyIsInZhcnMiLCJwYWlyIiwiZ2lkIiwiZ2FsbGVyeUVsZW1lbnQiLCJkaXNhYmxlQW5pbWF0aW9uIiwiZnJvbVVSTCIsInBzd3BFbGVtZW50IiwiZ2FsbGVyeSIsIm9wdGlvbnMiLCJnYWxsZXJ5VUlEIiwiZ2V0VGh1bWJCb3VuZHNGbiIsInRodW1ibmFpbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFnZVlTY3JvbGwiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwibGVmdCIsInkiLCJ0b3AiLCJ3aWR0aCIsImdhbGxlcnlQSURzIiwiaiIsInBpZCIsImlzTmFOIiwic2hvd0FuaW1hdGlvbkR1cmF0aW9uIiwiUGhvdG9Td2lwZSIsIlBob3RvU3dpcGVVSV9EZWZhdWx0IiwiaW5pdCIsImdhbGxlcnlFbGVtZW50cyIsImwiLCJzZXRBdHRyaWJ1dGUiLCJvbmNsaWNrIiwiaGFzaERhdGEiLCJnYWxsZXJ5TWFzb25yeSIsIiRjb250YWluZXIiLCJpbWFnZXNMb2FkZWQiLCJpc290b3BlIiwiaXRlbVNlbGVjdG9yIiwicGVyY2VudFBvc2l0aW9uIiwibWFzb25yeSIsImNvbHVtbldpZHRoIiwiZ3V0dGVyIiwic3RlbGxhckluaXQiLCJzdGVsbGFyIiwiZGF0ZVRpbWVQaWNrZXIiLCJ0aW1lcGlja2VyIiwiZGF0ZXBpY2tlciIsImNsaWNrTWVudSIsImNsaWNrIiwic2VjdGlvbiIsIm5hdmJhciIsImFuaW1hdGUiLCJuYXZBY3RpdmUiLCIkZWwiLCJmaW5kIiwibmF2aWdhdGlvblNlY3Rpb24iLCIkc2VjdGlvbiIsImhlaWdodCIsImxvYWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7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QVQsQ0FBa0IsVUFBU0MsU0FBVCxFQUFvQjtBQUNwQyxVQUFJQSxTQUFTLEtBQUssTUFBbEIsRUFBMEI7QUFDeEJvSCxpQkFBUyxDQUFDN0ksTUFBTSxDQUFDLEtBQUswQixPQUFOLENBQU4sQ0FBcUJRLElBQXJCLENBQTBCLFNBQTFCLENBQUQsQ0FBVDtBQUNEO0FBQ0YsS0FKRCxFQUlHO0FBQ0RFLFlBQU0sRUFBRTtBQURQLEtBSkg7QUFRQTZHLFlBQVEsQ0FBQ3pILFFBQVQsQ0FBa0IsVUFBU0MsU0FBVCxFQUFvQjtBQUNwQyxVQUFJQSxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJvSCxpQkFBUyxDQUFDN0ksTUFBTSxDQUFDLEtBQUswQixPQUFOLENBQU4sQ0FBcUJRLElBQXJCLENBQTBCLFNBQTFCLENBQUQsQ0FBVDtBQUNEO0FBQ0YsS0FKRCxFQUlHO0FBQ0RFLFlBQU0sRUFBRSxrQkFBVztBQUFFLGVBQU8sQ0FBQ3BDLE1BQU0sQ0FBQyxLQUFLMEIsT0FBTixDQUFOLENBQXFCd0gsTUFBckIsRUFBRCxHQUFpQyxHQUF4QztBQUE4QztBQURsRSxLQUpIO0FBUUQsR0FwQkQ7O0FBc0JBbEosUUFBTSxDQUFDLFlBQVU7QUFDZnNCLG1CQUFlO0FBQ2ZlLGVBQVc7O0FBQ1gsUUFBSXJDLE1BQU0sQ0FBQyx1QkFBRCxDQUFOLENBQWdDaUQsTUFBaEMsR0FBeUMsQ0FBN0MsRUFBZ0Q7QUFDOUNOLDJCQUFxQixDQUFDLHVCQUFELENBQXJCO0FBQ0Q7O0FBQ0QrRSxrQkFBYztBQUNkUyxlQUFXO0FBQ1hFLGtCQUFjO0FBQ2RHLGFBQVM7QUFDVFEscUJBQWlCO0FBQ2xCLEdBWEssQ0FBTjtBQWFBaEosUUFBTSxDQUFDc0MsTUFBRCxDQUFOLENBQWU2RyxJQUFmLENBQW9CLFlBQVU7QUFDNUJySixlQUFXO0FBQ1hrQixjQUFVO0FBQ1gsR0FIRDtBQUtELENBaGZELEkiLCJmaWxlIjoiL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbiQoJy5tb2RhbC10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgJCgnLm1vZGFsJykudG9nZ2xlQ2xhc3MoJ2lzLXZpc2libGUnKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIC8vIENvbG9yIFBpY2tlciBUb29sIEpzXG4gIGNvbnN0IHRoZW1lU3dpdGNoZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlZmF1bHQtc3dpdGNoJyk7XG4gIGNvbnN0IGR5bmFtaWNJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5pbnB1dC1jb2xvci1waWNrZXInKTtcbiAgXG4gIGNvbnN0IGhhbmRsZVRoZW1lVXBkYXRlID0gKGNzc1ZhcnMpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoY3NzVmFycyk7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KGtleSwgY3NzVmFyc1trZXldKTtcbiAgICAgICQuZm4uY2hhbmdlQ29sb3JGb3JtKGtleSwgY3NzVmFyc1trZXldKVxuICAgIH0pO1xuICB9XG4gIFxuICB0aGVtZVN3aXRjaGVycy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBiZ0NvbG9yID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWJnLWNvbG9yJylcbiAgICAgIGNvbnN0IGNvbG9yID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJylcbiAgICAgIGhhbmRsZVRoZW1lVXBkYXRlKHtcbiAgICAgICAgJy0tcHJpbWFyeS1iZy1jb2xvcic6IGJnQ29sb3IsXG4gICAgICAgICctLXByaW1hcnktY29sb3InOiBjb2xvclxuICAgICAgfSk7XG4gICAgICAkKFwiaW5wdXQuaW5wdXQtY29sb3ItcGlja2VyW2RhdGEtaWQ9J2NvbG9yJ11cIikudmFsKGNvbG9yKVxuICAgICAgJChcImlucHV0LmlucHV0LWNvbG9yLXBpY2tlcltkYXRhLWlkPSdiZy1jb2xvciddXCIpLnZhbChiZ0NvbG9yKVxuICAgIH0pO1xuICB9KTtcbiAgXG4gIGR5bmFtaWNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY3NzUHJvcE5hbWUgPSBgLS1wcmltYXJ5LSR7ZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyl9YDtcbiAgICAgIGhhbmRsZVRoZW1lVXBkYXRlKHtcbiAgICAgICAgW2Nzc1Byb3BOYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgXG4gICQuZm4uY2hhbmdlQ29sb3JGb3JtID0gZnVuY3Rpb24gKGtleSwgY29sb3IpIHtcbiAgICAkKGBmb3JtW25hbWU9Y29udGFjdF0gaW5wdXRbbmFtZT0nJHtrZXl9J11gKS52YWwoY29sb3IpXG4gIH07XG59KTtcblxuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIERldGVjdCBNb2JpbGVcbiAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICB2YXIgaXNNb2JpbGUgPSB7XG4gICAgQW5kcm9pZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcbiAgICB9LFxuICAgIEJsYWNrQmVycnk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XG4gICAgfSxcbiAgICBpT1M6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSk7XG4gICAgfSxcbiAgICBPcGVyYTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT3BlcmEgTWluaS9pKTtcbiAgICB9LFxuICAgIFdpbmRvd3M6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpO1xuICAgIH0sXG4gICAgYW55OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoaXNNb2JpbGUuQW5kcm9pZCgpIHx8IGlzTW9iaWxlLkJsYWNrQmVycnkoKSB8fCBpc01vYmlsZS5pT1MoKSB8fCBpc01vYmlsZS5PcGVyYSgpIHx8IGlzTW9iaWxlLldpbmRvd3MoKSk7XG4gICAgfVxuICB9O1xuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBDYXJvdXNlbFxuICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIHZhciBvd2xDYXJvdXNlbCA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgdmFyIG93bCA9IGpRdWVyeSgnLm93bC1jYXJvdXNlbC1jYXJvdXNlbCcpO1xuICAgIG93bC5vd2xDYXJvdXNlbCh7XG4gICAgICBpdGVtczogMyxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBtYXJnaW46IDIwLFxuICAgICAgbmF2OiB0cnVlLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIHNtYXJ0U3BlZWQ6IDgwMCxcbiAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgICBuYXZUZXh0OiBbXG4gICAgICAgIFwiPGkgY2xhc3M9J2ljb24ta2V5Ym9hcmRfYXJyb3dfbGVmdCBvd2wtZGlyZWN0aW9uJz48L2k+XCIsXG4gICAgICAgIFwiPGkgY2xhc3M9J2ljb24ta2V5Ym9hcmRfYXJyb3dfcmlnaHQgb3dsLWRpcmVjdGlvbic+PC9pPlwiXG4gICAgICBdLFxuICAgICAgcmVzcG9uc2l2ZTp7XG4gICAgICAgIDA6e1xuICAgICAgICAgIGl0ZW1zOjFcbiAgICAgICAgfSxcbiAgICAgICAgNjAwOntcbiAgICAgICAgICBpdGVtczoyXG4gICAgICAgIH0sXG4gICAgICAgIDEwMDA6e1xuICAgICAgICAgIGl0ZW1zOjNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHZhciBvd2wgPSBqUXVlcnkoJy5vd2wtY2Fyb3VzZWwtZnVsbHdpZHRoJyk7XG4gICAgb3dsLm93bENhcm91c2VsKHtcbiAgICAgIGl0ZW1zOiAxLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIG1hcmdpbjogMjAsXG4gICAgICBuYXY6IGZhbHNlLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIHNtYXJ0U3BlZWQ6IDgwMCxcbiAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIG5hdlRleHQ6IFtcbiAgICAgICAgXCI8aSBjbGFzcz0naWNvbi1rZXlib2FyZF9hcnJvd19sZWZ0IG93bC1kaXJlY3Rpb24nPjwvaT5cIixcbiAgICAgICAgXCI8aSBjbGFzcz0naWNvbi1rZXlib2FyZF9hcnJvd19yaWdodCBvd2wtZGlyZWN0aW9uJz48L2k+XCJcbiAgICAgIF1cbiAgICB9KTtcbiAgICBcbiAgICB2YXIgb3dsID0galF1ZXJ5KCcub3dsLXdvcmsnKTtcbiAgICBvd2wub3dsQ2Fyb3VzZWwoe1xuICAgICAgc3RhZ2VQYWRkaW5nOiAxNTAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgbWFyZ2luOiAyMCxcbiAgICAgIG5hdjogdHJ1ZSxcbiAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgbW91c2VEcmFnOiBmYWxzZSxcbiAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcbiAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5VGltZW91dDoyMDAwLFxuICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOnRydWUsXG4gICAgICBuYXZUZXh0OiBbXG4gICAgICAgIFwiPGkgY2xhc3M9J2ljb24tY2hldnJvbi10aGluLWxlZnQnPjwvaT5cIixcbiAgICAgICAgXCI8aSBjbGFzcz0naWNvbi1jaGV2cm9uLXRoaW4tcmlnaHQnPjwvaT5cIlxuICAgICAgXSxcbiAgICAgIHJlc3BvbnNpdmU6e1xuICAgICAgICAwOntcbiAgICAgICAgICBpdGVtczoxLFxuICAgICAgICAgIHN0YWdlUGFkZGluZzogMTBcbiAgICAgICAgfSxcbiAgICAgICAgNTAwOntcbiAgICAgICAgICBpdGVtczoyLFxuICAgICAgICAgIHN0YWdlUGFkZGluZzogMjBcbiAgICAgICAgfSxcbiAgICAgICAgNjAwOntcbiAgICAgICAgICBpdGVtczoyLFxuICAgICAgICAgIHN0YWdlUGFkZGluZzogNDBcbiAgICAgICAgfSxcbiAgICAgICAgODAwOiB7XG4gICAgICAgICAgaXRlbXM6MixcbiAgICAgICAgICBzdGFnZVBhZGRpbmc6IDEwMFxuICAgICAgICB9LFxuICAgICAgICAxMTAwOntcbiAgICAgICAgICBpdGVtczozXG4gICAgICAgIH0sXG4gICAgICAgIDE0MDA6e1xuICAgICAgICAgIGl0ZW1zOjRcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgU2xpZGVyXG4gICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgdmFyIGZsZXhTbGlkZXIgPSBmdW5jdGlvbigpIHtcbiAgICBqUXVlcnkoJy5mbGV4c2xpZGVyJykuZmxleHNsaWRlcih7XG4gICAgICBhbmltYXRpb246IFwiZmFkZVwiLFxuICAgICAgcHJldlRleHQ6IFwiXCIsXG4gICAgICBuZXh0VGV4dDogXCJcIixcbiAgICAgIHNsaWRlc2hvdzogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIEFuaW1hdGUgU2Nyb2xsXG4gICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgXG4gIHZhciBjb250ZW50V2F5UG9pbnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgalF1ZXJ5KCcucHJvYm9vdHN0cmFwLWFuaW1hdGUnKS53YXlwb2ludCggZnVuY3Rpb24oIGRpcmVjdGlvbiApIHtcbiAgICAgIFxuICAgICAgaWYoIGRpcmVjdGlvbiA9PT0gJ2Rvd24nICYmICFqUXVlcnkodGhpcy5lbGVtZW50KS5oYXNDbGFzcygncHJvYm9vdHN0cmFwLWFuaW1hdGVkJykgKSB7XG4gICAgICAgIFxuICAgICAgICBpKys7XG4gICAgICAgIFxuICAgICAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5hZGRDbGFzcygnaXRlbS1hbmltYXRlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICBcbiAgICAgICAgICBqUXVlcnkoJ2JvZHkgLnByb2Jvb3RzdHJhcC1hbmltYXRlLml0ZW0tYW5pbWF0ZScpLmVhY2goZnVuY3Rpb24oayl7XG4gICAgICAgICAgICB2YXIgZWwgPSBqUXVlcnkodGhpcyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBlZmZlY3QgPSBlbC5kYXRhKCdhbmltYXRlLWVmZmVjdCcpO1xuICAgICAgICAgICAgICBpZiAoIGVmZmVjdCA9PT0gJ2ZhZGVJbicpIHtcbiAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZmFkZUluIHByb2Jvb3RzdHJhcC1hbmltYXRlZCcpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBlZmZlY3QgPT09ICdmYWRlSW5MZWZ0Jykge1xuICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmYWRlSW5MZWZ0IHByb2Jvb3RzdHJhcC1hbmltYXRlZCcpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBlZmZlY3QgPT09ICdmYWRlSW5SaWdodCcpIHtcbiAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZmFkZUluUmlnaHQgcHJvYm9vdHN0cmFwLWFuaW1hdGVkJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZhZGVJblVwIHByb2Jvb3RzdHJhcC1hbmltYXRlZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdpdGVtLWFuaW1hdGUnKTtcbiAgICAgICAgICAgIH0sICBrICogMzAsICdlYXNlSW5PdXRFeHBvJyApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICB9LCAxMDApO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgIH0gLCB7IG9mZnNldDogJzk1JScgfSApO1xuICB9O1xuICBcbiAgdmFyIG5hdmJhclN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgICBcbiAgICAgIHZhciAkdGhpcyA9IGpRdWVyeSh0aGlzKSxcbiAgICAgICAgc3QgPSAkdGhpcy5zY3JvbGxUb3AoKTtcbiAgICAgIFxuICAgICAgaWYgKCBzdCA+IDUgKSB7XG4gICAgICAgIGpRdWVyeSgnLnByb2Jvb3RzdHJhcC1uYXZiYXInKS5hZGRDbGFzcygnc2Nyb2xsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGpRdWVyeSgnLnByb2Jvb3RzdHJhcC1uYXZiYXInKS5yZW1vdmVDbGFzcygnc2Nyb2xsZWQnKTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH0pO1xuICB9O1xuICBcbiAgXG4gIHZhciBpbml0UGhvdG9Td2lwZUZyb21ET00gPSBmdW5jdGlvbihnYWxsZXJ5U2VsZWN0b3IpIHtcbiAgICBcbiAgICAvLyBwYXJzZSBzbGlkZSBkYXRhICh1cmwsIHRpdGxlLCBzaXplIC4uLikgZnJvbSBET00gZWxlbWVudHNcbiAgICAvLyAoY2hpbGRyZW4gb2YgZ2FsbGVyeVNlbGVjdG9yKVxuICAgIHZhciBwYXJzZVRodW1ibmFpbEVsZW1lbnRzID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHZhciB0aHVtYkVsZW1lbnRzID0gZWwuY2hpbGROb2RlcyxcbiAgICAgICAgbnVtTm9kZXMgPSB0aHVtYkVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgaXRlbXMgPSBbXSxcbiAgICAgICAgZmlndXJlRWwsXG4gICAgICAgIGxpbmtFbCxcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgaXRlbTtcbiAgICAgIFxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG51bU5vZGVzOyBpKyspIHtcbiAgICAgICAgXG4gICAgICAgIGZpZ3VyZUVsID0gdGh1bWJFbGVtZW50c1tpXTsgLy8gPGZpZ3VyZT4gZWxlbWVudFxuICAgICAgICBcbiAgICAgICAgLy8gaW5jbHVkZSBvbmx5IGVsZW1lbnQgbm9kZXNcbiAgICAgICAgaWYoZmlndXJlRWwubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGlua0VsID0gZmlndXJlRWwuY2hpbGRyZW5bMF07IC8vIDxhPiBlbGVtZW50XG4gICAgICAgIGNvbnNvbGUubG9nKGZpZ3VyZUVsKTtcbiAgICAgICAgc2l6ZSA9IGxpbmtFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpLnNwbGl0KCd4Jyk7XG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgc2xpZGUgb2JqZWN0XG4gICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgc3JjOiBsaW5rRWwuZ2V0QXR0cmlidXRlKCdocmVmJyksXG4gICAgICAgICAgdzogcGFyc2VJbnQoc2l6ZVswXSwgMTApLFxuICAgICAgICAgIGg6IHBhcnNlSW50KHNpemVbMV0sIDEwKVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZihmaWd1cmVFbC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgLy8gPGZpZ2NhcHRpb24+IGNvbnRlbnRcbiAgICAgICAgICBpdGVtLnRpdGxlID0gZmlndXJlRWwuY2hpbGRyZW5bMV0uaW5uZXJIVE1MO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihsaW5rRWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIDxpbWc+IHRodW1ibmFpbCBlbGVtZW50LCByZXRyaWV2aW5nIHRodW1ibmFpbCB1cmxcbiAgICAgICAgICBpdGVtLm1zcmMgPSBsaW5rRWwuY2hpbGRyZW5bMF0uZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaXRlbS5lbCA9IGZpZ3VyZUVsOyAvLyBzYXZlIGxpbmsgdG8gZWxlbWVudCBmb3IgZ2V0VGh1bWJCb3VuZHNGblxuICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gaXRlbXM7XG4gICAgfTtcbiAgICBcbiAgICAvLyBmaW5kIG5lYXJlc3QgcGFyZW50IGVsZW1lbnRcbiAgICB2YXIgY2xvc2VzdCA9IGZ1bmN0aW9uIGNsb3Nlc3QoZWwsIGZuKSB7XG4gICAgICByZXR1cm4gZWwgJiYgKCBmbihlbCkgPyBlbCA6IGNsb3Nlc3QoZWwucGFyZW50Tm9kZSwgZm4pICk7XG4gICAgfTtcbiAgICBcbiAgICAvLyB0cmlnZ2VycyB3aGVuIHVzZXIgY2xpY2tzIG9uIHRodW1ibmFpbFxuICAgIHZhciBvblRodW1ibmFpbHNDbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICBcbiAgICAgIHZhciBlVGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgXG4gICAgICAvLyBmaW5kIHJvb3QgZWxlbWVudCBvZiBzbGlkZVxuICAgICAgdmFyIGNsaWNrZWRMaXN0SXRlbSA9IGNsb3Nlc3QoZVRhcmdldCwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgcmV0dXJuIChlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ0ZJR1VSRScpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGlmKCFjbGlja2VkTGlzdEl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBmaW5kIGluZGV4IG9mIGNsaWNrZWQgaXRlbSBieSBsb29waW5nIHRocm91Z2ggYWxsIGNoaWxkIG5vZGVzXG4gICAgICAvLyBhbHRlcm5hdGl2ZWx5LCB5b3UgbWF5IGRlZmluZSBpbmRleCB2aWEgZGF0YS0gYXR0cmlidXRlXG4gICAgICB2YXIgY2xpY2tlZEdhbGxlcnkgPSBjbGlja2VkTGlzdEl0ZW0ucGFyZW50Tm9kZSxcbiAgICAgICAgY2hpbGROb2RlcyA9IGNsaWNrZWRMaXN0SXRlbS5wYXJlbnROb2RlLmNoaWxkTm9kZXMsXG4gICAgICAgIG51bUNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9kZUluZGV4ID0gMCxcbiAgICAgICAgaW5kZXg7XG4gICAgICBcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ2hpbGROb2RlczsgaSsrKSB7XG4gICAgICAgIGlmKGNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoY2hpbGROb2Rlc1tpXSA9PT0gY2xpY2tlZExpc3RJdGVtKSB7XG4gICAgICAgICAgaW5kZXggPSBub2RlSW5kZXg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBpZihpbmRleCA+PSAwKSB7XG4gICAgICAgIC8vIG9wZW4gUGhvdG9Td2lwZSBpZiB2YWxpZCBpbmRleCBmb3VuZFxuICAgICAgICBvcGVuUGhvdG9Td2lwZSggaW5kZXgsIGNsaWNrZWRHYWxsZXJ5ICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBcbiAgICAvLyBwYXJzZSBwaWN0dXJlIGluZGV4IGFuZCBnYWxsZXJ5IGluZGV4IGZyb20gVVJMICgjJnBpZD0xJmdpZD0yKVxuICAgIHZhciBwaG90b3N3aXBlUGFyc2VIYXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSxcbiAgICAgICAgcGFyYW1zID0ge307XG4gICAgICBcbiAgICAgIGlmKGhhc2gubGVuZ3RoIDwgNSkge1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgfVxuICAgICAgXG4gICAgICB2YXIgdmFycyA9IGhhc2guc3BsaXQoJyYnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZighdmFyc1tpXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICBpZihwYWlyLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXNbcGFpclswXV0gPSBwYWlyWzFdO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZihwYXJhbXMuZ2lkKSB7XG4gICAgICAgIHBhcmFtcy5naWQgPSBwYXJzZUludChwYXJhbXMuZ2lkLCAxMCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbiAgICBcbiAgICB2YXIgb3BlblBob3RvU3dpcGUgPSBmdW5jdGlvbihpbmRleCwgZ2FsbGVyeUVsZW1lbnQsIGRpc2FibGVBbmltYXRpb24sIGZyb21VUkwpIHtcbiAgICAgIHZhciBwc3dwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wc3dwJylbMF0sXG4gICAgICAgIGdhbGxlcnksXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIGl0ZW1zO1xuICAgICAgXG4gICAgICBpdGVtcyA9IHBhcnNlVGh1bWJuYWlsRWxlbWVudHMoZ2FsbGVyeUVsZW1lbnQpO1xuICAgICAgXG4gICAgICAvLyBkZWZpbmUgb3B0aW9ucyAoaWYgbmVlZGVkKVxuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgXG4gICAgICAgIC8vIGRlZmluZSBnYWxsZXJ5IGluZGV4IChmb3IgVVJMKVxuICAgICAgICBnYWxsZXJ5VUlEOiBnYWxsZXJ5RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHN3cC11aWQnKSxcbiAgICAgICAgXG4gICAgICAgIGdldFRodW1iQm91bmRzRm46IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgLy8gU2VlIE9wdGlvbnMgLT4gZ2V0VGh1bWJCb3VuZHNGbiBzZWN0aW9uIG9mIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mb1xuICAgICAgICAgIHZhciB0aHVtYm5haWwgPSBpdGVtc1tpbmRleF0uZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLCAvLyBmaW5kIHRodW1ibmFpbFxuICAgICAgICAgICAgcGFnZVlTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgICAgICAgIHJlY3QgPSB0aHVtYm5haWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHt4OnJlY3QubGVmdCwgeTpyZWN0LnRvcCArIHBhZ2VZU2Nyb2xsLCB3OnJlY3Qud2lkdGh9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgLy8gUGhvdG9Td2lwZSBvcGVuZWQgZnJvbSBVUkxcbiAgICAgIGlmKGZyb21VUkwpIHtcbiAgICAgICAgaWYob3B0aW9ucy5nYWxsZXJ5UElEcykge1xuICAgICAgICAgIC8vIHBhcnNlIHJlYWwgaW5kZXggd2hlbiBjdXN0b20gUElEcyBhcmUgdXNlZFxuICAgICAgICAgIC8vIGh0dHA6Ly9waG90b3N3aXBlLmNvbS9kb2N1bWVudGF0aW9uL2ZhcS5odG1sI2N1c3RvbS1waWQtaW4tdXJsXG4gICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IGl0ZW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZihpdGVtc1tqXS5waWQgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5pbmRleCA9IGo7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpbiBVUkwgaW5kZXhlcyBzdGFydCBmcm9tIDFcbiAgICAgICAgICBvcHRpb25zLmluZGV4ID0gcGFyc2VJbnQoaW5kZXgsIDEwKSAtIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuaW5kZXggPSBwYXJzZUludChpbmRleCwgMTApO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBleGl0IGlmIGluZGV4IG5vdCBmb3VuZFxuICAgICAgaWYoIGlzTmFOKG9wdGlvbnMuaW5kZXgpICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKGRpc2FibGVBbmltYXRpb24pIHtcbiAgICAgICAgb3B0aW9ucy5zaG93QW5pbWF0aW9uRHVyYXRpb24gPSAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBQYXNzIGRhdGEgdG8gUGhvdG9Td2lwZSBhbmQgaW5pdGlhbGl6ZSBpdFxuICAgICAgZ2FsbGVyeSA9IG5ldyBQaG90b1N3aXBlKCBwc3dwRWxlbWVudCwgUGhvdG9Td2lwZVVJX0RlZmF1bHQsIGl0ZW1zLCBvcHRpb25zKTtcbiAgICAgIGdhbGxlcnkuaW5pdCgpO1xuICAgIH07XG4gICAgXG4gICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBnYWxsZXJ5IGVsZW1lbnRzIGFuZCBiaW5kIGV2ZW50c1xuICAgIHZhciBnYWxsZXJ5RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBnYWxsZXJ5U2VsZWN0b3IgKTtcbiAgICBcbiAgICBmb3IodmFyIGkgPSAwLCBsID0gZ2FsbGVyeUVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZ2FsbGVyeUVsZW1lbnRzW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1wc3dwLXVpZCcsIGkrMSk7XG4gICAgICBnYWxsZXJ5RWxlbWVudHNbaV0ub25jbGljayA9IG9uVGh1bWJuYWlsc0NsaWNrO1xuICAgIH1cbiAgICBcbiAgICAvLyBQYXJzZSBVUkwgYW5kIG9wZW4gZ2FsbGVyeSBpZiBpdCBjb250YWlucyAjJnBpZD0zJmdpZD0xXG4gICAgdmFyIGhhc2hEYXRhID0gcGhvdG9zd2lwZVBhcnNlSGFzaCgpO1xuICAgIGlmKGhhc2hEYXRhLnBpZCAmJiBoYXNoRGF0YS5naWQpIHtcbiAgICAgIG9wZW5QaG90b1N3aXBlKCBoYXNoRGF0YS5waWQgLCAgZ2FsbGVyeUVsZW1lbnRzWyBoYXNoRGF0YS5naWQgLSAxIF0sIHRydWUsIHRydWUgKTtcbiAgICB9XG4gIH07XG4gIFxuICB2YXIgZ2FsbGVyeU1hc29ucnkgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBpc290b3BlXG4gICAgaWYgKGpRdWVyeSgnLnBvcnRmb2xpby1mZWVkJykubGVuZ3RoID4gMCApIHtcbiAgICAgIHZhciAkY29udGFpbmVyID0gJCgnLnBvcnRmb2xpby1mZWVkJyk7XG4gICAgICAkY29udGFpbmVyLmltYWdlc0xvYWRlZChmdW5jdGlvbigpIHtcbiAgICAgICAgJGNvbnRhaW5lci5pc290b3BlKHtcbiAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcbiAgICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWUsXG4gICAgICAgICAgbWFzb25yeToge1xuICAgICAgICAgICAgY29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcicsXG4gICAgICAgICAgICBndXR0ZXI6ICcuZ3V0dGVyLXNpemVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gIH07XG4gIFxuICB2YXIgc3RlbGxhckluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiggIWlzTW9iaWxlLmFueSgpICkge1xuICAgICAgalF1ZXJ5KHdpbmRvdykuc3RlbGxhcigpO1xuICAgIH1cbiAgfTtcbiAgXG4gIHZhciBkYXRlVGltZVBpY2tlciA9IGZ1bmN0aW9uKCkge1xuICAgIGpRdWVyeSgnI3RpbWUnKS50aW1lcGlja2VyKCk7XG4gICAgalF1ZXJ5KCcjZGF0ZScpLmRhdGVwaWNrZXIoe1xuICAgICAgJ2Zvcm1hdCc6ICdtL2QveXl5eScsXG4gICAgICAnYXV0b2Nsb3NlJzogdHJ1ZVxuICAgIH0pO1xuICB9O1xuICBcbiAgXG4gIC8vIFBhZ2UgTmF2XG4gIHZhciBjbGlja01lbnUgPSBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBqUXVlcnkoJy5uYXZiYXItbmF2IGE6bm90KFtjbGFzcz1cImV4dGVybmFsXCJdKScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIFxuICAgICAgdmFyIHNlY3Rpb24gPSBqUXVlcnkodGhpcykuZGF0YSgnbmF2LXNlY3Rpb24nKSxcbiAgICAgICAgbmF2YmFyID0galF1ZXJ5KCcubmF2YmFyLW5hdicpO1xuICAgICAgaWYgKGlzTW9iaWxlLmFueSgpKSB7XG4gICAgICAgIGpRdWVyeSgnLm5hdmJhci10b2dnbGUnKS5jbGljaygpO1xuICAgICAgfVxuICAgICAgaWYgKCBqUXVlcnkoJ1tkYXRhLXNlY3Rpb249XCInICsgc2VjdGlvbiArICdcIl0nKS5sZW5ndGggKSB7XG4gICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogalF1ZXJ5KCdbZGF0YS1zZWN0aW9uPVwiJyArIHNlY3Rpb24gKyAnXCJdJykub2Zmc2V0KCkudG9wIC0gNTVcbiAgICAgICAgfSwgNTAwLCAnZWFzZUluT3V0RXhwbycpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIFxuICAgIFxuICB9O1xuICBcbiAgLy8gUmVmbGVjdCBzY3JvbGxpbmcgaW4gbmF2aWdhdGlvblxuICB2YXIgbmF2QWN0aXZlID0gZnVuY3Rpb24oc2VjdGlvbikge1xuICAgIFxuICAgIHZhciAkZWwgPSBqUXVlcnkoJy5uYXZiYXItbmF2Jyk7XG4gICAgJGVsLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICRlbC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBqUXVlcnkodGhpcykuZmluZCgnYVtkYXRhLW5hdi1zZWN0aW9uPVwiJytzZWN0aW9uKydcIl0nKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICBcbiAgfTtcbiAgXG4gIHZhciBuYXZpZ2F0aW9uU2VjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIHZhciAkc2VjdGlvbiA9IGpRdWVyeSgnc2VjdGlvbltkYXRhLXNlY3Rpb25dJyk7XG4gICAgXG4gICAgJHNlY3Rpb24ud2F5cG9pbnQoZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgbmF2QWN0aXZlKGpRdWVyeSh0aGlzLmVsZW1lbnQpLmRhdGEoJ3NlY3Rpb24nKSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgb2Zmc2V0OiAnMTUwcHgnXG4gICAgfSk7XG4gICAgXG4gICAgJHNlY3Rpb24ud2F5cG9pbnQoZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICAgIG5hdkFjdGl2ZShqUXVlcnkodGhpcy5lbGVtZW50KS5kYXRhKCdzZWN0aW9uJykpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG9mZnNldDogZnVuY3Rpb24oKSB7IHJldHVybiAtalF1ZXJ5KHRoaXMuZWxlbWVudCkuaGVpZ2h0KCkgLSAxNTU7IH1cbiAgICB9KTtcbiAgICBcbiAgfTtcbiAgXG4gIGpRdWVyeShmdW5jdGlvbigpe1xuICAgIGNvbnRlbnRXYXlQb2ludCgpO1xuICAgIG5hdmJhclN0YXRlKCk7XG4gICAgaWYgKGpRdWVyeSgnLnByb2Jvb3RzdHJhcC1nYWxsZXJ5JykubGVuZ3RoID4gMCkge1xuICAgICAgaW5pdFBob3RvU3dpcGVGcm9tRE9NKCcucHJvYm9vdHN0cmFwLWdhbGxlcnknKTtcbiAgICB9XG4gICAgZ2FsbGVyeU1hc29ucnkoKTtcbiAgICBzdGVsbGFySW5pdCgpO1xuICAgIGRhdGVUaW1lUGlja2VyKCk7XG4gICAgY2xpY2tNZW51KCk7XG4gICAgbmF2aWdhdGlvblNlY3Rpb24oKTtcbiAgfSk7XG4gIFxuICBqUXVlcnkod2luZG93KS5sb2FkKGZ1bmN0aW9uKCl7XG4gICAgb3dsQ2Fyb3VzZWwoKTtcbiAgICBmbGV4U2xpZGVyKCk7XG4gIH0pO1xuICBcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9