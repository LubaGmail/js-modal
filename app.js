const buttons = document.querySelectorAll('button');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');

const outputParagraph = document.querySelector('#quote');
const textEdit = document.querySelector('.modal textarea');

this.quote = 'Text text text';
this.editedQuote = '';

updateParagraph = () => {
  outputParagraph.textContent = quote;
}

closeModal = () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}

updateParagraph();

// Third button
buttons[2].addEventListener('click', () =>  {
  modal.style.display = 'block';
  backdrop.style.display = 'block';
  editedQuote = quote;
  textEdit.value = quote;
});

// Cancel
//  reference, not call the function. 
//  closeModal() - execute immediately
//  closeModal - execute after click event
//
buttons[0].addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

// Confirm
//  here the anonymous function serves as a reference to "click" event
//  within it calling closeModel with () is appropriate
//
buttons[1].addEventListener('click', () => {
  closeModal();
  if (editedQuote.trim().length > 0) {
    quote = editedQuote;
    updateParagraph();
  }
});

textEdit.addEventListener('input', () => {
  editedQuote = textEdit.value;
});
