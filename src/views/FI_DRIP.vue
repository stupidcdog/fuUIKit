<template>
	<article>
		<div class="header">
			<div class="title">FONTICON DRIPs</div>
		</div>
		<div class="content">
			<div class="label label-info label-twins"><span>drips-*</span><span>使用方式</span></div>
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
			icons:{
			    "prefixed": "drips-",
			    "selection": [{
			        "order": 2,
			        "name": "alarm",
			        "prevSize": 32
			    }, {
			        "order": 3,
			        "name": "align-center",
			        "prevSize": 32
			    }, {
			        "order": 4,
			        "name": "align-justify",
			        "prevSize": 32
			    }, {
			        "order": 5,
			        "name": "align-left",
			        "prevSize": 32
			    }, {
			        "order": 6,
			        "name": "align-right",
			        "prevSize": 32
			    }, {
			        "order": 7,
			        "name": "arrow-thin-down",
			        "prevSize": 32
			    }, {
			        "order": 8,
			        "name": "arrow-thin-left",
			        "prevSize": 32
			    }, {
			        "order": 9,
			        "name": "align-center",
			        "prevSize": 32
			    }, {
			        "order": 10,
			        "name": "arrow-thin-right",
			        "prevSize": 32
			    }, {
			        "order": 11,
			        "name": "arrow-thin-up",
			        "prevSize": 32
			    }, {
			        "order": 12,
			        "name": "article",
			        "prevSize": 32
			    }, {
			        "order": 13,
			        "name": "basket",
			        "prevSize": 32
			    }, {
			        "order": 14,
			        "name": "bell",
			        "prevSize": 32
			    }, {
			        "order": 15,
			        "name": "blog",
			        "prevSize": 32
			    }, {
			        "order": 16,
			        "name": "bookmark",
			        "prevSize": 32
			    }, {
			        "order": 17,
			        "name": "browser-upload",
			        "prevSize": 32
			    }, {
			        "order": 18,
			        "name": "calendar",
			        "prevSize": 32
			    }, {
			        "order": 19,
			        "name": "camcorder",
			        "prevSize": 32
			    }, {
			        "order": 20,
			        "name": "camera",
			        "prevSize": 32
			    }, {
			        "order": 21,
			        "name": "cart",
			        "prevSize": 32
			    }, {
			        "order": 22,
			        "name": "checklist",
			        "prevSize": 32
			    }, {
			        "order": 23,
			        "name": "checkmark",
			        "prevSize": 32
			    }, {
			        "order": 24,
			        "name": "chevron-down",
			        "prevSize": 32
			    }, {
			        "order": 25,
			        "name": "chevron-left",
			        "prevSize": 32
			    }, {
			        "order": 26,
			        "name": "chevron-right",
			        "prevSize": 32
			    }, {
			        "order": 27,
			        "name": "chevron-up",
			        "prevSize": 32
			    }, {
			        "order": 28,
			        "name": "clipboard",
			        "prevSize": 32
			    }, {
			        "order": 29,
			        "name": "clock",
			        "prevSize": 32
			    }, {
			        "order": 30,
			        "name": "clockwise",
			        "prevSize": 32
			    }, {
			        "order": 31,
			        "name": "cloud",
			        "prevSize": 32
			    }, {
			        "order": 32,
			        "name": "cloud-download",
			        "prevSize": 32
			    }, {
			        "order": 33,
			        "name": "cloud-upload",
			        "prevSize": 32
			    }, {
			        "order": 34,
			        "name": "code",
			        "prevSize": 32
			    }, {
			        "order": 35,
			        "name": "cross",
			        "prevSize": 32
			    }, {
			        "order": 36,
			        "name": "device-desktop",
			        "prevSize": 32
			    }, {
			        "order": 37,
			        "name": "device-mobile",
			        "prevSize": 32
			    }, {
			        "order": 38,
			        "name": "device-tablet",
			        "prevSize": 32
			    }, {
			        "order": 39,
			        "name": "document",
			        "prevSize": 32
			    }, {
			        "order": 40,
			        "name": "download",
			        "prevSize": 32
			    }, {
			        "order": 41,
			        "name": "duplicate",
			        "prevSize": 32
			    }, {
			        "order": 42,
			        "name": "enter",
			        "prevSize": 32
			    }, {
			        "order": 43,
			        "name": "exit",
			        "prevSize": 32
			    }, {
			        "order": 44,
			        "name": "export",
			        "prevSize": 32
			    }, {
			        "order": 45,
			        "name": "flag",
			        "prevSize": 32
			    }, {
			        "order": 46,
			        "name": "folder",
			        "prevSize": 32
			    }, {
			        "order": 47,
			        "name": "folder-open",
			        "prevSize": 32
			    }, {
			        "order": 48,
			        "name": "forward",
			        "prevSize": 32
			    }, {
			        "order": 49,
			        "name": "gear",
			        "prevSize": 32
			    }, {
			        "order": 50,
			        "name": "graph-line",
			        "prevSize": 32
			    }, {
			        "order": 51,
			        "name": "graph-bar",
			        "prevSize": 32
			    }, {
			        "order": 52,
			        "name": "graph-pie",
			        "prevSize": 32
			    }, {
			        "order": 53,
			        "name": "headset",
			        "prevSize": 32
			    }, {
			        "order": 54,
			        "name": "heart",
			        "prevSize": 32
			    }, {
			        "order": 55,
			        "name": "help",
			        "prevSize": 32
			    }, {
			        "order": 56,
			        "name": "home",
			        "prevSize": 32
			    }, {
			        "order": 57,
			        "name": "hourglass",
			        "prevSize": 32
			    }, {
			        "order": 58,
			        "name": "inbox",
			        "prevSize": 32
			    }, {
			        "order": 59,
			        "name": "information",
			        "prevSize": 32
			    }, {
			        "order": 60,
			        "name": "link",
			        "prevSize": 32
			    }, {
			        "order": 61,
			        "name": "link-broken",
			        "prevSize": 32
			    }, {
			        "order": 62,
			        "name": "location",
			        "prevSize": 32
			    }, {
			        "order": 63,
			        "name": "lock",
			        "prevSize": 32
			    }, {
			        "order": 64,
			        "name": "lock-open",
			        "prevSize": 32
			    }, {
			        "order": 65,
			        "name": "mail",
			        "prevSize": 32
			    }, {
			        "order": 66,
			        "name": "map",
			        "prevSize": 32
			    }, {
			        "order": 67,
			        "name": "media-shuffle",
			        "prevSize": 32
			    }, {
			        "order": 68,
			        "name": "menu",
			        "prevSize": 32
			    }, {
			        "order": 69,
			        "name": "message",
			        "prevSize": 32
			    }, {
			        "order": 70,
			        "name": "photo-group",
			        "prevSize": 32
			    }, {
			        "order": 71,
			        "name": "plus",
			        "prevSize": 32
			    }, {
			        "order": 72,
			        "name": "minus",
			        "prevSize": 32
			    }, {
			        "order": 73,
			        "name": "pin",
			        "prevSize": 32
			    }, {
			        "order": 74,
			        "name": "warning",
			        "prevSize": 32
			    }, {
			        "order": 75,
			        "name": "wrong",
			        "prevSize": 32
			    }, {
			        "order": 76,
			        "name": "trash",
			        "prevSize": 32
			    }, {
			        "order": 77,
			        "name": "tag",
			        "prevSize": 32
			    }, {
			        "order": 78,
			        "name": "shopping-bag",
			        "prevSize": 32
			    }, {
			        "order": 79,
			        "name": "search",
			        "prevSize": 32
			    }, {
			        "order": 80,
			        "name": "return",
			        "prevSize": 32
			    }, {
			        "order": 81,
			        "name": "scale",
			        "prevSize": 32
			    }, {
			        "order": 82,
			        "name": "store",
			        "prevSize": 32
			    }, {
			        "order": 83,
			        "name": "preview",
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