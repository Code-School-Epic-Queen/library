const getData = () => {
  return fetchJsonp('https://www.googleapis.com/books/v1/volumes?q=FRASE', {
    method: 'GET'
  }).then(res => res.json())
  .then(response => response)
  .catch(error => console.error('Error:', error));
}

const render = (data) => {
  if(!data.length){
    alert('No se encontrarón resultados')
  }

  cards = data.map(item => {
    return `
        <div class="col-sm-12 col-md-3">
          <div class="card" style="width: 18rem;">
            <img src=${item.volumeInfo.imageLinks.thumbnail} class="card-img-top" alt="libro">
            <div class="card-body">
              <h5 class="card-title">${item.volumeInfo.title}</h5>
              <p class="card-text">${item.volumeInfo.publisher}</p>
              <p class="card-text"> Idioma: ${item.volumeInfo.language}</p>
              <a href=${item.volumeInfo.previewLink} target="_blank" class="btn btn-primary">Ver libro</a>
            </div>
          </div>
        </div>
    `
  });
  
  document.querySelector('#container-cards').innerHTML = cards;
}

const filter = (type) => {
  if(type === "todos"){
    getData().then(data => {
      render(data.items)
    })
  }else{
    getData().then(data => {
      console.log(data, 'data')
      const categories = data.items.filter((item, index) => {
        console.log(item, 'item')
        if(item.volumeInfo.categories){
          return item.volumeInfo.categories[0] === type
        }
      })
      render(categories)
    })
  }
}
// se manda a llamar inicialmente
getData().then(data => render(data.items));