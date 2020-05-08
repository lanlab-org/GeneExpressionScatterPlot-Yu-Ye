var g1Text, g2Text, infoText, typename;
var g1, g2, leninfo, flag_g1, flag_g2, flag_info;
var infomation = {},
	number = "number",
	detail = "detail";
var validPoint = 0,
	AllPoint = 0,
	infouse = {};
var InfoPoint = new Array(),
	Pointout = {},
	mp = [],
	InfoAll;
var g1_have_point, g2_have_point, g1_valid_point, g2_valid_point, info_all, info_use;
var plotarr = ["plot_1", "chart", "explain", "container_choose", "useRate", "TableInfo"],
	indexarr = ["UIchoose_1", "UIchoose_2", "UIchoose_5", "UIchoose_7", "for_conte"],
	UseGuide = ["guide_1", "guide_2", "guide_3", "guide-box"];

function wrong(content) {
	alert(content);
}
window.onload = function() {
	disapp_plot();		//disapp_choose();
	disapp_guide();     //在刚进入网站的时候，将散点图以及用户指南相关的内容进行隐藏，数组中放入的是这些div的id，这样可以实现一次遍历
	g1_have_point = g2_have_point = g1_valid_point = g2_valid_point = info_all = info_use = 0;		//用来记录信息和点的利用率
}

function Deal_data1() {		//对g1.json的处理，变量g1中将保存g1的json数据
	var file = document.getElementById("fi1").files[0];
	var reader = new FileReader();
	reader.readAsText(file, "gbk");
	reader.onload = function() {
		flag_g1 = 0;
		g1Text = this.result;
		if (this.result == "" || this.result == "{}") {
			wrong("您的g1.json内容文件为空，请在确认文件后在本页面刷新重试！");
			flag_g1 = -1;
		}	//判断g1中的文件是否为空，下面则是对这个信息的输出显示
		var TEXT = this.result;
		if (TEXT.length > 3500) TEXT = TEXT.slice(1, 3000);		//控制文本长度
		document.getElementById("cont_g1").innerHTML = TEXT;
		if (this.result != undefined && flag_g1 != -1) {
			var f = 0;
			g1 = JSON.parse(g1Text);
			for (var aim in g1) {
				var isdi = g1[aim];
				if (typeof(isdi) != "number") {
					f = 1;
				}
				g1_have_point++; //记录g1的点数
			}
			if (f == 1) {
				alert("您的g1.json中某测试结果含有非数字内容，请在确认文件后在本页面刷新重试！")
			} else if (g1_have_point == 0) {
				wrong("您的g1.json内容文件为空，请在确认文件后在本页面刷新重试！");
				flag_g1 = -1;
			} else flag_g1 = 1;
			//如果g1中有文字信息，则就进行报错要求重新上传
		}
	}
}

function Deal_data2() {		//对g2.json的处理，变量g2中将保存g2json数据，注释如上
	var file = document.getElementById("fi2").files[0];
	var reader = new FileReader();
	reader.readAsText(file, "gbk");
	reader.onload = function() {
		flag_g2 = 0;
		g2Text = this.result;
		if (this.result == "" || this.result == "{}") {
			wrong("您的g2.json内容文件为空，请在确认文件后在本页面刷新重试！");
			flag_g2 = -1;
		}
		var TEXT = this.result;
		if (TEXT.length > 3500) TEXT = TEXT.slice(1, 3000);
		document.getElementById("cont_g2").innerHTML = TEXT;
		if (g2Text != undefined && flag_g2 != -1) {
			var ff = 0;
			g2 = JSON.parse(g2Text);
			for (var aim in g2) {
				var isdi = g2[aim];
				if (typeof(isdi) != "number") {
					ff = 1;
				}
				g2_have_point++;
			}
			if (ff == 1) {
				alert("您的g2.json中某测试结果含有非数字内容，请在确认文件后在本页面刷新重试！")
			} else if (g2_have_point == 0) {
				wrong("您的g2.json内容文件为空，请在确认文件后在本页面刷新重试！");
				flag_g2 = -1;
			} else flag_g2 = 1;
		}
	}
}

