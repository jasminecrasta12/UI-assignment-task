function menuResponsive() {
    var menu = document.getElementById("menuNav");
    if (menu.className === "topnav") {
        menu.className += " responsive";
    } else {
        menu.className = "topnav";
    }
}

fetch('https://reqres.in/api/users/').then((data) => {
    return data.json();
}).then((userList) => {
    //console.log(userList.data[1].id);

    let userData = "";
    userList.data.map((values) => {
        userData += ` <div class="user-card">
            <i class="fa fa-chevron-down card-arrow"></i>
            <img src=${values.avatar} alt="img">
            <p class="user-name">${values.first_name} ${values.last_name}</p>
            <button class="user-designation">Developer</button>
            <p class="user-id"><span class="heading">Employee ID:</span>  <span>EMPP123${values.id}</span></p>
            <p class="user-email"><span class="heading">Email:</span> <span>${values.email}</span></p>
            <p class="user-tel"><span class="heading">Telephone:</span> <span>+1 444 444 1234</span></p>
            <p class="user-dep"><span class="heading">Department:</span> <span>Digital Com</span></p>
        </div>`
    })

    document.getElementById('user-cards').innerHTML = userData;

})