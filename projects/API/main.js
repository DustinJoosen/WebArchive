var url = "https://newsapi.org/v2/top-headlines?country=nl&";
url += "apiKey=cfd1b5b062ca4e48aa9efd76608545cb";


function createJson(response){
	return response.json();
}

function showData(data){
	console.log(data);

	for(var i = 0; i <= data.totalResults; i++){

		var parent = document.getElementById("articles");

		if(data.status == "ok"){
			var articleData = data.articles[i];
			var article = document.createElement("div");

			var contentString = "";

			if(articleData.source.name != null){
				contentString += "<a class='source' href='https://www." + articleData.source.name.toLowerCase() + "'>" + articleData.source.name.toLowerCase() + "</a>";
			}

			if(articleData.author != null){
				contentString += "<p class='source'>auteur: " + articleData.author + "</p>";
			}

			if(articleData.title != null && articleData.url != null){
				contentString += "<h3><a id='title' href='" + articleData.url + "'>" + articleData.title + "</a></h3>";
			}else if(articleData.title == null){
				contentString += "<h3><a id='title' href='" + articleData.url + "'>Geen titel beschikbaar</a></h3>";
			}else if(articleData.url == null){
				contentString += "<h3 id='title'>" + articleData.title + "</h3>";
			}

			if(articleData.description != null){
				contentString += "<h4>" + articleData.description + "</h4>";
			}


			if(articleData.content != null){
				contentString += "<p id='content'>" + articleData.content + "</p>";
			}else if(articleData.content == null){
				contentString += "<p id='content'>No content found!</p>";
			}			

			if(articleData.urlToImage != null){
				contentString += "<img src='" + articleData.urlToImage + "'>";
			}


			if(articleData.publishedAt != null){
				contentString += "<p>Gepubliceerd op " + articleData.publishedAt + "</p>";
			}



			article.innerHTML = contentString;
			parent.appendChild(article);
		}	

	}
}

fetch(url)
	.then(createJson)
	.then(showData);
