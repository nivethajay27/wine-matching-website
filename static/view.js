function displayNames(data){
    //empty old data
    $("#element").empty()
    
    let new_name= $('<img src="' + data[id].image + '" style="width:300px;height:200px;">')

    $("#element").append(new_name)
    $("#element").append("<div>" + data[id].year + "</div>")
    $("#element").append("<div>" + data[id].summary + "</div>")
    let founder = data[id].founders
    $.each(founder, function(index, value) {
        $("#element").append("<div>" + value + "</div>")
    })
    $("#element").append("<div>" + data[id].budget + "</div>")
    let sub = data[id].subsidiary
    $.each(sub, function(index, value) {
        $("#element").append("<div>" + value + "</div>")
    })
}

function getData(){
    let data_to_save = {"id": id}   
    $.ajax({
        type: "POST",
        url: "/view",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_save),
        success: function(result){
            let all_data = result["searchData"]
            searchData = all_data
            displayNames(searchData)
            // console.log(searchData)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}

function search(){
    let val = $("#search").val()
    if (isEmptyOrSpaces(val)) {
        $("#search").val("");
        $("#search").focus();
        return;
    }
    let new_val = "http://127.0.0.1:5000/search/" + val + ""
    console.log(new_val)
    window.location.replace(new_val)
}

function isEmptyOrSpaces(str) {
    return str == null || str.match(/^ *$/) != null;
}

$(document).ready(function(){
    //when the page loads, display all the names
    console.log(id)
    getData()

    $("#submitsearch").click(function(){                
        search()
        event.preventDefault();
    })

    $("#search").keypress(function(e){     
        if(e.which == 13) {
            search()
            event.preventDefault();
        }   
    })
})