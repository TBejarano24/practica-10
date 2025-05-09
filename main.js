async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw Error();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function insertCard(usersData) {
  const data = await usersData;
  if (data !== null) {
    data.forEach((element) => {
      let div = document.createElement("div");
      div.classList.add(
        "m-3",
        "mt-8",
        "flex",
        "flex-col",
        "gap-1",
        "p-3",
        "shadow-[5px_7px_#00000058]",
        "bg-white",
        "rounded-xl",
        "min-w-[290px]",
        "justify-self-center"
      );
      let h3 = document.createElement("h3");
      h3.innerHTML = `<strong>Nombre</strong>: ${element.name}`;
      let p1 = document.createElement("p");
      p1.innerHTML = `<strong>Usuario</strong>: ${element.username}`;
      let p2 = document.createElement("p");
      p2.innerHTML = `<strong>Email</strong>: ${element.email}`;
      let p3 = document.createElement("p");
      p3.innerHTML = `<strong>Empresa</strong>: ${element.company.name}`;
      div.appendChild(h3);
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      cardContainer.appendChild(div);
    });
  } else {
    let div = document.createElement("div");
    div.classList.add(
      "absolute",
      "mx-auto",
      "mt-8",
      "flex",
      "flex-col",
      "gap-1",
      "p-3",
      "shadow-[5px_7px_#00000058]",
      "bg-[#f32e2e]",
      "text-white",
      "rounded-xl",
      "max-w-[290px]",
      "justify-self-center"
    );
    div.textContent =
      "ERROR: An error ocurred while trying to retrieve the data, please try again later";
    cardContainer.appendChild(div);
  }
}

let cardContainer = document.querySelector("#cardContainer");
let regenerateButton = document.querySelector("#restartButton");

regenerateButton.addEventListener("click", () => {
  cardContainer.textContent = "";
  insertCard(fetchUsers());
});

insertCard(fetchUsers());
