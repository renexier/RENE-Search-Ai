(function(){

  const iframe =
  document.createElement(
    "iframe"
  )

  iframe.src =
  "https://renexier.github.io/RENE-FLOATING/"

  iframe.style.position =
  "fixed"

  iframe.style.left =
  "50%"

  iframe.style.bottom =
  "0px"

  iframe.style.transform =
  "translateX(-50%)"

  iframe.style.width =
  "100vw"

  iframe.style.height =
  "220px"

  iframe.style.border =
  "none"

  iframe.style.background =
  "transparent"

  iframe.style.overflow =
  "hidden"

  iframe.style.zIndex =
  "999999"

  iframe.style.pointerEvents =
  "auto"

  iframe.setAttribute(
    "allowtransparency",
    "true"
  )

  document.body.appendChild(
    iframe
  )

})()
