module.exports.sortedNotes = function(sortBy, notes) {
  console.log("sortByTitle-computed");
  var q,
    o,
    i = 0;
  if (this.scend === "Descending") {
    q = ".reverse()";
  } else {
    q = "";
  }
  switch (sortBy) {
    case "Title":
      o = notes.sort(function(a, b) {
        var textA = a.titleName.toUpperCase();
        var textB = b.titleName.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      return eval("o" + q);
    case "Date Created":
      o = notes.sort(function(a, b) {
        a.isClicked = false;
        dateA = a.createdDate;
        dateB = b.createdDate;
        return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
      });
      return eval("o" + q);
    case "Date Updated":
      o = notes.sort(function(a, b) {
        a.isClicked = false;
        dateA = a.modifiedDate;
        dateB = b.modifiedDate;
        return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
      });
      return eval("o" + q);
  }
};

module.exports.sortedNotebooks = function(Notebooks) {
  var retArr;
  retArr = Notebooks.filter(a => {
    return a.parentId === 2;
  });
  var sortArr = Notebooks.filter(a => {
    return a.parentId != 2;
  }).sort((a, b) => {
    var A = a.bookId;
    var B = b.bookId;
    return A < B ? -1 : A > B ? 1 : 0;
  });
  sortArr.forEach(a => {
    retArr.forEach((b, i) => {
      if (b.bookId === a.parentId) {
        retArr.splice(i + 1, 0, a);
      } else if (a.parentId === 9) {
        retArr.unshift(a);
      }
    });
  });
  console.log(retArr);
  return retArr;
};
