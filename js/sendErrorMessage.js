function sendErrorMessage() {
    let data = JSON.stringify(getDataFromUser());
    $('#data').html(data);
    console.log(data);
    $.ajax({
        url: "http://community.sandbox.local/posts",
        type: "POST",
        data: '{"raw":'+data+'}',
        processData: false,
        contentType: false,
        timeout: 5000,
        success: function(response){
            $('#data').html("https://community.sandbox.local/posts/"+$.parseJSON(response)['id']);
        },
        error: function(xhr, textStatus, error){
            console.log(error);
        }
    });
}