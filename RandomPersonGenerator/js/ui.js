class UI{
    constructor(){
        this.infos = document.querySelector(".body");
    }

    loadPersonToUI(person){
        this.infos.innerHTML = `
            <div class="short-info">
                <img src="${person.picture.large}" alt="" id="photo">
                <h4>My name is</h4>
                <h2 id="fullname">${person.name.first + " " + person.name.last}</h2>
            </div>
            <div class="general-info">
                <div class="info-group">
                    <p>Phone Number: </p>
                    <span id="phone">${person.phone}</span>
                </div>
                <div class="info-group">
                    <p>Cell Number: </p>
                    <span id="cell">${person.cell}</span>
                </div>
                <div class="info-group">
                    <p>E-Mail: </p>
                    <span id="email">${person.email}</span>
                </div>
                <div class="info-group">
                    <p>Gender: </p>
                    <span id="gender">${person.gender}</span>
                </div>
                <div class="info-group">
                    <p>Birthday: </p>
                    <span id="birthday">${person.dob.date}</span>
                </div>
                <div class="info-group">
                    <p>Age: </p>
                    <span id="age">${person.dob.age}</span>
                </div>
                <div class="info-group">
                    <p>Location: </p>
                    <span id="location">${person.location.city + "/" + person.location.country}</span>
                </div>
                <div class="info-group">
                    <p>Address: </p>
                    <span id="address">${person.location.street.number + ", " + person.location.street.name}</span>
                </div>
                <div class="info-group">
                    <p>Postcode: </p>
                    <span id="postcode">${person.location.postcode}</span>
                </div>
                <div class="info-group">
                    <p>User Name: </p>
                    <span id="username">${person.login.username}</span>
                </div>
                <div class="info-group">
                    <p>Password: </p>
                    <span id="password">${person.login.password}</span>
                </div>
            </div>
        `;
    }

    showError(){
        alert("Hata Var");
    }
}