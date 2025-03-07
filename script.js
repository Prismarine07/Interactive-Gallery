function upDate(previewPic){
  let divImage = document.getElementById("image");
  divImage.style.backgroundImage = "url('" + previewPic.src + "')";
  divImage.innerHTML = previewPic.alt;
}

function unDo(){
  let divImage = document.getElementById("image");
  divImage.style.backgroundImage = "none";
  divImage.innerHTML = "Hover over an image below to display here.";
}