export default async function ApiServices(link, method, form, token) {
    let headers = {};
    let request = {};
    let url = link;
    let body = JSON.stringify(form);

    headers = {
        "Accept": "application/json",
        "Content-type": "application/json;charset=UTF-8",
    };
    if (form instanceof FormData) {
        headers = {
            Accept: "application/json",
        };
        body = form;
    }
    if (token) {
        // document.cookie = `access_token=${token};path=/`;
        headers = { ...headers, Authorization: `Bearer ${token}` };
    }

    request = new Request(url, {
        mode: "cors",
        method: method,
        headers: headers,
    });
    if (method !== "GET" && method !== "HEAD") {
        request = new Request(url, {
            mode: "cors",
            method: method,
            headers: headers,
            body,
        });
    }

    let resp = await fetch(request);
    let data = await resp.json();
    // console.log(data);

    return ApiResponse(resp.status, data);
}

function ApiResponse(status, data) {
    let response = {
        status: status,
        response: data,
    };

    return response;
}