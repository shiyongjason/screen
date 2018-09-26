/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}
/**
 * 获取Cookie
 */
export const getCookie = name => {
  let arr = ''
  let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  // es6 语法这个地方等于号是===恒成立的，不过如果写成===iftrue的分支进不去
  if (arr = document.cookie.match(reg)) {
    return (arr[2])
  } else {
    return false
  }
}
/**
 * 设置Cookie
 */
export const setCookie = (name, value, expiredays) => {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
  console.log(document.cookie)
}

export default {
  setStore,
  getStore,
  removeStore,
  getCookie,
  setCookie
}
