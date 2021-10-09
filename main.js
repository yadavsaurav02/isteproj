// creating hamburger icon

let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('#menu');
let isOpen = false;
hamburger.addEventListener('click', () => {
    if (!isOpen) {
        isOpen = true;
        hamburger.classList.add('open');
        menu.style.display = 'flex';
    }
    else {
        isOpen = false;
        hamburger.classList.remove('open');
        menu.style.display = 'none';

    }
})

// js validation

function validate() {
    let Name = document.getElementsByName('name');
    Name[0].addEventListener('change', () => {
        let n = Name[0].value.search(/[0-9]/);

        if (n != -1) {
            alert('number must not be present in name');

        }
    })

    let phone = document.getElementsByName('phone');
    phone[0].addEventListener('change', () => {
        let n = phone[0].value.length
        if (n != 10) {
            alert("number must be of 10 digits");
        }
    })

    let country = document.getElementsByName('country');
    country[0].addEventListener('change', () => {
        let n = country[0].value.search(/[0-9]/);
        if (n != -1) {
            alert('number must not be present in country');
        }
    })
}

validate();


