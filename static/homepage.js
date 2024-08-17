function displayNames(data){
    //empty old data
    $("#element").empty()

    let new_data = Object.keys(data)
    for (let i = 0; i < 3; i++) {
        let new_name= $('<div onClick="view(\'' + new_data[i] + '\')" value="' + new_data[i] + '">' + new_data[i] + '</div>')
        $("#element").append(new_name)
        console.log(new_name)
    }
}

function search(){
    let val = $("#search").val()
    if (isEmptyOrSpaces(val)) {
        $("#search").val("");
        $("#search").focus();
        return;
    }
    console.log("checking")
    let new_val = "http://127.0.0.1:5000/search/" + val + ""
    console.log(new_val)
    window.location.replace(new_val)
}

function view(id){
    let new_val = "http://127.0.0.1:5000/view/" + id + ""
    console.log(new_val)
    window.location.replace(new_val)
}

function isEmptyOrSpaces(str) {
    return str == null || str.match(/^ *$/) != null;
}

$(document).ready(function(){
    //when the page loads, display all the names
    displayNames(data)   

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