const cta = document.getElementById("cta")
const ctacss = cta.style
var number = 1
setInterval(function(){
    var picturetag = `picture(${number})`
    cta.style.backgroundImage = `linear-gradient(rgba(206, 27, 40, 0.25), rgba(206, 27, 40, 0.25)), url('../../images/pictures/${picturetag}.JPG')`;
    number = number + 1
    if (number == 49) {
        number = 1
    }
    }, 3000);
