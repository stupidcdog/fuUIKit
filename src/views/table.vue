<template>
	<article>
		<div class="header">
			<span class="title">表格樣式</span>
		</div>
		<div class="content">
			<section id="table">
				<div class="title">TABLE_BASIC</div>
				<div class="desc">表格的樣式設定 (設定五種色系，default(gray), blue, green, orange, red)</div>
				<div class="label label-info label-twins"><span>table-blue, table-green, table-orange, table-red</span><span>表格色系</span></div>
				<div class="label label-info label-twins"><span>liner</span><span>線框表格</span></div>
				<div class="label label-info label-twins"><span>liner-V</span><span>垂直線框表格</span></div>
				<div class="label label-info label-twins"><span>liner-L</span><span>水平線框表格</span></div>
				<div class="label label-info label-twins"><span>twins</span><span>第2n列加重色調</span></div>
				<pre class="codeWrap">
					<table class="table twins liner">
						<caption>caption</caption>
						<thead>
							<tr>
								<td class="hover">header1</td>
								<td>header2</td>
								<td>header3</td>
							</tr>
						</thead>
						<tbody>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
						</tbody>
						<tfoot>
							<tr><td colspan="3">footer</td></tr>
						</tfoot>
					</table>
				</pre >
				<div class="styleWrap MA-ITEM-B-20">
					<table class="table twins liner">
						<caption>caption</caption>
						<thead>
							<tr>
								<td class="hover">header1</td>
								<td>header2</td>
								<td>header3</td>
							</tr>
						</thead>
						<tbody>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
						</tbody>
						<tfoot>
							<tr><td colspan="3">footer</td></tr>
						</tfoot>
					</table>
					<table class="table table-blue twins liner">
						<caption>caption</caption>
						<thead>
							<tr>
								<td class="hover">header1</td>
								<td>header2</td>
								<td>header3</td>
							</tr>
						</thead>
						<tbody>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
						</tbody>
						<tfoot>
							<tr><td colspan="3">footer</td></tr>
						</tfoot>
					</table>
					<table class="table table-green twins liner">
						<caption>caption</caption>
						<thead>
							<tr>
								<td class="hover">header1</td>
								<td>header2</td>
								<td>header3</td>
							</tr>
						</thead>
						<tbody>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
						</tbody>
						<tfoot>
							<tr><td colspan="3">footer</td></tr>
						</tfoot>
					</table>
					<table class="table table-orange twins liner">
						<caption>caption</caption>
						<thead>
							<tr>
								<td class="hover">header1</td>
								<td>header2</td>
								<td>header3</td>
							</tr>
						</thead>
						<tbody>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
						</tbody>
						<tfoot>
							<tr><td colspan="3">footer</td></tr>
						</tfoot>
					</table>
					<table class="table table-red twins liner">
						<caption>caption</caption>
						<thead>
							<tr>
								<td class="hover">header1</td>
								<td>header2</td>
								<td>header3</td>
							</tr>
						</thead>
						<tbody>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
						</tbody>
						<tfoot>
							<tr><td colspan="3">footer</td></tr>
						</tfoot>
					</table>
				</div>

				<div class="title">TABLE_SMALL</div>
				<div class="label label-info label-twins"><span>table-sm</span><span>樣式</span></div>
				<pre class="codeWrap">
					<table class="table table-sm twins liner">
						<caption>caption</caption>
						<thead>
							<tr>
								<td>header1</td>
								<td>header2</td>
								<td>header3</td>
							</tr>
						</thead>
						<tbody>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
						</tbody>
						<tfoot>
							<tr><td colspan="3">footer</td></tr>
						</tfoot>
					</table>
				</pre>
				<div class="styleWrap">
					<table class="table table-sm twins liner">
						<caption>caption</caption>
						<thead>
							<tr>
								<td>header1</td>
								<td>header2</td>
								<td>header3</td>
							</tr>
						</thead>
						<tbody>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
						</tbody>
						<tfoot>
							<tr><td colspan="3">footer</td></tr>
						</tfoot>
					</table>
				</div>

				<div class="title">TABLE_LARGE</div>
				<div class="label label-info label-twins"><span>table-lg</span><span>樣式</span></div>
				<pre class="codeWrap">
					<table class="table table-lg twins liner">
						<caption>caption</caption>
						<thead>
							<tr>
								<td>header1</td>
								<td>header2</td>
								<td>header3</td>
							</tr>
						</thead>
						<tbody>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
						</tbody>
						<tfoot>
							<tr><td colspan="3">footer</td></tr>
						</tfoot>
					</table>
				</pre>
				<div class="styleWrap">
					<table class="table table-lg twins liner">
						<caption>caption</caption>
						<thead>
							<tr>
								<td>header1</td>
								<td>header2</td>
								<td>header3</td>
							</tr>
						</thead>
						<tbody>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
							<tr><td>c1</td><td>c2</td><td>c3</td></tr>
						</tbody>
						<tfoot>
							<tr><td colspan="3">footer</td></tr>
						</tfoot>
					</table>
				</div>
			</section>
		</div>
	</article>
</template>