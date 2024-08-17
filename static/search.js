function displayNames(data){
    //empty old data
    $("#element").empty()

    let new_data = Object.keys(data)
    let length = new_data.length
    for (let i = 0; i < length; i++) {
        console.log(new_data[i])
        let new_name= $('<div onClick="view(\'' + new_data[i] + '\')" value="' + new_data[i] + '">' + new_data[i] + '</div>')
        $("#element").append(new_name)
        console.log(new_name)
    }

    if (length == 0) {
        $("#element").append("No Results found")
    }
}

function getData(){
    let data_to_save = {"id": id}   
    $.ajax({
        type: "POST",
        url: "/search",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_save),
        success: function(result){
            let all_data = result["searchData"]
            searchData = all_data
            displayNames(searchData)
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
    window.location.replace(new_val)
}

function view(id){
    let new_val = "http://127.0.0.1:5000/view/" + id + ""
    window.location.replace(new_val)
}

function isEmptyOrSpaces(str) {
    return str == null || str.match(/^ *$/) != null;
}

$(document).ready(function(){
    //when the page loads, display all the names
    getData()
    displayNames(searchData)

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