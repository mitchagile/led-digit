var module = angular.module('led-digit', []);
module.controller('LEDController', LEDController); 

function LEDController($scope) {
    var value = 0;
    var encodings = [0x7E, 0x30, 0x6D, 0x79, 0x33,
                    0x5B, 0x5F, 0x70, 0x7F, 0x7B];
    var masks = [1 << 6, 1 << 5, 1 << 4, 1 << 3, 1 << 2, 1 << 1, 1 << 0];
   
   $scope.$watch('value', function(newVal) {
       drawLED(newVal);
   });
   
    var svg = d3.select(".led-svg")
            .append("svg")
            .attr("width", 300)
            .attr("height", 400)
            .append("g")
            .attr("transform", "translate(30, 0) skewX(-7)")
            .attr("id", "led-group");
    drawLED(value);
    
    function drawLED(newVal) {
        svg.selectAll("path").remove();
        
        var encoding = encodings[newVal];
        drawSegmentA(masks[0] & encoding);
        drawSegmentB(masks[1] & encoding);
        drawSegmentC(masks[2] & encoding);
        drawSegmentD(masks[3] & encoding);
        drawSegmentE(masks[4] & encoding);
        drawSegmentF(masks[5] & encoding);
        drawSegmentG(masks[6] & encoding);
    }
    
    function createHorizontalSegment(state) {
        return svg.append("path")
            .attr("class", state ? "led-on" : "led-off")
            .attr("d", "M 20 20 L 30 10 L 130 10 L 140 20 L 130 30 L 30 30 z");
    }
    
    function createVerticalSegment(state) {
        return svg.append("path")
            .attr("class", state ? "led-on" : "led-off")
            .attr("d", "M 20 20 L 10 30 L 10 130 L 20 140 L 30 130 L 30 30 z");
    }

    function drawSegmentA(state) {
        createHorizontalSegment(state);
    }
    
    function drawSegmentB(state) {
        createVerticalSegment(state)
            .attr("transform", "translate(120, 0)");
    }

    function drawSegmentC(state) {
        createVerticalSegment(state)
            .attr("transform", "translate(120, 120)");
    }

    function drawSegmentD(state) {
        createHorizontalSegment(state)
            .attr("transform", "translate(0, 240)");
    }

    function drawSegmentE(state) {
        createVerticalSegment(state)
            .attr("transform", "translate(0, 120)");
    }

    function drawSegmentF(state) {
        createVerticalSegment(state);
    }
    
    function drawSegmentG(state) {
        createHorizontalSegment(state)
            .attr("transform", "translate(0, 120)");
    }
}
