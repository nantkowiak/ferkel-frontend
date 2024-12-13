function sendErrorMessage() {
    let data = getDataFromUser();
    $('#data').text(JSON.stringify(data, undefined, 2));
    console.log(data);
    $.ajax({
        url: "https://community.sandbox.local.dionera.dev/posts",
        type: "POST",
        data: getDataFromUser(),
        processData: false,
        contentType: false,
        timeout: 5000,
        success: function(response){
            console.log(response);
        },
        error: function(xhr, textStatus, error){
            console.log(error);
        }
    });
}