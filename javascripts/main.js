(function ($, undefined) {
  // repo URLs
  var repoUrls = {
    "welt": "http://bongos.studio/welt",
    "bongosstudio.github.io": "http://bongos.studio"
  };
  
  function repoUrl(repo) {
    return repoUrls[repo.Name] || repo.html_url;
  }
  
  // repo descriptions
  var repoDescs = {
    "welt": "Hello Universe. A game built in C# using the MonoGame Framework based on space exploration."
  }
  
  function repoDesc(repo) {
    return repoDescs[repo.Name] || repo.description;
  }
})
