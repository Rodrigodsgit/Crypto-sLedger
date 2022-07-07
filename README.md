<h1 align=center>Crypto-sLedger - <a target="_blank" href="https://loquacious-mandazi-b8901f.netlify.app/" rel="nofollow">Demo</a> </h1>


<p align=center>
  <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootstrap">
  <img src="https://img.shields.io/badge/replit-667881?style=for-the-badge&logo=replit&logoColor=white" alt="replit">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Html">
 <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Css">
 <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/mesquitaoliveira/profile-card-vue3?style=for-the-badge">
 <img alt="GitHub forks" src="https://img.shields.io/github/forks/mesquitaoliveira/desafio?style=for-the-badge">
 
 <img alt="GitHub" src="https://img.shields.io/github/license/mesquitaoliveira/profile-card?style=for-the-badge">

</p>

## Introdução 
Para uma melhor organização e padrinização do nosso trabalho, usaremos referenciadores do Css, que podem se acessados diretamente pelo `root`.
- Na pasta css você encontrará:
```css
css
|_ global.css
|_ main.css
|_ responsive.css
|_ style.css
```
### 1. O arquivo `global.css` 
Este arquivo contém ou deverá conter todos os estilos usados no layout do arquivo Figma. Portanto, vocé irá se deparas com algumas variáveis css que são:

```css
  /* Primary Colors */
  --primary: #00de8d;
  --secondary: rgba(8, 67, 47, 0.45);
  --back-ground: #020e0a;
  --card-background: rgba(255, 255, 255, 0.02);

  /* Button Style*/
  --btn-bg: rgba(255, 255, 255, 0.02);
  --border-btn: 1px solid rgba(0, 222, 141, 0.75);

  /* Font Colors */
  --simple-title: #ecf1f0;
  --sub-title: #b6b6b6;
```
### 2. O arquivo `main.css`
Este arquivo é a importação de todos os arquivos css, inclusive do Bootstrap V.5.0.2, isso nos proporciona uma melhor organização do nosso `head`, uma vez que 
iremos importar apenas um arquivo `css` e não quatro.

```css

/* ===Bootstrap=== */
@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css);
/* ===Bootstrap=== */
@import url(/css/global.css);
@import url(/css/style.css);
@import url(/css/responsive.css);
```
Como ficará em nosso `head`
```html
<!DOCTYPE html>
<html lang="en">
<head>
...
<link rel="stylesheet" href="css/main.css" />
...
</head>
```
### 3. O arquivo `responsive.css`
Este arquivo será destinado a resolver quais quer problemas de responsividade que o `bootstrap` não conseguir resolver.

### 4. O arquivo `style.css`
Este arquivo irá conter todos os estilos alternativos ao padrão do `bootstrap`, assim adequando o template ao layout base.

```css

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700;800&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body,
html {
  background-color: var(--back-ground);
  font-family: "Raleway", sans-serif;
}
/* === HEADER === */

...
```
## Conclusão
Dessa forma podemos concluir que estas configurações iniciais estão em teste neste momento e poderão sofrer alterações para que assim possar oferecer
uma melhor experiência ao usuário final.
