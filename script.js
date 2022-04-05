const containerButtonsFeature = document.getElementById("container-buttons-feature");
const sectionFeatures = document.getElementById("section-features");
const validacionEmail = document.getElementById("validacion-email");
const containerInput = document.getElementById("container-input");

containerButtonsFeature.addEventListener("click", (e) => {
  const idButton = e.target.id
  if(idButton == "1") {
    sectionFeatures.innerHTML = `
    <div class="option-features">
    <img src="./imagenes/illustration-features-tab-1.svg" alt="">
    <div>
        <h2>Bookmark in one click</h2>
        <p>Organize your bookmarks however you like.</p>
        <p>Our simple drag-and-drop interface gives you complete control over how you manage  your favourite sites.</p>
        <button class="btn btn-primary">More Info</button>
      </div>
    </div>`
  } else if(idButton == "2") {
    sectionFeatures.innerHTML = `
      <div class="option-features">
      <img src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1649092816/Maquetado-reto-1-A.G/easy-sharing-2_wuobvu.png">
      <div>
          <h2>Inteligent search</h2>
          <p>Our powerfull search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks</p>
          <button class="btn btn-primary" >More Info</button>
        </div>
      </div>
      `
  } else if (idButton == "3") {
    sectionFeatures.innerHTML = `
      <div class="option-features">
      <img src="https://res.cloudinary.com/dxhgejzwc/image/upload/v1649092802/Maquetado-reto-1-A.G/speedy-searchin-2_lelb7q.png">
      <div>
          <h2>Share your bookmarks</h2>
          <p>Easily share your bookmarks and collections with others. Create a shareable link  that you can  send at the click of a button</p>
          <button class="btn btn-primary" >More Info</button>
        </div>
      </div>
      `
  }
});


validacionEmail.addEventListener("blur", () => {
  
  if(validacionEmail.value.includes("@")){    
    containerInput.setAttribute("title", "")
    containerInput.style.background = "transparent";
  } else {
    containerInput.style.background = "var(--secundary)";
    containerInput.setAttribute("title", "Whoops, make sure it's an email")
  }
})
