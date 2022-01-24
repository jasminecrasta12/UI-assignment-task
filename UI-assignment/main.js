function menuResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  fetch('https://reqres.in/api/users/').then((data)=>{
        return data.json();
  }).then((userList) => {
      console.log(userList.data[1].id);

      let userData = "";
      userList.data.map((values) =>{
            userData += ` <div class="user-card">
            <img src=${values.avatar} alt="img">
            <p class="user-name">${values.first_name} ${values.last_name}</p>
            
            <p class="desc">${values.email}</p>
        </div>`
      })

      document.getElementById('user-cards').innerHTML = userData;
      
  })