const emailValidation = (email: any) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  if (email.match(isValidEmail)) return true
  else return false
}

export default emailValidation
