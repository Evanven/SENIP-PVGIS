// let lat = 38.026;
// let lon = 23.736;
// let start_year = 2007;
// let end_year = 2016;
// let slope = 30;
// let azimuth = 0;

function fetch_data(lat, lon, start_year, end_year, slope, azimuth) {
    return new Promise(function (resolve) {
        fetch("http://localhost:8080/re.jrc.ec.europa.eu/api/seriescalc?lat=" + lat + "&lon=" + lon + "&raddatabase=PVGIS-SARAH&browser=1&outputformat=json&userhorizon=&usehorizon=1&angle=" + slope + "&aspect=" + azimuth + "&startyear=" + start_year + "&endyear=" + end_year + "&mountingplace=&optimalinclination=0&optimalangles=0&js=1&select_database_hourly=PVGIS-SARAH&hstartyear=" + start_year + "&hendyear=" + end_year + "&trackingtype=0&hourlyangle=" + slope + "&hourlyaspect=" + azimuth, {
            method: 'get',
            mode: 'cors'
        })
            .then(function (response) {
                return response.text();
            }).then(function (data) {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                console.log(err)
            });
    });
}