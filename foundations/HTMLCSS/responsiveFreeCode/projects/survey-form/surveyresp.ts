type data = {
  [index: string]: string | string[];
};

const collect: data = {};

// on submit

// document.getElementById('survey-form').addEventListener("click",(e)=>{
// e.preventDefault()

// }) Bad practice, never introduce unverified data in your script. Could do this server side though
// index by name
