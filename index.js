const main = document.querySelector('main#main');
main.remove();

let newHeader = document.createElement('h1');
newHeader.textContent = "YOUR-NAME is the champion";
newHeader.setAttribute("id", "victory");

expect(newHeader.getAttribute("id")).to.equal("victory");
