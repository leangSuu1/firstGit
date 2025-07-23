let icon = document.querySelector('#icon')
let card_slide = document.querySelector('#card_slide')
let closes = document.querySelector('#close')
let close_card = document.querySelector('#close_slide')
icon.addEventListener('click',()=>{
  card_slide.style.right = '0px'
  setTimeout(()=>{
    card_slide.style.display = 'block'
    close_card.style.display = 'block'
  },100)
})
closes.addEventListener('click', ()=>{
  card_slide.style.right = '-700px'
  setTimeout(()=>{
    card_slide.style.display = 'none'
  },300)
  close_card.style.display = 'none'
})
close_card.addEventListener('click', ()=>{
  card_slide.style.right = '-700px'
  setTimeout(()=>{
    card_slide.style.display = 'none'
  }, 300)
  close_card.style.display = 'none'
})
