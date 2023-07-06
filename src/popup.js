const btnShowPopup = document.getElementById('showPopup');

function popup() {
  const divContainer = document.createElement('div');
  divContainer.className = 'popupContainer';
  const divContent = document.createElement('div');
  divContent.className = 'popupContent';
  const divCloseButton = document.createElement('div');
  divCloseButton.className = 'closeButton';
  divCloseButton.innerHTML = '&#10006;';
  const title = document.createElement('h2');
  title.textContent = 'Assine nossa newsletter!'
  const paragraph = document.createElement('p');
  paragraph.textContent = "Receba todas as novidades em sua caixa de email";
  const link = document.createElement('a')
  link.href = "#";
  link.textContent = "Assinar";

  divCloseButton.addEventListener('click', () => divContainer.remove());
  divContent.appendChild(divCloseButton);
  divContent.appendChild(title);
  divContent.appendChild(paragraph);
  divContent.appendChild(link);
  divContainer.appendChild(divContent);
  document.body.appendChild(divContainer);
  
};

// Execute popup after 10 sec
function showPopupDelayed() {
  setTimeout(popup, 2000)
};

document.addEventListener('DOMContentLoaded', showPopupDelayed);