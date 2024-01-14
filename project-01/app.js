document.addEventListener('DOMContentLoaded', function () {
  const colorCodeElement = document.querySelector('.color');
  const copyButton = document.querySelector('.btn-copy');

  copyButton.addEventListener('click', function () {
      const colorToCopy = colorCodeElement.textContent;

      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = colorToCopy;
      document.body.appendChild(tempTextarea);

      tempTextarea.select();
      tempTextarea.setSelectionRange(0, 99999);

      document.execCommand('copy');

      document.body.removeChild(tempTextarea);

      copyButton.innerHTML = 'Copied!';
      setTimeout(() => {
          copyButton.innerHTML = 'Copy';
      }, 1500);
  });

  function generateRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  const btn = document.getElementById('btn');
  btn.addEventListener('click', function () {
      const generatedColor = generateRandomColor();
      document.body.style.backgroundColor = generatedColor;
      colorCodeElement.textContent = generatedColor;
  });
});
