// №1
/*
function sum(x: number, y: number): number {
    return x + y;
}
*/
// №2
function sum1(arr) {
    var res = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        res += num;
    }
    return res;
}
