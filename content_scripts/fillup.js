// ###############################################################################
// ###############################################################################
// Copier-Coller le json généré grace à "json-2086.js"
const data = [["211 Date de la cession (JJ/MM/AAAA)","212 Valeur globale du portefeuille au moment de la cession","213 Prix de cession","214 Frais de cession","220 Prix total d'acquisition","221 Fractions de capital initial contenues dans le prix total d'acquisition"],["05/01/2021","111111","2222","33","444444","555555"]];
// ###############################################################################
// ###############################################################################


(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  function updateInputs(data, nDom, nCession) {
    console.log(nDom, nCession);
    console.log(data);
    var event = new Event('blur');
    document.getElementById("dateCession_"+(nDom)).setAttribute("value", data[nCession][0]);
    document.getElementById("dateCession_"+(nDom)).dispatchEvent(event);
    document.getElementById("valeurGlobale_"+(nDom)).setAttribute("value", data[nCession][1]);
    document.getElementById("valeurGlobale_"+(nDom)).dispatchEvent(event);
    
    document.getElementById("prixCession_"+(nDom)).setAttribute("value", data[nCession][2]);
    document.getElementById("prixCession_"+(nDom)).dispatchEvent(event);

    document.getElementById("fraisCession_"+(nDom)).setAttribute("value", data[nCession][3]);
    document.getElementById("fraisCession_"+(nDom)).dispatchEvent(event);
    document.getElementById("prixTotalAcq_"+(nDom)).setAttribute("value", data[nCession][4]);
    document.getElementById("prixTotalAcq_"+(nDom)).dispatchEvent(event);
    document.getElementById("fractionCapital_"+(nDom)).setAttribute("value", data[nCession][5]);
    document.getElementById("fractionCapital_"+(nDom)).dispatchEvent(event);
  }
  const firstNumeroCession = Math.min(...Array.from(document.getElementsByTagName("strong")).filter(e => e.textContent.includes("Cession")).map(e => e.textContent.split("Cession ")[1]));
  const numInDom = firstNumeroCession -1;

  updateInputs(data, numInDom, firstNumeroCession);
  const DELAY = 500;
  setTimeout(() => {updateInputs(data, numInDom+1, firstNumeroCession+1)}, DELAY*1)
  setTimeout(() => {updateInputs(data, numInDom+2, firstNumeroCession+2)}, DELAY*2)
  setTimeout(() => {updateInputs(data, numInDom+3, firstNumeroCession+3)}, DELAY*3)
  setTimeout(() => {updateInputs(data, numInDom+4, firstNumeroCession+4)}, DELAY*4)
 
})();
