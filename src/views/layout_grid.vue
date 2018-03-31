<template>
	<article>
		<div class="header">
			<span class="title">排版系統</span>
		</div>
		<div class="label label-info label-twins"><span>row</span><span>需使用row包住，一列為12元素為架構</span></div>
		<div class="content">
			<section id="layout_grid">
				<div class="title">GRID LAYOUT</div>
				<div class="desc">適用版型：device width >= 1200px</div>
				<div class="label label-info label-twins"><span>col-lg-*(1-12)</span><span>主架構</span></div>
				<pre class="codeWrap">
					<div class="row">
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-11">col-lg-11</div>
					</div>
				</pre>
				<div class="styleWrap">
					<div class="row">
						<div class="label  label-default label-NR col-lg-12">col-lg-12</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-11">col-lg-11</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-lg-2">col-lg-2</div>
						<div class="label  label-default label-NR col-lg-10">col-lg-10</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-lg-4">col-lg-4</div>
						<div class="label  label-default label-NR col-lg-8">col-lg-8</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-lg-6">col-lg-6</div>
						<div class="label  label-default label-NR col-lg-6">col-lg-6</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
						<div class="label  label-default label-NR col-lg-1">col-lg-1</div>
					</div>
				</div>

				<div class="desc">適用版型：device width &lt; 1200px, device width>= 1000px</div>
				<div class="label label-info label-twins"><span>col-md-*(1-12)</span><span>主架構</span></div>
				<div class="styleWrap">
					<div class="row">
						<div class="label  label-default label-NR col-md-12">col-md-12</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
						<div class="label  label-default label-NR col-md-11">col-md-11</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-md-2">col-md-2</div>
						<div class="label  label-default label-NR col-md-10">col-md-10</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-md-4">col-md-4</div>
						<div class="label  label-default label-NR col-md-8">col-md-8</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-md-6">col-md-6</div>
						<div class="label  label-default label-NR col-md-6">col-md-6</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
						<div class="label  label-default label-NR col-md-1">col-md-1</div>
					</div>
				</div>
				
				<div class="desc">適用版型：device width &lt; 1000px, device width>= 768px</div>
				<div class="label label-info label-twins"><span>col-sm-*(1-12)</span><span>主架構</span></div>
				<div class="styleWrap">
					<div class="row">
						<div class="label  label-default label-NR col-sm-12">col-sm-12</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
						<div class="label  label-default label-NR col-sm-11">col-sm-11</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-sm-2">col-sm-2</div>
						<div class="label  label-default label-NR col-sm-10">col-sm-10</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-sm-4">col-sm-4</div>
						<div class="label  label-default label-NR col-sm-8">col-sm-8</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-sm-6">col-sm-6</div>
						<div class="label  label-default label-NR col-sm-6">col-sm-6</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
						<div class="label  label-default label-NR col-sm-1">col-sm-1</div>
					</div>
				</div>
				
				<div class="desc">適用版型：device width &lt; 768px, device width>= 480px</div>
				<div class="label label-info label-twins"><span>col-xs-*(1-12)</span><span>主架構</span></div>
				<div class="styleWrap">
					<div class="row">
						<div class="label  label-default label-NR col-xs-12">col-xs-12</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
						<div class="label  label-default label-NR col-xs-11">col-xs-11</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-xs-2">col-xs-2</div>
						<div class="label  label-default label-NR col-xs-10">col-xs-10</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-xs-4">col-xs-4</div>
						<div class="label  label-default label-NR col-xs-8">col-xs-8</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-xs-6">col-xs-6</div>
						<div class="label  label-default label-NR col-xs-6">col-xs-6</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
						<div class="label  label-default label-NR col-xs-1">col-xs-1</div>
					</div>
				</div>

				<div class="desc">適用版型：device width &lt; 480px</div>
				<div class="label label-info label-twins"><span>col-xxs-*(1-12)</span><span>主架構</span></div>
				<div class="styleWrap">
					<div class="row">
						<div class="label  label-default label-NR col-xxs-12">col-xxs-12</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
						<div class="label  label-default label-NR col-xxs-11">col-xxs-11</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-xxs-2">col-xxs-2</div>
						<div class="label  label-default label-NR col-xxs-10">col-xxs-10</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-xxs-4">col-xxs-4</div>
						<div class="label  label-default label-NR col-xxs-8">col-xxs-8</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-xxs-6">col-xxs-6</div>
						<div class="label  label-default label-NR col-xxs-6">col-xxs-6</div>
					</div>
					<div class="row">
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
						<div class="label  label-default label-NR col-xxs-1">col-xxs-1</div>
					</div>
				</div>
			</section>
		</div>
	</article>
</template>