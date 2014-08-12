var module = angular.module('led-digit', []);
module.controller('LEDController', LEDController); 



function LEDController() {
    var svg = d3.select(".clock-area")
        .append("svg")
        .attr("width", 800)
        .attr("height", 400)
        .append("g");

    svg.append("path")
        .attr("d", drawHorizontalSegment())
        .attr("fill", "blue");
    svg.append("path")
        .attr("d", drawHorizontalSegment())
        .attr("transform", "translate(0, 120)")
        .attr("fill", "blue");
    svg.append("path")
        .attr("d", drawVerticalSegment())
        .attr("fill", "red");
    svg.append("path")
        .attr("d", drawHorizontalSegment())
        .attr("transform", "translate(0, 240)")
        .attr("fill", "blue");
    svg.append("path")
        .attr("d", drawVerticalSegment())
        .attr("transform", "translate(120, 0)")
        .attr("fill", "red");
    svg.append("path")
        .attr("d", drawVerticalSegment())
        .attr("transform", "translate(0, 120)")
        .attr("fill", "red");
    svg.append("path")
        .attr("d", drawVerticalSegment())
        .attr("transform", "translate(120, 120)")
        .attr("fill", "red");
    svg.attr("transform", "translate(30, 0) skewX(-7)");
}

function drawHorizontalSegment() {
    return "M 20 20 L 30 10 L 130 10 L 140 20 L 130 30 L 30 30 z";
}

function drawVerticalSegment() {
    return "M 20 20 L 10 30 L 10 130 L 20 140 L 30 130 L 30 30 z";
}
