<template>
	<article>
		<div class="header">
			<span class="title">共用樣式</span>
		</div>
		<div class="content">
			<section id="common_space">
				<div class="title">間距</div>
				<div class="styleWrap">
					<div class="label label-info label-twins"><span>PA-, PA-T-, PA-L-, PA-B-, PA-R- 0 ~ 50 (全, 上, 右, 下, 左 (以5為間隔))</span><span>PADDING間隔</span></div>
					<div class="label label-info label-twins"><span>MA-, MA-T-, MA-L-, MA-B-, MA-R- 0 ~ 50 (全, 上, 右, 下, 左 (以5為間隔))</span><span>MARGIN間隔</span></div>
					<div class="label label-info label-twins"><span>PA-ITEM-, PA-ITEM-T-, PA-ITEM-L-, PA-ITEM-B-, PA-ITEM-R- 0 ~ 50 (全, 上, 右, 下, 左 (以5為間隔))</span><span>CHILDREN PADDING間隔</span></div>
					<div class="label label-info label-twins"><span>MA-ITEM-, MA-ITEM-T-, MA-ITEM-L-, MA-ITEM-B-, MA-ITEM-R- 0 ~ 50 (全, 上, 右, 下, 左 (以5為間隔))</span><span>CHILDREN MARGIN間隔</span></div>
				</div>
			</section>
			<section id="common_align">
				<div class="title">對齊_TEXT-ALIGN</div>
				<div class="styleWrap">
					<span class="label label-info label-twins"><span>txtL</span><span>靠左對齊</span></span>
					<span class="label label-info label-twins"><span>txtR</span><span>靠右對齊</span></span>
					<span class="label label-info label-twins"><span>txtC</span><span>置中對齊</span></span>
				</div>
				<div class="title">對齊_VERTICLE-ALIGN</div>
				<div class="styleWrap">
					<span class="label label-info label-twins"><span>alignT</span><span>向上對齊</span></span>
					<span class="label label-info label-twins"><span>alignB</span><span>向下對齊</span></span>
					<span class="label label-info label-twins"><span>alignM</span><span>置中對齊</span></span>
				</div>
				<div class="title">對齊_FLOAT</div>
				<div class="styleWrap">
					<span class="label label-info label-twins"><span>floatN</span><span>取消浮動</span></span>
					<span class="label label-info label-twins"><span>floatR</span><span>向右浮動</span></span>
					<span class="label label-info label-twins"><span>floatL</span><span>向左浮動</span></span>
				</div>
			</section>
			<section id="common_hidden">
				<div class="title">HIDDEN</div>
				<div class="styleWrap">
					<span class="label label-info label-twins"><span>overHide</span><span>overflow:hidden</span></span>
					<span class="label label-info label-twins"><span>overHideX</span><span>overflow-x:hidden</span></span>
					<span class="label label-info label-twins"><span>overHideY</span><span>overflow-y:hidden</span></span>
					<span class="label label-info label-twins"><span>hidden</span><span>display: none</span></span>
					<span class="label label-info label-twins"><span>visibility</span><span>visibility: hidden</span></span>
				</div>
			</section>
			<section id="common_other">
				<div class="title">BORDER AND WIDTH</div>
				<div class="styleWrap">
					<span class="label label-info label-twins"><span>W0 ~ 100 (以10為間隔，單位為"%")</span><span>寬度</span></span>
					<span class="label label-info label-twins"><span>BR-0 ~ 8 (以2為間隔)</span><span>圓弧</span></span>
				</div>
				<div class="title">OTHER</div>
				<div class="styleWrap">
					<span class="label label-info label-twins"><span>LA, LT, LB, LL, LR (全, 上, 下, 左, 右)</span><span>框線(灰色系)</span></span>
					<span class="label label-info label-twins"><span>clr</span><span>clear: both</span></span>
				</div>
			</section>
			<section id="common_color">
				<div class="title">COLOR</div>
				<div class="styleWrap box">
					<div class="BG-Coffee-Dark">
						<div class="item FC-W">
							<div>咖啡 to 黑色</div>
							<div>BG-Coffee-Dark</div>
						</div>
					</div>
					<div class="BG-LCoffee-DCoffee">
						<div class="item">
							<div>亮咖啡 to 深咖啡</div>
							<div>BG-LCoffee-DCoffee</div>
						</div>
					</div>
					<div class="BG-Gold">
						<div class="item">
							<div>黃金色</div>
							<div>BG-Gold</div>
						</div>
					</div>
					<div class="BG-LO-O">
						<div class="item">
							<div> 亮橘色 to 橘色</div>
							<div>BG-LO-O</div>
						</div>
					</div>
					<div class="BG-PB-LB">
						<div class="item">
							<div>紫藍色 to 亮藍色</div>
							<div>BG-PB-LB</div>
						</div>
					</div>
					<div class="BG-T-PB-LB">
						<div class="item">
							<div>紫藍色 to 亮藍色 (透明質感)</div>
							<div>BG-T-PB-LB</div>
						</div>
					</div>
					<div class="BG-WB-LB">
						<div class="item">
							<div>水藍色 to 淺藍色</div>
							<div>BG-WB-LB</div>
						</div>
					</div>
					<div class="BG-LB-B">
						<div class="item">
							<div>亮藍色 to 藍色</div>
							<div>BG-LB-B</div>
						</div>
					</div>
					<div class="BG-LG-W">
						<div class="item dark">
							<div>淺灰色 to 白色</div>
							<div>BG-LG-W</div>
						</div>
					</div>
					<div class="BG-DP-P">
						<div class="item">
							<div>淺紫色 to 紫色</div>
							<div>BG-DP-P</div>
						</div>
					</div>
					<div class="BG-COLORFUL">
						<div class="item">
							<div>多色系</div>
							<div>BG-COLORFUL</div>
						</div>
					</div>
					<div class="BG-LG-LB">
						<div class="item">
							<div>亮綠 to 亮藍</div>
							<div>BG-LG-LB</div>
						</div>
					</div>
					<div class="BG-G-LY">
						<div class="item">
							<div>綠 to 亮黃</div>
							<div>BG-G-LY</div>
						</div>
					</div>
					<div class="BG-gRED">
						<div class="item">
							<div>漸層紅</div>
							<div>BG-gRED</div>
						</div>
					</div>
					<div class="BG-gGREEN">
						<div class="item">
							<div>漸層綠</div>
							<div>BG-gGREEN</div>
						</div>
					</div>
					<div class="BG-dustyGress">
						<div class="item">
							<div>草綠色</div>
							<div>BG-dustyGress</div>
						</div>
					</div>
					<div class="BG-temptingAzure">
						<div class="item">
							<div>誘人的天青</div>
							<div>BG-temptingAzure</div>
						</div>
					</div>
					<div class="BG-heavyRain">
						<div class="item">
							<div>Heavy Rain</div>
							<div>BG-heavyRain</div>
						</div>
					</div>
					<div class="BG-amyCrisp">
						<div class="item">
							<div>Amy Crisp</div>
							<div>BG-amyCrisp</div>
						</div>
					</div>
					<div class="BG-ripeMalinka">
						<div class="item">
							<div>Ripe Malinka</div>
							<div>BG-ripeMalinka</div>
						</div>
					</div>
					<div class="BG-trueSunset">
						<div class="item">
							<div>True Sunset</div>
							<div>BG-trueSunset</div>
						</div>
					</div>
					<div class="BG-newLife">
						<div class="item">
							<div>New Life</div>
							<div>BG-newLife</div>
						</div>
					</div>
					<div class="BG-morpheusDen">
						<div class="item">
							<div>Morpheus Den</div>
							<div>BG-morpheusDen</div>
						</div>
					</div>
					<div class="BG-plumPlate">
						<div class="item">
							<div>Plum Plate</div>
							<div>BG-plumPlate</div>
						</div>
					</div>
					<div class="BG-lemonGate">
						<div class="item">
							<div>Lemon Gate</div>
							<div>BG-lemonGate</div>
						</div>
					</div>
					<div class="BG-strongBliss">
						<div class="item">
							<div>Strong Bliss</div>
							<div>BG-strongBliss</div>
						</div>
					</div>
					<div class="BG-sharpBlues">
						<div class="item">
							<div>Sharp Blues</div>
							<div>BG-sharpBlues</div>
						</div>
					</div>
					<div class="BG-redSalvation">
						<div class="item">
							<div>Red Salvation</div>
							<div>BG-redSalvation</div>
						</div>
					</div>
					<div class="BG-supremeSky">
						<div class="item">
							<div>Supreme Sky</div>
							<div>BG-supremeSky</div>
						</div>
					</div>
					<div class="BG-perfectBlue">
						<div class="item">
							<div>Perfect Blue</div>
							<div>BG-perfectBlue</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</article>
</template>