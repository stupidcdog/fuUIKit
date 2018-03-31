<template>
	<article>
		<div class="header">
			<span class="title">常用樣式</span>
		</div>
		<div class="content">
			<section id="normal_fontsize">
				<div class="title">字體大小</div>
				<div class="desc">h1 ~ 6的文字大小，以h4為基底(16px)，遞增8px；遞減2px</div>
				<pre class="codeWrap">
					<h1>h1 字體大小</h1>
					<h2>h2 字體大小</h2>
					<h3>h3 字體大小</h3>
					<h4>h4 字體大小</h4>
					<h5>h5 字體大小</h5>
					<h6>h6 字體大小</h6>
				</pre>
				<div class="styleWrap MA-ITEM-B-15">
					<h1>h1 字體大小</h1>
					<h2>h2 字體大小</h2>
					<h3>h3 字體大小</h3>
					<h4>h4 字體大小</h4>
					<h5>h5 字體大小</h5>
					<h6>h6 字體大小</h6>
				</div>

				<div class="title">立體文字樣式</div>
				<div class="label label-info label-twins"><span>F-DIM</span><span>立體樣式(灰色)</span></div>
				<pre class="codeWrap">
					<h1 class="F-DIM FC-W">Hello, Dimension Fonts</h1>
				</pre>
				<div class="styleWrap">
					<h1 class="F-DIM FC-W">Hello, Dimension Fonts</h1>
				</div>

				<div class="title">立體文字樣式</div>
				<div class="label label-info label-twins"><span>F-BORDER</span><span>文字邊框(深灰色)</span></div>
				<pre class="codeWrap">
					<h1 class="F-BORDER FC-W">Hello, Border Fonts</h1>
				</pre>
				<div class="styleWrap">
					<h1 class="F-BORDER FC-W">Hello, Border Fonts</h1>
				</div>
			</section>

			<section id="normal_label">
				<div class="title">LABEL_BASICS</div>
				<div class="desc">標籤的樣式設定 (設定五種狀態: (無)、default、primary、info、success、warning、fail)</div>
				<pre class="codeWrap">
					<span class="label">Normal Label</span>
					<span class="label label-default">default Label</span>
					<span class="label label-primary">primary Label</span>
					<span class="label label-info">Info Label</span>
					<span class="label label-success">Success Label</span>
					<span class="label label-warning">Warning Label</span>
					<span class="label label-fail">Fail Label</span>
				</pre>
				<div class="styleWrap">
					<span class="label">Normal Label</span>
					<span class="label label-default">default Label</span>
					<span class="label label-primary">primary Label</span>
					<span class="label label-info">Info Label</span>
					<span class="label label-success">Success Label</span>
					<span class="label label-warning">Warning Label</span>
					<span class="label label-fail">Fail Label</span>
				</div>
				
				<div class="title">LABEL_SMALL</div>
				<pre class="codeWrap">
					<span class="label label-sm">Normal Label</span>
					<span class="label label-default label-sm">Default Label</span>
					<span class="label label-primary label-sm">Primary Label</span>
					<span class="label label-info label-sm">Info Label</span>
					<span class="label label-success label-sm">Success Label</span>
					<span class="label label-warning label-sm">Warning Label</span>
					<span class="label label-fail label-sm">Fail Label</span>
				</pre>
				<div class="styleWrap">
					<span class="label label-sm">Normal Label</span>
					<span class="label label-default label-sm">Default Label</span>
					<span class="label label-primary label-sm">Primary Label</span>
					<span class="label label-info label-sm">Info Label</span>
					<span class="label label-success label-sm">Success Label</span>
					<span class="label label-warning label-sm">Warning Label</span>
					<span class="label label-fail label-sm">Fail Label</span>
				</div>

				<div class="title">LABEL_LARGE</div>
				<pre class="codeWrap">
					<span class="label label-lg">Normal Label</span>
					<span class="label label-default label-lg">Default Label</span>
					<span class="label label-primary label-lg">Primary Label</span>
					<span class="label label-info label-lg">Info Label</span>
					<span class="label label-success label-lg">Success Label</span>
					<span class="label label-warning label-lg">Warning Label</span>
					<span class="label label-fail label-lg">Fail Label</span>
				</pre>
				<div class="styleWrap">
					<span class="label label-lg">Normal Label</span>
					<span class="label label-default label-lg">Default Label</span>
					<span class="label label-primary label-lg">Primary Label</span>
					<span class="label label-info label-lg">Info Label</span>
					<span class="label label-success label-lg">Success Label</span>
					<span class="label label-warning label-lg">Warning Label</span>
					<span class="label label-fail label-lg">Fail Label</span>
				</div>

				<div class="title">LABEL_SINGLE BOLD LINE</div>
				<div class="desc">單邊粗線樣式(上邊: label-L-T; 下邊: label-L-B; 左邊: label-L-R; 右邊: label-L-L)</div>
				<pre class="codeWrap">
					<span class="label label-L-L">Normal Label</span>
					<span class="label label-default label-L-L">Default Label</span>
					<span class="label label-primary label-L-L">Primary Label</span>
					<span class="label label-info label-L-L">Info Label</span>
					<span class="label label-success label-L-L">Success Label</span>
					<span class="label label-warning label-L-L">Warning Label</span>
					<span class="label label-fail label-L-L">Fail Label</span>
				</pre>
				<div class="styleWrap">
					<span class="label label-L-L">Normal Label</span>
					<span class="label label-default label-L-L">Default Label</span>
					<span class="label label-primary label-L-L">Primary Label</span>
					<span class="label label-info label-L-L">Info Label</span>
					<span class="label label-success label-L-L">Success Label</span>
					<span class="label label-warning label-L-L">Warning Label</span>
					<span class="label label-fail label-L-L">Fail Label</span>
				</div>

				<div class="title">LABEL_GRANDIENT</div>
				<pre class="codeWrap">
					<span class="label label-G">Normal Label</span>
					<span class="label label-G-Default">Default Label</span>
					<span class="label label-G-primary">primary Label</span>
					<span class="label label-G-info">Info Label</span>
					<span class="label label-G-success">Success Label</span>
					<span class="label label-G-warning">Warning Label</span>
					<span class="label label-G-fail">Fail Label</span>
				</pre>
				<div class="styleWrap">
					<span class="label label-G">Normal Label</span>
					<span class="label label-G-Default">Default Label</span>
					<span class="label label-G-primary">primary Label</span>
					<span class="label label-G-info">Info Label</span>
					<span class="label label-G-success">Success Label</span>
					<span class="label label-G-warning">Warning Label</span>
					<span class="label label-G-fail">Fail Label</span>
				</div>

				<div class="title">LABEL_TWINS</div>
				<pre class="codeWrap">
					<span class="label label-twins"><span>Label</span><span>Normal</span></span>
					<span class="label label-default label-twins"><span>Label</span><span>Default</span></span>
					<span class="label label-primary label-twins"><span>Label</span><span>Primary</span></span>
					<span class="label label-info label-twins"><span>Label</span><span>Info</span></span>
					<span class="label label-success label-twins"><span>Label</span><span>Success</span></span>
					<span class="label label-warning label-twins"><span>Label</span><span>Warning</span></span>
					<span class="label label-fail label-twins"><span>Label</span><span>Fail</span></span>
				</pre>
				<div class="styleWrap">
					<span class="label label-twins"><span>Label</span><span>Normal</span></span>
					<span class="label label-default label-twins"><span>Label</span><span>Default</span></span>
					<span class="label label-primary label-twins"><span>Label</span><span>Primary</span></span>
					<span class="label label-info label-twins"><span>Label</span><span>Info</span></span>
					<span class="label label-success label-twins"><span>Label</span><span>Success</span></span>
					<span class="label label-warning label-twins"><span>Label</span><span>Warning</span></span>
					<span class="label label-fail label-twins"><span>Label</span><span>Fail</span></span>
				</div>

				<div class="title">LABEL_TWINS_GRANDIENT</div>
				<pre class="codeWrap">
					<span class="label label-G label-twins"><span>Label</span><span>Normal</span></span>
					<span class="label label-G-default label-twins"><span>Label</span><span>Default</span></span>
					<span class="label label-G-primary label-twins"><span>Label</span><span>Primary</span></span>
					<span class="label label-G-info label-twins"><span>Label</span><span>Info</span></span>
					<span class="label label-G-success label-twins"><span>Label</span><span>Success</span></span>
					<span class="label label-G-warning label-twins"><span>Label</span><span>Warning</span></span>
					<span class="label label-G-fail label-twins"><span>Label</span><span>Fail</span></span>
				</pre>
				<div class="styleWrap">
					<span class="label label-G label-twins"><span>Label</span><span>Normal</span></span>
					<span class="label label-G-default label-twins"><span>Label</span><span>Default</span></span>
					<span class="label label-G-primary label-twins"><span>Label</span><span>Primary</span></span>
					<span class="label label-G-info label-twins"><span>Label</span><span>Info</span></span>
					<span class="label label-G-success label-twins"><span>Label</span><span>Success</span></span>
					<span class="label label-G-warning label-twins"><span>Label</span><span>Warning</span></span>
					<span class="label label-G-fail label-twins"><span>Label</span><span>Fail</span></span>
				</div>

				<div class="title">不要弧度</div>
				<div class="label label-info label-twins"><span>label-NR</span><span>不要弧度</span></div>
				<pre class="codeWrap">
					<span class="label label-NR label-twins"><span>Label</span><span>Normal</span></span>
				</pre>
				<div class="styleWrap">
					<span class="label label-NR label-twins"><span>Label</span><span>Normal</span></span>
				</div>

			</section>

			<section id="normal_tip">
				<div class="title">TIP</div>
				<div class="label label-info label-twins"><span>tip</span><span>主樣式</span></div>
				<div class="label label-info label-twins"><span>tip-primary</span><span>主要</span></div>
				<div class="label label-info label-twins"><span>tip-info</span><span>資訊</span></div>
				<div class="label label-info label-twins"><span>tip-warning</span><span>警告</span></div>
				<div class="label label-info label-twins"><span>box-fail</span><span>錯誤</span></div>
				<div class="label label-info label-twins"><span>tip-purple</span><span>紫色</span></div>
				<pre class="codeWrap">
					<div class="tip">提示訊息</div>
					<div class="tip tip-primary">主要提示訊息</div>
					<div class="tip tip-info">一般提示訊息</div>
					<div class="tip tip-warning">警告提示訊息</div>
					<div class="tip tip-fail">錯誤提示訊息</div>
					<div class="tip tip-purple">紫色提示訊息</div>
				</pre>
				<div class="styleWrap MA-ITEM-B-10">
					<div class="tip">提示訊息</div>
					<div class="tip tip-primary">主要提示訊息</div>
					<div class="tip tip-info">一般提示訊息</div>
					<div class="tip tip-warning">警告提示訊息</div>
					<div class="tip tip-fail">錯誤提示訊息</div>
					<div class="tip tip-purple">紫色提示訊息</div>
				</div>
			</section>

			<section id="normal_tooltip">
				<div class="title">TOOLTIP</div>
				<div class="label label-info label-twins"><span>data-toggle='tip'</span><span>基本設定屬性</span></div>
				<div class="label label-info label-twins"><span>tip='訊息'</span><span>顯示訊息</span></div>
				<div class="label label-info label-twins"><span>data-direction=UP, DOWN, LEFT, RIGHT(上(預設)、下、左、右)</span><span>訊息顯示方向</span></div>
				<div class="styleWrap">
					<button class="btn btn-info" data-toggle='tip' tip='TipMessage'>Hover ME(UP)(DEFAULT)</button>
					<button class="btn btn-info" data-toggle='tip' data-direction='DOWN' tip='I am TipMessage'>Hover ME(DOWN)</button>
					<button class="btn btn-info" data-toggle='tip' data-direction='LEFT' tip='I am TipMessage'>Hover ME(LEFT)</button>
					<button class="btn btn-info" data-toggle='tip' data-direction='RIGHT' tip='I am TipMessage'>Hover ME(RIGHT)</button>
				</div>
			</section>

			<section id="normal_loading">
				<div class="title">LOADING_BALL_BASIC</div>
				<div class="label label-twins label-info"><span>.loading-ball</span><span>主樣式</span></div>
				<div class="label label-twins label-info"><span>.active</span><span>顯示loading樣式</span></div>
				<div class="label label-twins label-info"><span>loading-text='文字'</span><span>loading文字</span></div>
				<pre class="codeWrap">
					<div class="loading-ball active" loading-text="loading..."><div></div><div></div><div></div></div>
				</pre>
				<div class="styleWrap">
					<div class="loading-ball active" loading-text="loading..."><div></div><div></div><div></div></div>
				</div>

				<div class="title">LOADING_BALL_SMALL</div>
				<div class="label label-twins label-info"><span>.loading-sm</span><span>small size</span></div>
				<pre class="codeWrap">
					<div class="loading-ball loading-sm active" loading-text="loading..."><div></div><div></div><div></div></div>
				</pre>
				<div class="styleWrap">
					<div class="loading-ball loading-sm active" loading-text="loading..."><div></div><div></div><div></div></div>
				</div>

				<div class="title">LOADING_BALL_LARGE</div>
				<div class="label label-twins label-info"><span>.loading-lg</span><span>large size</span></div>
				<pre class="codeWrap">
					<div class="loading-ball loading-lg active" loading-text="loading..."><div></div><div></div><div></div></div>
				</pre>
				<div class="styleWrap">
					<div class="loading-ball loading-lg active" loading-text="loading..."><div></div><div></div><div></div></div>
				</div>

				<div class="title">LOADING_BALL_COLOR</div>
				<div class="label label-twins label-info"><span>.loading-cW</span><span>白色</span></div>
				<div class="label label-twins label-info"><span>.loading-cG</span><span>綠色</span></div>
				<div class="label label-twins label-info"><span>.loading-cB</span><span>藍色</span></div>
				<pre class="codeWrap">
					<div class="loading-ball loading-cW active" loading-text="loading..."><div></div><div></div><div></div></div>
					<div class="loading-ball loading-cB active" loading-text="loading..."><div></div><div></div><div></div></div>
					<div class="loading-ball loading-cG active" loading-text="loading..."><div></div><div></div><div></div></div>
				</pre>
				<div class="styleWrap">
					<div class="loading-ball loading-cW active" loading-text="loading..." style="background-color: #666; padding: 2px;"><div></div><div></div><div></div></div>
					<div class="loading-ball loading-cB active" loading-text="loading..."><div></div><div></div><div></div></div>
					<div class="loading-ball loading-cG active" loading-text="loading..."><div></div><div></div><div></div></div>
				</div>
			</section>
			
			<section id="normal_loading_ballswitch">
				<div class="title">LOADING_BALLSWITCH_BASIC</div>
				<div class="label label-twins label-info"><span>.loading-ballswitch</span><span>主樣式</span></div>
				<pre class="codeWrap">
					<div class="loading-ballswitch active"></div>
				</pre>
				<div class="styleWrap">
					<div class="loading-ballswitch active"></div>
				</div>
			</section>

			<section id="normal_loading_circle">
				<div class="title">LOADING_CIRCLE_BASICE</div>
				<div class="label label-twins label-info"><span>.loading</span><span>主樣式</span></div>
				<div class="label label-twins label-info"><span>.loading-dark</span><span>深色CIRCLE樣式</span></div>
				<pre class="codeWrap">
					<div class="box box-primary box-W-100 box-H-100 loading loading-dark"></div>
				</pre>
				<div class="styleWrap inline">
					<div class="box box-W-100 box-H-100 loading" style="background-color: #666;"></div>
					<div class="box box-primary box-W-100 box-H-100 loading loading-dark"></div>
				</div>
			</section>

			<section id="normal_loading_heartspinner">
				<div class="title">LOADING_HEART_SPINNER</div>
				<div class="label label-twins label-info"><span>.loading-heartSpinner</span><span>主樣式</span></div>
				<pre class="codeWrap">
					<div class="loading-heartSpinner"></div>
				</pre>
				<div class="styleWrap">
					<div class="loading-heartSpinner"></div>
				</div>
			</section>

			<section id="normal_loading_meter">
				<div class="title">LOADING_METER</div>
				<div class="label label-twins label-info"><span>.loading-meter</span><span>主樣式</span></div>
				<pre class="codeWrap">
					<div class="loading-meter"></div>
				</pre>
				<div class="styleWrap">
					<div class="loading-meter"></div>
				</div>
			</section>

			<section id="normal_loading_skeleton">
				<div class="title">LOADING_SKELETON</div>
				<div class="label label-twins label-info"><span>.loading-skeleton</span><span>主樣式</span></div>
				<pre class="codeWrap">
					<div class="loading-skeleton"></div>
				</pre>
				<div class="styleWrap">
					<div class="loading-skeleton"></div>
				</div>
			</section>
			
			<section id="normal_breadcrumb">
				<div class="title">麵包屑</div>
				<div class="label label-info label-twins"><span>breadcrumbWrap</span><span>主TAG</span></div>
				<div class="label label-info label-twins"><span>BC-S-1</span><span>樣式1</span></div>
				<pre class="codeWrap">
					<div class="breadcrumbWrap BC-S-1"><ul>
						<li><a href="javascript:;"><span>首頁</span></a></li>
						<li><a href="javascript:;"><span>子頁1</span></a></li>
						<li><a href="javascript:;"><span>子頁2</span></a></li>
						<li><span>最終頁</span></li>
					</ul></div>
				</pre>
				<div class="styleWrap">
					<div class="breadcrumbWrap BC-S-1">
						<ul>
							<li><a href="javascript:;"><span>首頁</span></a></li>
							<li><a href="javascript:;"><span>子頁1</span></a></li>
							<li><a href="javascript:;"><span>子頁2</span></a></li>
							<li><span>最終頁</span></li>
						</ul>
					</div>
				</div>
			</section>

			<section id="normal_pagination">
				<div class="title">頁碼樣式</div>
				<div class="label label-info label-twins"><span>pagination</span><span>主TAG</span></div>
				<div class="label label-info label-twins"><span>PG-S-1</span><span>樣式1</span></div>
				<pre class="codeWrap">
					<div class="pagination PG-S-1"><ul>
						<li><a href="javascript:;">上一頁</a></li>
						<li class="active"><a href="javascript:;">1</a></li>
						<li><a href="javascript:;">2</a></li>
						<li><a href="javascript:;">3</a></li>
						<li><a href="javascript:;">4</a></li>
						<li><a href="javascript:;">5</a></li>
						<li><a href="javascript:;">下一頁</a></li>
					</ul></div>
				</pre>
				<div class="styleWrap">
					<div class="pagination PG-S-1">
						<ul>
							<li><a href="javascript:;">上一頁</a></li>
							<li class="active"><a href="javascript:;">1</a></li>
							<li><a href="javascript:;">2</a></li>
							<li><a href="javascript:;">3</a></li>
							<li><a href="javascript:;">4</a></li>
							<li><a href="javascript:;">5</a></li>
							<li><a href="javascript:;">下一頁</a></li>
						</ul>
					</div>
				</div>
			</section>

		</div>
	</article>
</template>