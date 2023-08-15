window.onload = () => {
  let grid = document.querySelector(".grid");
  let input = document.querySelector("#input");

  input.addEventListener("blur", () => {
    showImage();
  });

  input.addEventListener("keyDown", (event) => {
    if (event.key === "enter") {
      showImage();
    }
  });

  function showImage() {
    removePictures(); // declared below.

    let a =
      "https://api.unsplash.com/search/photos/?query=" +
      input.value +
      "&per_page=30 &client_id=qZzT_pP_-0xu63034oF9zq8tnM4slejcPQ2ksMiwzZ8";

    fetch(a)
      .then((response) => response.json())

      .then((data) => {
        let createDiv = [];

        for (let i = 0; i < data.results.length; i++) {
          createDiv[i] = document.createElement("div");
          createDiv[i].className = "gridElement";
          createDiv[i].style.backgroundImage =
            "url(" + data.results[i].urls.regular + ")";
          createDiv[i].addEventListener("click", () => {
            alert(`Description:${data.results[i].description}
              Creator-Name:${data.results[i].user.name}`);
          });
          grid.appendChild(createDiv[i]);
        }
      })

      .catch((error) =>
        console.log(`${error}
                Solo learn people must have exhausted my free 50 times demo request Api call. wait till next hour}`)
      );
  } // Emd of Api call.

  // A () that removes initial pictures on the page to blank. before requesting new request from the fetch Api.
  function removePictures() {
    grid.innerHTML = "";
  }

  alert("click each Picture to find little details about them");
}; // End of General()✅
