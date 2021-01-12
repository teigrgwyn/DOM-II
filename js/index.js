document.querySelector('.intro h2').addEventListener('mouseover', (event) => {
    event.target.textContent = "Where We Do What We Want!";
})

document.querySelector('.intro p').addEventListener('contextmenu', (event) => {
    event.target.style.backgroundColor = 'red';
})

document.querySelector('.intro').addEventListener('click', (event) => {
    event.target.style.borderWidth = 'thick';
    event.target.style.borderColor = 'green';
    console.log(event);
})

document.querySelector('.content-destination h2').addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'green';
})

document.querySelector('.content-destination h2').addEventListener('pointerleave', (event) => {
    event.target.style.backgroundColor = 'black';
    console.log(event);
})

document.querySelector('.content-destination p').addEventListener('click', (event) => {
    console.log(event);
})

document.querySelector('.content-destination p').addEventListener('click', (event) => {
    document.querySelectorAll('.destination p').forEach(text => {
        text.style.backgroundColor = 'gray';
    })
})

document.querySelector('.text-content p').addEventListener('click', (event) => {
    alert("test!");
})

document.querySelectorAll('.destination h4')[1].addEventListener('click', (event) => {
    event.target.textContent = "";
})

document.querySelector('p').addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'green';
})