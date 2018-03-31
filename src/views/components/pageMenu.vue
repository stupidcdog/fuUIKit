<template>
	<section class="pageMenuWrap">
		<ul>
			<li :class="{active:(currentpage == 'Common')}">
				<a href="/common#"><span>共用樣式</span></a>
				<ul>
					<li><a href="/common#common_space"><span>間距</span></a></li>
					<li><a href="/common#common_align"><span>對齊</span></a></li>
					<li><a href="/common#common_color"><span>顏色</span></a></li>
					<li><a href="/common#common_hidden"><span>其它</span></a></li>
				</ul>
			</li>
			<li :class="{active:(currentpage == 'Normal')}">
				<a href="/normal#"><span>常用樣式</span></a>
				<ul>
					<li><a href="/normal#normal_fontsize"><span>Font</span></a></li>
					<li><a href="/normal#normal_label"><span>Label</span></a></li>
					<li><a href="/normal#normal_tip"><span>TIP</span></a></li>
					<li><a href="/normal#normal_tooltip"><span>ToolTip</span></a></li>
					<li><a href="/normal#normal_loading"><span>LOADING</span></a></li>
					<li><a href="/normal#normal_breadcrumb"><span>麵包屑</span></a></li>
					<li><a href="/normal#normal_pagination"><span>頁碼樣式</span></a></li>
				</ul>
			</li>
			<li :class="{active:(currentpage == 'Layout')}">
				<a href="/layout/grid"><span>排版系統</span></a>
				<ul>
					<li><a href="/layout/grid#layout_grid"><span>GRID</span></a></li>
				</ul>
			</li>
			<li :class="{active:(currentpage == 'FormComponents')}">
				<a href="/components#"><span>表單樣式</span></a>
				<ul>
					<li><a href="/components#components_button"><span>Button</span></a></li>
					<li><a href="/components#components_input"><span>INPUT</span></a></li>
					<li><a href="/components#components_select"><span>SELECT</span></a></li>
					<li><a href="/components/selecttag"><span>SELECT TAG</span></a></li>
					<li><a href="/components#components_dropmenu"><span>DROP MENU</span></a></li>
					<li><a href="/components#components_radio"><span>RADIO</span></a></li>
					<li><a href="/components#components_checkbox"><span>CHECKBOX</span></a></li>
				</ul>
			</li>
			<li :class="{active:(currentpage == 'Box')}">
				<a href="/box#"><span>容器樣式</span></a>
				<ul>
					<li><a href="/box#box_basic"><span>一般樣式</span></a></li>
					<li><a href="/box#box_panel"><span>PANEL</span></a></li>
				</ul>
			</li>
			<li :class="{active:(currentpage == 'Table')}">
				<a href="/table#"><span>表格樣式</span></a>
			</li>
			<li>
				<a href=""><span>列表樣式</span></a>
			</li>
			<li :class="{active:(currentpage == 'Tabs')}">
				<a href="/tabs#"><span>TABS樣式</span></a>
			</li>
			<li :class="{active:(currentpage == 'Modal')}">
				<a href="/modal#"><span>MODAL樣式</span></a>
			</li>
			<li>
				<a href=""><span>日期樣式</span></a>
			</li>
			<li :class="{active:(currentpage == 'Animation')}">
				<a href="/animation#"><span>動畫樣式</span></a>
			</li>
			<li :class="{active:(currentpage == 'FI')}">
				<a href="/FI/normal#"><span>FONTICON</span></a>
				<ul>
					<li><a href="/FI/normal#"><span>normal</span></a></li>
					<li><a href="/FI/drip#"><span>drip</span></a></li>
					<li><a href="/FI/awesome#"><span>awesome</span></a></li>
				</ul>
			</li>
		</ul>
	</section>
</template>
<script>
export default {
	data(){
		return{};
	},
	computed: {
		currentpage(){
			return this.$router.history.current.name;
		}
	}
}
</script>