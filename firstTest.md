# First Test

Seeing what happens when html content is included in a markdown file but .html is appended to the web address.

<!--- nope, not this --->
</p> Test paragraph <p>

<!--- better! --->
Oops, wrong order...(?)
<p> Test paragraph </p>

<!--- trying for desmos to see what happens --->
<script src="https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
<div id="calculator" style="width: 400px; height: 400px;"></div>
<script>
  var elt = document.getElementById('calculator');
  var calculator = Desmos.GraphingCalculator(elt);
</script>

<!--- trying with _includes for a pre-built graph --->
{% include clickableSquares.html %}
