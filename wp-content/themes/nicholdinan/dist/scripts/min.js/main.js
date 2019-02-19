"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function (e) {
  e(document).ready(function () {
    console.log("Site created by James Oxley-Shaw.");
  }), e(window).load(function () {
    var t = void 0;e(window).on("resize", function (e) {
      clearTimeout(t), t = setTimeout(function () {}, 250);
    });
    var o = function () {
      function o(e) {
        var _this = this;

        _classCallCheck(this, o);

        this.element = e, this.img = e.querySelector("img"), this.src = "", this.img.addEventListener("load", function () {
          _this.update();
        }), this.img.complete && this.update();
      }

      _createClass(o, [{
        key: "update",
        value: function update() {
          var e = void 0 !== this.img.currentSrc ? this.img.currentSrc : this.img.src;this.src !== e && (this.src = e, this.element.style.backgroundImage = 'url("' + this.src + '")');
        }
      }]);

      return o;
    }();

    var s = document.querySelector("body");var i = document.querySelectorAll("[data-responsive-background-image]");for (var _e = 0; _e < i.length; _e++) {
      new o(i[_e]), console.log("responsive image added");
    }var n = document.querySelector(".menu-item-type-custom a"),
        c = document.querySelector(".menu-item-type-custom img");var a = "nicholdinan.co.uk" == window.location.hostname ? window.location.origin : window.location.origin + "/nicholdinan";if (n.href = "https://www.instagram.com/nichol.dinan", c.src = a + "/wp-content/themes/nicholdinan/images/instagram-logo.svg", s.classList.contains("home")) {
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
    }if (s.classList.contains("page-template-about")) {
      var _e3 = document.querySelector(".form-message .wpcf7-textarea"),
          _t2 = document.querySelector(".form-message");document.querySelector(".wpcf7-form");_e3.addEventListener("focus", function () {
        _e3.classList.contains("focused") || "" != _e3.value.trim() || (_e3.classList.add("focused"), _t2.classList.add("focused"), setTimeout(function () {
          _e3.style.height = "11.25rem";
        }, 400));
      }), _e3.addEventListener("blur", function () {
        "" == _e3.value.trim() && (_e3.classList.remove("focused"), _t2.classList.remove("focused"), _e3.style.height = "3rem");
      });
    }if (s.classList.contains("page-template-gallery")) {
      var _e4 = document.querySelectorAll(".images-section");document.querySelectorAll(".post-img-wrap");_e4.forEach(function (e) {
        var t = e.childElementCount;console.log("section = " + e + ". imgCount = " + t), e.classList.add("posts-" + t);
      });
    }
  });
}(jQuery);