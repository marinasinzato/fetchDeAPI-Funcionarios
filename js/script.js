const url = "https://mack-webmobile.vercel.app/api/users";

window.onload = buscarUsuarios;

async function buscarUsuarios() {
  const resp = await fetch(url);
  const users = await resp.json();
  console.log(users);

  mostrarUsuarios(users);
}

function mostrarUsuarios(users) {
  const employeesHTML = document.getElementById("employees");

  let html = "";

  for (let i = 0; i < users.length; i++) {
    html += `<div class="container">`
    html += `<div class="card">`
    if (`${users[i].status}` == "Inactive") {
      html += `<div class="parte-cima-inativo" id="employeesImages">`
    } else {
      html += `<div class="parte-cima" id="employeesImages">`
    }
    html += `<div class="imagem">`
    if (`${users[i].status}` == "Inactive") {
      html += `<img style="filter:grayscale(100%)" id="foto" src="${users[i].avatar}">`
    } else {
      html += `<img id="foto" src="${users[i].avatar}">`
    }
    html += `</div> `
    html += `</div> `
    html += `<div>`
    if (`${users[i].status}` == "Inactive") {
      html += `<img style = "filter:grayscale(100%)" class="divisor" src="assets/divider.png">`
    } else {
      html += `<img class="divisor" src = "assets/divider.png">`
    }
    html += `</div>`
    html += `<div class="parte-baixo" >`
    html += `<p id = "nome" > ${users[i].name}</p>  `
    html += `<p id = "email" > ${users[i].email}</p>  `
    html += `<br >`
    html += `<div id="salarioj" >`
    html += `<p  class="infos" > &nbsp &nbsp Salário: <b> R$ ${users[i].salary} </b> </p > `
    html += `<img class="icon" src = "assets/edit.png" > `
    html += `</div>`
    html += `<div id = "aniversariom" > `
    html += `<p class="infos" > &nbsp &nbsp Aniversário: <b> ${users[i].date} </b> </p >`
    html += `<img class="icon" src="assets/delete.png">`
    html += `</div > `
    html += `</div > `
    html += `</div > `

    employeesHTML.innerHTML = html;
  }
}