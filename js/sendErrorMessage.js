function sendErrorMessage() {
    let data = JSON.stringify(getDataFromUser());
    $('#data').html(data);
    console.log(data);
    $.ajax({
        url: "http://community.sandbox.local:30555/posts",
        type: "POST",
        data: '{"raw":'+data+'}',
        processData: false,
        contentType: false,
        timeout: 5000,
        success: function(response){
            $('#data').html("<a href='http://community.sandbox.local:30555/posts/"+response.id+"' target='_blank'>Link to the Ticket #"+response.id+"</a>");
        },
        error: function(xhr, textStatus, error){
            console.log(error);
        }
    });

    document.querySelector('.centered-box').style.display = 'block';
}
