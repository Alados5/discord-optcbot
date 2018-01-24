function fact(i) {
  var prod = 1;
  for(j=0; j<(i+1); j++) {
    prod *= j;
  }
  return prod
}

function f(k, n, p) {
  var nf = fact(n);
  var kf = fact(k);
  var nkf = fact(n-k);
  var combi = nf/(kf*nkf);
  var pro1 = Math.pow(p, k);
  var pro2 = Math.pow((1-p), (n-k));
  var prob = combi * pro1 * pro2;
  return prob
}

function F(k, n, p) {
  var sum = 0;
  for(i=0; i<(k+1); i++) {
    var bini = f(i, n, p);
    sum += bini;
  }
  return sum
}

//Returns the remaining probability R=Pr(X>=k)=Pr(X>(k-1))=1-Pr(X<=(k-1))
function R(k, n, p) {
  return 1-F(k-1, n, p)
}

//Probability of getting k skillups with n copies, with event or not, OC rates or not
//OC rates are 1/5 (2/5 with event), normal rates are 1/6 (1/3 with event)
function ProbSkill(k, n, event=False, OC=True) {
  if(event) {
    if(OC) return R(k, n, 2/5)
    else return R(k, n, 1/3)
  }
  else {
    if(OC) return R(k, n, 1/5)
    else return R(k, n, 1/6)
  }
}

//Calculates the number N of copies needed to get k or more successes (skillups)
//with a probability of x (default at 75%)
function NCopies(k, x=0.75, event=True, OC=True) {
  var n = 1;
  while n<200 {
    var t = ProbSkill(k, n, event, OC);
    if(t >= x) break
    n += 1;
  }
  return n
}

export { ProbSkill, NCopies };
