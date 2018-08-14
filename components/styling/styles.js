import css from 'styled-jsx/css'

export const footer = css`
  footer {
    padding: 10px 15px 10px 15px;
    background-color: white;
    border-top: 1px dashed #36382e;
    line-height: 24px;
    font-family: 'Open Sans', 'Helvetica-Neue', Helvetica, sans-serif;
    font-size: 13px;
    color: #777777;
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
  }

  .footer-content {
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
  }

  .social-links a {
    display: inline-block;
    padding: 0px 10px;
    color: #777777;
  }

  .social-links i {
    margin-right: 10px;
  }
`

/*

Colors: https://coolors.co/f06449-ede6e3-dadad9-36382e-5bc3eb

tomato: #F06449
platinum: #EDE6E3
gainsboro: #DADAD9
jet: #36382E
blue jeans: #5BC3EB

Website inspired by http://tholman.com/

*/

export const global = css`
  html {
    height: 100%;
  }

  body {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    text-rendering: geometricPrecision;
    background: white;
    color: #36382e;
    font-size: 13px;
    line-height: 20px;
    min-height: 100%;
    position: relative;
    background: #f9f9f9;
  }

  a {
    text-decoration: none;
    color: #5bc3eb;
  }

  nav {
    padding: 20px;
    background-color: white;
    border-bottom: 1px dashed #36382e;
  }

  .nav-wrapper {
    max-width: 1000px;
    display: block;
    margin: 0 auto;
  }

  ul {
    padding-left: 15px;
  }

  ul li {
    padding-top: 5px;
    line-height: 18px;
  }

  pre {
    display: block;
    overflow-x: auto;
    background: rgb(29, 31, 33);
    color: rgb(197, 200, 198);
    padding: 0.5em;
  }

  hr {
    width: 30px;
    margin-top: 25px;
    margin-bottom: 25px;
    border: 0.5px dotted #36382e;
  }

  .terminal {
    color: #5bc3eb;
    font-size: 13px;
  }

  .nav-links {
    float: right;
  }

  .nav-links a {
    font-family: 'Open Sans', 'Helvetica-Neue', Helvetica, sans-serif;
    font-size: 13px;
    text-transform: uppercase;
    color: #4c4f40;
    margin-right: 10px;
  }

  .nav-links a.active {
    border-bottom: 2px solid #f06449;
  }

  .creations {
    max-width: 1000px;
    display: block;
    margin: 0 auto;
    padding: 20px 10px 60px 10px;
  }

  .creations h1 {
    margin: 0 0 20px 0;
    padding: 0;
    font-size: 14px;
    letter-spacing: 1px;
    color: #f06449;
  }

  .creations a:hover {
    text-decoration: underline;
  }

  .creations .wrapper {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    align-content: space-around;
    align-items: center;
    justify-content: center;
  }

  .creations .project {
    position: relative;
    width: 320px;
    max-width: 294px;
    min-height: 210px;
    margin: 0 10px 20px 10px;
    padding: 20px;
    border: 1px dashed #36382e;
    background-color: white;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
  }

  .creations .project .date {
    font-size: 10px;
    color: #808080;
    margin: 20px 0;
  }

  .creations .project .links {
    position: absolute;
    left: 20px;
    bottom: 20px;
  }

  .creations .project:hover > .links {
    -webkit-animation: shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
    animation: shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }

  .creations .project.project--double {
    min-width: 650px;
  }

  .project.project--profile {
    width: 320px;
    height: 277px;
    background-image: url('/static/img/koen-photo.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .project img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 760px) {
    .creations .project .links {
      position: initial;
    }
    .creations .project {
      min-height: unset;
    }
    .project.project--profile {
      height: 175px;
    }
    .creations .project.project--double {
      min-width: unset;
      padding-bottom: 20px;
    }
  }

  /* ----------------------------------------------
 * Generated by Animista on 2017-8-17 15:29:25
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation shake-bottom
 * ----------------------------------------
 */

  @-webkit-keyframes shake-bottom {
    0%,
    100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
    10% {
      -webkit-transform: rotate(2deg);
      transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
      -webkit-transform: rotate(-4deg);
      transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
      -webkit-transform: rotate(4deg);
      transform: rotate(4deg);
    }
    80% {
      -webkit-transform: rotate(-2deg);
      transform: rotate(-2deg);
    }
    90% {
      -webkit-transform: rotate(2deg);
      transform: rotate(2deg);
    }
  }

  @keyframes shake-bottom {
    0%,
    100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
    }
    10% {
      -webkit-transform: rotate(2deg);
      transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
      -webkit-transform: rotate(-4deg);
      transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
      -webkit-transform: rotate(4deg);
      transform: rotate(4deg);
    }
    80% {
      -webkit-transform: rotate(-2deg);
      transform: rotate(-2deg);
    }
    90% {
      -webkit-transform: rotate(2deg);
      transform: rotate(2deg);
    }
  }
`
