alert("js works");

var pos = 0, test, test_status, question, choices, choices, chA, chB, chC, chD, correct =0;

var questions = [

      ["Which type of coffee contains foamed milk and steamed milk?",
      "A) Latte ", "B) Cappuccino", "C) Mocha ", "D) Macchiato", "B" ],
      ["Which type of coffee has 1/2 steamed milk, espresso and chocolate syrup?",
      "A) Americano", "B) Frappichino", "C) Cold Brew", "D) Mocha", "D"],
      ["Which type of coffee has brewed coffee plus 2 shots of epsresso?", "A) Sludge",
       "B) Americano", "C) Breve", "D) Java", "A"],
      ["Which type of coffee contains half and half instead of steamed milk?", "A) Macchiato",
       "B) Ristretto", "C) Mocha ", "D)  Breve", "D"],
      ["Where and when was Starbucks founded?",
       "A) Seattle 1975", "B) San Francisco 1981", "C) Seattle 1971", " D) Salt Lake City 2010", "C"]

];

function _(x) {
    return document.getElementById (x);
}

function renderQuestion () {
    test = _("test");
    if(pos >= questions.length){

      test.innerHTML = "<h2> You got " +correct+" of "+questions.lenght+" questions correct </h2>";
      _(test_status).innerHTML= "Test COmpleted";
      return false;
    }


    _("test_status").innerHTML = "Question  "+ (pos+1)+" of "+ questions.length;


    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br> <br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }
  function checkAnswer(){
  	choices = document.getElementsByName("choices");
  	for(var i=0; i<choices.length; i++){
  		if(choices[i].checked){
  			choice = choices[i].value;
  		}
  	}
  	if(choice == questions[pos][4]){
  		correct++;
  	}
  	pos++;
  	renderQuestion();
  }
  window.addEventListener("load", renderQuestion, false);
