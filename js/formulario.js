(function (){
    'use strict';

    const $txtTitulo = document.getElementById('txtTitulo');
    const $txtDescricao = document.getElementById('txtDescricao')
    const maxima = $txtDescricao.maxLength;
    const $numCaract = document.querySelector('#contador span')
    const $btn = document.getElementById('btn');
    const $chkBox = document.getElementById('chkAceito')
    const $form = document.querySelector('.formCadastro')
    monstraNumero(maxima)
    
    $form.addEventListener("submit", function(e){
        if(!$txtTitulo.value){
            alert('Preencha todos os campos')
            e.preventDefault()
            $txtTitulo.focus()
        }
    })

    $txtDescricao.addEventListener("input", function(){
        let letrasDigitadas = this.value.length
        let caracteresRestantes = parseInt(maxima) - parseInt(letrasDigitadas)
        monstraNumero(caracteresRestantes)
    })

    function monstraNumero(n){
        $numCaract.textContent = n
    }

    $btn.disabled = true
    $chkBox.addEventListener('change', function(){
        $btn.disabled = !this.checked
    })

})()