function setProp($target, name, value) {
  if (name === "className") {
    $target.setAttribute("class", value);
  } else if (name.startsWith("on")) {
    let eventKind = name.split("on")[1].toLowerCase();
    $target.addEventListener(eventKind, vdom.props[attr]);
  } else if (typeof value === "boolean") {
    setBooleanProp($target, name, value);
  } else {
    $target.setAttribute(name, value);
  }
}

function setProps($target, props) {
  Object.keys(props).forEach(name => {
    setProp($target, name, props[name]);
  });
}

function setBooleanProp($target, name, value) {
  if (value) {
    $target.setAttribute(name, value);
    $target[name] = true;
  } else {
    $target[name] = false;
  }
}

function removeBooleanProp($target, name) {
  $target.removeAttribute(name);
  $target[name] = false;
}
function removeProp($target, name, value) {
  if (name === "className") {
    $target.removeAttribute("class");
  } else if (name.startsWith("on")) {
    let eventKind = name.split("on")[1].toLowerCase();
    $target.removeAttribute(eventKind);
  } else if (typeof value === "boolean") {
    removeBooleanProp($target, name);
  } else {
    $target.removeAttribute(name);
  }
}

function updateProps($target, newProps, oldProps = {}) {
  const props = Object.assign({}, newProps, oldProps);
  Object.keys(props).forEach(name => {
    updateProp($target, name, newProps[name], oldProps[name]);
  });
}

function updateProp($target, name, newVal, oldVal) {
  if (!newVal) {
    removeProp($target, name, oldVal);
  } else if (!oldVal || newVal !== oldVal) {
    setProp($target, name, newVal);
  }
}

export {
  setProp,
  setProps,
  setBooleanProp,
  removeBooleanProp,
  removeProp,
  updateProps,
  updateProp,
};
