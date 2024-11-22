window.addEventListener('load', () => {

  const name = localStorage.getItem("NAME");
  const email = localStorage.getItem("EMAIL");
  const number = localStorage.getItem("NUMBER");
  const cc = localStorage.getItem("CC");
  const tot = localStorage.getItem("TOT");


  document.getElementById("result-tol").innerHTML = tot;
  document.getElementById("result-name").innerHTML = name;
  document.getElementById("result-email").innerHTML = email;
  document.getElementById("result-contct").innerHTML = number;
  document.getElementById("result-cc").innerHTML = cc;
});
