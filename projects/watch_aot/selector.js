
const url_search_params = new URLSearchParams(window.location.search);
const params = Object.fromEntries(url_search_params.entries());

const episode_code = params["episode"];
let sub_or_dub = params["version"];

if (sub_or_dub === undefined) {
    sub_or_dub = "dub";
}

try {
    let season = episode_code.substring(0, episode_code.indexOf("."));
    let episode = episode_code.substring(episode_code.indexOf(".") + 1);

    let source = episode_sources[sub_or_dub]["s" + season]["ep" + episode];

    document.getElementById("source").innerHTML = "Season" + season + " | Episode " + episode;

    let html = "<iframe class='video-iframe' src='https://" + source + "' allowfullscreen='allowfullscreen''></iframe>"
    document.getElementById("video-holder").innerHTML = html;
}
catch {
    window.location.href = "index.html?version=dub&episode=1.1";
}
