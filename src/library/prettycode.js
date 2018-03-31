/*
讓程式碼顯示在頁面上
 */
export const prettycode = function (){
	document.querySelectorAll("pre").forEach(function (obj, inx){
		let code = obj.innerHTML;
		obj.innerHTML = code.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/	\t/g, '').replace(/^\r/g, '').replace(/\t$/g, '');
	});
}

export default prettycode
