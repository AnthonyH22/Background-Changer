let pageBackground = document.querySelector('.background-container');
  let circles = document.querySelectorAll('.container > div');

  circles.forEach(circle => {
    circle.addEventListener('click', () => {
      pageBackground.style.opacity = "0";
      setTimeout(() => {
        let imgUrl = circle.querySelector('img').src;
        pageBackground.style.backgroundImage = `url('${imgUrl}')`;
        pageBackground.style.opacity = "0.5";
      }, 300);
    });
  });