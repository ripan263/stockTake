var jsonData ={
    "apartments":[
                {
               "aId":"OD001",
               "aName":"OD-001"
                },
                {
                "aId":"A002",
                "aName":"A-002"
                },
                {
                "aId":"A003",
                "aName":"A-003"
                },
                {
                "aId":"OD004",
                "aName":"OD-004"
                }
            ]
}

$(document).ready(function(){
    var listItems='<option selected ="selected" value="0">- Select  the apartment-</option>';  

    for(var i=0 ; i < jsonData.apartments.length;i++)
    {    
        console.log(jsonData.apartments[i]);
        listItems += "<option value= '" + jsonData.apartments[i].aId + "'>" + jsonData.apartments[i].aName + "</option>";
}
    $("#apartment").html(listItems);

});