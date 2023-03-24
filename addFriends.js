function addFriends() {
  let friends = [];

  while (true) {
    let friend = prompt("Introduce el nombre de un amigo (q para salir): ");

    if (friend === "q") break;

    friends.push(friend);
  }

  friends.sort();
  for (let i=0; i < friends.length; i++) {
    console.log(friends[i])
  };
}

addFriends();