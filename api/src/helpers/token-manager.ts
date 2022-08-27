import jwt from "jsonwebtoken";

export class TokenManager {
  /**
   * Function to generate a JWT token
   */
  static generateJwtToken(user: any) {
    const userJwt = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      "village_api_secret"
    );

    return userJwt;
  }

  static verifyJwtToken(token: string) {
    return jwt.verify(token, "village_api_secret");
  }
}
