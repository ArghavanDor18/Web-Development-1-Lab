function process_(data){
    console.log(data)
    
    jQuery('#temp').html(data.main.temp);
    jQuery('#p2').html(data.weather[0].description);
    x = data.weather[0].icon
    jQuery('#img1').attr("src", `http://openweathermap.org/img/wn/10d@2x.png`);
      
}

function get_w_f(){
    city_name = jQuery('#city_name').val()
    $.ajax(
        {
            url:`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=ad78790685e72e4ed5c61f5a3e5423d3`,
            "type":'GET',
            "success": process_
        }
    )
}




function setup(){
    console.log('s')
    $('#get_w').click(get_w_f);
  }
  $(document).ready(setup);