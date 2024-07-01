document.addEventListener("DOMContentLoaded", function () {
    const botoesAbrirModal = document.querySelectorAll(".abrir-modal");
    const botoesAbrirModalMobile = document.querySelectorAll(".abrir-modal-mob");
    const abrirModalPlanosUm = document.querySelectorAll(".abrir-modal-planos-um");
    const abrirModalPlanosDois = document.querySelectorAll(".abrir-modal-planos-dois");
    const abrirModalPlanosTres = document.querySelectorAll(".abrir-modal-planos-tres");
    const abrirModalPlanosMobileUm = document.querySelectorAll(".abrir-modal-mob-planos-um");
    const abrirModalPlanosMobileDois = document.querySelectorAll(".abrir-modal-mob-planos-dois");
    const abrirModalPlanosMobileTres = document.querySelectorAll(".abrir-modal-mob-planos-tres");
    const modal = document.querySelector(".modal");
    const modalIframeUm = document.getElementById("modal-iframe-um");
    const modalIframeDois = document.getElementById("modal-iframe-dois");
    const modalIframeTres = document.getElementById("modal-iframe-tres");
    const btnFecharIframeUm = document.querySelector(".btn-fechar-iframe-um");
    const btnFecharIframeDois = document.querySelector(".btn-fechar-iframe-dois");
    const btnFecharIframeTres = document.querySelector(".btn-fechar-iframe-tres");
    const botaoFechar = document.querySelector(".btn-fechar");
    const elementoContador = document.querySelector(".contador");
    const modalEncerrado = document.getElementById("modal-encerrado");
    const valores = document.querySelectorAll(".valores");
    const dataAlvo = new Date('2024-06-11T08:00:00');
    const dataEncerramento = new Date('2024-06-18T00:30:00');
    let contadorZerado = false;
  
    valores.forEach(valor => {
      valor.style.display = "none";
    });
  
    function deveMostrarModal() {
      const dataAtual = new Date();
      return dataAtual < dataAlvo;
    }
  
    function vagasEncerradas() {
      const dataAtual = new Date();
      return dataAtual >= dataEncerramento;
    }
  
    botoesAbrirModal.forEach(botao => {
      botao.addEventListener("click", function () {
        if (vagasEncerradas()) {
          modalEncerrado.style.display = "block"; 
        } else if (deveMostrarModal() && !contadorZerado) {
            secaoAlvo.style.display = "block";
            secaoAlvo.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    botoesAbrirModalMobile.forEach(botao => {
      botao.addEventListener("click", function () {
        if (vagasEncerradas()) {
          modalEncerrado.style.display = "block"; 
        } else if (deveMostrarModal() && !contadorZerado) {
          modal.style.display = "block";
          iniciarContador();
        } else {
          secaoAlvoMobile.style.display = "block";
          secaoAlvoMobile.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    abrirModalPlanosUm.forEach(botao => {
      botao.addEventListener("click", function () {
        if (vagasEncerradas()) {
          modalEncerrado.style.display = "block";
        } else if (deveMostrarModal() && !contadorZerado) {
          modal.style.display = "block";
          iniciarContador();
        } else {
          modalIframeUm.style.display = "block";
        }
      });
    });
  
    abrirModalPlanosDois.forEach(botao => {
      botao.addEventListener("click", function () {
        if (vagasEncerradas()) {
          modalEncerrado.style.display = "block"; 
        } else if (deveMostrarModal() && !contadorZerado) {
          modal.style.display = "block";
          iniciarContador();
        } else {
          modalIframeDois.style.display = "block";
        }
      });
    });
  
    abrirModalPlanosTres.forEach(botao => {
      botao.addEventListener("click", function () {
        if (vagasEncerradas()) {
          modalEncerrado.style.display = "block"; 
        } else if (deveMostrarModal() && !contadorZerado) {
          modal.style.display = "block";
          iniciarContador();
        } else {
          modalIframeTres.style.display = "block";
        }
      });
    });
  
    abrirModalPlanosMobileUm.forEach(botao => {
      botao.addEventListener("click", function () {
        if (vagasEncerradas()) {
          modalEncerrado.style.display = "block";
        } else if (deveMostrarModal() && !contadorZerado) {
          modal.style.display = "block";
          iniciarContador();
        } else {
          modalIframeUm.style.display = "block";
        }
      });
    });
  
    abrirModalPlanosMobileDois.forEach(botao => {
      botao.addEventListener("click", function () {
        if (vagasEncerradas()) {
          modalEncerrado.style.display = "block"; 
        } else if (deveMostrarModal() && !contadorZerado) {
          modal.style.display = "block";
          iniciarContador();
        } else {
          modalIframeDois.style.display = "block";
        }
      });
    });
  
    abrirModalPlanosMobileTres.forEach(botao => {
      botao.addEventListener("click", function () {
        if (vagasEncerradas()) {
          modalEncerrado.style.display = "block"; 
        } else if (deveMostrarModal() && !contadorZerado) {
          modal.style.display = "block";
          iniciarContador();
        } else {
          modalIframeTres.style.display = "block";
        }
      });
    });
  
    botaoFechar.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    btnFecharIframeUm.addEventListener("click", function () {
      modalIframeUm.style.display = "none";
    });
  
    btnFecharIframeDois.addEventListener("click", function () {
      modalIframeDois.style.display = "none";
    });
  
    btnFecharIframeTres.addEventListener("click", function () {
      modalIframeTres.style.display = "none";
    });
  
    window.addEventListener("click", function (evento) {
      if (evento.target === modal) {
        modal.style.display = "none";
      }
      if (evento.target === modalIframeUm) {
        modalIframeUm.style.display = "none";
      }
      if (evento.target === modalIframeDois) {
        modalIframeDois.style.display = "none";
      }
      if (evento.target === modalIframeTres) {
        modalIframeTres.style.display = "none";
      }
    });
  
    function iniciarContador() {
      const agora = new Date();
      const diferenca = dataAlvo - agora;
  
      if (diferenca < 0) {
        if (!contadorZerado) {
          contadorZerado = true;
  
          valores.forEach(valor => {
            valor.style.display = "block";
          });
  
          return;
        }
      } else {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  
        elementoContador.innerHTML = `
        <span><div class="numero">${dias}</div><div class="etiqueta">dias</div></span><p class="dois-pontos"></p>
        <span><div class="numero">${horas}</div><div class="etiqueta">horas</div></span><p class="dois-pontos">:</p>
        <span><div class="numero">${minutos}</div><div class="etiqueta">minutos</div></span><p class="dois-pontos">:</p>
        <span><div class="numero">${segundos}</div><div class="etiqueta">segundos</div></span>
      `;
      }
  
      setTimeout(iniciarContador, 1000);
    }
  
    if (deveMostrarModal()) {
      iniciarContador();
    }
  
    setInterval(function () {
      const agora = new Date();
      const diferenca = dataAlvo - agora;
      if (diferenca < 0 && !contadorZerado) {
        contadorZerado = true;
        valores.forEach(valor => {
          valor.style.display = "block";
        });
      }
    }, 1000);
  });
  