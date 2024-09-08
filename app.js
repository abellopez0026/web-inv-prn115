const url = 'https://apps-backend-6cbb57692e10.herokuapp.com/api/prn/get-info-web';

fetch(url)
  .then(response => response.json())
  .then(data => {

    const info = data.data; 

    console.log(info);

    // Data para pieza 1
    const piece1 = info[0];
    document.getElementById("title-piece1").innerText = piece1.title;
    document.getElementById("info-piece1").innerText = piece1.description;
    document.getElementById("link-piece1").href = piece1.link;

    // Data para pieza 2
    const piece2 = info[1];
    document.getElementById("title-piece2").innerText = piece2.title;
    document.getElementById("info-piece2").innerText = piece2.description;
    document.getElementById("link-piece2").href = piece2.link;

    // Data para pieza 3
    const piece3 = info[2];
    document.getElementById("title-piece3").innerText = piece3.title;
    document.getElementById("info-piece3").innerText = piece3.description;
    document.getElementById("link-piece3").href = piece3.link;

    // Data para pieza 4
    const piece4 = info[3];
    document.getElementById("title-piece4").innerText = piece4.title;
    document.getElementById("info-piece4").innerText = piece4.description;
    document.getElementById("link-piece4").href = piece4.link;


  })
  .catch(error => {
    console.error('Error al establecer la data:' + error);
  });
