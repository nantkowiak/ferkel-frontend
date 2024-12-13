function sendErrorMessage() {
    let data = JSON.stringify(getDataFromUser());
    $('#data').html(data);
    console.log(data);
    $.ajax({
        url: "https://community.sandbox.local.dionera.dev/posts",
        type: "POST",
        data: '{raw:'+data+'}',
        processData: false,
        contentType: false,
        timeout: 5000,
        success: function(response){
            $('#data').html("https://community.sandbox.local.dionera.dev/posts/"+response);
        },
        error: function(xhr, textStatus, error){
            console.log(error);
        }
    });
}