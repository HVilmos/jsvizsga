/*  function Click() {
    let name = document.getElementById("text").value;
    if (name === "Janos") {
      document.getElementById("p").innerHTML = "talált";
    } else {
      document.getElementById("p").innerHTML = "A keresett név nem található";
      let helper = data[2].segítő;
      let age = data[2].kor;
      document.getElementById("p2").innerHTML =
        "A segítő: " + helper + ", kor: " + age;
    }
  }
  
  let data = [
    [1, 2, 3],
    ["alma", "banán", "körte"],
    { segítő: "Janos", kor: 31 },
    "Horváth Vilmos",
  ];*/
function Data(callback) {
  let data = [
    [1, 2, 3],
    ["alma", "banán", "körte"],
    { segítő: "Janos", kor: 31 },
    "Horváth Vilmos",
  ];
  callback(data);
}

function handleData(data) {
  let name = document.getElementById("text").value;
  if (name === "Janos") {
    document.getElementById("p").innerHTML = "talált";
    document.getElementById("p2").innerHTML = "";
  } else {
    document.getElementById("p").innerHTML = "A keresett név nem található";
    var helper = data[2].segítő;
    var age = data[2].kor;
    document.getElementById("p2").innerHTML =
      "A segítő: " + helper + ", kor: " + age;
  }
}

function Click() {
  Data(handleData);
}

function Click2() {
  let number = document.getElementById("num").value;
  const nums = [1, 3, 5, 6, 8, 9, 13, 18];

  let closestNumber = nums.find((n) => n > number);

  if (closestNumber !== undefined) {
    document.getElementById("p3").innerHTML =
      "A legközelebbi nagyobb szám: " + closestNumber;
  } else {
    document.getElementById("p3").innerHTML = "Nincs nagyobb szám a tömbben";
  }
}
