function h(type, props, ...child) {
  let children = child
  if (children.length === 1) {
    children = children[0]
  }
  return { type, props, child: children }
}

export { h }
