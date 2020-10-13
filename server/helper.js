/*
  =========================================================================
  -------------------------------------------------------------------------
  ||                            Constants                                ||
  -------------------------------------------------------------------------
  =========================================================================
*/

const DEFAULT_HEADERS = {
  "content-type": 	"application/json",
  "accept": 		"application/json",
  "accept-encoding": 	"gzip, deflate, br"
};
const DEFAULT_HEADERS_ENTRIES = Object.entries(DEFAULT_HEADERS);


/*
  =========================================================================
  -------------------------------------------------------------------------
  ||                            Methods                                  ||
  -------------------------------------------------------------------------
  =========================================================================
*/

module.exports.INVALID_RESPONSE = (code, description) => {
  return {
    "status": code,
    "error_msg": description
  }
}

module.exports.INVALID_HEADERS = (headers) => {
  return DEFAULT_HEADERS_ENTRIES.filter(header => {
    // filter through default headers and identify missing or malformed headers
    return !(header[0].toLowerCase() in headers) || headers[header[0].toLowerCase()] != header[1].toLowerCase();
  }).map(header => header[0])
}

module.exports.VALIDATE_HEADERS = (headers, ERROR_CODE) => {
  let error_description = "Authorization error."    //Default error description
  let prefix, token;
  let auth_header = headers["Authorization"] || headers["authorization"];

  // check and parse authorization

  if(auth_header){ //authorization header is present?
    if( ([prefix, token] = auth_header.split(" ")).length == 2){ //format is "Bearer {token}"?
      if(!(prefix.toLowerCase() == "bearer")){ //authorization is malformed?
        error_description = "Invalid authorization format. Method requires Bearer token."
        return module.exports.INVALID_RESPONSE(ERROR_CODE, error_description);
      }
    }else{ //if not, return and provide error description
      error_description = "Invalid authorization format. Method requires Bearer token."
      return module.exports.INVALID_RESPONSE(ERROR_CODE, error_description);
    }
  }else{
    error_description = "No authorization header. Please check documentation if error persists."
    return module.exports.INVALID_RESPONSE(ERROR_CODE, error_description);
  }

  if( (missingHeaders = module.exports.INVALID_HEADERS(headers)).length){
    error_description = `Invalid header(s): ${missingHeaders.join(", ")}`
    return module.exports.INVALID_RESPONSE(ERROR_CODE, error_description);
  }
  return {"status": 202, "token": token}
}
