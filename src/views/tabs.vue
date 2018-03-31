<template>
	<article>
		<div class="header">
			<div class="title">TABS</div>
		</div>
		<div class="content">
			<section id="tabs">
				<div class="title">TABS_BASIC</div>
				<div class="desc">
					將TAB分為選單與內容項目，<span class="label label-sm label-info label-twins MA-R-10"><span>tab-menu</span><span>選單項目</span></span><span class="label label-sm label-info label-twins"><span>tab-content</span><span>內容項目</span></span>
				</div>
				<div class="desc">TAB需與JS結合才能進行頁面的切換，需定義TRIGGER-ACT屬性，此屬性將會把相關物件加入或移除active樣式</div>
				<div class="label label-warning label-twins">
					<span>trigger-act</span>
					<span>定義群組(若單純加入屬性無帶入相關數值，則不事先取消群組物件active樣式)</span>
				</div>
				<div class="label label-warning label-twins">
					<span>trigger-auto</span>
					<span>連點此物件時，是否自動判斷加入或取消active行為(若無設定，預設為true)</span>
				</div>
				<div class="label label-warning label-twins">
					<span>data-target</span>
					<span>綁定物件，當此物件active同時，相對應的物件也會被加入active</span>
				</div>
				<pre class="codeWrap">
					<div class="tab">
						<nav class="tab-menu">
							<div class="jTab active" trigger-act='.jTab' trigger-auto='false' data-target="#basic_tab1"><a href="javascript:;"><span>TAB1</span></a></div>
							<div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#basic_tab2"><a href="javascript:;"><span>TAB2</span></a></div>
							<div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#basic_tab3"><a href="javascript:;"><span>TAB3</span></a></div>
						</nav>
						<div class="tab-content">
							<section id="basic_tab1" class="jTab active">TAB1</section>
							<section id="basic_tab2" class="jTab">TAB2</section>
							<section id="basic_tab3" class="jTab">TAB3</section>
						</div>
					</div>
				</pre>
				<div class="styleWrap">
					<div class="tab">
						<nav class="tab-menu">
							<div class="jTab active" trigger-act='.jTab' trigger-auto='false' data-target="#basic_tab1"><a href="javascript:;"><span>TAB1</span></a></div>
							<div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#basic_tab2"><a href="javascript:;"><span>TAB2</span></a></div>
							<div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#basic_tab3"><a href="javascript:;"><span>TAB3</span></a></div>
						</nav>
						<div class="tab-content">
							<section id="basic_tab1" class="jTab active">TAB1</section>
							<section id="basic_tab2" class="jTab">TAB2</section>
							<section id="basic_tab3" class="jTab">TAB3</section>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="title">Tab Style 1</div>
				<div class="label label-warning label-twins">
					<span>tab-wrapper</span>
					<span>主樣式</span>
				</div>
				<pre class="codeWrap">
					<div class="tab tab-wrapper">
						<nav class="tab-menu">
							<div class="jTab active" trigger-act='.jTab' trigger-auto='false' data-target="#basic_tab1"><a href="javascript:;"><span>TAB1</span></a></div>
							<div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#basic_tab2"><a href="javascript:;"><span>TAB2</span></a></div>
							<div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#basic_tab3"><a href="javascript:;"><span>TAB3</span></a></div>
						</nav>
						<div class="tab-content">
							<section id="basic_tab1" class="jTab active">TAB1</section>
							<section id="basic_tab2" class="jTab">TAB2</section>
							<section id="basic_tab3" class="jTab">TAB3</section>
						</div>
					</div>
				</pre>
				<div class="styleWrap">
					<div class="tab tab-wrapper">
						<nav class="tab-menu">
							<div class="jTab active" trigger-act='.jTab' trigger-auto='false' data-target="#basic_tab1"><a href="javascript:;"><span>TAB1</span></a></div>
							<div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#basic_tab2"><a href="javascript:;"><span>TAB2</span></a></div>
							<div class="jTab" trigger-act='.jTab' trigger-auto='false' data-target="#basic_tab3"><a href="javascript:;"><span>TAB3</span></a></div>
						</nav>
						<div class="tab-content">
							<section id="basic_tab1" class="jTab active">TAB1</section>
							<section id="basic_tab2" class="jTab">TAB2</section>
							<section id="basic_tab3" class="jTab">TAB3</section>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="title">Tab Style 2</div>
				<div class="label label-warning label-twins">
					<span>tab-wrapper2</span>
					<span>主樣式</span>
				</div>
				<pre class="codeWrap">
					<div class="tab tab-wrapper2">
						<nav class="tab-menu">
							<div class="jTab2 active" trigger-act='.jTab2' trigger-auto='false' data-target="#wrapper2_tab1"><a href="javascript:;"><span>TAB1</span></a></div>
							<div class="jTab2" trigger-act='.jTab2' trigger-auto='false' data-target="#wrapper2_tab2"><a href="javascript:;"><span>TAB2</span></a></div>
							<div class="jTab2" trigger-act='.jTab2' trigger-auto='false' data-target="#wrapper2_tab3"><a href="javascript:;"><span>TAB3</span></a></div>
						</nav>
						<div class="tab-content">
							<section id="wrapper2_tab1" class="jTab2 active">TAB1</section>
							<section id="wrapper2_tab2" class="jTab2">TAB2</section>
							<section id="wrapper2_tab3" class="jTab2">TAB3</section>
						</div>
					</div>
				</pre>
				<div class="styleWrap">
					<div class="tab tab-wrapper2">
						<nav class="tab-menu">
							<div class="jTab2 active" trigger-act='.jTab2' trigger-auto='false' data-target="#wrapper2_tab1"><a href="javascript:;"><span>TAB1</span></a></div>
							<div class="jTab2" trigger-act='.jTab2' trigger-auto='false' data-target="#wrapper2_tab2"><a href="javascript:;"><span>TAB2</span></a></div>
							<div class="jTab2" trigger-act='.jTab2' trigger-auto='false' data-target="#wrapper2_tab3"><a href="javascript:;"><span>TAB3</span></a></div>
						</nav>
						<div class="tab-content">
							<section id="wrapper2_tab1" class="jTab2 active">TAB1</section>
							<section id="wrapper2_tab2" class="jTab2">TAB2</section>
							<section id="wrapper2_tab3" class="jTab2">TAB3</section>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="title">Tab Style 3</div>
				<div class="label label-warning label-twins">
					<span>tab-wrapper3</span>
					<span>主樣式</span>
				</div>
				<div class="label label-warning">需定義svg(選單圓弧的樣式)，於選單內加入此svg樣式，頭與尾加入svg*1，其於需加入svg*2(雙邊圓孤)</div>
				<pre class="codeWrap">
					<svg class="hidden">
						<defs>
							<path id="tabshape" d="M80,60C34,53.5,64.417,0,0,0v60H80z"></path>
						</defs>
					</svg>
					<div class="tab tab-wrapper3">
						<nav class="tab-menu">
							<div class="jTab3 active" trigger-act='.jTab3' trigger-auto='false' data-target="#wrapper3_tab1">
								<a href="javascript:;">
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tabshape"></use></svg>
									<span>TAB1</span>
								</a>
							</div>
							<div class="jTab3" trigger-act='.jTab3' trigger-auto='false' data-target="#wrapper3_tab2">
								<a href="javascript:;">
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tabshape"></use></svg>
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tabshape"></use></svg>
									<span>TAB2</span>
								</a>
							</div>
							<div class="jTab3" trigger-act='.jTab3' trigger-auto='false' data-target="#wrapper3_tab3">
								<a href="javascript:;">
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tabshape"></use></svg>
									<span>TAB3</span>
								</a>
							</div>
						</nav>
						<div class="tab-content">
							<section id="wrapper3_tab1" class="jTab3 active">TAB1</section>
							<section id="wrapper3_tab2" class="jTab3">TAB2</section>
							<section id="wrapper3_tab3" class="jTab3">TAB3</section>
						</div>
					</div>
				</pre>
				<div class="styleWrap">
					<svg class="hidden">
						<defs>
							<path id="tabshape" d="M80,60C34,53.5,64.417,0,0,0v60H80z"></path>
						</defs>
					</svg>
					<div class="tab tab-wrapper3">
						<nav class="tab-menu">
							<div class="jTab3 active" trigger-act='.jTab3' trigger-auto='false' data-target="#wrapper3_tab1">
								<a href="javascript:;">
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tabshape"></use></svg>
									<span>TAB1</span>
								</a>
							</div>
							<div class="jTab3" trigger-act='.jTab3' trigger-auto='false' data-target="#wrapper3_tab2">
								<a href="javascript:;">
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tabshape"></use></svg>
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tabshape"></use></svg>
									<span>TAB2</span>
								</a>
							</div>
							<div class="jTab3" trigger-act='.jTab3' trigger-auto='false' data-target="#wrapper3_tab3">
								<a href="javascript:;">
									<svg viewBox="0 0 80 60" preserveAspectRatio="none"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tabshape"></use></svg>
									<span>TAB3</span>
								</a>
							</div>
						</nav>
						<div class="tab-content">
							<section id="wrapper3_tab1" class="jTab3 active">TAB1</section>
							<section id="wrapper3_tab2" class="jTab3">TAB2</section>
							<section id="wrapper3_tab3" class="jTab3">TAB3</section>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class="title">Tab Style 4</div>
				<div class="label label-warning label-twins">
					<span>tab-wrapper4</span>
					<span>主樣式</span>
				</div>
				<pre class="codeWrap">
					<div class="tab tab-wrapper4">
						<nav class="tab-menu">
							<div class="jTab4 active" trigger-act='.jTab4' trigger-auto='false' data-target="#wrapper4_tab1"><a href="javascript:;"><span>TAB1</span></a></div>
							<div class="jTab4" trigger-act='.jTab4' trigger-auto='false' data-target="#wrapper4_tab2"><a href="javascript:;"><span>TAB2</span></a></div>
							<div class="jTab4" trigger-act='.jTab4' trigger-auto='false' data-target="#wrapper4_tab3"><a href="javascript:;"><span>TAB3</span></a></div>
						</nav>
						<div class="tab-content">
							<section id="wrapper4_tab1" class="jTab4 active">TAB1</section>
							<section id="wrapper4_tab2" class="jTab4">TAB2</section>
							<section id="wrapper4_tab3" class="jTab4">TAB3</section>
						</div>
					</div>
				</pre>
				<div class="styleWrap">
					<div class="tab tab-wrapper4">
						<nav class="tab-menu">
							<div class="jTab4 active" trigger-act='.jTab4' trigger-auto='false' data-target="#wrapper4_tab1"><a href="javascript:;"><span>TAB1</span></a></div>
							<div class="jTab4" trigger-act='.jTab4' trigger-auto='false' data-target="#wrapper4_tab2"><a href="javascript:;"><span>TAB2</span></a></div>
							<div class="jTab4" trigger-act='.jTab4' trigger-auto='false' data-target="#wrapper4_tab3"><a href="javascript:;"><span>TAB3</span></a></div>
						</nav>
						<div class="tab-content">
							<section id="wrapper4_tab1" class="jTab4 active">TAB1</section>
							<section id="wrapper4_tab2" class="jTab4">TAB2</section>
							<section id="wrapper4_tab3" class="jTab4">TAB3</section>
						</div>
					</div>
				</div>
			</section>
		</div>
	</article>
</template>