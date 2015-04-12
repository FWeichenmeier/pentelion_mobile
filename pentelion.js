function fighter(OG, DG, Weapon, SK, armor, RBr){
    this.OG = OG;
    this.DG = DG;
    this.Weapon = Weapon;
    this.SK = SK;
    this.armor = armor;
    this.RBr = RBr;
    
    this.toHTML: function(suffix) {
        $("#OG" + suffix).text = this.OG;
        $("#DG" + suffix).text = this.DG;
        $("#Weapon" + suffix).text = this.Weapon;   
        return this;
        

    }
}

var myFighter = new fighter(180, 180, "Schwert", 6, "SL", 5);
var foe = new fighter(120, 120, "Krs", 4, "Br", 5);

function calcValues(sg, vg, sk) {
    "use strict";
    var res = [],
        i,
        s = sg - vg;
    for (i = -2; i < 3; i = i + 1) {
        s = sg - vg + i*10;
        res.push([ s, 50-s, 75-s, 90-s, 100-s]);
    }
    return res;
}

function calcTable(sg, vg, sk) {
    "use strict";
    var table = document.getElementById("table"),
        res = calcValues(sg, vg, sk),
        s = "<table><tr><td>Diff</td><td>+</td><td>+E</td><td>+G</td><td>+K</td></tr>",
        i,
        j;
    for (i = 0; i < res.length; ++i) {
        s += "<tr>";
        for (j = 0; j < res[i].length; ++j) {
            s += "<td>" + res[i][j] + "</td>";
        }
        s += "</tr>";        
    }
    s += "</table>";
    table.innerHTML = s;
}

function calculate() {
    "use strict";
    calcTable(document.getElementById("KG").value, document.getElementById("VG").value, document.getElementById("SK").value)
}

function processValues(el1, el2) {
    "use strict";
    calculate();
}



function onStart() {
    "use strict";
    myFighter.toHTML("self");

//    calculate();
}

