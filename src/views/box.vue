<template>
	<article>
		<div class="header">
			<span class="title">BOX</span>
		</div>
		<div class="content">
			<section id="box_basic">
				<div class="title">BOX BASIC</div>
				<div class="label label-info label-twins"><span>box</span><span>主樣式</span></div>
				<div class="label label-info label-twins"><span>box-default</span><span>預設(灰)</span></div>
				<div class="label label-info label-twins"><span>box-primary</span><span>主要</span></div>
				<div class="label label-info label-twins"><span>box-info</span><span>資訊</span></div>
				<div class="label label-info label-twins"><span>box-warning</span><span>警告</span></div>
				<div class="label label-info label-twins"><span>box-fail</span><span>錯誤</span></div>
				<pre class="codeWrap">
					<div class="box box-default">
						<div class="header">box header</div>
						<div class="content">box contents</div>
						<div class="footer">box footer</div>
					</div>
				</pre>
				<div class="styleWrap MA-ITEM-B-10">
					<div class="box box-default">
						<div class="header">box header</div>
						<div class="content">box contents</div>
						<div class="footer">box footer</div>
					</div>
					<div class="box box-primary">
						<div class="header">box header</div>
						<div class="content">box contents</div>
						<div class="footer">box footer</div>
					</div>
					<div class="box box-info">
						<div class="header">box header</div>
						<div class="content">box contents</div>
						<div class="footer">box footer</div>
					</div>
					<div class="box box-success">
						<div class="header">box header</div>
						<div class="content">box contents</div>
						<div class="footer">box footer</div>
					</div>
					<div class="box box-warning">
						<div class="header">box header</div>
						<div class="content">box contents</div>
						<div class="footer">box footer</div>
					</div>
					<div class="box box-fail">
						<div class="header">box header</div>
						<div class="content">box contents</div>
						<div class="footer">box footer</div>
					</div>
				</div>
			</section>

			<section id="box_basic_sline">
				<div class="title">BOX BASE SINGLE LINE</div>
				<div class="label label-info"><span>可導入basic的色系樣式</span></div>
				<div class="label label-info label-twins"><span>box-T</span><span>上邊</span></div>
				<div class="label label-info label-twins"><span>box-B</span><span>下邊</span></div>
				<div class="label label-info label-twins"><span>box-R</span><span>右邊</span></div>
				<div class="label label-info label-twins"><span>box-L</span><span>左邊</span></div>
				<pre class="codeWrap">
					<div class="box box-default box-T">
						<div class="header">box header</div>
						<div class="content">box contents</div>
						<div class="footer">box footer</div>
					</div>
				</pre>
				<div class="styleWrap MA-ITEM-B-10">
					<div class="box box-default box-T">
						<div class="header">box header</div>
						<div class="content">box contents</div>
						<div class="footer">box footer</div>
					</div>
					<div class="box box-default box-B">
						<div class="header">box header</div>
						<div class="content">box contents</div>
						<div class="footer">box footer</div>
					</div>
					<div class="box box-default box-R">
						<div class="header">box header</div>
						<div class="content">box contents</div>
						<div class="footer">box footer</div>
					</div>
					<div class="box box-default box-L">
						<div class="header">box header</div>
						<div class="content">box contents</div>
						<div class="footer">box footer</div>
					</div>
				</div>
			</section>

			<section id="box_boxinfo">
				<div class="title">BOX BOXINFO</div>
				<div class="label label-info label-twins"><span>boxInfo</span><span>主樣式</span></div>
				<div class="label label-info label-twins"><span>boxInfo-primary</span><span>主要</span></div>
				<div class="label label-info label-twins"><span>boxInfo-info</span><span>資訊</span></div>
				<div class="label label-info label-twins"><span>boxInfo-warning</span><span>警告</span></div>
				<div class="label label-info label-twins"><span>boxInfo-fail</span><span>錯誤</span></div>

				<pre class="codeWrap">
					<div class="boxInfo">
						<div class="aside"><span class="icon drips-camera"></span></div>
						<div class="content">something write here</div>
					</div>
				</pre>
				<div class="styleWrap flex MA-ITEM-R-10 MA-ITEM-B-10 ">
					<div class="boxInfo">
						<div class="aside"><span class="icon drips-camera"></span></div>
						<div class="content">something write here</div>
					</div>
					<div class="boxInfo boxInfo-primary">
						<div class="aside"><span class="icon drips-camera"></span></div>
						<div class="content">something write here</div>
					</div>
					<div class="boxInfo boxInfo-info">
						<div class="aside"><span class="icon drips-camera"></span></div>
						<div class="content">something write here</div>
					</div>
					<div class="boxInfo boxInfo-warning">
						<div class="aside"><span class="icon drips-camera"></span></div>
						<div class="content">something write here</div>
					</div>
					<div class="boxInfo boxInfo-fail">
						<div class="aside"><span class="icon drips-camera"></span></div>
						<div class="content">something write here</div>
					</div>
				</div>
			</section>

			<section id="box_panel">
				<div class="title">PANEL</div>
				<div class="desc">
					把panel的active移除的話，content則會被隱藏
				</div>
				<div class="label label-info label-twins"><span>panel</span><span>主樣式</span></div>
				<div class="label label-info label-twins"><span>pancel active</span><span>顯示content內容</span></div>
				
				<h4>panel 事件</h4>
				<div class="label label-info label-twins"><span>data-toggle="panel"</span><span>定義使用panel事件</span></div>
				<div class="label label-info label-twins"><span>panel-act="trigger"</span><span>trigger處理(主要使用在content顯示與隱藏)</span></div>
				<div class="label label-info label-twins"><span>panel-act="remove"</span><span>移除整個panel</span></div>

				<pre class="codeWrap">
					<div class="panel active">
						<div class="header">
							<span>PANEL TITLE</span>
							<div class="right">
								<span class="icon turn fu-turn-down" data-toggle="panel" panel-act="trigger"></span>
								<span class="icon fu-cross" data-toggle="panel" panel-act="remove"></span>
							</div>
						</div>
						<div class="content">PUT SOMETHING TO HERE</div>
						<div class="footer">FOOTER</div>
					</div>
				</pre>
				<div class="styleWrap">
					<div class="panel active">
						<div class="header">
							<span>PANEL TITLE</span>
							<div class="right">
								<span class="icon turn fu-turn-down" data-toggle="panel" panel-act="trigger"></span>
								<span class="icon fu-cross" data-toggle="panel" panel-act="remove"></span>
							</div>
						</div>
						<div class="content">PUT SOMETHING TO HERE</div>
						<div class="footer">FOOTER</div>
					</div>
				</div>
			</section>
		</div>
	</article>
</template>