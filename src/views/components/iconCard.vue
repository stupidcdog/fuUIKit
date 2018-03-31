<template>
<section class="iconBoxWrap">
	<div class="item" v-for="item in dataItem.selection">
		<div class="icon" :class="dataItem.root+' '+(dataItem.prefixed+item.name)"></div>
		<div class="iconTitle">{{dataItem.prefixed}}{{item.name}}</div>
	</div>
</section>
</template>
<script>
export default {
	data(){
		return{};
	},
	props:{
		dataItem:{
			type:Object, 
			require: true, 
			default(){
				return {
					root: '',
					prefixed: '', 
					selection: []
				}
			}
		}
	}
}
</script>