function Deal_data3() {		//对info文件的处理，将json对象保存进info，注释如上
	var file = document.getElementById("fi3").files[0];
	var reader = new FileReader();
	reader.readAsText(file, "gdk");
	reader.onload = function() {
		flag_info = 0;
		infoText = this.result;
		if (this.result = null) {
			wrong("您的info.json内容文件为空，请在确认文件后在本页面刷新重试！")
		}
		var TEXT = this.result;
		if (TEXT.length > 3500) TEXT = TEXT.slice(1, 3000);
		document.getElementById("cont_info").innerHTML = TEXT;
		info = JSON.parse(this.result); //先得到转化之后的json变量

		var expriment; //提取第一个信息元组，为了得到非"detail"的变量名
		for (var aim in info) {
			expriment = info[aim];
			break;
		}
		if (expriment == null) {
			wrong("您的info.json内容文件为空，请再次确认文件情况！");
			typename = 'tissue';
			var newinfoText = '{"00000000":{"' + typename + '":"Unknown","detail":"Sorry, the imformation is lost"}' + "}";
		} else {
			for (var name in expriment) {
				if (name != "detail") typename = name; //只要这个名字不叫detail,那么这个名字就是我们要的类型
			}

			info = null; //info置空
			var newinfoText = this.result.slice(0, -1) + ',"00000000":{"' + typename +
				'":"Unknown","detail":"Sorry, the imformation is lost"}' + "}"; //将Unknow放入新的文字中再进行转化。
		}

		info = JSON.parse(newinfoText);
		console.log(info);
		var id = 0;			//遍历info中的数据,将y轴的信息先保存在InfoPoint中
		for (var aim in info) {
			var keys, yuanzu = info[aim];	//yuanzu为每一个元祖
			keys = yuanzu[typename]; 	//得到每个tissue的名字
			var pro = keys + "!x"; 	//将作为x轴的东西进行命名
			var tmp = {}; //将x轴与y轴的名字进行对应
			tmp[keys] = pro;
			info_all++; //记录信息总量
			//用映射来记录第一次出现的type，将这些type名字先放入InfoPoint中
			//infoPoint中记录的是每一个类型的x、y轴上对应的点的坐标 如[flower:1.001,1.0222]
			//Pointout中写的是每一个类型的点分别对应的x轴和y轴 如flower:"flower_x"
			//mp中记录的是每一个类型的x、y轴在InfoPoint中的下标，便于后面的查找 如mp[flower]=1 infopoint中的第2个数组属于flower
			if (mp[keys] == null) {
				Pointout[keys] = pro;
				var tmps = {};
				tmps[number] = 0, tmps[detail] = info[aim].detail;		//tmp是个对象，用来装入information 便于之后的点呈现
				infomation[keys] = tmps;
				InfoPoint[id] = new Array();
				InfoPoint[id].push(keys);
				mp[keys + ""] = id;
				id++;

				InfoPoint[id] = new Array();
				InfoPoint[id].push(pro);
				mp[pro] = id;
				id++;
			}
		}
		flag_info = 1;
	}
}

function sortByKey(array) {//将InfoPoint中的元素排序，方便后续处理
	return array.sort(function(a, b) {
		var x = a[0];
		var y = b[0];
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	});
}

function GainPoint() {
	var p = new Promise(function(resolve, reject) { //做一些异步操作
		console.log(InfoPoint);   //将g1，g2中点的信息通过info放入对应元组
		for (var indg1 in g1) {
			var flag = 0;
			if (g2[indg1] != null) {   //如果g1中出现过的实验编号在g2中也出现过,那么这个点会被呈现，增加有效点数量
				g1_valid_point++, g2_valid_point++;
				if (info[indg1] != null) {
					var aim = info[indg1];		//找到这个实验编号在info中对应的对象
					var id = mp[aim[typename]];		//得到这个tissue在infopoint中对应的下标
					InfoPoint[id].push(g2[indg1]);
					infomation[aim[typename]][number]++; //该类型的点的数量加1
					id = mp[aim[typename] + "!x"];
					InfoPoint[id].push(g1[indg1]);
					info_use++; 	//如果这个信息没有出现过 那么信息被利用到的数量增加
				} else {
					var aim = info["00000000"];
					var id = mp[aim[typename]];
					infomation[aim[typename]][number]++; //该类型的点的数量加1
					InfoPoint[id].push(g2[indg1]);
					id = mp[aim[typename] + "!x"];
					InfoPoint[id].push(g1[indg1]);
				}
			}
		}
		info_all--;
		var id = InfoPoint.length;
		if (InfoPoint[id - 1].length == 1) {
			InfoPoint.splice(id - 2, 2);
			console.log(InfoPoint);
		}
		InfoPoint = sortByKey(InfoPoint);
		disapp_choose();
		show_plot();
		resolve('Poingget_success');

	});
	return p;
}
var chart;

function createplot() { //c3创建散点图
	var p = new Promise(function(resolve, reject) { //做一些异步操作
		chart = c3.generate({
			size: {
				height: 750,
				width: 750
			},
			data: {
				xs: Pointout,
				columns: InfoPoint,
				type: 'scatter',
				onmouseover: function(d) { //在说明中显示相应的图
					document.getElementById("type_number").innerHTML = infomation[d.id][number];
					document.getElementById("type_detail").innerHTML = infomation[d.id][detail];
					document.getElementById("type_name").innerHTML = d.id;
					document.getElementById("type_cof").innerHTML = infomation[d.id]["corr"];
					document.getElementById("type_pvalue").innerHTML = infomation[d.id]["p_value"];
				}
			},
			axis: {
				x: {
					label: 'G1',
					tick: {
						fit: false
					}
				},
				y: {
					label: 'G2'
				}
			}
		});
		resolve('deal_success');
	});
}

