import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


//   function test(){
//     alert('Function from index.html');
//   }


function checkInput()
{
    console.log(this);
    var v = this.innerText;
    var ri = this.closest('tr').rowIndex;
    var ci = this.cellIndex;
    // console.log(ri + "  -  " + ci);
    // return;

    ///checking current row
    var foundInRow=0;
    var myTab = document.getElementById('game');

    for (var i = ri; i <= ri; i++) 
    {
        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCells = myTab.rows.item(i).cells;
        // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
        for (var j = 0; j < objCells.length; j++) 
        {
            if( objCells.item(j).innerText === v && j !== ci )
            {
                foundInRow=1;
            }
        }
    }
    
    
    ///checking current col
    var foundInCol=0;
    for (i = 0; i < myTab.rows.length; i++) 
    {
        // console.log(i);
        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCells = myTab.rows.item(i).cells;
        // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
        for (j = ci; j <= ci; j++) 
        {
            if( objCells.item(j).innerText === v && i !== ri )
            {
                foundInCol=1;
            }
        }
    }
    
    ////checking in current matrix
    // cn = $(this).attr("class");
    var cn = this.className;
    var x = document.getElementsByClassName(cn);
    // console.log(cn);
    var foundInMatrix = 0;
    
    for ( i = 0; i < x.length; i++) 
    {
        var lri = x[i].closest('tr').rowIndex;
        var lci = x[i].cellIndex;
        // console.log( lri + "  -  " + lci );
        if( x[i].innerText === v && ri !== lri && ci !==lci )
        {
            foundInMatrix=1;
        }

    }

    if(foundInRow==1 || foundInCol==1 || foundInMatrix==1)
    {
        this.style.background = 'lightcoral';
    }
    else
    {
        this.style.background = 'greenyellow';
    }
    
    if( v == "" )
    {
        this.style.background = 'white';
    }
   
}

function validate() {
    if( this.innerText.length > 1)
    {
        this.innerText = this.innerText.toString().charAt(1);
        return;
    }

    this.innerText = this.innerText.replace(/[^1-9]/g,'');
    this.focus();
    if (typeof window.getSelection != "undefined"
      && typeof document.createRange != "undefined") {
      var range = document.createRange();
      range.selectNodeContents(this);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } 
    // else if (typeof (<any>document.body).createTextRange != "undefined")      {
    //   var textRange = (<any>document.body).createTextRange();
    //   textRange.moveToElementText(this);
    //   textRange.collapse(false);
    //   textRange.select();
    // }
}

// var tds = document.getElementsByTagName('td');
// for (var i = 0; i < tds.length; i++) {
//   tds[i].addEventListener('keyup', checkInput);
//   tds[i].addEventListener('keyup', validate);
// }




const myelement =<div style={{backgroundcolor: "white"}}>
    <h1 >SUDOKU</h1>
<table style={{margin: "auto"}}>
    <thead></thead>
    <tbody>
    <tr>
        <td contentEditable="true" className="one" onKeyUp={checkInput}></td>
        <td  id="first" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="one">6</td>
        <td contentEditable="true" className="one"></td>

        <td  id="second" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="two">4</td>
        <td id="second" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="two">5</td>
        <td id="second" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="two">7</td>

        <td contentEditable="true" className="three"></td>
        <td contentEditable="true" className="three"></td>
        <td contentEditable="true" className="three"></td>
    </tr>

    <tr>
        <td id="first" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="one">9</td>
        <td contentEditable="true" className="one"></td>
        <td contentEditable="true" className="one"></td>

        <td id="second" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="two">2</td>
        <td contentEditable="true" className="two"></td>
        <td contentEditable="true" className="two"></td>

        <td contentEditable="true" className="three"></td>
        <td id="third" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="three">6</td>
        <td contentEditable="true" className="three"></td>
    </tr>

    <tr>
        <td contentEditable="true" className="one"></td>
        <td id="first" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="one">4</td>
        <td contentEditable="true" className="one"></td>

        <td contentEditable="true" className="two"></td>
        <td  id="second" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="two">8</td>
        <td id="second" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="two">9</td>

        <td contentEditable="true" className="three"></td>
        <td contentEditable="true" className="three"></td>
        <td id="third" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="three">1</td>
    </tr>

    <tr>
        <td contentEditable="true" className="four"></td>
        <td contentEditable="true" className="four"></td>
        <td id="forth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="four">9</td>

        <td contentEditable="true" className="five"></td>
        <td contentEditable="true" className="five"></td>
        <td id="fifth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="five">6</td>

        <td id="sixth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="six">5</td>
        <td contentEditable="true" className="six"></td>
        <td contentEditable="true" className="six"></td>
    </tr>

    <tr>
        <td contentEditable="true" className="four"></td>
        <td contentEditable="true" className="four"></td>
        <td  id="forth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="four">8</td>

        <td id="fifth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="five">7</td>
        <td contentEditable="true" className="five"></td>
        <td id="fifth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="five">4</td>

        <td contentEditable="true" className="six"></td>
        <td id="sixth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="six">3</td>
        <td contentEditable="true" className="six"></td>
    </tr>

    <tr>
        <td contentEditable="true" className="four"></td>
        <td contentEditable="true" className="four"></td>
        <td id="forth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="four">3</td>

        <td id="fifth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="five">8</td>
        <td contentEditable="true" className="five"></td>
        <td contentEditable="true" className="five"></td>

        <td id="sixth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="six">6</td>
        <td id="sixth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="six">4</td>
        <td contentEditable="true" className="six"></td>
    </tr>

    <tr>
        <td id="seventh" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="seven">5</td>
        <td contentEditable="true" className="seven"></td>
        <td contentEditable="true" className="seven"></td>

        <td contentEditable="true" className="eight"></td>
        <td id="eighth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="eight">7</td>
        <td contentEditable="true" className="eight"></td>

        <td id="ninth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="nine">9</td>
        <td contentEditable="true" className="nine"></td>
        <td id="ninth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="nine">4</td>
    </tr>

    <tr>
        <td contentEditable="true" className="seven"></td>
        <td id="seventh" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="seven">2</td>
        <td contentEditable="true" className="seven"></td>

        <td id="eighth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="eight">9</td>
        <td contentEditable="true" className="eight"></td>
        <td contentEditable="true" className="eight"></td>

        <td contentEditable="true" className="nine"></td>
        <td id="ninth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="nine">5</td>
        <td contentEditable="true" className="nine"></td>
    </tr>

    <tr>
        <td id="seventh" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="seven">8</td>
        <td contentEditable="true" className="seven"></td>
        <td contentEditable="true" className="seven"></td>

        <td contentEditable="true" className="eight"></td>
        <td contentEditable="true" className="eight"></td>
        <td contentEditable="true" className="eight"></td>

        <td id="ninth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="nine">1</td>
        <td id="ninth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="nine">7</td>
        <td id="ninth" style={{backgroundcolor:"teal"},{fontWeight:"bold"},{fontSize:20}} className="nine">2</td>
    </tr>
    </tbody>
    <tfoot></tfoot>
</table>
</div>;

// console.log("FF");
var tds = document.getElementsByTagName('td');
// console.log(tds);
// for (var i = 0; i < tds.length; i++) {
    for (var i = 0; i < 81; i++) {
    // console.log(tds[i]);
//   tds[i].addEventListener('keyup', test);
  // tds[i].addEventListener('keyup', checkInput);
  // tds[i].addEventListener('keyup', validate);
}
function test()
{
    alert('ff');
}


ReactDOM.render(myelement, document.getElementById('root'));
