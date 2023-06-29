let firstFunctionCompleted = false; // Flag para controlar se a primeira função foi concluída

document.addEventListener("DOMContentLoaded", function () {
  typePhrase(
    "paragraph-content",
    "Olá, sou Pedro Henrique e trabalho como Programador!",
    100,
    function () {
      typePhrase(
        "paragraph-content-2",
        "< / > Front end/ backend developer < / >",
        100,
        function () {
          setTimeout(function () {
            showButton();
            firstFunctionCompleted = true; // Marcar a primeira função como concluída
          }, 500);
        }
      );
    }
  );
});

function typePhrase(elementId, phrase, interval, callback) {
  const textElement = document.getElementById(elementId);
  let charIndex = 0;

  function type() {
    if (charIndex < phrase.length) {
      textElement.textContent += phrase[charIndex];
      charIndex++;
      setTimeout(type, interval); // Intervalo entre cada caractere
    } else {
      if (callback) {
        callback(); // Chamada de retorno ao concluir a digitação da frase
      }
    }
  }

  type();
}

function showButton() {
  const button = document.getElementById("link-wpp");
  button.style.display = "inline";
}

function exchange_content(item) {
  let conteudoPrincipal = document.getElementsByClassName("content")[0];
  let conteudoPrincipa2 = document.getElementsByClassName("content-2")[0];
  let linkWpp = document.getElementById("link-wpp");

  if (!firstFunctionCompleted) {
    return;
  }

  conteudoPrincipal.innerHTML = "";
  conteudoPrincipa2.innerHTML = "";

  switch (item) {
    case 1:
      conteudoPrincipal.innerHTML =
        "<h2 id='sub-title-2'>Sobre mim ! </h2><br><p id='sub-content'>Tenho 20 anos e<br>estudo programação há um ano e procuro adquirir experiência na área !<BR>Me esforço para cumprir meus objetivos e procuro sempre realizar o melhor possível,<br>me mantenho sempre buscando novos conhecimentos e lições.</p>";
      conteudoPrincipa2.innerHTML =
        "<a href='https://docs.google.com/document/d/1VjDN_4OOt0YrU-vyw7YbtIUxRt7o-jsU9RlFPFUs__Q/edit?usp=sharing' target='_blankk' id='sub-link'> (clique aqui para ver meu currículo...) </a>";
      linkWpp.style.display = "none";
      break;
    case 2:
      conteudoPrincipal.innerHTML =
        "<h2 id='sub-title-2'>Habilidades</h2><br><p id='sub-content'>Possuo conhecimentos em :<br><br>Css, Html, Java Script, git e node<br> noções Básicas em Java, Python, bancos de dados sql e noSql, arquitetura de softwares e modelagem dos dados,<br> iniciante em Sass e react.</p>";
      linkWpp.style.display = "none";
      break;
    case 3:
      conteudoPrincipal.innerHTML =
        "<h2 id='sub-title-2'>Trabalhos</h2><br><p id='sub-content'>Em desenvolvimento: <br> <br>Loja virtual para marca de roupas: <a href='https://github.com/Pedro-h-silva/Slug.git' target='_blankk' id='sub-link'> Clique aqui para ir ao repositório do projeto...</a><br><br>Concluidos:<br><br> Sistema para livraria: <a href='https://github.com/Pedro-h-silva/Library-system-with-applied-data-structure' target='_blankk' id='sub-link'> Clique aqui para ir ao repositório do projeto...</a> <br><br>Portifólio: <a href='https://github.com/Pedro-h-silva/portifolio.git' target='_blankk' id='sub-link'> Clique aqui para ir ao repositório do projeto...</a></p>";
      linkWpp.style.display = "none";
      break;
    default:
      conteudoPrincipal.innerHTML =
        "<h2>Conteúdo Inicial</h2><p>Este é o conteúdo inicial da página.</p>";
      break;
  }
}
