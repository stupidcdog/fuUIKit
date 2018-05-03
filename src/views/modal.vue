<template>
	<article>
		<div class="header">
			<span class="title">MODAL樣式</span>
		</div>
		<div class="content">
			<section id="modal_basic">
				<div class="title">MODAL BASIC <span class="label label-sm label-warning">script</span></div>
				<h4>樣式</h4>
				<div class="label label-info label-twins"><span>.modal</span><span>主架構</span></div>
				<div class="label label-info label-twins"><span>.modal-s1</span><span>基本樣式</span></div>
				<div class="label label-info label-twins"><span>.modal-fade</span><span>MODAL動畫-FADE</span></div>
				<div class="label label-info label-twins"><span>.modal-drop</span><span>MODAL動畫-DROP</span></div>
				<div class="label label-info label-twins"><span>.modal-center</span><span>MODAL位置-置中</span></div>
				
				<h4>SCRIPT</h4>
				<div class="label label-info label-twins"><span>data-toggle='modal'</span><span>主架構</span></div>
				<div class="label label-info label-twins"><span>data-target='[OBJECT]'</span><span>目標MODAL</span></div>
				<div class="label label-info label-twins"><span>data-dismiss='modal'</span><span>關閉MODAL</span></div>
				<div class="label label-info label-twins"><span>$target.Modal.show()</span><span>EVENT - 開啟MODAL</span></div>
				<div class="label label-info label-twins"><span>$target.Modal.hide()</span><span>EVENT - 關閉MODAL</span></div>
				<pre class="codeWrap">
					<button class="btn btn-primary" data-toggle="modal" data-target="#modalBase">MODAL BASIC</button>
					<div id="modalBase" class="modal modal-s1 modal-fade">
						<div class="modal-content">
							<div class="modal-header">
								<div class="title">MODAL HEADER</div>
								<div class="modal-close closeIcon" arial-label="Close" data-dismiss="modal">
									<span class="drips-cross"></span>
								</div>
							</div>
							<div class="modal-body">
								CONTENT
							</div>
							<div class="modal-footer">
								<button class="btn" @click="MH()">EVENT HIDE</button>
								<button class="btn" data-dismiss="modal">關閉</button>
							</div>
						</div>
					</div>
				</pre>
				<div class="styleWrap">
					<button class="btn btn-primary" data-toggle="modal" data-target="#modalBase">MODAL BASIC</button>
					<div id="modalBase" class="modal modal-s1 modal-fade">
						<div class="modal-content">
							<div class="modal-header">
								<div class="title">MODAL HEADER</div>
								<div class="modal-close closeIcon" arial-label="Close" data-dismiss="modal">
									<span class="drips-cross"></span>
								</div>
							</div>
							<div class="modal-body">
								CONTENT
							</div>
							<div class="modal-footer">
								<button class="btn" @click="MH()">EVENT HIDE</button>
								<button class="btn" data-dismiss="modal">關閉</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section id="modal_colnum">
				<div class="title">MODAL 二欄架構</div>
				<h4>樣式</h4>
				<div class="label label-info label-twins"><span>.modal-column</span><span>主樣式</span></div>
				<pre class="codeWrap">
					<button class="btn btn-primary" data-toggle="modal" data-target="#modalTwoColnum">MODAL 二欄架構</button>
					<div id="modalTwoColnum" class="modal modal-fade modal-column">
						<div class="modal-close" arial-label="Close" data-dismiss="modal">
							<span class="drips-cross"></span>
						</div>
						<div class="modal-content">
							<div class="modal-image" style="background-image: url('/static/images/modalExample.PNG');"></div>
							<div class="modal-body">
								<div class="modal-header">
									<div class="title">MODAL TWO COLUMN</div>
								</div>
								<div class="content">
									content
								</div>
								<div class="modal-footer">
									<button class="btn" data-dismiss="modal">關閉</button>
								</div>
							</div>
						</div>
					</div>
				</pre>
				<div class="styleWrap">
					<button class="btn btn-primary" data-toggle="modal" data-target="#modalTwoColnum">MODAL 二欄架構</button>
					<div id="modalTwoColnum" class="modal modal-fade modal-column">
						<div class="modal-close" arial-label="Close" data-dismiss="modal">
							<span class="drips-cross"></span>
						</div>
						<div class="modal-content">
							<div class="modal-image" style="background-image: url('/static/images/modalExample.PNG');"></div>
							<div class="modal-body">
								<div class="modal-header">
									<div class="title">MODAL TWO COLUMN</div>
								</div>
								<div class="content">
									content
								</div>
								<div class="modal-footer">
									<button class="btn" data-dismiss="modal">關閉</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</article>
</template>
<script>
export default {
	methods:{
		MH: function (){
			document.querySelector('#modalBase').Modal.hide();
		}
	}
}
</script>