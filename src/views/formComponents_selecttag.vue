<template>
	<article>
		<div class="header">
			<span class="title">表單樣式 - SELECTTAG <span class="label label-sm label-warning">script</span></span>
		</div>
		<div class="content">
			<div class="label  label-info label-twins"><span>/fu/inputTag.js</span><span>所需套件</span></div>
			
			<h4 class="MA-T-10">可設定參數</h4>
			<pre class="codeWrap">
			{
			  	//TAG記錄
			  	tags:[] ,

			  	//樣式設定
			  	style:{
			  	  	main: 整體架構樣式, 
			  	  	tag: TAG樣式, 
			  	  	tagRemove: 移除TAG ICON樣式
			  	},

			  	//提示訊息
			  	tip:{
			  	  	input: 輸入框的提示訊息
			  	}
			}
			</pre>
			<h4>使用方式</h4>
			<div class="label label-info label-twins"><span>new inputTag(document.querySelector(DOM), {...});</span><span>定義方式 new inputTag(物件, 參數)</span></div>
			<pre class="codeWrap MA-T-10">
			<div class="ex-inputTag"></div>

			var EX-IT = new inputTag(document.querySelector(".ex-inputTag"));
			</pre>

			<h4 class="MA-T-10">取得目前TAG的資料</h4>
			<div class="label label-info label-twins"><span>EX-IT.params.tags</span><span>params定義目前最新資料</span></div>
			<div class="styleWrap MA-T-20">
				<div class="inputTag"></div>
				<div ref="box" class="box"></div>
				<button class="btn btn-default MA-T-10" @click="getITDATA(0)">GET TAGS DATA</button>
			</div>
		</div>
	</article>
</template>

<script>
import inputTag from '@/library/fu/inputTag'
export default{
	data(){
		return {
			IT: []
		}
	},
	methods:{
		getITDATA: function (inx){
			this.$refs.box.innerText  =  this.IT[inx].params.tags;
		} 
	},
	mounted: function (){
		this.IT[0] = new inputTag(document.querySelector(".inputTag"), {tags:['t1','t2']});
	}
}
</script>