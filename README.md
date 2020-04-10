# Gene-Expression-Scatter-Plot
<img src="https://img.shields.io/badge/language-javascript-F1E05A.svg"/>        <img src="https://img.shields.io/github/last-commit/lanlab-org/GeneExpressionScatterPlot-Yu-Ye/叶红霞-201736900115-ContributorList.svg"/>

## 介绍
2020年春季软件项目管理课程的基因表达散点图项目。
[点此](https://github.com/lanlab-org/GeneExpressionScatterPlot-Yu-Ye/blob/叶红霞-201736900115-ContributorList/README_en.md)查阅英文版本

## Contributor List

WangRuyun-王如韵-201736900113

shijyuen-袁世家-201739230123

945168786-余慧-201736900117

cxzql-叶红霞-201736900115

## ToDo List

- [ ] 补充重要功能友善的用户说明（第一部分，即针对图点显示部分的说明）
- [x] 补充重要功能友善的用户说明（第二部分，即针对数据分析部分的说明）
- [ ] 解决页面跳转显示混乱的问题
- [ ] 解决数据导出为csv时，中文显示乱码的问题
- [ ] 文档编写
- [ ] 代码测试

## 软件需求规格说明书

点击前往：[《Oh My Gene》 软件需求规格说明书](https://omg-se-201736900117.readthedocs.io/en/latest/)

## 用户使用说明

### 示范文件格式

* g1.json是g1在各个样本中的表达值，JSON类型。格式为：` "{实验编号A":"结果数值B"}`。例如：

```json
{"Sample01": 2.53, "Sample02": 2.45, "Sample03": 1.88, "Sample04": 1.85, "Sample05": 1.94}
```

* g2.json是g2在各个样本中的表达值，JSON类型。格式为：` "{实验编号A":"结果数值B"}`。例如：

```json
{"Sample01": 9.05, "Sample02": 7.20, "Sample03": 6.94, "Sample04": 6.34, "Sample05": 6.78}
```

* info.json是每个样本的信息，JSON类型。格式为：`"实验编号X":{类型名:"Type",详细信息:"detail"}`。例如：

```json
 {"Sample01": {"category": "Type1", "detail": "TBA"}, "Sample02": {"category": "Type1", "detail": "TBA"}, "Sample03": {"category": "Type1", "detail": "TBA"}, "Sample04": {"category": "Type1", "detail": "TBA"}, "Sample05": {"category": "Type1", "detail": "TBA"}}
```



### 使用及细节说明

1. 散点的呈现以及各个类型点的细节说明 						
    			在将g1,g2,以及info文件提交前请您保证文件的正确性，若g1,g2为空文件，或其中某些数据类型出现问题时会进行相应报错并要求重传，若info文件为空则所有的点都显示为未知点，要求必须上传三个对应的文件，否则无法提交。
     		在文件成功上传后会进行所有散点的呈现，点击下方的相应类型的开关，可以实现对应类型点的暂时隐藏，便于特定点的查询。开关会按顺序在下方呈现，方便您查找同一类型值。鼠标在移动至图中的某散点上时，页面右侧将会显示该类型相应信息，如类型名、数量，相关性系数等信息。若您想快速得到某个点的信息，可点击下方"cancel all"实现全部点的消失，再进行目标点的点击进行显示。

2. g1和g2的相关性系数及p-value等表格数据的操作说明
     * 表格字段:
         分析基因的数据在散点图下方的表格中，共有4个字段：`tissue`(植物器官类型)，`number`(属于该tissue的样本个数)，`correlation`(g1和g2的相关性系数)，`p-value`(双尾P值)。

     * 排序：
         如您要对表格数据进行排序，请用鼠标点击您要排序的字段，如`correlation`即可对相关性系数进行排序，点击奇数次实现从小到大排序，点击偶数次实现从大到小排序。
     * 检索：
         如您要查找数据，可在表格右上方的检索框内输入检索数据，后台会自动在所有字段内查找包含了检索数据的内容，并时时地在表格中呈现所有匹配到的记录。
     * 导出：
         如您需要，点击表格左上方的按钮即能复制、打印数据，或导出为相应的 .xlsx，.csv 格式文件，便于您后期数据的处理。

     *如果您在使用中有任何建议或疑问，欢迎通过邮箱94516876@qq.com联系我们，感谢您的信赖与支持。*

## FAQ