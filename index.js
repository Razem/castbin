let hashData = new URLSearchParams(window.location.hash.slice(1))
let contentInput = document.querySelector('#content')

// Set initial content from hash
contentInput.value = hashData.get('x')

// Update hash on input
contentInput.addEventListener('input', () => {
  hashData.set('x', contentInput.value)
  window.location.hash = '#' + hashData
})

// Invoke share action
document.querySelector('#share').addEventListener('click', () => {
  navigator.share?.({ url: window.location.href })
})
