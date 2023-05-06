export default function updateTitle(title) {
  let naslov = title

  window.onblur = () => {
    document.title = 'Vrati nam se!'
  }
  window.onfocus = () => {
    document.title = naslov
  }
}
