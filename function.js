
// DARKMODE

 var checkbox = document.querySelector('input[name=mode]');
        checkbox.addEventListener('change', function() {
            if(this.checked) {
                document.body.style.backgroundColor = "#458588";
                document.getElementById('1').style.backgroundImage = "url('tree8.png')";
                document.getElementById('2').style.color = "#b16286";
                document.getElementById('9').style.color = "#b16286";
                document.getElementById('10').style.color = "#b16286";
                document.getElementById('11').style.color = "#dddddd";
                document.getElementById('12').style.color = "#dddddd";
                document.getElementById('13').style.color = "#b16286";
                document.getElementById('14').style.color = "#dddddd";
                document.getElementById('15').style.color = "#b16286";
                document.getElementById('16').style.color = "#b16286";            
                document.getElementById('18').style.color = "#b16286";
                document.getElementById('19').style.color = "#dddddd";
               
               var spanElements = document.getElementsByTagName('a');

               for (var i = 0; i < spanElements.length; i++) {
                     spanElements[i].style.color = "#f1f1f1";
                    }
 
              

            } else {
                document.body.style.backgroundColor = "#ebe7dc";
                document.getElementById('1').style.backgroundImage = "url('tree.png')";
                document.getElementById('2').style.color = "#f1f1f1";
                document.getElementById('9').style.color = "#f1f1f1";
                document.getElementById('10').style.color = "#f1f1f1";
                document.getElementById('11').style.color = "#999999";
                document.getElementById('12').style.color = "#999999";
                document.getElementById('13').style.color = "#f1f1f1";
                document.getElementById('14').style.color = "#999999";
                document.getElementById('15').style.color = "#f1f1f1";
                document.getElementById('16').style.color = "#f1f1f1";            
                document.getElementById('18').style.color = "#f1f1f1";
                document.getElementById('19').style.color = "#999999";

                var spanElements = document.getElementsByTagName('a');

               for (var i = 0; i < spanElements.length; i++) {
                     spanElements[i].style.color = "#4b4746";
                    }
               
            }
        })
 