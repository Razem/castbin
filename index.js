let hashData = new URLSearchParams(window.location.hash.slice(1))
let contentInput = document.querySelector('#content')
let shareLink = document.querySelector('#share')

// Set initial content from URL
contentInput.value = hashData.get('x')
shareLink.href = window.location.href

// Update URL on input
contentInput.addEventListener('input', () => {
  hashData.set('x', contentInput.value)
  window.location.replace('#' + hashData)
  shareLink.href = window.location.href
})

// Invoke share action
shareLink.addEventListener('click', (e) => {
  e.preventDefault()
  navigator.share?.({ url: window.location.href })
})
