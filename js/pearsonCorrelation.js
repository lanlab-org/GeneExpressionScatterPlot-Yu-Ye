function pearsonCorrelation(independent, dependent) {
    var independent_mean = arithmeticMean(independent);
    var dependent_mean = arithmeticMean(dependent);
    var products_mean = meanOfProducts(independent, dependent);
    var covariance = products_mean - (independent_mean * dependent_mean);   //协方差

    var independent_standard_deviation = standardDeviation(independent);	//独立值的标准差
    var dependent_standard_deviation = standardDeviation(dependent);	//相关值的标准偏差
    var corr = covariance / (independent_standard_deviation * dependent_standard_deviation);	//皮尔森相关系数
    return corr;
}

function arithmeticMean(data) {              //计算算术平均数
    let total = 0;
    for(let i = 0, l = data.length; i < l; total += data[i], i++);
    return total / data.length;
}

function meanOfProducts(data1, data2) {          //计算乘积均值
    var total = 0;
    for(let i = 0, l = data1.length; i < l; total += (data1[i] * data2[i]), i++);
    return total / data1.length;
}

function standardDeviation(data) {           //计算标准差
    var squares = [];
    for(var i = 0, l = data.length; i < l; i++) {
        squares[i] = Math.pow(data[i], 2);
    }
    var mean_of_squares = arithmeticMean(squares);
    var mean = arithmeticMean(data);
    var square_of_mean = Math.pow(mean, 2);
    var variance = mean_of_squares - square_of_mean;
    var std_dev = Math.sqrt(variance);
    return std_dev;
}