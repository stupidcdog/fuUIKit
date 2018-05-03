/**
 * DYNAMIC INPUT TAG
 * V1
 * BY KATE
 *
 * {
 *  @param {[OBJECT]} [el] [主物件]
 *  @param {[ARRAY]} [tags] [tags record]
 *  @param {[OBJECT]} [style] [樣式設定]{
 *          @param {[STRING]} [main] [整體架構樣式]
 *          @param {[STRING]} [tag] [TAG樣式]
 *          @param {[STRING]} [tagRemove] [移除TAG ICON樣式]
 *  }
 *  @param {[OBJECT]} [tip] [提示訊息]{
 *          @param {[STRING]} [input] [輸入框的提示訊息]
 *  }
 * }
 */

'use strick'
function INPUTTAG (el, args) {
  this.init(el, args)
  return this
};

INPUTTAG.prototype = {
  DEFAULTS: {
    el: undefined,
    tags: [],
    style: {
      main: 'inputTagWrap',
      tag: 'label label-primary label-sm',
      tagRemove: 'btn-icon drips-cross'
    },
    tip: {
      input: 'ADD A TAG'
    }
  },
  params: {},
  init: function (el, args) {
    args = args || {}
    args['el'] = el
    args['tags'] = args['tags'] || []
    this.params = Object.assign({}, this.DEFAULTS, args)

    this._create()
  },
  _create: function () {
    function bind (item, args) {
      let el = args.el
      let so = el.querySelector('select')

      // add tag
      let to = document.createElement('span')
      to.setAttribute('class', 'tag ' + args.style.tag)
      to.innerText = item

      // add tag icon
      let icon = document.createElement('i')
      icon.setAttribute('class', args.style.tagRemove)
      // remove  tag events
      icon.addEventListener('click', function () {
        let to = getParents(icon, '.tag')
        if (undefined !== to && to.length > 0) {
          el.removeChild(to[0])
        }
        if (undefined !== so) {
          let option = so.querySelector("option[value='" + item + "']")
          if (undefined !== option && option !== null) {
            so.removeChild(option)
          }
        }

        // 移除TAG
        let key = args.tags.indexOf(item)
        if (key !== -1) {
          args.tags.splice(key, 1)
        }
      })
      to.append(icon)
      el.querySelector('input').before(to)

      // set select
      if (undefined !== so) {
        let option = document.createElement('option')
        option.innerText = item
        option.value = item
        so.append(option)
      }

      args.tags.push(item)
    }

    let args = this.params
    let el = args.el
    // 設定主樣式
    if (!el.classList.contains(args.style.main)) {
      el.classList.add(args.style.main)
    }

    // 插入input元件
    let io = document.createElement('input')
    io.setAttribute('type', 'text')
    io.setAttribute('placeholder', args.tip.input)
    let events = ['keydown', 'blur']
    for (var k in events) {
      io.addEventListener(events[k], function (e) {
        e.stopPropagation()
        let val = this.value
        this.setAttribute('size', val.length + 15)

        if (val !== '' && (e.key === 'Enter' || e.key === 'Tab' || undefined === e.key)) {
          // 重覆TAG
          if (args.tags.indexOf(val) !== -1) {
            this.classList.add('error')
          } else {
            this.classList.remove('error')
            bind(val, args)

            this.value = ''
          }
        }
      })
    }

    // 插入select元件
    let so = document.createElement('select')
    el.append(io)
    el.append(so)

    // 加入TAG
    let tags = args.tags
    if (undefined !== tags && tags.length > 0) {
      let _tags = tags
      args.tags = []
      for (var i in _tags) {
        let item = _tags[i]
        if (item !== '') {
          bind(item, args)
        }
      }
    }
  }
};

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory)
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = factory()
  } else {
    window['inputtag'] = factory()
  }
})(function () {
  return INPUTTAG
})

export default INPUTTAG
