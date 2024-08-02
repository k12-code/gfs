function createAvatar() {
  var skinTone = document.getElementById('skin-tone').value;
  var bodyType = document.getElementById('body-type').value;

  var preview = document.getElementById('avatar-preview');
  preview.innerHTML = `<p>Avatar with ${skinTone} skin tone and ${bodyType} body type.</p>`;
}

function tryOn() {
  alert('This feature is coming soon!');
}
