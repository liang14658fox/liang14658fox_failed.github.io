


## 1. 获得任意当下日期之前的日期

::: tip 需求
一般用于Vue项目中element的日期选择器，想要提交的日期区间有一个范围，当清空element的date-picker时触发。
并且需要的格式为`XXXX-XX-XX`。
:::

<!-- ::: code-group

```js [获得半年之前的日期]
$ npm init
```

```js [获得一年之前的日期]
$ yarn init
```

```js [pnpm]
$ pnpm init
```

::: -->
获得半年之前的日期

```js
const cc = new Date().getTime()
var halfYear = 365 / 2 * 24 * 3600 * 1000;
var pastResult = cc - halfYear
var pastDate = new Date(pastResult),
  pastYear = pastDate.getFullYear(),
  pastMonth = pastDate.getMonth() + 1,
  pastDay = pastDate.getDate();
console.log(pastYear + '-' + pastMonth + '-' + pastDay) //打印格式为 XXXX-XX-XX
```
获得一年之前的日期
```js
const cc = new Date().getTime()
var oneYear = 365 / 24 * 3600 * 1000; //将halfYear换为oneYear
var pastResult = cc - oneYear 
var pastDate = new Date(pastResult),
  pastYear = pastDate.getFullYear(),
  pastMonth = pastDate.getMonth() + 1,
  pastDay = pastDate.getDate();
console.log(pastYear + '-' + pastMonth + '-' + pastDay)
//如果现在是2022年2月9日，则输出2021-02-09
```

在Vue组件中获得 现在—>一年之前 的日期

```js
const cc = new Date().getTime()
var oneYear = 365 / 24 * 3600 * 1000; //将halfYear换为oneYear
var pastResult = cc - oneYear 
var pastDate = new Date(pastResult),
  pastYear = pastDate.getFullYear(),
  pastMonth = pastDate.getMonth() + 1,
  pastDay = pastDate.getDate();
this.dateStart = pastYear + '-' + pastMonth + '-' + pastDay
this.dateEnd = pastYear + 1 + '-' + pastMonth + '-' + pastDay
```

## 2. element表格金额格式化
table里的任意一列添加 `:formatter="formatter"`
```html 
<el-table-column prop="je" label="金额"  :formatter="formatter">
</el-table-column>
```
methods里写formatter方法
```js
formatter(row, column, cellValue, index) {
	function number_format(number, decimals, dec_point, thousands_sep) {
		number = (number + '').replace(/[^0-9+-Ee.]/g, '');
		var n = !isFinite(+number) ? 0 : +number,
			prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
			sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
			dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
			s = '',
			toFixedFix = function(n, prec) {
				var k = Math.pow(10, prec);
				return '' + Math.ceil(n * k) / k;
			};
		s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
		var re = /(-?\d+)(\d{3})/;
		while (re.test(s[0])) {
			s[0] = s[0].replace(re, "$1" + sep + "$2");
		}
		if ((s[1] || '').length < prec) {
			s[1] = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1).join('0');
		}
		return s.join(dec);
	}
	var num = number_format(cellValue, 2, ".", ",")
	return "¥" + num
},
```
## 3. Vue集成复选框逻辑
类似于element中复选框的操作，但没有`-`中间值表示不确定
```html
<el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
<el-checkbox v-model="checkList.key1">Key1</el-checkbox>
<el-checkbox v-model="checkList.key2">Key2</el-checkbox>
```

```js
    export default {
		name: 'checkAll',
		data() {
			return {
				checkAll: false, // 全选复选框
				checkList: {}, //复选框绑定的值
			}
		},
		mounted() {
             //当然也可以直接放到data里
			this.checkList = {
				key1: true,
				key2: true,
			};
		},
		watch: {
             // 监听复选框配置列所有的变化，让复选框控制全选
			checkList: {
				handler(newValue, oldValue) {
                     //遍历一遍this.checkList，如果它里面的属性的值都是true，输出true
					for (var i in newValue) {
						if (newValue[i] == true) {
							this.checkAll = true
						}
					}
					for (var i in newValue) {
						if (newValue[i] == false) {
							this.checkAll = false
						}
					}
				},
				deep: true,
				immediate: true
			},
		},
		methods: {
			// 全选控制复选框
			handleCheckAllChange() {
				if (this.checkAll) {
					for (var i in this.checkList) {
						this.checkList[i] = true
					}
				} else if (!this.checkAll) {
					for (var i in this.checkList) {
						this.checkList[i] = false
					}
				}
			},
		},
	}
```


::: warning
This is a warning
:::


::: danger STOP
Danger zone, do not proceed
:::
