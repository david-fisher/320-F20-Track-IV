const { isAuthenticated, validateToken } = require("./auth");
const constants = require("./constants.js");

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

const DEFAULT_HEADERS_FORM = {
  "accept": 		"application/json",
  "accept-encoding": 	"gzip, deflate, br"
}

const DEFAULT_HEADERS_FORM_ENTRIES = Object.entries(DEFAULT_HEADERS_FORM);


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
    "explanation": description
  }
}

module.exports.INVALID_HEADERS = (headers, form) => {
  return (form ? DEFAULT_HEADERS_FORM_ENTRIES : DEFAULT_HEADERS_ENTRIES).filter(header => {
    // filter through default headers and identify missing or malformed headers
    return !(header[0].toLowerCase() in headers) || headers[header[0].toLowerCase()] != header[1].toLowerCase();
  }).map(header => header[0])
}

module.exports.VALIDATE_HEADERS = (headers, form) => {
  let error_code = constants.ERROR_CODE_MISSING_HEADER;
  let error_description = "Authorization error."    //Default error description
  let prefix, token;
  let auth_header = headers["Authorization"] || headers["authorization"];

  // check and parse authorization

  if(auth_header){ //authorization header is present?
    if( ([prefix, token] = auth_header.split(" ")).length == 2){ //format is "Bearer {token}"?
      if(!(prefix.toLowerCase() == "bearer")){ //authorization is malformed?
        error_description = "Invalid authorization format. Method requires Bearer token."
        error_code = constants.ERROR_CODE_INVALID_AUTHORIZATION;
        return module.exports.INVALID_RESPONSE(error_code, error_description);
      }
    }else{ //if not, return and provide error description
      error_description = "Invalid authorization format. Method requires Bearer token."
      error_code = constants.ERROR_CODE_INVALID_AUTHORIZATION;
      return module.exports.INVALID_RESPONSE(error_code, error_description);
    }
  }else{
    error_description = "No authorization header. Please check documentation if error persists."
    error_code = constants.ERROR_CODE_MISSING_AUTHORIZATION;
    return module.exports.INVALID_RESPONSE(error_code, error_description);
  }

  if( (missingHeaders = module.exports.INVALID_HEADERS(headers, form)).length){
    error_description = `Invalid header(s): ${missingHeaders.join(", ")}`
    return module.exports.INVALID_RESPONSE(error_code, error_description);
  }
  return {"status": 202, "token": token}
}

module.exports.VALIDATE_AUTHORIZATION = (token) => {
  if (!validateToken(token)) {
    const error_code = constants.ERROR_CODE_INVALID_AUTHORIZATION;
    const error_description = "Invalid authorization token.";
    return helper.INVALID_RESPONSE(error_code, error_description);
  }
  return {"status": 202};
}
