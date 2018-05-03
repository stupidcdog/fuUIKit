/*
fuUIKit COMMON SCRIPT
V0.5
BY KATE
*/
'use strick';
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory)
  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = factory()
  } else {
    window['common'] = factory()
  }
})(function () {
  var common = function () {}
  common.prototype = {
    // initialization
    init: function () {
      this.modal()
      this.panel()

      this.triggerAct()
    },
    // TRIGGER ACT
    triggerAct: function () {
      document.querySelectorAll('[trigger-act]').forEach(function (o) {
        o.addEventListener('click', function () {
          var _actG = this.getAttribute('trigger-act') || ''
          var _auto = this.getAttribute('trigger-auto') != 'false'
          var _target = this.getAttribute('data-target') || ''

          var _hasAct = this.classList.contains('active')

          if (_actG !== '' && _actG !== undefined) {
            document.querySelectorAll(_actG).forEach(function (_o) {
              _o.classList.remove('active')
            })
          }

          if (_auto && _hasAct) {
            // remove active
            this.classList.remove('active')
          } else {
            // add active
            this.classList.add('active')
            if (_target !== '' && _target !== undefined) {
              document.querySelectorAll(_target).forEach(function (_o) {
                _o.classList.add('active')
              })
            }
          }
        }, false)
      })
    },
    /*
    MODAL
    data-toggle='modal'
    data-target: 目標modal
    mask-hide: 是否讓mask click to hide
    */
    modal: function () {
      document.querySelectorAll("[data-toggle='modal']").forEach(function (o) {
        let target = (document.querySelector(o.getAttribute('data-target'))) || ''
        let maskHide = o.getAttribute('mask-hide') || true
        if (undefined !== target && target !== '') {
          // ADD COMMON EVENTS
          if (!target.Modal) {
            target.Modal = {
              show: function () {
                target.classList.add('active')
              },
              hide: function () {
                target.classList.remove('active')
              }
            }
          }

          let mask = o.querySelector('.modal-mask')
          if (undefined == mask) {
            let mo = document.createElement('div')
            mo.classList.add('modal-mask')
            if (maskHide) {
              mo.addEventListener('click', function () {
                target.Modal.hide()
              })
            }
            target.appendChild(mo)
          }
          // ADD EVENT TO CLOSE MODAL
          target.querySelectorAll("[data-dismiss='modal']").forEach(function (_o) {
            _o.addEventListener('click', function () {
              target.Modal.hide()
            })
          })

          o.addEventListener('click', function () {
            target.Modal.show()
          })
        }
      })
    },
    /**
     * PANEL
     */
    panel: function () {
      // trigger panel
      document.querySelectorAll("[data-toggle='panel'][panel-act='trigger']").forEach(function (o) {
        o.addEventListener('click', function () {
          let target = getParents(o, '.panel')
          target = target[0] || undefined
          if (undefined !== target && target.classList.contains('active')) {
            target.classList.remove('active')
          } else if (undefined !== target) {
            target.classList.add('active')
          }
        })
      })
      // remove panel
      document.querySelectorAll("[data-toggle='panel'][panel-act='remove']").forEach(function (o) {
        o.addEventListener('click', function panel_trigger () {
          let target = getParents(o, '.panel')
          target = target[0] || undefined
          target.parentNode.removeChild(target)
        })
      })
    }
  }

  return new common()
})
