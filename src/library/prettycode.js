/*
讓程式碼顯示在頁面上
 */
export const prettycode = function () {
  document.querySelectorAll('pre').forEach(function (obj, inx) {
  	let code = obj.innerHTML
  	if (code && code.length) {
      var lines = code.split('\n')
      var indent = null

      for (var i = 0; i < lines.length; i++) {
        if (/^[	 ]*$/.test(lines[i])) continue
        if (!indent) {
          var lineindent = lines[i].match(/^([ 	]+)/)
          if (!lineindent) break
          indent = lineindent[1]
        }
        lines[i] = lines[i].replace(new RegExp('^' + indent), '')
      }

      code = $.trim(lines.join('\n')).replace(/	/g, '    ')
    }
    obj.innerHTML = code.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    // let code = obj.innerHTML
    // obj.innerHTML = code.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/^\t+/g, '').replace(/^\r+/g, '').replace(/\t$/g, '')
  })
}

export default prettycode
