const url = "https://api.spacexdata.com/v3/launches/";


const resultsContainer = document.querySelector(".launches");

async function makeApiCall() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        resultsContainer.innerHTML= "";

        console.log(results);

        for(let i = 87; i < results.length; i++) {


            resultsContainer.innerHTML += `<div class="card">
            <hr class="line"> 
            <div class="flight"> # ${results[i].flight_number} </div>
            <div class ="launch"> ${results[i].launch_date_utc.slice(0,10)}</div>
            <div class ="mission"> Mission:  ${results[i].mission_name} </div>
            <div class ="location"> Location:  ${results[i].launch_site.site_name_long} </div>
            <div class ="rocket">  Rocket name:  ${results[i].rocket.rocket_name} </div>
            </div>`;
        };

    } catch (error) {
        console.log("An error occured");
        resultsContainer.innerHTML = displayError("An error occured when calling the API");
    }
}

makeApiCall();


