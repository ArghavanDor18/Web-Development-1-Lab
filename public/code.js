received_data = [];

function resetPage(){
    $('#unicornNameFilter').prop('checked', false);
    $('#unicornWeightFilter').prop('checked', false);
}

function filter(){
    name_ = "unchecked"
    weight_ = "unchecked"
    if ($('#unicornNameFilter').is(":checked")) {
        name_ = "checked"
    }
    if ($('#unicornWeightFilter').is(":checked")) {
        weight_ = "checked"
    }
    tmp = received_data.map(
        (ob) => {
            result = []
            if (name_ == "checked")
                result.push(ob["name"])

            if (weight_ == "checked")
                result.push(ob["weight"])

            return result
        }
    )

}
function process_res(data){
    console.log(data)
    $("#result").html(JSON.stringify(data));
}

function findUnicornByWeight(){
    console.log("findUnicornByWeight()" + "got called!");
    console.log("#lowerWeight").val();
    console.log("#higherWeight").val();
    $.ajax(
        {
            url: "https://whispering-depths-17217.herokuapp.com/findUnicornByWeight",
            type: "POST",
            data: {
                "lowerWeight": $("#lowerWeight").val(),
                "higherWeight": $("#higherWeight").val()
            },
            sucess: process_res
        }
    )
    resetPage();
    $("#filters").show()
}

function findUnicornByName(){
    console.log("findUnicornByName()" + "got called!");
    console.log($("#unicornName").val());

    $.ajax(
        {
            url: "https://whispering-depths-17217.herokuapp.com/findUnicornByName",
            type: "POST",
            data: {
                "unicornName": $("#unicornName").val()
            },
            sucess: process_res
        }
    )
    resetPage();
    $("#filters").show()
}

function findUnicornByFood(){
    carrotIsChecked = "unchecked"
    appleIsChecked = "unchecked"
    if($("#carrot").is(":checked"))
        carrotIsChecked = "checked"
        if($("#apple").is(":checked"))
            appleIsChecked = "checked"
    console.log("findUnicornByName()" + "got called!");
    console.log($("#unicornName").val());

    $.ajax(
        {
            url: "https://whispering-depths-17217.herokuapp.com/findUnicornByFood",
            type: "POST",
            data: {
                "appleIsChecked": appleIsChecked,
                "carrotIsChecked": carrotIsChecked
            },
            sucess: process_res
        }
    )
    resetPage();
    $("#filters").show()
}

function setup(){
    $("#findUnicornByWeight").click(findUnicornByWeight)
    $("#findUnicornByName").click(findUnicornByName)
    $("#findUnicornByFood").click(findUnicornByFood)
    $("#filter").click(filter)
    $("#filters").hide()
}

$(document).ready(setup)