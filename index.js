function searchRepositories(searchTerms) {
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(renderSearchResults(data))
    })
}



















$(document).ready(function (){
  
  
  
});
