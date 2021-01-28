const btn = document.getElementById('verificar')

btn.addEventListener('click', function () {
    
    // valores dos inputs
    const senha = document.getElementById('senha')
    const email = document.getElementById('email')
    const input = [...document.querySelectorAll('.input-dados input')]
    const interface = document.getElementById('interface')
    const msg = document.getElementById('msg')

    // expressao regular para validar email
    var emailValue = email.value
    var regexEmail = /^[a-z0-9]+@[a-z0-9]+\.[a-z]/
    const emailFinal = emailValue.match(regexEmail)

    // expressao regular pra validar tamanho da senh
    var senhaValue = senha.value
    var regexSenha = /[@!#$%^&*()/\\a-zA-Z0-9]{8,20}/
    const senhaFinal = senhaValue.match(regexSenha)
    console.log(emailFinal, senhaFinal)

    input.forEach(inp => {
        if (inp.value == "" || inp.value == undefined || inp.value == null ||emailFinal == null || senhaFinal == null) {
            interface.classList.add('senha-invalida')
            msg.textContent = 'Dado Invalido'
            interface.style.border='2px solid red'
        }
        else {
            msg.textContent = ''
            interface.style.border='2px solid greenyellow'
        }
    })

    const senhaInvalida = document.querySelector(".senha-invalida")
    if (senhaInvalida) {
        senhaInvalida.addEventListener('animationend', function (event) {
            if (event.animationName == 'vibrar') {
                senhaInvalida.classList.remove('senha-invalida')
            }
        },false)
    }


}, false)


function fade() {
    const interface = document.getElementById('interface')
    interface.style.transform = 'translateX(0)'
    interface.style.opacity = '1'
}