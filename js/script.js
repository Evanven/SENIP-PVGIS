document.getElementById("input").addEventListener('click', function (e) {
    document.getElementById("loader").classList.remove("HideableDiv")

    fetch_data(lat, lon, 2007, 2016, 30, 0)
        .then(res => {
            document.getElementById("loader").classList.add("HideableDiv")
            document.getElementById("output").classList.remove("HideableDiv")

            document.getElementById("output").innerHTML = JSON.stringify(res);
        });
});