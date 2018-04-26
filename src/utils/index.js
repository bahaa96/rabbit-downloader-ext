export function isElement(object) {
  return !!(object && object.nodeType == 1);
}

export function titleFactory (text) {
  return text.replace(/[`~!@#$%^&*()_|+\=;:'",.<>\{\}\[\]\\\/]/gi, '')
}