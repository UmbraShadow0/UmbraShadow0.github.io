// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (num,arr) => {
  return { 
    _specimenNum : num,
    dna : arr,
    mutate() {
      let base = Math.floor(Math.random() * 15);
      let newBaseValue = returnRandBase();
      while(true){
        if (this.dna[base] !== newBaseValue){
          this.dna[base] = newBaseValue;
          break;
        }
        else {
          newBaseValue = returnRandBase();
        }
      };
      return this.dna;
    },
    compareDNA(pAequor){
      let specimenNumNew = pAequor._specimenNum;
      let percentage = 0;
      for (const i in this.dna){
        if (this.dna[i]===pAequor.dna[i]){
         percentage++; 
        }
      }
      percentage = (percentage/this.dna.length)*100;
      console.log(`specimen #${this._specimenNum} and specimen #${specimenNumNew} have ${percentage}% DNA in common`)
    },
    willLikelySurvive(){
      let percentage = 0;
      for (const i in this.dna){
        if ((this.dna[i]==='C') || (this.dna[i]==='G')){
          percentage++; 
        };
      };
      percentage = (percentage/this.dna.length)*100;
      if (percentage >= 60){
        return true;
      }
      else{
        return false;
      }
    }
  }
};

function pAequorMaker(n) {
  var pAequor = {};
  for (var i = 0; i < n; ++i) {
    pAequor[i] =  pAequorFactory(i,mockUpStrand());
  }
  return pAequor;
}


let pAequorInstances = pAequorMaker(30);
console.log(pAequorInstances);






