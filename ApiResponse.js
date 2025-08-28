class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }




// use
// import { ApiResponse } from "./ApiResponse.js";

// function getUser(req, res) {
//   const user = { id: 1, name: "Rishabh" };

//   const response = new ApiResponse(200, user, "User fetched successfully");
//   return res.status(response.statusCode).json(response);
// }
