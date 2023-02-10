(function (){
    'use strict';

    const $txtTitulo = document.getElementById('txtTitulo');
    const $txtDescricao = document.getElementById('txtDescricao')
    const maxima = $txtDescricao.maxLength;
    const $btn = document.getElementById('btn')
    const $chkBox = document.getElementById('chkAceito')
    const $numCaract = document.querySelector('#contador span')
    const $form = document.querySelector('.formCadastro')
    const $feedbackMessage = document.getElementById('feedbackMessage')
    const $feebackCloseBtn = $feedbackMessage.getElementsByTagName('button')[0]
    monstraNumero(maxima)

    $btn.disabled = true
    $chkBox.addEventListener('change', function(){
        $btn.disabled = !this.checked
    })

    
    $form.addEventListener("submit", function(e){
        if(!$txtTitulo.value){
            showErorMessage("Preencha todos os campos", callback)
            e.preventDefault()
        }
    })

    function showErorMessage(msg, callback){
        $feedbackMessage.classList.add('show')
        $feedbackMessage.getElementsByTagName('p')[0].textContent = msg
        $feebackCloseBtn.focus()

        function hideErrorMessage (){
            $feedbackMessage.classList.remove('show')
            $feebackCloseBtn.removeEventListener('click', hideErrorMessage)
            $feebackCloseBtn.removeEventListener('keyup', pressedKeyboardOnBtn)
            
            if(typeof callback === "function"){
                callback()
             }
        }
        function pressedKeyboardOnBtn (e){
            if(e.keyCode == 27){
                hideErrorMessage()
            }
        }

        $feebackCloseBtn.addEventListener('click', hideErrorMessage)
        $feebackCloseBtn.addEventListener('keyup', pressedKeyboardOnBtn)
    }

    

    $txtDescricao.addEventListener("input", function(){
        let letrasDigitadas = this.value.length
        let caracteresRestantes = parseInt(maxima) - parseInt(letrasDigitadas)
        monstraNumero(caracteresRestantes)
    })

    function monstraNumero(n){
        $numCaract.textContent = n
    }

    function callback(){
        $txtTitulo.focus()
    }


})()