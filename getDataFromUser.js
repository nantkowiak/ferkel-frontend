function getDataFromUser(){
    let os = navigator.userAgent.split(/[()]+/)
    let data = {
        bildschirmgroesse: screen.width+'px x ' + screen.height+'px',
        netzwerkinfo: navigator.connection.downlink+' Mbit/s ('+navigator.connection.effectiveType+')',
        betriebssystem: os[1],
        browser:navigator.userAgent,
        message:$('#error-message').val(),
    };
    return data;
}