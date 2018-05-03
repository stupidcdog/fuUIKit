/**
 *
 */
'use strick'
function SLIDERTABS (el, args) {
  this.init(el, args)
  return this
}
SLIDERTABS.prototype = {
  DEFAULTS: {
    el: undefined,
    ctrlEL: '.ctrl',
    menuEL: '.tabMenuItem'
  },
  params: {},
  init: function (el, args) {
    args = args || {}
    args['el'] = el
    this.params = Object.assign({}, this.DEFAULTS, args)

    this.bind()
  },
  bind: function () {
    var that = this
    let args = this.params
    let el = args.el
    if (undefined !== el) {
      let ctrl = el.querySelectorAll(args.ctrlEL)
      let ctrlPrev = Array.prototype.filter.call(ctrl, function (e) { if (e.classList.contains('prev')) { return e } })
      let ctrlNext = Array.prototype.filter.call(ctrl, function (e) { if (e.classList.contains('next')) { return e } })
      // add click eventlistener
      if (undefined !== ctrlPrev) {
        this._ckCtrlStatus()
        ctrlPrev[0].addEventListener('click', function (e) {
          let _args = args
          let menuEL = _args.el.querySelector(_args.menuEL)

          let menuCW = menuEL.offsetWidth
          let menuTotalW = that._getTotalWidth(menuEL)

          let inx = _args.el.getAttribute('slider-inx') || 0
          if (inx > 0 && menuTotalW > menuCW) {
            inx--
          } else {
            inx = 0
          }
          menuEL.setAttribute('style', that._slider(inx, menuCW, menuTotalW))
          _args.el.setAttribute('slider-inx', inx)
          that._ckCtrlStatus()
        })
      }
      if (undefined !== ctrlNext) {
        ctrlNext[0].addEventListener('click', function (e) {
          let _args = args
          let menuEL = _args.el.querySelector(_args.menuEL)

          let menuCW = menuEL.offsetWidth
          let menuTotalW = that._getTotalWidth(menuEL)

          let inx = _args.el.getAttribute('slider-inx') || 0
          inx++
          if (Math.ceil(menuTotalW / menuCW) < inx || Math.ceil(menuTotalW / menuCW) === 1) {
            inx--
          }
          menuEL.setAttribute('style', that._slider(inx, menuCW, menuTotalW))
          _args.el.setAttribute('slider-inx', inx)
          that._ckCtrlStatus()
        })
      }

      var resizeTime
      window.addEventListener('resize', function () {
        clearTimeout(resizeTime)
        let _that = that
        resizeTime = setTimeout(function () {
          let args = _that.params
          let menuEL = args.el.querySelector(args.menuEL)
          let menuCW = menuEL.offsetWidth
          let menuTotalW = that._getTotalWidth(menuEL)

          let inx = args.el.getAttribute('slider-inx') || 0

          if (Math.ceil(menuTotalW / menuCW) < inx) {
            inx = Math.ceil(menuTotalW / menuCW)
          }

          menuEL.setAttribute('style', that._slider(inx, menuCW, menuTotalW))
          args.el.setAttribute('slider-inx', inx)
          that._ckCtrlStatus()
        }, 100)
      })
    }
  },
  _getTotalWidth: function (el) {
    el = Array.prototype.slice.call(el.children)
    return el.reduce(function (prev, current, inx, arr) {
      prev = prev || 0
      return Number(prev) + Number(current.offsetWidth)
    })
  },
  _slider: function (inx, containerW, menuTotalW) {
    let sliderX = inx * containerW
    return 'transform:translateX(-' + sliderX + 'px);'
  },
  _ckCtrlStatus: function () {
    let args = this.params
    let menuEL = args.el.querySelector(args.menuEL)
    let menuCW = menuEL.offsetWidth
    let menuTotalW = this._getTotalWidth(menuEL)

    let ctrl = args.el.querySelectorAll(args.ctrlEL)
    let ctrlPrev = Array.prototype.filter.call(ctrl, function (e) { if (e.classList.contains('prev')) { return e } })
    let ctrlNext = Array.prototype.filter.call(ctrl, function (e) { if (e.classList.contains('next')) { return e } })

    let inx = args.el.getAttribute('slider-inx') || 0

    if (inx == 0) {
      ctrlPrev[0].classList.add('disabled')
    } else {
      ctrlPrev[0].classList.remove('disabled')
    }

    if (Math.ceil(menuTotalW / menuCW) > inx && Math.ceil(menuTotalW / menuCW) > 1) {
      ctrlNext[0].classList.remove('disabled')
    } else {
      ctrlNext[0].classList.add('disabled')
    }
  }
};

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory)
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = factory()
  } else {
    window['slidertabs'] = factory()
  }
})(function () {
  return SLIDERTABS
})

export default SLIDERTABS
