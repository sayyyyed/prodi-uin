const fs = require('fs');
const axios = require('axios');

const url = "https://www.banpt.or.id/direktori/model/dir_prodi/get_hasil_pencariannew.php?_=1711614909428";

axios.get(url)
  .then(response => {
    const jsonData = response.data;
    fs.writeFile('data.json', JSON.stringify(jsonData), err => {
      if (err) {
        console.error('Error', err);
      } else {
        console.log('saved');
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
