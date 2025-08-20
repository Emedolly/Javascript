var calculation = localStorage.getItem("calculation") || "";
      DisplayCalculation();
      function UpdateCalculation(value) {
        calculation += value;
        DisplayCalculation();
        localStorage.setItem("calculation", calculation);
      }
      function DisplayCalculation() {
        document.querySelector(".js-calculation").innerHTML = `${calculation}`;
      }