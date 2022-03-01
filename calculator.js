let history = []
function operate(op) {
    x = parseInt($('#x').val());
    y = parseInt($('#y').val());
    

    

    switch(op) {
        case 'addition':
            expression = x + ' + ' + y + ' = ' + (x + y);
            break;
        case 'subtraction':
            expression = x + ' - ' + y + ' = ' + (x - y);
            break;
        case 'multiplication':
            expression = x + ' * ' + y + ' = ' + (x * y);
            break;
        case 'division':
            expression = x + ' / ' + y + ' = ' + (x / y);
            break;
        case 'exponent':
            expression = x + ' ^ ' + y + ' = ' + (x ** y);
            break;
        case 'modulo':
            expression = x + ' % ' + y + ' = ' + (x % y);
            break;
        default:
            expression = 'ERROR'
            console.log("Error in calculation")
    }
    $('#result').html("Result of " + expression);
    history.unshift(`<div class="item ${op}"-color>${expression}</div>`);
    $('#history').html(history);
}

function setup() {
    $(".operator").click(function(){operate(this.id)})
    $("#increase").click(function(){
    $(".item").css("font-size", "20px")
    $("#decrease").click(function(){
    $(".item").css("font-size", "-20px")
    
    

    })
}


,$(document).ready(setup));
}
