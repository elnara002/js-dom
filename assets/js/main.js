function openModal(){
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none");
    modal.classList.remove("gorsenmesin");
}

function closeModal(){
    const modal = document.querySelector(".window");
    modal.classList.add("d-none");
    modal.classList.add("gorsenmesin");
}

function addTr() {
    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");

    let person = {
        name: nameInp.value,
        surname: surnameInp.value
    }
    let arr = [];
    arr.push(person);

    
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML += `<tr><th>1</th><td>${nameInp.value}</td><td>${surnameInp.value}</td><td><button arr-ind='0' onclick="Delete(this)">Delete</button></td></tr>`
    nameInp.value = "";
    surnameInp.value = "";
    closeModal();
}

function Delete(button) {
    const r=button.parentNode.parentNode
    r.parentNode.removeChild(r)
}