// from data.js
var tableData = data;
var tbody = d3.select("tbody")
// YOUR CODE HERE!

var button = d3.select("#filter-btn");
var form = d3.select("#form");

function table(tableData) {
tbody.html("")
for (var i = 0; i < tableData.length; i++) {
    var data_obj = tableData[i]
    var row = tbody.append("tr")
    Object.values(data_obj).forEach(value => row.append('td').text(value))
}
}


button.on("click", function() {
    var input = d3.select("input").property("value")
    table(tableData.filter(item => item.datetime === input) )
});

form.on("submit", function() {
    var input = d3.select("input").property("value")
    table(tableData.filter(item => item.datetime === input) )
});


