const ipAddress = document.getElementById("ip-address");

fetch("https://api.ipify.org/?format=json")
  .then(response => response.json())
  .then(data => {
    ipAddress.innerText = data.ip;
  })
  .catch(error => {
    ipAddress.innerText = "Unable to retrieve IP address.";
    console.error(error);
  });
