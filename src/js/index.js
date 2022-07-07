const printingText = (textForTyping, classNameForElement, pause) => {
  const titleEl = document.getElementsByClassName(classNameForElement);

  const printSymbol = (symbol, index) => {
    setTimeout(() => {
      titleEl[0].innerHTML += symbol;
    }, pause * index);
  };

  function myAsyncForEach(text, callback) {
    for (let i = 0; i < text.length; i++) {
      callback(text[i], i, text);
    }
  }

  myAsyncForEach(textForTyping, printSymbol);
};

// parallax
const header_parallax = (e) => {
  const title_top_text_element = document.getElementsByClassName('header__title-top-text');
  const header_title_bottom_text = document.getElementsByClassName('header__title-bottom-text');

  title_top_text_element[0].style.transform = `rotateY(${e.clientX / 80}deg) rotateX(${
    e.clientY / 60
  }deg) skewY(${e.clientX / 800}deg)`;
  header_title_bottom_text[0].style.transform = `rotateY(${e.clientX / 80}deg) rotateX(${
    e.clientY / 80
  }deg) skewY(${e.clientX / 800}deg)`;
};

window.addEventListener('mousemove', (e) => header_parallax(e));

printingText('эффективные', 'header__title-top-text', 100, 'left');
printingText('web решения', 'header__title-bottom-text', 100, 'left');
printingText(
    'Мы реализовываем идеальный баланс красоты,\n функциональности и надежности для бизнес-проектов\n наших клиентов',
    'header__description',
    10,
    'left',
);