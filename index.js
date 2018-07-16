function searchRepositories(searchTerms) {
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(renderSearchResults(data))
    }).fail(error => {
      displayError()
    })
}



















$(document).ready(function (){
  
  
  
});
