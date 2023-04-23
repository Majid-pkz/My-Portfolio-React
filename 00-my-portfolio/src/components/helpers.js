export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


export function checkMessage(input) {
  const message = /^.+$/;
  if (input.match(message)) {
      return true;
  }
  return false;
}


export function checkName(input) {
  const passw = /^.+$/;
  if (input.match(passw)) {
    return true;
  }
  return false;
}
