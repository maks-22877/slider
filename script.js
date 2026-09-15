const sliderInput = document.querySelector('.slider__input');
const sliderImg = document.querySelector('.slider__image');

function handleSliderResize(evt) {
  const currentZoom = evt.target.value;
  sliderImg.style.width = `${currentZoom}%`;
}

const onInputDebounced = _.debounce(handleSliderResize, 300);

if (sliderInput && sliderImg) {
  sliderInput.addEventListener('input', onInputDebounced);
}