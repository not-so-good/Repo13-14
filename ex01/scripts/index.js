function img(event) {
    var x = event.target;
    var d = x.parentElement;
    var k = d.parentElement;
  
    if (x.tagName == "H1") {
      if (k.id == "img1") {
        document.getElementById("mc").innerHTML =
          '   <embed type="text/html" src="image01.html">';
        modal.style.display = "block";
      }
      if (k.id == "img2") {
        document.getElementById("mc").innerHTML =
          ' <embed type="text/html" src="image02.html">';
        modal.style.display = "block";
      }
      if (k.id == "img3") {
        document.getElementById("mc").innerHTML =
          ' <embed type="text/html" src="image03.html">';
        modal.style.display = "block";
      }
      if (k.id == "img4") {
        document.getElementById("mc").innerHTML =
          ' <embed type="text/html" src="image04.html">';
        modal.style.display = "block";
      }
      if (k.id == "img5") {
        document.getElementById("mc").innerHTML =
          ' <embed type="text/html" src="image05.html">';
        modal.style.display = "block";
      }
      if (k.id == "img6") {
        document.getElementById("mc").innerHTML =
          ' <embed type="text/html" src="image06.html">';
        modal.style.display = "block";
      }
      if (k.id == "img7") {
        document.getElementById("mc").innerHTML =
          ' <embed type="text/html" src="image07.html">';
        modal.style.display = "block";
      }
      if (k.id == "img8") {
        document.getElementById("mc").innerHTML =
          ' <embed type="text/html" src="image08.html">';
        modal.style.display = "block";
      }
      if (k.id == "img9") {
        document.getElementById("mc").innerHTML =
          ' <embed type="text/html" src="image09.html">';
        modal.style.display = "block";
      }
      if (k.id == "img10") {
        document.getElementById("mc").innerHTML =
          ' <embed type="text/html" src="image10.html">';
        modal.style.display = "block";
      }
    }
  }
  
  function thumb(event) {
    var x = event.target;
    var d = x.parentElement;
    var k = d.parentElement;
    if (k.tagName == "DIV") {
      var t = d.getElementsByTagName("h1")[0];
  
      t.style.display = "block";
      var id = k.id;
      switch (id) {
        case "img1":
          t.innerHTML = "Marathon";
          break;
        case "img2":
          t.innerHTML = "Gymnastics";
          break;
        case "img3":
          t.innerHTML = "Climbing";
          break;
        case "img4":
          t.innerHTML = "Skiing";
          break;
        case "img5":
          t.innerHTML = "Weight Lifting";
          break;
        case "img6":
          t.innerHTML = "Basketball";
          break;
        case "img7":
          t.innerHTML = "Swimming";
          break;
        case "img8":
          t.innerHTML = "Jogging";
          break;
        case "img9":
          t.innerHTML = "Running";
          break;
        case "img10":
          t.innerHTML = "Cycling";
          break;
        default:
      }
  
      var s = d.getElementsByTagName("img")[0];
      s.classList.add("thumb");
    }
  }
  function nothumb(event) {
    var x = event.target;
    var d = x.parentElement;
    var k = d.parentElement;
    if (d.tagName == "A") {
      var h = d.getElementsByTagName("h1")[0];
      var s = d.getElementsByTagName("img")[0];
      h.style.display = "none";
      s.classList.remove("thumb");
    } else if (d.tagName == "DIV") {
      var h = x.getElementsByTagName("h1")[0];
      var s = x.getElementsByTagName("img")[0];
      h.style.display = "none";
      s.classList.remove("thumb");
    }
  
    /*var x = event.target;
  if (x.tagName == "DIV") {
          
      var h = x.getElementsByTagName("a")[0];
      var k = h.getElementsByTagName("img")[0];
      var t = h.getElementsByTagName("h1")[0];
      t.style.display = "none";
      k.classList.remove("thumb");
  }*/
  }
  
  //document.getElementById("myModal");
  
  // JavaScript source code
  var modal = document.querySelector("#myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  // When the user clicks on <span> (x), close the modal
  
  // When the user clicks the button, open the modal
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };