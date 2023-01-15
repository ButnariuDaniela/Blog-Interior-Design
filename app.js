const likeTrendButton = document.querySelector('#like-trend');
const showCountLike = document.querySelector('#show-counter');
const footer = document.querySelector("footer");
const buttonArtDesign = document.querySelector("#button-art-design");
const buttonFutursim = document.querySelector('#button-futurism');
const futurism = document.querySelector('#futurism');
const imgF = document.createElement('img');

let countLike = 25;
likeTrendButton.addEventListener('click', function() {
    countLike++;
    showCountLike.innerHTML = `<em> ${countLike}  aprecieri</em>`;
})

function addImgArt() {
    let artDesign = document.querySelector("#art-design");
    artDesign.innerHTML = '<img src = "design-and-art.jpg" style="display: block; margin-left: auto; margin-right: auto; width: 75%">';
    const bttnHide = document.createElement('button');
    bttnHide.innerHTML = '<button style="font-size: 1rem; font-family: Permanent Marker; background-color: #008080; color:white; padding-left: 2rem;  padding-right: 2rem; border-bottom: #3d5c5c; border-color: #3d5c5c; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2)">Ascunde imagine</button>';
    artDesign.appendChild(bttnHide);
    bttnHide.addEventListener('click', () => {
        artDesign.innerHTML = '<img>';
    })
}

buttonArtDesign.addEventListener('click', addImgArt);

function addImgFuturism() {

    imgF.src = 'futurist.jpg';
    imgF.style = "display: block; margin-left: auto; margin-right: auto; width: 75%"
    futurism.appendChild(imgF);
    buttonFutursim.removeEventListener('click',addImgFuturism);

}
buttonFutursim.addEventListener('click', addImgFuturism);


