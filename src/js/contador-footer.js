document.addEventListener("DOMContentLoaded", function () {
    const elementoContador = document.querySelector(".contador-footer");
    const contadorVendas = document.querySelector(".contador-vendas-footer");

    const dataAlvo = new Date('2024-06-17T23:59:59');
    const dataMostrarContador = new Date('2024-05-11T08:00:00');
    const dataEncerramento = new Date('2024-06-18T00:30:00');

    function deveMostrarContador() {
        const dataAtual = new Date();
        return dataAtual >= dataMostrarContador;
    }

    function iniciarContador() {
        const agora = new Date();
        const diferenca = dataAlvo - agora;

        if (diferenca > 0 && agora < dataEncerramento) {
            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            elementoContador.innerHTML = `
                <span><div class="numero-contador-footer">${dias}</div><div class="etiqueta-contador-footer">dias</div></span>
                <span class="dois-pontos">:</span>
                <span><div class="numero-contador-footer">${horas}</div><div class="etiqueta-contador-footer">horas</div></span>
                <span class="dois-pontos">:</span>
                <span><div class="numero-contador-footer">${minutos}</div><div class="etiqueta-contador-footer">minutos</div></span>
                <span class="dois-pontos">:</span>
                <span><div class="numero-contador-footer">${segundos}</div><div class="etiqueta-contador-footer">segundos</div></span>
            `;

            setTimeout(iniciarContador, 1000);
        } else if (agora >= dataEncerramento) {
            elementoContador.innerHTML = "";
            contadorVendas.innerHTML = "<p class='vendas-encerradas'>Vendas Encerradas</p>";
        } else {
            elementoContador.innerHTML = "";
            contadorVendas.innerHTML = "";
        }
    }

    if (deveMostrarContador()) {
        contadorVendas.style.display = 'flex';
        iniciarContador();
    }

    setInterval(function () {
        const agora = new Date();
        if (agora >= dataEncerramento) {
            elementoContador.innerHTML = "";
            contadorVendas.innerHTML = "<p class='vendas-encerradas'>Vendas Encerradas</p>";
        } else if (deveMostrarContador() && contadorVendas.style.display === 'none') {
            contadorVendas.style.display = 'flex';
            iniciarContador();
        }
    }, 1000); 
});

