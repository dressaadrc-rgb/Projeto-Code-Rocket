function toggleMode() {
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  //}
  html.classList.toggle("light")

  // pegar a tag da iamgem
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assents/avatar-light.png")
  } else {
    img.setAttribute("src", "./assents/avatar.png")
    //se tiver sem light mode, manter a imagem normal
  }
}
