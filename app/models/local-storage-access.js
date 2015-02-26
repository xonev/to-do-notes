export function fetch(key, defaultVal){
  var appData = window.localStorage.getItem('to-do-notes');
  if (appData) {
    return JSON.parse(appData)[key];
  }
  return defaultVal;
}

export function save(key, val){
  var appData = window.localStorage.getItem('to-do-notes');
  appData = appData ? JSON.parse(appData) : {version: 1};
  appData[key] = val;
  window.localStorage.setItem('to-do-notes', JSON.stringify(appData));
}

export function fetchTodo(id){
  var todos = fetch('to-dos', []);
  return todos.findBy('id', id);
}
