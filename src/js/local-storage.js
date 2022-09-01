export function addStorage(key, value) {
  try {
    // console.log(value);
    const serializedState = JSON.stringify(value);
    return localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log(error);
  }
}

export function getStorage(key) {
  try {
    // console.log(key);
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
  }
}

export function removeStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
}

export function isInStorage(listName, id) {
  let items = getStorage(listName) !== undefined ? getStorage(listName) : [];
  if (items.find(item => item.id === id)) {
    return true;
  } else {
    return false;
  }
}
