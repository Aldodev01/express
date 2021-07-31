const db = require("./connection");

class Users {
  // * CREATE USERS
  async createUsers(data) {
    return await db("users")
      .insert(data)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  // TODO: READ USERS
  async readUsers() {
    return await db("users")
      .select("id", "username", "avatar", "created_at")
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
}

module.exports = new Users();