function calculate_correlation() {
	var p = new Promise(function(resolve, reject) { //做一些异步操作	
		var tissue_type = [],
			correlation = [],
			pvalue = [],
			point_number = [];
		var allpoint_independent = [],
			allpoint_dependent = [],
			allpoint_number;
		var dataTable = [];
		var id = InfoPoint.length;

		for (var i = 0; i < id - 1; i += 2) {
			var x_set = InfoPoint[i];
			var y_set = InfoPoint[i + 1];
			var independent = [];
			var dependent = [];
			tissue_type.push(x_set[0]);
			point_number.push(x_set.length - 1);
			for (var j = 1; j < x_set.length; j++) {
				independent.push(x_set[j]);
				allpoint_independent.push(x_set[j]);
			}
			for (var j = 1; j < y_set.length; j++) {
				dependent.push(y_set[j]); //将每个type的横纵坐标分别放在dependent和independent的数组中
				allpoint_dependent.push(y_set[j]); //将所有点的横纵坐标分别放在allpoint_dependent和allpoint_independent的数组中
			}

			allpoint_number = allpoint_dependent.length;
			var depedent_number = dependent.length;
			if (depedent_number < 2) {
				var corr = "点数过少，不符合计算要求";
				var tmp_pvalue = "点数过少，不符合计算要求";
			} else if (depedent_number == 2) {
				var corr = pearsonCorrelation(independent, dependent).toExponential(6); //计算相关性系数
				var tmp_pvalue = "点数过少，不符合计算要求";
			} else {
				var corr = pearsonCorrelation(independent, dependent).toExponential(6); //计算相关性系数
				var tvalue = corr * Math.sqrt((dependent.length - 2) / (1 - corr * corr)); //分别计算每个type的t-value的值
				var tmp_pvalue = pt(tvalue, dependent.length - 2).toExponential(6); //由tvalue和自由度计算出每个type的p-avlue
			}
			correlation.push(corr);
			infomation[x_set[0]]["corr"] = corr;
			pvalue.push(tmp_pvalue);
			infomation[x_set[0]]["p_value"] = tmp_pvalue;
		}
		if (allpoint_number < 2) {
			var allpoint_correlation = "点数过少，不符合计算要求";
			var allpoint_pvalue = "点数过少，不符合计算要求";
		} else if (allpoint_number == 2) {
			var allpoint_correlation = pearsonCorrelation(allpoint_independent, allpoint_dependent).toExponential(6); //计算所有点的相关性系数和p-value
			var allpoint_pvalue = "点数过少，不符合计算要求";
		} else {
			var allpoint_correlation = pearsonCorrelation(allpoint_independent, allpoint_dependent).toExponential(6); //计算所有点的相关性系数和p-value
			var allpoint_tvalue = allpoint_correlation * Math.sqrt((allpoint_dependent.length - 2) / (1 - allpoint_correlation *
				allpoint_correlation));
			var allpoint_pvalue = pt(allpoint_tvalue, allpoint_dependent.length - 2).toExponential(6);
		}

		for (var i = 0; i < id / 2; i++) { //将每种type的类型名称，数量，相关性系数，p-value以json形式放入dataTable中
			var item = {};
			item.tissue = tissue_type[i];
			item.number = point_number[i];
			item.correlation = correlation[i];
			item.p_value = pvalue[i];
			dataTable.push(item);
		}
		var all_item = {}; //将所有点的数量，相关性系数，p-value也放入dataTable中
		all_item.tissue = "All";
		all_item.number = allpoint_number;
		all_item.correlation = allpoint_correlation;
		all_item.p_value = allpoint_pvalue;
		dataTable.push(all_item);
		console.log(dataTable);
		$(document).ready(function() { //显示表格数据
			var thead = "<tr><th>tissue</th><th>number</th><th>correlation</th><th>p_value</th></tr>";
			$("#example thead").append(thead);
			for (i = 0; i < dataTable.length; i++) {
				var tbody = "<tr><td>" + dataTable[i].tissue + "</td><td>" + dataTable[i].number + "</td><td>" + dataTable[i].correlation +
					"</td><td>" + dataTable[i].p_value + "</td></tr>";
				$("#example tbody").append(tbody);
			}
			$('#example').DataTable({
				dom: 'Bfrtip',
				language: {
					emptyTable: '无符合条件的记录',
					loadingRecords: '加载中...',
					processing: '查询中...',
					search: '检索:',
					lengthMenu: '每页 _MENU_ 件',
					zeroRecords: '没有数据',
					paginate: {
						'first': '第一页',
						'last': '最后一页',
						'next': '下一页',
						'previous': '上一页'
					},
					info: '第 _PAGE_ 页 / 总 _PAGES_ 页',
					infoEmpty: '没有数据',
					infoFiltered: '(过滤总件数 _MAX_ 条)',
				},
				buttons: [{extend: 'copyHtml5'},		//点击按钮可导出为各种形式的文件
					{extend: 'excelHtml5',title: 'Data export'},
					{extend: 'csvHtml5',title: 'Data export'},
					{extend: 'print',}]
			});
			$(".buttons-copy").text('复制');
			$(".buttons-excel").text('导出到excel');
			$(".buttons-csv").text('导出到csv');
			$(".buttons-print").text('打印');
		});
		resolve('calculate_correlation_success');
	});
	return p;
}


function switchToPlot() {
	console.log(flag_g1);
	console.log(flag_g2);
	console.log(flag_info);
	if(flag_g1!=1||flag_g2!=1){alert("请检查文件正确性后重新提交！");return ;}
	else if(flag_info!=1){
		alert("您未上传info.json文件,请上传info文件后再进行提交！");return ;
	}
	else {
		GainPoint().then(function() {
				return createplot();
			})
			.then(function() {
				return showPlot();
			})
		setTimeout(calculate_correlation, 1000);
	}

}

