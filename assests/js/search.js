function Search() {
	var x = document.getElementById('search').value;
	if (x === "Product" || x === "product" || x === "Camera" || x === "camera" || x === "watch" || x === "Watch" || x === "shirt" || x === "Shirt") {
		window.location = "#products";
		return false;
	} else if (x === "rating" || x === "Rating" || x === "review" || x === "Review") {
		window.location = "#rate";
		return false;
	} else {
		alert("Not found");
	}
}