<template>
	<article>
		<div class="header">
			<span class="title">Selectize.js</span>
		</div>
		<div class="content">
			<div class="tip MA-B-20">REF: <a href='https://selectize.github.io/selectize.js/' target="_blank">https://selectize.github.io/selectize.js/</a></div>
			<section id="selectize_tagging">
				<div class="title">INPUT TAG</div>
				<h4 >樣式</h4>
				<pre class="codeWrap">
					<input type="text" id="[NAME]" placeholder="Please input some tags...">
				</pre>
				<h4 >SCRIPT</h4>
				<div class="label label-info label-twins"><span>create</span><span>是否能新增TAG</span></div>
				<div class="label label-info label-twins"><span>maxItems: [數量]</span><span>限定TAG的數量</span></div>
				<pre class="codeWrap">
					var $el = $('[NAME]').selectize({
						create:true
					});
					//取selectize控制元件
					var control = $el[0].selectize;
				</pre>
				<h4>control methods</h4>
				<div class="label label-info label-twins"><span>clear()</span><span>清空輸入框內的資料</span></div>
				<div class="label label-info label-twins"><span>clearOptions()</span><span>清空所有select optoins</span></div>
				<div class="label label-info label-twins"><span>addOption()</span><span>加入select option</span></div>
				<div class="label label-info label-twins"><span>addItem([option seq])</span><span>加入項目</span></div>
				<div class="label label-info label-twins"><span>setValue([[option seq, option seq]])</span><span>加入多個項目</span></div>
				<div class="styleWrap">
					<div class="MA-B-5">輸入TAG(最多3項)：</div>
					<input type="text" id="sTagging" placeholder="Please input some tags...">
				</div>
			</section>

			<section id="selectize_bindselect">
				<div class="title">TAGGING BIND SELECT</div>
				<h4>樣式</h4>
				<div class="label label-info label-twins"><span>multiple</span><span>select為多選機制</span></div>
				<pre class="codeWrap">
					<select id="[NAME]" multiple placeholder="Please input or select tags...">
						<option value="">Select a state...</option>
						...
					</select>
				</pre>
				<h4 >SCRIPT</h4>
				<pre class="codeWrap">
					$('[NAME]').selectize();
				</pre>
				<div class="styleWrap">
					<div class="MA-B-5">選擇或輸入TAG：</div>
					<select id="sBindSelect" name="tags[]" multiple placeholder="Please input or select tags...">
						<option value="">Select a tag...</option>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="DC">District of Columbia</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="HI">Hawaii</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">Louisiana</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">Massachusetts</option>
						<option value="MI">Michigan</option>
						<option value="MN">Minnesota</option>
						<option value="MS">Mississippi</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">New Hampshire</option>
						<option value="NJ">New Jersey</option>
						<option value="NM">New Mexico</option>
						<option value="NY">New York</option>
						<option value="NC">North Carolina</option>
						<option value="ND">North Dakota</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">Pennsylvania</option>
						<option value="RI">Rhode Island</option>
						<option value="SC">South Carolina</option>
						<option value="SD">South Dakota</option>
						<option value="TN">Tennessee</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">Washington</option>
						<option value="WV">West Virginia</option>
						<option value="WI">Wisconsin</option>
						<option value="WY">Wyoming</option>
					</select>
				</div>
			</section>

			<section id="selectize_customizeOptions">
				<div class="title">Customize Select Options</div>
				<h4>樣式</h4>
				<div class="label label-info">客制化的樣式，需要自己先寫好</div>
				<pre class="codeWrap">
					<select id="[NAME]" class="[樣式]" multiple placeholder="Select some items..."></select>
				</pre>
				<h4>SCRIPT</h4>
				<pre class="codeWrap">
					$('[NAME]').selectize({
						valueField: [value的欄位KEY],
						labelField: [label的欄位KEY],
						// SELECT OPTION ITEMS
						options: [
							{'key':'value',...},
							{'email': 'nikola@tesla.com', 'first_name': 'Nikola', 'last_name': 'Tesla'},
							...
						],
						//重繪項目
						render: {
							//重繪ITEM的項目
							item: function (item, escape){
								return [顯示樣式];
							},
							//重繪OPTION的項目
							option: function (item, escape){
								return [顯示樣式];
							}
						},
						//物件產生時，檢查項目是否符合規則(若不產生項目，return false)
						create: funciton (input){}
					});
				</pre>
				<div class="styleWrap">
					<div class="MA-B-5">選擇或輸入TAG：(自行輸入格式：name&lt;email&gt;)</div>
					<div class="control-group">
						<select id="sCustomizeOption" class="contacts" multiple placeholder="Select some items..."></select>
					</div>
				</div>
			</section>
		</div>
	</article>
</template>
<script>
import '@/assets/css_compontents/selectize.scss'
import selectize from '@/library/plugins/selectize'
export default {
	mounted:function (){
		//basic input tags
		$('#sTagging').selectize({
			maxItems: 3,
		   create: true
		});

		//bind select
		$('#sBindSelect').selectize();

		//Customize Select Options
		var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +  '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';
		var formatName = function(item) {
			return $.trim((item.first_name || '') + ' ' + (item.last_name || ''));
		};
		$('#sCustomizeOption').selectize({
			valueField: 'email',
    			labelField: 'name',
    			options: [
				{email: 'nikola@tesla.com', first_name: 'Nikola', last_name: 'Tesla'},
				{email: 'brian@thirdroute.com', first_name: 'Brian', last_name: 'Reavis'},
				{email: 'someone@gmail.com'}
			],
			render: {
				item: function(item, escape) {
					var name = formatName(item);
					return '<div>' +
						(name ? '<span class="name">' + escape(name) + '</span>' : '') +
						(item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
					'</div>';
				},
				option: function(item, escape) {
					var name = formatName(item);
					var label = name || item.email;
					var caption = name ? item.email : null;
					return '<div>' +
						'<span style="font-weight:bold; color:#3f51b5;">' + escape(label) + '</span>' +
						(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
					'</div>';
				}
			},
			create: function(input) {
				if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
					return {email: input};
				}
				var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
				if (match) {
					var name       = $.trim(match[1]);
					var pos_space  = name.indexOf(' ');
					var first_name = name.substring(0, pos_space);
					var last_name  = name.substring(pos_space + 1);

					return {
						email: match[2],
						first_name: first_name,
						last_name: last_name
					};
				}
				return false;
			}
		});
	}
}
</script>