function calculate_area() {
    console.log("calculate_area()")
    //alert(jQuery("body").html;

    //alert(jQuery("#x").val());
    r = parseInt(jQuery("#x").value()) ;
    //console.log( r * r * 22/7)
    jQuery("#p1").html(r * r * 22/7)
}

function setup() {
    console.log("setup() got called")
    jQuery("#calc").click(calculate_area);
}

{jQuery(document).ready(setup)};