function showPlot() {
	var p = new Promise(function(resolve, reject) { //做一些异步操作
		$("#chart").show();
		document.getElementById("g1_use").innerHTML = g1_valid_point;
		document.getElementById("g2_use").innerHTML = g2_valid_point;
		document.getElementById("info_use").innerHTML = info_use;
		document.getElementById("g1_all").innerHTML = g1_have_point;
		document.getElementById("g2_all").innerHTML = g2_have_point;
		document.getElementById("info_all").innerHTML = info_all;
		resolve('show_success');
	});
	return p;
}

function show_plot() { //将散点图进行显示的操作
	for (var i = 0; i < plotarr.length; i++) {
		var tt = document.getElementById(plotarr[i]);
		tt.style.display = "block";
	}
	document.body.style.backgroundColor = "white";
}

function disapp_plot() { //刚开始的时候隐藏散点图的操作
	for (var i = 0; i < plotarr.length; i++) {
		var tt = document.getElementById(plotarr[i]);
		tt.style.display = "none";
	}
	document.body.style.backgroundColor = "#fafafa";
}

function disapp_choose() { //将主页面进行隐藏的操作
	for (var i = 0; i < indexarr.length; i++) {
		var tt = document.getElementById(indexarr[i]);
		tt.style.display = "none";
	}
}

function disapp_guide() { //将使用指南进行隐藏的操作
	for (var i = 0; i < UseGuide.length; i++) {
		var tt = document.getElementById(UseGuide[i]);
		tt.style.display = "none";
	}
}

function app_guide() { //将使用指南进行显示的操作
	for (var i = 0; i < UseGuide.length; i++) {
		var tt = document.getElementById(UseGuide[i]);
		tt.style.display = "block";
	}
	document.body.style.backgroundColor = "#fafafa";
}

function download_g1() { //使用指南中的g1数据下载
	var g1download =
		'{"R00001000256001":1.71446554413,"R00001000256002":1.5993875765806,"R00001000256003":0.924258901523332,"R00001000256004":2.38600670113312,"R00001000256005":1.11185751541813,"R00001000256006":0.60431596685333,"R00001000256007":1.38379123090177,"R00001000256008":0.779324876800997,"R00001000256009":1.14740245283754,"R00001000256010":1.71018781553424,"R00001000256011":1.02604159583327}';
	download(g1download, "g1.json", "text/plain");
}

function download_g2() { //使用指南中的g2数据下载
	var g2download =
		'{"R00001000256001":2.46555392127219,"R00001000256002":3.27184770963431,"R00001000256003":2.58021682959233,"R00001000256004":2.38600670113312,"R00001000256005":2.46555392127219,"R00001000256006":2.2975725511705,"R00001000256007":1.38379123090177,"R00001000256008":2.38508631450579,"R00001000256009":2.86733055874947,"R00001000256010":3.48185528467961,"R00001000256011":2.30158459266046}';
	download(g2download, "g2.json", "text/plain");
}

function download_info() { //使用指南中的info数据下载
	var infodownload =
		'{"R00001000256001":{"tissue":"root","detail":"Is is root 1 and ..."},"R00001000256002":{"tissue":"root", "detail":"Is is root 2 and ..."},"R00001000256003":{"tissue":"root","detail":"Is is root 3 and ..."},"R00001000256004":{"tissue":"calyx","detail":"Is is calyx 1 and ..."},"R00001000256005":{"tissue":"calyx","detail":"Is is root 2 and ..."},"R00001000256006":{"tissue":"Stamen","detail":"Is is Stamen 1 and ..."}}';
	download(infodownload, "info.json", "text/plain");
}

function switchToUse() { //切换到用户指南
	app_guide();
	disapp_choose();
	disapp_plot();
}

function cancel_choose() {//快速隐藏所有点，方便后续勾选个别点查看
	for (var aim in Pointout) {
		console.log(aim);
		chart.hide(aim);
	}
}

function appear_choose() {//快速显示所有点
	for (var aim in Pointout) {
		chart.show(aim);
	}
}
