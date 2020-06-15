# Gene-Expression-Scatter-Plot
<img src="https://img.shields.io/badge/language-javascript-F1E05A.svg"/>        <img src="https://img.shields.io/github/last-commit/lanlab-org/GeneExpressionScatterPlot-Yu-Ye/叶红霞-201736900115-ContributorList.svg"/>

## Introduction
Gene Expression Scatter Plot for Software Project Management, Spring 2020.
[Click here](https://github.com/lanlab-org/GeneExpressionScatterPlot-Yu-Ye/blob/叶红霞-201736900115-ContributorList/README.md) to read Chinese version.

## Contributor List 

WangRuyun-王如韵-201736900113

shijyuan-袁世家-201739230123

945168786-余慧-201736900117

cxzql-叶红霞-201736900115

## ToDo List

- [x] Add user-friendly descriptions of important functions (the first part, that is, the description of the display part)
- [x] Add user-friendly instructions for important functions (the second part, instructions for data analysis)
- [x] Solve the problem of page expansion and display confusion
- [x] Fixed the problem that Chinese display garbled characters when data is exported to csv
- [x] Fix file uploading bug
- [ ] Streamline the code, you can add more friendly comments
- [ ] Documentation
- [ ] Code test

## Software requirements specifications
Click to : [《Oh My Gene》 软件需求规格说明书](https://omg-se-201736900117.readthedocs.io/en/latest/)

## User instructions

###  File format

* g1.json is the expression value of g1 in each sample, JSON type. The format is: `" {Experiment Number A ":" Result Value B "}`. E.g :

```json
{"Sample01": 2.53, "Sample02": 2.45, "Sample03": 1.88, "Sample04": 1.85, "Sample05": 1.94}
```

* g2.json is the expression value of g2 in each sample, JSON type. The format is: `" {Experiment Number A ":" Result Value B "}`. E.g :

```json
{"Sample01": 9.05, "Sample02": 7.20, "Sample03": 6.94, "Sample04": 6.34, "Sample05": 6.78}
```

* info.json is the information of each sample, JSON type. The format is: ` Experiment Number X ": {Type Name:" Type ", detailed information:" detail "}`. E.g :

```json
 {"Sample01": {"category": "Type1", "detail": "TBA"}, "Sample02": {"category": "Type1", "detail": "TBA"}, "Sample03": {"category": "Type1", "detail": "TBA"}, "Sample04": {"category": "Type1", "detail": "TBA"}, "Sample05": {"category": "Type1", "detail": "TBA"}}
```



### How to use and details

1. The presentation of scattered points and the detailed description of various types of points

    * Submission instructions:
        Before submitting the g1, g2, and info files, please ensure the correctness of the file. If g1, g2 are empty files, or some of the data types have problems, an error will be reported and retransmission will be required. If the info file is empty Then all points are displayed as unknown points, and it is required that three corresponding files must be uploaded, otherwise they cannot be submitted. After the file is successfully uploaded, all scattered points will be presented.
    * Scatter and information details presentation:
        All legal scatter points in .json will be displayed on the left side of the screen, and the final rendering percentage of the points will be displayed on the upper right side. To optimize the visual effect, the coordinate axes will be automatically assigned according to the point distribution. Move the mouse to a certain type of scatter, and the gray box on the right will display the type name, quantity and detailed description of the scatter of that type. The horizontal and vertical coordinates of the point can also be displayed next to the mouse.
     * The scatter type is displayed separately:
        To help you find the same type of scatter, all scatter types will be presented in lexicographic order from small to larger than the scatter chart. Click the corresponding type of switch to temporarily display and hide the corresponding type of points, which is convenient for querying specific points. At the same time, it provides all hide and all display switches for you to handle flexibly. If you need to view a certain type of scattered points, you can first turn off the display of all scattered points and then open a specific scattered point.

2. The operation instructions of the correlation data of g1 and g2 and the p-value and other table data

    * Form fields:
        In the table below the scatterplot, the data of the analyzed genes has 4 fields: `tissue` (plant organ type),` number` (number of samples belonging to the tissue), `correlation` (correlation of g1 and g2 Coefficient), `p-value` (two-tailed P value).
	* Sort:
        If you want to sort the table data, please click the field you want to sort with the mouse, such as `correlation` to sort the correlation coefficient, click odd number to sort from small to large, click even number to sort from large to small .
    * Search:
        If you want to search for data, you can enter the search data in the search box at the top right of the table. The background will automatically find the content that contains the search data in all fields, and present all matching records in the table from time to time.
    * Export:
        If you need, click the button at the top left of the table to copy and print the data, or export to the corresponding .xlsx, .csv format file, which is convenient for your later data processing.

*If you have any suggestions or questions during use, please contact us through the email 94516876@qq.com, thank you for your trust and support.*