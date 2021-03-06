// Source: /src/objects/legend/begin.js
// Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend
dimple.legend = function (chart, x, y, width, height, horizontalAlign, series) {

// Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-chart
this.chart = chart;
// Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-series
this.series = series;
// Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-x
this.x = x;
// Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-y
this.y = y;
// Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-width
this.width = width;
// Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-height
this.height = height;
// Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-horizontalAlign
this.horizontalAlign = horizontalAlign;
// Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-shapes
this.shapes = null;