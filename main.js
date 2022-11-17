function swapRoute() {
    //let departureRoute = document.getElementsByClassName("departure-route");
    let departureRouteName = document.getElementsByClassName("select-departure-name")[0];
    let departureRouteCode = document.getElementsByClassName("select-departure-code")[0];

    let arrivaleRouteName = document.getElementsByClassName("select-arrival-name")[0];
    let arrivaleRouteCode = document.getElementsByClassName("select-arrival-code")[0];

    let tmp = departureRouteName.innerText;
    departureRouteName.innerText = arrivaleRouteName.innerText;
    arrivaleRouteName.innerText = tmp;

    tmp = departureRouteCode.innerText;
    departureRouteCode.innerText = arrivaleRouteCode.innerText;
    arrivaleRouteCode.innerText = tmp;

    console.log(arrivaleRouteCode.innerText)
}
