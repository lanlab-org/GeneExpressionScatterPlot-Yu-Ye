# Gene-Expression-Scatter-Plot
<img src="https://img.shields.io/badge/language-javascript-F1E05A.svg"/>        <img src="https://img.shields.io/github/last-commit/lanlab-org/GeneExpressionScatterPlot-Yu-Ye/叶红霞-201736900115-ContributorList.svg"/>

## 介绍

2020年春季软件项目管理课程的基因表达散点图项目。
[Check the English version of README.md](https://github.com/lanlab-org/GeneExpressionScatterPlot-Yu-Ye/blob/叶红霞-201736900115-ContributorList/README_en.md)

## Contributor List

WangRuyun-王如韵-201736900113

shijyuen-袁世家-201739230123

945168786-余慧-201736900117

cxzql-叶红霞-201736900115

## ToDo List

- [x] 补充重要功能友善的用户说明（第一部分，即针对图点显示部分的说明）
- [x] 补充重要功能友善的用户说明（第二部分，即针对数据分析部分的说明）
- [x] 解决页面跳转显示混乱的问题
- [x] 解决数据导出为csv时，中文显示乱码的问题
- [x] 修复找到的文件上传显示bug
- [ ] 精简代码
- [ ] 添加更多友好的注释
- [ ] 文档编写
- [ ] 代码测试

## 软件需求规格说明书

点击前往：[《Gene Expression Scatter Plot》 软件需求规格说明书](https://omg-se-201736900117.readthedocs.io/en/latest/)

## 用户使用说明

### 示范文件格式

* g1.json是g1在各个样本中的表达值，JSON类型。格式为：` {"样本编号A":结果数值B}`。例如：

```json
{"Sample01": 2.53, "Sample02": 2.45, "Sample03": 1.88, "Sample04": 1.85, "Sample05": 1.94}
```

* g2.json是g2在各个样本中的表达值，JSON类型。格式为：` {"样本编号A":结果数值B}`。例如：

```json
{"Sample01": 9.05, "Sample02": 7.20, "Sample03": 6.94, "Sample04": 6.34, "Sample05": 6.78}
```

* info.json是每个样本的信息，JSON类型。格式为：`"样本编号X":{"类型名":"Type","详细信息":"detail"}`。例如：

```json
 {"Sample01": {"category": "Type1", "detail": "TBA"}, "Sample02": {"category": "Type1", "detail": "TBA"}, "Sample03": {"category": "Type1", "detail": "TBA"}, "Sample04": {"category": "Type1", "detail": "TBA"}, "Sample05": {"category": "Type1", "detail": "TBA"}}
```



### 使用及细节说明

1. 散点的呈现以及各个类型点的细节说明 						
     * 提交说明：
         在将g1,g2,以及info文件提交前请您保证文件的正确性，若g1,g2为空文件，或其中某些数据类型出现问题时会进行相应报错并要求重传，若info文件为空则所有的点都显示为未知点，要求必须上传三个对应的文件，否则无法提交。在文件成功上传后会进行所有散点的呈现。
     * 散点以及信息细节呈现：
         在.json中的所有合法散点均会在屏幕左侧显示，右侧上方会显示点的最终呈现百分比。为优化视觉效果，坐标轴将根据点的分布自动分配。将鼠标移至某一类型的散点上，右侧灰框中会呈现该类散点的类型名、数量以及细节说明等信息。鼠标旁也能显示该点的横纵坐标。
      * 散点类型单独显示：
         为方便您查找同一类型的散点，所有散点类型会按照字典序于散点图下方呈现，点击相应类型的开关，可以实现对应类型点的暂时显示和隐藏，便于特定点的查询。同时提供了全部隐藏以及全部显示开关便于您灵活处理，若您需要查看某一类型的散点，可先关闭所有散点的显示后打开特定散点即可。
   
2. g1和g2的相关性系数及p-value等表格数据的操作说明
     * 表格字段:
         基因表达相关性分析结果在散点图下方的表格中，共有4个字段：`tissue`(植物器官类型)，`number`(属于该tissue的样本个数)，`correlation`(g1和g2的相关性系数)，`p-value`(双尾P值)。

     * 排序：
         用鼠标点击您要排序的字段，如`correlation`即可对相关性系数进行排序，点击奇数次实现从小到大排序，点击偶数次实现从大到小排序。
     * 检索：
         如您要查找数据，可在表格右上方的检索框内输入检索数据，后台会自动在所有字段内查找包含了检索数据的内容，并时时地在表格中呈现所有匹配到的记录。
     * 导出：
         点击表格左上方的按钮即能复制、打印数据，或导出为相应的 .xlsx，.csv 格式文件，便于您后期数据的处理。

     *如果您在使用中有任何建议或疑问，欢迎通过邮箱94516876@qq.com联系我们，感谢您的信赖与支持。*

## FAQ

## Current Status
我们共4人作为一个小组在改进这个项目，每周四进行每周总结(Weekly Review)，讨论进度和安排。

[weekly_review.md](https://github.com/lanlab-org/GeneExpressionScatterPlot-Yu-Ye/blob/叶红霞-201736900115-ContributorList/docs/weekly_review.md)

| 日期 | 主持人 | 书记员 |
| ---- | ------ | ------ |
| 4.23 | 余慧   | 袁世家 |
| 4.30 | 王如韵 | 袁世家 |
| 5.07 | 叶红霞 | 袁世家 |
| 5.14 | 余慧   | 袁世家 |
| 5.21 | 王如韵 | 袁世家 |
| 5.28 | 叶红霞 | 袁世家 |
|      |        |        |

