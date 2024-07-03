let users = [
  {
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Perry Fowler",
    email: "perry.fowler@example.com",
    cardColor: "#ff8c7f",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Loretta Butler",
    email: "loretta.butler@example.com",
    cardColor: "#4ff18e",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/39.jpg",
    name: "Charlotte Ward",
    email: "charlotte.ward@example.com",
    cardColor: "#4f65f1",
  },
];

const div = document.createElement("div");
const node = document.createTextNode("This is new.");
div.appendChild(node);

const element = document.querySelector('body');
element.appendChild(div);