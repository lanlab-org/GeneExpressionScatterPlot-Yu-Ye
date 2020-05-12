# sWeekly review

| 日期 | 主持人 | 书记员 |
| ---- | ------ | ------ |
| 4.23 | 余慧   | 袁世家 |
| 4.30 | 王如韵 | 袁世家 |
| 5.07 | 叶红霞 | 袁世家 |
| 5.14 | 余慧   | 袁世家 |
| 5.21 | 王如韵 | 袁世家 |
| 5.28 | 叶红霞 | 袁世家 |



## 4.23

### 1. 目前进展

* 补充Responsibility：每个responsibility需要填上名字

    ```html
    Comments: You should edit the above responsibility description to fit your team.
    ```

    链接：[kanban](http://118.25.96.118/kanboard/?controller=BoardViewController&action=show&project_id=1)


### 2. 工作计划

* 重要功能缺少友善的用户说明（第一部分，即针对图点显示部分的说明）
* 重要功能缺少友善的用户说明（第二部分，即针对数据分析部分的说明）
* 数据导出为csv时，中文显示乱码



## 4.30

### 1. 目前进展

* 重要功能缺少友善的用户说明（第一部分，即针对图点显示部分的说明）
    使用指南中缺少一些对散点图和表格数据操作的指导。 将这些缺少说明的部分分为两部分，第一部分为**针对图点显示部分的说明，包括如何查看屏蔽其他基因类型只查看某一种基因类型数据的散点图，如何查看散点图上某个点对应类型的相关信息等。**

    ```html
    comments: "检索规则"? 这个是什么？
    ```

    >  就是搜索框输入什么，返回的匹配结果是在一个字段搜索，还是所有字段中搜索，只要部分匹配就返回，还是必须整个值完全匹配才会被搜索到，之类。

     

* 重要功能缺少友善的用户说明（第二部分，即针对数据分析部分的说明
    使用指南中缺少一些对散点图和表格数据操作的指导。 将这些缺少说明的部分分为两部分。第二部分为**针对数据分析部分的说明，包括如何对数据排序，搜索框的检索规则是怎样的等**。
    
* 数据导出为csv时，中文显示乱码
数据导出excel无问题，但导出为csv有中文显示乱码问题。
    
    ```html
    comments: 是导出表格到Excel，然后打开Excel表格，里面出现乱码吗？
```
    
    > 导出为excel的中文没有问题的，但pdf中文显示为乱码
    



### 2. 工作计划

* 测试计划
    1. srs.txt
    2. test.txt
* 页面跳转显示混乱




## 5.07

### 1. 目前进展

* 页面跳转显示混乱
    系统使用中，从其他页面跳转回“数据输入”页面后，出现的显示混乱问题。

    ```html
    “文件选择”好，还是“输入数据”好？
    ```

    > 可以改为输入数据，更直观。

* 测试计划
    文件链接：

    [srs.txt](https://github.com/lanlab-org/GeneExpressionScatterPlot-Yu-Ye/blob/叶红霞-201736900115-ContributorList/srs.txt)

    [test.txt](https://github.com/lanlab-org/GeneExpressionScatterPlot-Yu-Ye/blob/叶红霞-201736900115-ContributorList/test.txt)

### 2. 工作计划

* 精简代码
* 添加友好的测试