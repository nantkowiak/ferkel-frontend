function getDataFromUser(){
    let os = navigator.userAgent.split(/[()]+/)
    let data = {
        bildschirmgroesse: screen.width+'px x ' + screen.height+'px',
        netzwerkinfo: navigator.connection.downlink+' Mbit/s ('+navigator.connection.effectiveType+')',
        betriebssystem: os[1],
        browser:navigator.userAgent,
        message:$('#error-message').val(),
    };
    return beautifyData(data);
}

function beautifyData(data){
    let htmlData = '<div><p>'+data['message']+'</p><table>';
    $.each(data, function(keyName, keyValue) {
        if(keyName !== 'message') {
            htmlData += '<tr><td><b>'+keyName+'</b></td><td>'+keyValue+'</td></tr>';
        }
    });
    htmlData += '</table></div>';
    return htmlData;
}