/*function initializeViz() {
  var placeholderDiv = document.getElementById("tableauViz");
  var url = "https://public.tableau.com/views/WorldIndicatorseg1/GDPpercapita?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
  var options = {
    width: placeholderDiv.offsetWidth,
    height: placeholderDiv.offsetHeight,
    hideTabs: true,
    hideToolbar: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    }
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
}

*/
function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/WorldIndicatorseg1/GDPpercapita?:language=en&:display_count=y&publish=yes";

    var viz = new tableau.Viz(containerDiv, url);
}