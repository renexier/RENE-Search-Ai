/* =========================
   ELEMENTS
========================= */

const input =

document.getElementById(
  "searchInput"
)

const orb =

document.getElementById(
  "reneOrb"
)

let activeHighlights = []


/* =========================
   CLEAR HIGHLIGHTS
========================= */

function clearHighlights(){

  activeHighlights.forEach(el=>{

    const parent =
    el.parentNode

    parent.replaceChild(

      document.createTextNode(
        el.textContent
      ),

      el
    )

    parent.normalize()

  })

  activeHighlights = []
}


/* =========================
   SEARCH WEBSITE TEXT
========================= */

function searchWebsite(query){

  clearHighlights()

  if(!query) return

  query =
  query.toLowerCase()

  const walker =

  parent.document.createTreeWalker(

    parent.document.body,

    NodeFilter.SHOW_TEXT
  )

  let node

  while(
    node = walker.nextNode()
  ){

    const text =
    node.textContent

    if(
      text.toLowerCase()
      .includes(query)
    ){

      const span =
      parent.document
      .createElement("span")

      span.className =
      "rene-highlight"

      const regex =
      new RegExp(
        `(${query})`,
        "gi"
      )

      span.innerHTML =

      text.replace(

        regex,

        `
        <mark
        class="rene-mark">

        $1

        </mark>
        `
      )

      node.parentNode
      .replaceChild(
        span,
        node
      )

      activeHighlights.push(span)

    }

  }

  scrollToFirstResult()
}


/* =========================
   SCROLL FIRST RESULT
========================= */

function scrollToFirstResult(){

  const first =

  parent.document.querySelector(
    ".rene-mark"
  )

  if(first){

    first.scrollIntoView({

      behavior:"smooth",

      block:"center"
    })

  }else{

    shakeBar()
  }

}


/* =========================
   SHAKE
========================= */

function shakeBar(){

  const bar =

  document.querySelector(
    ".rene-bar"
  )

  bar.animate([

    {
      transform:
      "translateX(-6px)"
    },

    {
      transform:
      "translateX(6px)"
    },

    {
      transform:
      "translateX(-4px)"
    },

    {
      transform:
      "translateX(0)"
    }

  ],{

    duration:400
  })

}


/* =========================
   SEARCH INPUT
========================= */

input.addEventListener(

  "input",

  ()=>{

    searchWebsite(
      input.value
    )

  }
)


/* =========================
   ENTER
========================= */

input.addEventListener(

  "keydown",

  (e)=>{

    if(e.key === "Escape"){

      input.value = ""

      clearHighlights()
    }

  }
)


/* =========================
   BOT FOLLOW
========================= */

document.addEventListener(

  "mousemove",

  (e)=>{

    const x =

    (
      window.innerWidth / 2
      - e.clientX
    ) / 25

    const y =

    (
      window.innerHeight / 2
      - e.clientY
    ) / 25

    orb.style.transform =

    `
    rotateY(${-x}deg)
    rotateX(${y}deg)
    `
  }
)


/* =========================
   PORTAL
========================= */

function openPortal(){

  document
  .getElementById(
    "portal"
  )

  .classList
  .add("active")
}

function closePortal(){

  document
  .getElementById(
    "portal"
  )

  .classList
  .remove("active")
}
