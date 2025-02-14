getValentineMessage();

function getValentineMessage() {
  let url = window.location.href;
  let regexName = new RegExp("name" + "(=([^&#]*))");
  let resultsName = regexName.exec(url);
  let regexSeg = new RegExp("seg" + "(=([^&#]*))");
  let resultsSeg = regexSeg.exec(url);

  if (resultsName == null) {
    valentineName = "Kaithe";
  } else {
    valentineName = decodeURIComponent(resultsName[2]);
  }

  if (resultsSeg == null) {
    valentineSeg = "general";
  } else {
    valentineSeg = decodeURIComponent(resultsSeg[2]);
  }
}
