$(function(){
    /* reportrange */
    if($("#reportrange").length > 0){
        $("#reportrange").daterangepicker({
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            opens: 'left',
            buttonClasses: ['btn btn-default'],
            applyClass: 'btn-small btn-primary',
            cancelClass: 'btn-small',
            format: 'MM.DD.YYYY',
            separator: ' to ',
            startDate: moment().subtract('days', 29),
            endDate: moment()
          },function(start, end) {
              $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        });

        $("#reportrange span").html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    }
    /* end reportrange */

    /* Rickshaw dashboard chart */
    // var seriesData = [ [], [] ];
    // var random = new Rickshaw.Fixtures.RandomData(1000);

    // for(var i = 0; i < 100; i++) {
        // random.addData(seriesData);
    // }

    // var rdc = new Rickshaw.Graph( {
            // element: document.getElementById("dashboard-chart"),
            // renderer: 'area',
            // width: $("#dashboard-chart").width(),
            // height: 250,
            // series: [{color: "#33414E",data: seriesData[0],name: 'New'},
                     // {color: "#1caf9a",data: seriesData[1],name: 'Returned'}]
    // } );

    // rdc.render();

    // var legend = new Rickshaw.Graph.Legend({graph: rdc, element: document.getElementById('dashboard-legend')});
    // var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({graph: rdc,legend: legend});
    // var order = new Rickshaw.Graph.Behavior.Series.Order({graph: rdc,legend: legend});
    // var highlight = new Rickshaw.Graph.Behavior.Series.Highlight( {graph: rdc,legend: legend} );

    // var rdc_resize = function() {
            // rdc.configure({
                    // width: $("#dashboard-area-1").width(),
                    // height: $("#dashboard-area-1").height()
            // });
            // rdc.render();
    // }

    // var hoverDetail = new Rickshaw.Graph.HoverDetail({graph: rdc});

    // window.addEventListener('resize', rdc_resize);

    // rdc_resize();
    /* END Rickshaw dashboard chart */

    /* Donut dashboard chart */
    Morris.Donut({
        element: 'dashboard-donut-1',
        data: [
            {label: "Complete", value: 2},
            {label: "On Track", value: 18},
            {label: "At Risk", value: 3}
        ],
        colors: ['#88cc00', '#1caf9a', '#ff6666'],
        resize: true
    });
    /* END Donut dashboard chart */


    /* Bar dashboard chart */
    Morris.Bar({
        element: 'dashboard-bar-1',
        data: [
            { y: 'Sept 2017', a: 20, b: 3 },
            { y: 'Oct 2017', a: 15, b: 8 },
            { y: 'Nov 2017', a: 16, b: 7 },
            { y: 'Dec 2017', a: 22, b: 1 },
            { y: 'Jan 2018', a: 20, b: 3 },
            { y: 'Feb 2018', a: 17, b: 6 },
            { y: 'Mar 2018', a: 18, b: 5 },
            { y: 'Apr 2018', a: 20, b: 3 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Completed', 'Failed'],
        barColors: ['#1caf9a', '#ff6666'],
        gridTextSize: '10px',
        hideHover: true,
        resize: true,
        gridLineColor: '#E5E5E5'
    });
    /* END Bar dashboard chart */

    /* Line dashboard chart */
    Morris.Line({
      element: 'dashboard-line-1',
      data: [
        { y: '05-04-2018', a: 20,b: 3},
        { y: '05-05-2018', a: 23,b: 0},
        { y: '05-06-2018', a: 23,b: 0},
        { y: '05-07-2018', a: 22,b: 1},
        { y: '05-08-2018', a: 19,b: 4},
        { y: '05-09-2018', a: 22,b: 1},
        { y: '05-10-2018', a: 23,b: 0}
      ],
      xkey: 'y',
      ykeys: ['a','b'],
      labels: ['Present','Absent'],
      resize: true,
      hideHover: true,
      xLabels: 'day',
      gridTextSize: '10px',
      lineColors: ['#1caf9a','#33414E'],
      gridLineColor: '#E5E5E5'
    });
    /* EMD Line dashboard chart */
    /* Moris Area Chart */

    /* End Moris Area Chart */
    /* Vector Map */
    var jvm_wm = new jvm.WorldMap({container: $('#dashboard-map-seles'),
                                    map: 'world_mill_en',
                                    backgroundColor: '#FFFFFF',
                                    regionsSelectable: true,
                                    regionStyle: {selected: {fill: '#B64645'},
                                                    initial: {fill: '#33414E'}},
                                    markerStyle: {initial: {fill: '#1caf9a',
                                                   stroke: '#1caf9a'}},
                                    markers: [{latLng: [37.78, -122.41], name: 'Santa Clara - 1'}]
                                });
    /* END Vector Map */


    $(".x-navigation-minimize").on("click",function(){
        setTimeout(function(){
            rdc_resize();
        },200);
    });


});

