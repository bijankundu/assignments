const cardGenerator = (name, image, height, gender, homeworld) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card--image");
  cardImage.src = image;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card--body");

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card--title");
  cardTitle.innerText = name;

  const characterHeight = document.createElement("div");
  characterHeight.classList.add("card--description");
  const heightTitle = document.createElement("h5");
  heightTitle.innerText = "Height";
  const heightValue = document.createElement("p");
  heightValue.innerText = height;
  characterHeight.append(heightTitle, heightValue);

  const characterGender = document.createElement("div");
  characterGender.classList.add("card--description");
  const genderTitle = document.createElement("h5");
  genderTitle.innerText = "Gender";
  const genderValue = document.createElement("p");
  genderValue.innerText = gender;
  characterGender.append(genderTitle, genderValue);

  const characterHomeworld = document.createElement("div");
  characterHomeworld.classList.add("card--description");
  const homeworldTitle = document.createElement("h5");
  homeworldTitle.innerText = "Homeworld";
  const homeworldValue = document.createElement("p");
  homeworldValue.innerText = homeworld;
  characterHomeworld.append(homeworldTitle, homeworldValue);

  cardBody.append(cardTitle, characterHeight, characterGender, characterHomeworld);

  card.append(cardImage, cardBody);

  return card;
};

const getData = async () => {
  const response = await fetch("https://akabab.github.io/starwars-api/api/all.json");
  const data = await response.json();
  return data.slice(0, 10);
};

const renderData = async () => {
  const container = document.querySelector("section.container");

  const characterList = await getData();

  characterList.forEach(({ name, image, height, gender, homeworld }) => {
    const card = cardGenerator(name, image, height, gender, homeworld);
    container.append(card);
  });
};

renderData();
