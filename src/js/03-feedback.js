import throttle from 'lodash/throttle';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = document.querySelector('[name="email"]');
  const messageInput = document.querySelector('[name="message"]');
  const feedbackStateKey = 'feedback-form-state';

  const updateLocalStorage = throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(feedbackStateKey, JSON.stringify(formData));
  }, 500);

  const loadFromLocalStorage = () => {
    const storedData = localStorage.getItem(feedbackStateKey);
    if (storedData) {
      const { email, message } = JSON.parse(storedData);
      emailInput.value = email;
      messageInput.value = message;
    }
  };

  const clearFormAndLocalStorage = () => {
    console.log('Form Data:', {
      email: emailInput.value,
      message: messageInput.value,
    });
    localStorage.removeItem(feedbackStateKey);
    form.reset();
  };

  emailInput.addEventListener('input', () => {
    updateLocalStorage();
  });
  messageInput.addEventListener('input', () => {
    updateLocalStorage();
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    clearFormAndLocalStorage();
  });
  loadFromLocalStorage();
});
