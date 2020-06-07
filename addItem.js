var jsonData ={
    "inventory":[
                {
                    "itemName":"Microwave",
                    "itemQuantity":2,
                    "itemLocation":"hello",
                    "itemUrl":"qwerty"
                },
                {
                    "itemName":"Oven",
                    "itemQuantity":10,
                    "itemLocation":"fg",
                    "itemUrl":"rty"
                },
                {
                    "itemName":"Bulb",
                    "itemQuantity":20,
                    "itemLocation":"kjh",
                    "itemUrl":"knhk"
                },
                {
                    "itemName":"em",
                    "itemQuantity":0,
                    "itemLocation":"helndklo",
                    "itemUrl":"dwj`"
                }
            ]
}

$.fn.serializeObject = function(){
    var o = {};
    var a = this.serializeArray();
    $.each(a,function(){
        if(o[this.name] !== undefined){
            if(!o[this.name].push){
                o[this.name]=[o[this.name]];
            }
            o[this.name].push(this.value || '');

        } else{
            o[this.name] = this.value || '';
        }

    });
    return o;
};

$(function(){
    $("form").on("submit", function(event)
    {
        event.preventDefault();
        var formData = $(this).serializeObject();
        jsonData.inventory.push(formData);
        console.log(jsonData);
    });
});