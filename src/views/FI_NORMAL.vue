<template>
	<article>
		<div class="header">
			<div class="title">FONTICON DRIPs</div>
		</div>
		<div class="content">
			<div class="label label-info label-twins"><span>fu-*</span><span>使用方式</span></div>
			<div class="styleWrap">
				<IC :dataItem="this.icons"></IC>
			</div>
		</div>
	</article>
</template>
<script>
import IC from '@/views/components/iconCard'
export default {
	data(){
		return {
			icons: {
			    "prefixed": "fu-",
			    "selection": [{
			        "order": 2,
			        "name": "pin",
			        "prevSize": 32
			    }, {
			        "order": 3,
			        "name": "clock",
			        "prevSize": 32
			    }, {
			        "order": 4,
			        "name": "date",
			        "prevSize": 32
			    }, {
			        "order": 5,
			        "name": "profile",
			        "prevSize": 32
			    }, {
			        "order": 6,
			        "name": "newspaper",
			        "prevSize": 32
			    }, {
			        "order": 7,
			        "name": "book",
			        "prevSize": 32
			    }, {
			        "order": 8,
			        "name": "search",
			        "prevSize": 32
			    }, {
			        "order": 9,
			        "name": "check",
			        "prevSize": 32
			    }, {
			        "order": 10,
			        "name": "attachment",
			        "prevSize": 32
			    }, {
			        "order": 11,
			        "name": "call",
			        "prevSize": 32
			    }, {
			        "order": 12,
			        "name": "streaming",
			        "prevSize": 32
			    }, {
			        "order": 13,
			        "name": "transmission",
			        "prevSize": 32
			    }, {
			        "order": 14,
			        "name": "twoway",
			        "prevSize": 32
			    }, {
			        "order": 15,
			        "name": "earth",
			        "prevSize": 32
			    }, {
			        "order": 16,
			        "name": "community",
			        "prevSize": 32
			    }, {
			        "order": 17,
			        "name": "love",
			        "prevSize": 32
			    }, {
			        "order": 18,
			        "name": "announce",
			        "prevSize": 32
			    }, {
			        "order": 19,
			        "name": "openmail",
			        "prevSize": 32
			    }, {
			        "order": 20,
			        "name": "article",
			        "prevSize": 32
			    }, {
			        "order": 21,
			        "name": "fax",
			        "prevSize": 32
			    }, {
			        "order": 22,
			        "name": "signal",
			        "prevSize": 32
			    }, {
			        "order": 23,
			        "name": "satellite",
			        "prevSize": 32
			    }, {
			        "order": 24,
			        "name": "bird",
			        "prevSize": 32
			    }, {
			        "order": 25,
			        "name": "profilecard",
			        "prevSize": 32
			    }, {
			        "order": 26,
			        "name": "cloud-ok",
			        "prevSize": 32
			    }, {
			        "order": 27,
			        "name": "cloud-failed",
			        "prevSize": 32
			    }, {
			        "order": 28,
			        "name": "filecabinet",
			        "prevSize": 32
			    }, {
			        "order": 29,
			        "name": "line-chart",
			        "prevSize": 32
			    }, {
			        "order": 30,
			        "name": "board",
			        "prevSize": 32
			    }, {
			        "order": 31,
			        "name": "gift",
			        "prevSize": 32
			    }, {
			        "order": 32,
			        "name": "creditcard",
			        "prevSize": 32
			    }, {
			        "order": 33,
			        "name": "setting",
			        "prevSize": 32
			    }, {
			        "order": 34,
			        "name": "home",
			        "prevSize": 32
			    }, {
			        "order": 35,
			        "name": "camera",
			        "prevSize": 32
			    }, {
			        "order": 36,
			        "name": "articlecabinet",
			        "prevSize": 32
			    }, {
			        "order": 37,
			        "name": "firewall",
			        "prevSize": 32
			    }, {
			        "order": 38,
			        "name": "link",
			        "prevSize": 32
			    }, {
			        "order": 39,
			        "name": "unlink",
			        "prevSize": 32
			    }, {
			        "order": 40,
			        "name": "sort",
			        "prevSize": 32
			    }, {
			        "order": 41,
			        "name": "sort-desc",
			        "prevSize": 32
			    }, {
			        "order": 42,
			        "name": "chart",
			        "prevSize": 32
			    }, {
			        "order": 43,
			        "name": "tag",
			        "prevSize": 32
			    }, {
			        "order": 44,
			        "name": "treechart",
			        "prevSize": 32
			    }, {
			        "order": 45,
			        "name": "starbook",
			        "prevSize": 32
			    }, {
			        "order": 46,
			        "name": "shop",
			        "prevSize": 32
			    }, {
			        "order": 47,
			        "name": "transport",
			        "prevSize": 32
			    }, {
			        "order": 48,
			        "name": "map",
			        "prevSize": 32
			    }, {
			        "order": 49,
			        "name": "searchlocal",
			        "prevSize": 32
			    }, {
			        "order": 50,
			        "name": "point",
			        "prevSize": 32
			    }, {
			        "order": 51,
			        "name": "lock",
			        "prevSize": 32
			    }, {
			        "order": 52,
			        "name": "unlock",
			        "prevSize": 32
			    }, {
			        "order": 53,
			        "name": "eye",
			        "prevSize": 32
			    }, {
			        "order": 54,
			        "name": "garbage",
			        "prevSize": 32
			    }, {
			        "order": 55,
			        "name": "folder",
			        "prevSize": 32
			    }, {
			        "order": 56,
			        "name": "copy",
			        "prevSize": 32
			    }, {
			        "order": 57,
			        "name": "align-left",
			        "prevSize": 32
			    }, {
			        "order": 58,
			        "name": "align-center",
			        "prevSize": 32
			    }, {
			        "order": 59,
			        "name": "align-right",
			        "prevSize": 32
			    }, {
			        "order": 60,
			        "name": "cross",
			        "prevSize": 32
			    }, {
			        "order": 61,
			        "name": "add",
			        "prevSize": 32
			    }, {
			        "order": 62,
			        "name": "warning",
			        "prevSize": 32
			    }, {
			        "order": 63,
			        "name": "correct",
			        "prevSize": 32
			    }, {
			        "order": 64,
			        "name": "zoom-down",
			        "prevSize": 32
			    }, {
			        "order": 65,
			        "name": "zoom-large",
			        "prevSize": 32
			    }, {
			        "order": 66,
			        "name": "move",
			        "prevSize": 32
			    }, {
			        "order": 67,
			        "name": "repeat",
			        "prevSize": 32
			    }, {
			        "order": 68,
			        "name": "talk",
			        "prevSize": 32
			    }, {
			        "order": 69,
			        "name": "circle",
			        "prevSize": 32
			    }, {
			        "order": 70,
			        "name": "turn-left",
			        "prevSize": 32
			    }, {
			        "order": 71,
			        "name": "turn-right",
			        "prevSize": 32
			    }, {
			        "order": 72,
			        "name": "mail",
			        "prevSize": 32
			    }, {
			        "order": 73,
			        "name": "truck",
			        "prevSize": 32
			    }, {
			        "order": 74,
			        "name": "timer-24",
			        "prevSize": 32
			    }, {
			        "order": 75,
			        "name": "turn-up",
			        "prevSize": 32
			    }, {
			        "order": 76,
			        "name": "turn-down",
			        "prevSize": 32
			    }, {
			        "order": 77,
			        "name": "video",
			        "prevSize": 32
			    }, {
			        "order": 78,
			        "name": "computer",
			        "prevSize": 32
			    }, {
			        "order": 79,
			        "name": "sale",
			        "prevSize": 32
			    }, {
			        "order": 80,
			        "name": "switch",
			        "prevSize": 32
			    }, {
			        "order": 81,
			        "name": "avoid",
			        "prevSize": 32
			    }, {
			        "order": 82,
			        "name": "download",
			        "prevSize": 32
			    }, {
			        "order": 83,
			        "name": "upload",
			        "prevSize": 32
			    }, {
			        "order": 84,
			        "name": "block",
			        "prevSize": 32
			    }, {
			        "order": 85,
			        "name": "list",
			        "prevSize": 32
			    }, {
			        "order": 86,
			        "name": "phone",
			        "prevSize": 32
			    }, {
			        "order": 87,
			        "name": "microphone",
			        "prevSize": 32
			    }, {
			        "order": 88,
			        "name": "ring",
			        "prevSize": 32
			    }, {
			        "order": 89,
			        "name": "mouse",
			        "prevSize": 32
			    }, {
			        "order": 90,
			        "name": "star",
			        "prevSize": 32
			    }, {
			        "order": 91,
			        "name": "print",
			        "prevSize": 32
			    }]
			}
		};
	},
	components:{
		IC
	}
}
</script>