;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 32c-194.304 0-352 153.536-352 342.848C160 701.952 512 992 512 992s352-302.464 352-617.152C864 185.536 706.304 32 512 32zM512 576C406.016 576 320 489.984 320 384s86.016-192 192-192 192 86.016 192 192S617.984 576 512 576z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-location" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.998977 959.752744c0 0-335.814302-374.240473-335.814302-559.692209 0-185.447642 150.362566-335.814302 335.814302-335.814302 185.455829 0 335.816349 150.367683 335.816349 335.814302C847.815325 585.512271 511.998977 959.752744 511.998977 959.752744zM511.998977 273.257547c-70.02689 0-126.805034 56.779168-126.805034 126.805034 0 70.02996 56.778144 126.807081 126.805034 126.807081 70.028936 0 126.806057-56.777121 126.806057-126.807081C638.805034 330.036715 582.027913 273.257547 511.998977 273.257547z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingwei1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M536.380952 48.713143C334.409143 48.713143 170.666667 215.04 170.666667 420.230095s365.714286 603.721143 365.714286 603.721143S902.095238 625.42019 902.095238 420.230095 738.352762 48.713143 536.380952 48.713143zM536.380952 513.121524c-75.776 0-137.167238-62.366476-137.167238-139.312762S460.604952 234.496 536.380952 234.496c75.727238 0 137.167238 62.366476 137.167238 139.312762S612.10819 513.121524 536.380952 513.121524z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-heilongjiangtubiao24" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M805.888 344.448C805.888 189.568 665.792 64 510.08 64S218.112 189.568 218.112 344.448c0 143.616 288.704 487.488 288.704 487.488S805.888 492.864 805.888 344.448L805.888 344.448zM417.024 354.368c0-52.992 43.904-96 97.984-96 54.144 0 97.984 42.944 97.984 96s-43.904 96-97.984 96C460.928 450.304 417.024 407.36 417.024 354.368L417.024 354.368zM608.832 840.32c0.832 2.496 1.28 5.12 1.28 7.68 0 26.496-43.904 48-97.984 48-54.08 0-97.984-21.504-97.984-48 0-2.624 0.448-5.184 1.28-7.68C356.096 851.328 316.16 872.128 316.16 896c0 35.392 87.744 64 195.968 64s195.968-28.608 195.968-64C708.032 872.128 668.096 851.328 608.832 840.32L608.832 840.32zM608.832 840.32"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingwei2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M800.128745 673.15242 547.074972 1004.507504C527.01779 1030.447323 494.27178 1030.547709 474.314985 1004.507504L220.257348 673.15242C159.102017 601.898228 120.493448 506.270243 120.493448 403.635294 120.493448 180.777718 295.727765 0.022155 512.020077 0.022155 728.272235 0.022155 903.506552 180.777718 903.506552 403.635294 903.506552 509.040904 864.295665 601.29591 800.128745 673.15242ZM512.020077 201.376986C403.602878 201.376986 315.784947 291.945502 315.784947 403.635294 315.784947 515.365241 403.602878 605.893602 512.020077 605.893602 620.356967 605.893602 708.215053 515.365241 708.215053 403.635294 708.215053 291.945502 620.356967 201.376986 512.020077 201.376986Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingwei3" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 62.549333c-183.836444 0-332.885333 149.020444-332.885333 332.885333C179.114667 680.789333 512 989.895111 512 989.895111s332.885333-309.105778 332.885333-594.432C844.885333 211.569778 695.836444 62.549333 512 62.549333L512 62.549333zM512 585.671111c-105.073778 0-190.236444-85.191111-190.236444-190.236444 0-105.073778 85.162667-190.236444 190.236444-190.236444 105.045333 0 190.236444 85.162667 190.236444 190.236444C702.236444 500.48 617.045333 585.671111 512 585.671111L512 585.671111zM512 585.671111"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)