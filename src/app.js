import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: '#app',
    data: {
      countryUrl: null
    },
    methods: {
      fetchCountry: function (){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => this.countryUrl = data.message)
      }
    }
  })
})
