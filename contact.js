// FORMSPREE AJAX CODE - PROJECT: LAYLA WEBSITE CF //

 window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    const form = document.getElementById("contact-form");
    const button = document.getElementById("my-form-button");
    const status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thank you, we will get back to you as soon as possible. <br /> شكراً جزيلاً، سنعود إليك في أقرب وقت ممكن";
    }

    function error() {
      status.innerHTML = "Error! There was a problem, please try again.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      const data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }