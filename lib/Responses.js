class Responses {

  function createFailResponse(msg){
      return {
        success: false,
        message: msg
      }
  }

  function createSuccessResponse(msg) {
    return {
      success: true,
      message: msg
    }
  }

}

module.exports = Errors;
