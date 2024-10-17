let dnaSubmit = document.getElementById("dnaSubmit");
let rnaSeq = document.getElementById("getrnaSeq");
let dnaSeq = document.getElementById("dnaSeq");
let getrnaSeq = "";
let getdnaSeq = "";

dnaSubmit.onclick = function() {
    getdnaSeq = dnaSeq.value.toUpperCase().trim();
    for(let i=0;i<getdnaSeq.length;i++) {
        if(getdnaSeq[i]!="A" && getdnaSeq[i]!="T" && getdnaSeq[i]!="G" && getdnaSeq[i]!="C") {
            alert("DNA sequence must include A or T or C or G");
            break;
        }
        else if(getdnaSeq[i]=="T") {
            getrnaSeq += "U";
        }
        else {
            getrnaSeq += getdnaSeq[i];
        }
    }
    rnaSeq.innerHTML = getrnaSeq;
}

dnaClear.onclick = function() {
    getrnaSeq = "";
    //getdnaSeq = "";
    //dnaSeq.innerHTML = "";
    rnaSeq.innerHTML = "";
}

