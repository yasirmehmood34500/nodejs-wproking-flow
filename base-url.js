function apiUrl() {
    return "https://testing-api.jgiass.com/";
}

function imgUrl() {
    return "https://testing-api.jgiass.com/upload/";
}

function requestHeader(method='GET', body_data=false) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic bmV4dGpzOjEyMzQ1Njc4");
    var requestOptions = {
        method: method,
        headers: myHeaders,
    };
    if (body_data != false) {
        requestOptions.body = JSON.stringify(body_data);
    }
    return requestOptions;
}

export { apiUrl, imgUrl, requestHeader };