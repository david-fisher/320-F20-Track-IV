module.exports.INVALID_RESPONSE = (code, description) => {
  return {
    "status": code,
    "error_msg": description
  }
}
