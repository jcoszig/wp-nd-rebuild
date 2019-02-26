"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function (e) {
  e(document).ready(function () {
    console.log("Site created by James Oxley-Shaw.");
  }), e(window).load(function () {
    var t = function () {
      function t(e) {
        var _this = this;

        _classCallCheck(this, t);

        this.element = e, this.img = e.querySelector("img"), this.src = "", this.img.addEventListener("load", function () {
          _this.update();
        }), this.img.complete && this.update();
      }

      _createClass(t, [{
        key: "update",
        value: function update() {
          var e = void 0 !== this.img.currentSrc ? this.img.currentSrc : this.img.src;this.src !== e && (this.src = e, this.element.style.backgroundImage = 'url("' + this.src + '")');
        }
      }]);

      return t;
    }();

    var o = document.querySelector("body");var s = document.querySelectorAll("[data-responsive-background-image]");for (var _e = 0; _e < s.length; _e++) {
      new t(s[_e]), console.log("responsive image added");
    }var i = document.querySelector(".menu-item-type-custom a"),
        n = document.querySelector(".menu-item-type-custom img");var c = "nicholdinan.co.uk" == window.location.hostname ? window.location.origin : window.location.origin + "/nicholdinan";if (i.href = "https://www.instagram.com/nichol.dinan", n.src = c + "/wp-content/themes/nicholdinan/images/instagram-logo.svg", o.classList.contains("home")) {
      var _e2 = document.querySelector(".centre-text"),
          _t = document.querySelector(".intro-foreground"),
          _o = document.querySelectorAll(".landingPage-slider li"),
          _s = document.querySelectorAll(".current-work h2"),
          _i = 4e3;_e2.classList.add("slideIn"), setTimeout(function () {
        _t.classList.add("loaded");
      }, 2e3), _o.forEach(function (e) {
        setTimeout(function () {
          e.style.animation = "fade" + e.dataset.index + " " + e.dataset.speed + "ms infinite ", _t.style.display = "none", console.log("animation loaded");
        }, _i);
      }), _s.forEach(function (e) {
        setTimeout(function () {
          e.classList.add("loaded"), e.style.animation = "fade" + e.dataset.index + " " + e.dataset.speed + "ms infinite ";
        }, _i);
      });
    }if (o.classList.contains("page-template-about")) {
      var _e3 = document.querySelector(".form-message .wpcf7-textarea"),
          _t2 = document.querySelector(".form-message");document.querySelector(".wpcf7-form");_e3.addEventListener("focus", function () {
        _e3.classList.contains("focused") || "" != _e3.value.trim() || (_e3.classList.add("focused"), _t2.classList.add("focused"), setTimeout(function () {
          _e3.style.height = "11.25rem";
        }, 400));
      }), _e3.addEventListener("blur", function () {
        "" == _e3.value.trim() && (_e3.classList.remove("focused"), _t2.classList.remove("focused"), _e3.style.height = "3rem");
      });
    }if (o.classList.contains("page-template-gallery")) {
      var _t3 = void 0;e(window).on("resize", function (e) {
        clearTimeout(_t3), _t3 = setTimeout(function () {
          !function () {
            var e = document.querySelectorAll(".portrait-wrap");for (var _t4 = 0; _t4 < e.length; _t4++) {
              var _o3 = e[_t4].firstElementChild.firstElementChild,
                  _s3 = e[_t4].children[1].clientHeight;_o3.style.height = _s3 + "px";
            }
          }();
        }, 250);
      });var _o2 = document.querySelectorAll(".images-section"),
          _s2 = document.querySelectorAll(".post-img-wrap"),
          _i2 = document.querySelectorAll(".portrait-parent h2");_o2.forEach(function (e) {
        var t = e.childElementCount;e.classList.add("posts-" + t);
      });var _n = 0,
          _c = 1,
          a = 2,
          l = 3;_s2.forEach(function (e) {
        ++_n == _c ? (e.classList.add("left"), _c += 3) : _n == a ? (e.classList.add("right"), a += 3) : _n == l && (e.classList.add("center"), l += 3);
      }), _i2.forEach(function (e) {
        e.innerText.length > 11 && e.parentNode.classList.add("horizontal-text");
      });
    }
  });
}(jQuery);