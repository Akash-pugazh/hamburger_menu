const hamburgerBtn = document.querySelector("main");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const checkClassPresence = document.querySelector(".line1");

function spinner() {
  line1.classList.toggle("spinner1");
  line2.classList.toggle("spinner2");
  line3.classList.toggle("spinner3");
}

function reversespinner() {
  line1.classList.toggle("revspinner1");
  line2.classList.toggle("revspinner2");
  line3.classList.toggle("revspinner3");
}

const spinchanger = () => {
  if (checkClassPresence.classList.contains("spinner1")) {
    reversespinner();
  } else if (checkClassPresence.classList.contains("revspinner1")) {
    spinner();
  } else {
    spinner();
  }
};

hamburgerBtn.addEventListener("click", spinchanger);

const menuDisplay = document.querySelector("ul");

const menuDispFunc = () => {
  if (
    checkClassPresence.classList.contains("line1") &&
    checkClassPresence.classList.contains("spinner1") &&
    checkClassPresence.classList.contains("revspinner1")
  ) {
    if(menuDisplay.classList.contains('ulviewer')){
      menuDisplay.classList.remove('ulviewer')
      menuDisplay.classList.add('ulhider')
    }

  } else if (
    checkClassPresence.classList.contains("line1") &&
    checkClassPresence.classList.contains("spinner1")
  ) {
    if(menuDisplay.classList.contains('ulhider')||('menu')){
      menuDisplay.classList.remove('ulhider')
      menuDisplay.classList.add("ulviewer")
    }
  }
};
hamburgerBtn.addEventListener("click", menuDispFunc);


