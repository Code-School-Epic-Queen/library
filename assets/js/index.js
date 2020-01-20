// npm https://www.npmjs.com/package/fetch-jsonp
// convertirlo a CDN https://unpkg.com/
// CDN https://unpkg.com/fetch-jsonp@1.1.3/build/fetch-jsonp.js 


const getData = () => {
  return fetchJsonp('http://www.etnassoft.com/api/v1/get/?category=all', {
    method: 'GET'
  }).then(res => res.json())
  .then(response => response)
  .then(data => {
    const cards = data.map(item => {
      return `
          <div class="col-sm-12 col-md-3">
           <div class="card" style="width: 18rem;">
             <img src=${item.thumbnail} class="card-img-top" alt="libro">
             <div class="card-body">
               <h5 class="card-title">${item.title}</h5>
               <p class="card-text">${item.content_short}</p>
               <p class="card-text">Número de páginas: ${item.pages}</p>
               <p class="card-text">${item.language}</p>
               <a href=${item.url_download} target="_blank" class="btn btn-primary">Ver libro</a>
             </div>
           </div>
         </div>
      `
    });
    document.querySelector('#container-cards').innerHTML = cards;
  })
  .catch(error => console.error('Error:', error));
}


getData();
// const render = () => {
//   getData().then(results => {
//     return results.map((item, index)=> {
//       item.title
//       // return `
//       //   <div class="col-sm-12 col-md-3">
//       //     <div class="card" style="width: 18rem;">
//       //       <img src=${item.thumbnail} class="card-img-top" alt="libro">
//       //       <div class="card-body">
//       //         <h5 class="card-title">${item.title}</h5>
//       //         <p class="card-text">${item.content_short}</p>
//       //         <p class="card-text">Número de páginas: ${item.pages}</p>
//       //         <p class="card-text">${item.language}</p>
//       //         <a href=${item.url_download} target="_blank" class="btn btn-primary">Ver libro</a>
//       //       </div>
//       //     </div>
//       //   </div>
//       // `;
//     });
//   })
// }

// console.log(render())

// containerCards.innerHTML = render();
// window.addEventListener("ready", render);