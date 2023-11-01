let dni;
let letra;

do {
  dni = parseInt(prompt("Ingrese numero de DNI: "));
  if (isNaN(dni)) {alert("No ingreso un numero de DNI");}
  else if (dni > 0 && dni < 99999999) {
    switch (dni % 23) {
      case 0:
        letra = "T";
        break;
      case 1:
        letra = "R";
        break;
      case 2:
        letra = "W";
        break;
      case 3:
        letra = "T";
        break;
      case 4:
        letra = "A";
        break;
      case 5:
        letra = "G";
        break;
      case 6:
        letra = "M";
        break;
      case 7:
        letra = "Y";
        break;
      case 8:
        letra = "F";
        break;
      case 9:
        letra = "P";
        break;
      case 10:
        letra = "D";
        break;
      case 11:
        letra = "X";
        break;
      case 12:
        letra = "B";
        break;
      case 13:
        letra = "N";
        break;
      case 14:
        letra = "J";
        break;
      case 15:
        letra = "Z";
        break;
      case 16:
        letra = "S";
        break;
      case 17:
        letra = "Q";
        break;
      case 18:
        letra = "V";
        break;
      case 19:
        letra = "H";
        break;
      case 20:
        letra = "L";
        break;
      case 21:
        letra = "C";
        break;
      case 22:
        letra = "K";
        break;
      case 23:
        letra = "E";
        break;
    }
    document.write("DNI "+dni+" Le corresponde la letra: ", letra+"<br>");
  }
} while (confirm("continuar ingresando?"));

