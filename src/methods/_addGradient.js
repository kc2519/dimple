// Copyright: 2013 PMSI-AlignAlytics
// License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"
// Source: /src/methods/_addGradient.js
var _addGradient = function (seriesValue, id, categoryAxis, data, chart, duration, colorProperty) {
    var grad = chart.svg.select("#" + id);
    var cats = [];
    data.forEach(function (d) {
        if (cats.indexOf(d[categoryAxis.categoryFields[0]]) == -1) {
            cats.push(d[categoryAxis.categoryFields[0]]);    
        }
    }, this);
    var field = categoryAxis.position + "Field";
    var transition = true;
    if (grad.node() == null) {
        transition = false;
        grad = chart.svg.append("linearGradient")
            .attr("id", id)
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", (categoryAxis.position == "x" ? categoryAxis._scale(cats[0]) + ((chart.width / cats.length) / 2) : 0))
            .attr("y1", (categoryAxis.position == "y" ? categoryAxis._scale(cats[0]) - ((chart.height / cats.length) / 2) : 0))
            .attr("x2", (categoryAxis.position == "x" ? categoryAxis._scale(cats[cats.length - 1]) + ((chart.width / cats.length) / 2) : 0))
            .attr("y2", (categoryAxis.position == "y" ? categoryAxis._scale(cats[cats.length - 1]) - ((chart.height / cats.length) / 2) : 0));
    }
    var colors = [];
    cats.forEach(function (cat, j) {
        var row = {};
        for (var k = 0; k < data.length; k++) { if (data[k].aggField == seriesValue && data[k][field] == cat) { row = data[k]; break; } }
        colors.push({ offset: Math.round((j / (cats.length - 1)) * 100) + "%", color: row[colorProperty] });
    }, this);
    if (transition) {
        grad.selectAll("stop")
            .data(colors)
            .transition().duration(duration)
            .attr("offset", function(d) { return d.offset; })
            .attr("stop-color", function(d) { return d.color; });
    }
    else {
        grad.selectAll("stop")
            .data(colors)
            .enter()
            .append("stop")
            .attr("offset", function(d) { return d.offset; })
            .attr("stop-color", function(d) { return d.color; });
    }
};

