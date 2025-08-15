document.addEventListener('DOMContentLoaded', function(){
    let entradaInput = document.getElementById('entradaInput');
    const ul = document.getElementById('saida');

    limpar = () => ul.innerHTML = '';

    const add = texto => {
        const li = document.createElement('li');
        li.textContent = texto;

        ul.appendChild(li);
    };

    document.getElementById('entradaInput').addEventListener('input', function(){
        limpar();
        const entrada = entradaInput.value;
        const letrasm = 'abcdefghijklmnopqrstuvwxyz';
        const letrasM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numeros = '0123456789';
        const caracteres = `!\"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

        let temMinuscula = false;
        let temMaiuscula = false;
        let temNumero = false;
        let temEspecial = false;

        for (let i = 0; i < entrada.length; i++) {
        const char = entrada[i];

        if (!temMinuscula && letrasm.includes(char)) {
            temMinuscula = true;
        }

        if (!temMaiuscula && letrasM.includes(char)) {
            temMaiuscula = true;
        }

        if (!temNumero && numeros.includes(char)) {
            temNumero = true;
        }

        if (!temEspecial && caracteres.includes(char)) {
            temEspecial = true;
        }
        }

        // Verifica se a senha é válida
        if (temMinuscula && temMaiuscula && temNumero && temEspecial) {
        add('Senha forte!');
        } else {
        add('Senha fraca! A senha deve conter pelo menos:\n- Uma letra minúscula\n- Uma letra maiúscula\n- Um número\n- Um caractere especial');
        }
    });
})