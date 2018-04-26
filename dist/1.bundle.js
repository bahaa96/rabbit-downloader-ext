webpackJsonp([1],[,function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction channelPlaylists() {\n    var thumbnails = document.querySelectorAll("a#meta.ytd-grid-playlist-renderer");\n    var downloadAllButton = document.createElement("a");\n    downloadAllButton.innerHTML = "Download All <i class=\'fa fa-arrow-down\'></i>";\n    downloadAllButton.href = window.location.href;\n    downloadAllButton.classList.add("download-all-button");\n    document.querySelector("#top-level-buttons.ytd-menu-renderer").parentNode.parentNode.style.position = "relative";\n    document.querySelector("#top-level-buttons.ytd-menu-renderer").parentNode.appendChild(downloadAllButton);\n    for (var thumbnail in thumbnails) {\n        var current = thumbnails[thumbnail];\n        if (isElement(current)) {\n            current.style.position = "relative";\n            downloadBtn.style.marginBottom = "5px";\n            downloadBtn.setAttribute("href", current.parentNode.href + "Ahmed");\n            current.appendChild(downloadBtn.cloneNode(true));\n        }\n    }\n    window.onscroll = function () {\n        oldScrollPos = window.pageYOffset;\n        var thumbnails = document.querySelectorAll("a#meta.ytd-grid-playlist-renderer");\n        thumbnails = Array.from(thumbnails).filter(function (el) {\n            return Array.from(oldThumbs).indexOf(el) === -1;\n        });\n        console.log(thumbnails.length);\n        if (thumbnails.length) {\n            oldThumbs = [].concat(_toConsumableArray(oldThumbs), _toConsumableArray(thumbnails));\n            for (var _thumbnail in thumbnails) {\n                if (isElement(thumbnails[_thumbnail])) {\n                    try {\n                        thumbnails[_thumbnail].style.position = "relative";\n                        if (!thumbnails[_thumbnail].querySelector(".download-button")) {\n                            thumbnails[_thumbnail].appendChild(downloadBtn.cloneNode(true));\n                        }\n                    } catch (e) {\n                        console.log(e);\n                    }\n                }\n            }\n        }\n    };\n}\n\nexports.default = channelPlaylists();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Zb3V0dWJlL2NoYW5uZWxQbGF5bGlzdHMuanM/MjIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjaGFubmVsUGxheWxpc3RzKCkge1xyXG4gICAgY29uc3QgdGh1bWJuYWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI21ldGEueXRkLWdyaWQtcGxheWxpc3QtcmVuZGVyZXJcIilcclxuICAgIGNvbnN0IGRvd25sb2FkQWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcclxuICAgIGRvd25sb2FkQWxsQnV0dG9uLmlubmVySFRNTCA9IFwiRG93bmxvYWQgQWxsIDxpIGNsYXNzPSdmYSBmYS1hcnJvdy1kb3duJz48L2k+XCJcclxuICAgIGRvd25sb2FkQWxsQnV0dG9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gICAgZG93bmxvYWRBbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImRvd25sb2FkLWFsbC1idXR0b25cIilcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWxldmVsLWJ1dHRvbnMueXRkLW1lbnUtcmVuZGVyZXJcIikucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1sZXZlbC1idXR0b25zLnl0ZC1tZW51LXJlbmRlcmVyXCIpLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZG93bmxvYWRBbGxCdXR0b24pXHJcbiAgICBmb3IgKCBsZXQgdGh1bWJuYWlsIGluIHRodW1ibmFpbHMgKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRodW1ibmFpbHNbdGh1bWJuYWlsXVxyXG4gICAgICAgIGlmIChpc0VsZW1lbnQoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICBkb3dubG9hZEJ0bi5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjVweFwiXHJcbiAgICAgICAgICAgIGRvd25sb2FkQnRuLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgY3VycmVudC5wYXJlbnROb2RlLmhyZWYrXCJBaG1lZFwiKVxyXG4gICAgICAgICAgICBjdXJyZW50LmFwcGVuZENoaWxkKGRvd25sb2FkQnRuLmNsb25lTm9kZSh0cnVlKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgb2xkU2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgICAgICAgbGV0IHRodW1ibmFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYSNtZXRhLnl0ZC1ncmlkLXBsYXlsaXN0LXJlbmRlcmVyXCIpXHJcbiAgICAgICAgdGh1bWJuYWlscyA9IEFycmF5LmZyb20odGh1bWJuYWlscykuZmlsdGVyKGVsID0+IEFycmF5LmZyb20ob2xkVGh1bWJzKS5pbmRleE9mKGVsKSA9PT0gLTEpXHJcbiAgICAgICAgY29uc29sZS5sb2codGh1bWJuYWlscy5sZW5ndGgpXHJcbiAgICAgICAgaWYodGh1bWJuYWlscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgb2xkVGh1bWJzID0gWyAuLi5vbGRUaHVtYnMsIC4uLnRodW1ibmFpbHNdXHJcbiAgICAgICAgICAgIGZvciAoIGxldCB0aHVtYm5haWwgaW4gdGh1bWJuYWlscyApIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0VsZW1lbnQodGh1bWJuYWlsc1t0aHVtYm5haWxdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbHNbdGh1bWJuYWlsXS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighdGh1bWJuYWlsc1t0aHVtYm5haWxdLnF1ZXJ5U2VsZWN0b3IoXCIuZG93bmxvYWQtYnV0dG9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxzW3RodW1ibmFpbF0uYXBwZW5kQ2hpbGQoZG93bmxvYWRCdG4uY2xvbmVOb2RlKHRydWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhbm5lbFBsYXlsaXN0cygpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFlvdXR1YmUvY2hhbm5lbFBsYXlsaXN0cy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n')}]);