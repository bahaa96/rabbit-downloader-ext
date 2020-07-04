export function isElement(object) {
  return !!(object && object.nodeType == 1);
}

export function titleFactory(text: string) {
  return text.replace(/[`~!@#$%^&*()_|+\=;:'",.<>\{\}\[\]\\\/]/gi, '');
}
