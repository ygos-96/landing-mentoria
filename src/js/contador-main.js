document.addEventListener("DOMContentLoaded", function () {
    const elementoContador = document.querySelector(".contador-main");
    const contadorVendas = document.querySelector(".contador-vendas");

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
                <span><div class="numero-contador-main">${dias}</div><div class="etiqueta-contador">dias</div></span>
                <span class="dois-pontos">:</span>
                <span><div class="numero-contador-main">${horas}</div><div class="etiqueta-contador">horas</div></span>
                <span class="dois-pontos">:</span>
                <span><div class="numero-contador-main">${minutos}</div><div class="etiqueta-contador">minutos</div></span>
                <span class="dois-pontos">:</span>
                <span><div class="numero-contador-main">${segundos}</div><div class="etiqueta-contador">segundos</div></span>
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
