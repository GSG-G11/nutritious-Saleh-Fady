// fetch data from backend //

const fetchFrute = (url , calback) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.map((item) => {
        fetch(
          `https://api.codetabs.com/v1/proxy/?quest=https://imsea.herokuapp.com/api/10?q=${item.name}`
        ).then((re)=> re.json()).then(saleh => calback(item , (saleh.results[1])));
      });
    })
};
