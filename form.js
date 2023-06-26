document.getElementById("saveButton").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var nick = document.getElementById("nick").value;
    var email = document.getElementById("email").value;
    var kraj = document.getElementById("kraj").value;
    var skins = [];
    var matchWinner = "";

    var skinCheckboxes = document.getElementsByName("skin");
    for (var i = 0; i < skinCheckboxes.length; i++) {
        if (skinCheckboxes[i].checked) {
            skins.push(skinCheckboxes[i].value);
        }
    }

    var matchWinnerRadios = document.getElementsByName("typ");
    for (var i = 0; i < matchWinnerRadios.length; i++) {
        if (matchWinnerRadios[i].checked) {
            matchWinner = matchWinnerRadios[i].value;
        }
    }

    // Sprawdzanie poprawności danych
    var nameRegex = /^[a-zA-Z]+$/;
    var nickRegex = /^.{6,}$/;
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!name.match(nameRegex)) {
        alert("Pole 'Imię' może zawierać tylko litery A-Z i a-z.");
    } else if (!nick.match(nickRegex)) {
        alert("Pole 'Nick' musi zawierać co najmniej 6 znaków.");
    } else if (!email.match(emailRegex)) {
        alert("Pole 'Email' musi być zgodne z formatem adresu e-mail.");
    } else if (kraj === "") {
        alert("Wybierz kraj.");
    } else if (skins.length === 0) {
        alert("Wybierz przynajmniej jeden skin.");
    } else if (matchWinner === "") {
        alert("Wybierz zwycięzcę meczu.");
    } else {
        var formData = {
            name: name,
            nick: nick,
            email: email,
            kraj: kraj,
            skins: skins,
            matchWinner: matchWinner
        };

        localStorage.setItem("formData", JSON.stringify(formData));
        alert("Dane zostały zapisane w localStorage.");

        // Wyczyszczenie pól formularza
        document.getElementById("name").value = "";
        document.getElementById("nick").value = "";
        document.getElementById("email").value = "";
        document.getElementById("kraj").selectedIndex = 0;

        var skinCheckboxes = document.getElementsByName("skin");
        for (var i = 0; i < skinCheckboxes.length; i++) {
            skinCheckboxes[i].checked = false;
        }

        var matchWinnerRadios = document.getElementsByName("typ");
        for (var i = 0; i < matchWinnerRadios.length; i++) {
            matchWinnerRadios[i].checked = false;
        }
    }
});
// Usuwanie danych z localStorage
document.getElementById("deleteButton").addEventListener("click", function() {
    localStorage.removeItem("formData");
    alert("Dane zostały usunięte z localStorage.");
});

// Wyświetlanie danych z localStorage
document.getElementById("showButton").addEventListener("click", function() {
    var savedData = localStorage.getItem("formData");
    if (savedData) {
        var formData = JSON.parse(savedData);
        console.log(formData); // Tutaj możesz dostosować sposób wyświetlania danych

        // Przykład wyświetlania danych w alercie
        var message = "Imię: " + formData.name + "\n";
        message += "Nick Steam: " + formData.nick + "\n";
        message += "Email: " + formData.email + "\n";
        message += "Kraj: " + formData.kraj + "\n";
        message += "Wybrane skiny: " + formData.skins.join(", ") + "\n";
        message += "Wygrany mecz: " + formData.matchWinner + "\n";

        alert("Zapisane dane:\n" + message);
    } else {
        alert("Brak zapisanych danych.");
    }
});;