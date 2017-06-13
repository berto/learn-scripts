var panel = document.querySelector('.studentspanel')
var columns = document.querySelectorAll('.studentcolumn')
var columnsArr = arrayify(columns)
columnsArr.sort(sortByName)
panel.innerHTML = null
appendToPanel(panel, columnsArr)

function arrayify(columns) {
  var newArr = []  
  for (i in columns) {
    if (typeof columns[i] === 'object') {
      newArr.push(columns[i])    
    }
  }
  return newArr
}

function sortByName(a, b){
  var nameA = a.querySelector('.tooltip').innerText
  var nameB = b.querySelector('.tooltip').innerText
  if(nameA < nameB) return -1;
  if(nameA > nameB) return 1;
  return 0;
}

function appendToPanel(panel, columnsArr) {
  for (i in columnsArr) {
    panel.appendChild(columnsArr[i])
  }
}
