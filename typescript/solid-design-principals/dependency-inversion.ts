/**
 * Higher-level modules should not depend on low-level modules . Both should depend on abstractions .
 * Abstractions should not depend on details . Details should depend on abstractions
 */

// *** NOT CORRECT IMPLEMENTATION ***

// class MySqlDataBase {
//   save(data: string): void {}
// }

// class HighLevelModule {
//   constructor(private database: MySqlDataBase) {}

//   execute(data: string) {
//     this.database.save(data);
//   }
// }

// CORRECT IMPLEMENTATION

interface IDatabase {
  save(data: string): void;
}
class MySqlDataBase implements IDatabase {
  save(data: string): void {
    console.log("My sql is being Called");
  }
}

class MongoDbDatabase implements IDatabase {
  save(data: string): void {
    console.log("Data is save to mongodb");
  }
}

class HighLevelModule {
  constructor(private database: IDatabase) {}

  execute(data: string) {
    this.database.save(data);
  }
}

let mysql: MySqlDataBase = new MySqlDataBase();

let mongodb: MongoDbDatabase = new MongoDbDatabase();

let user: HighLevelModule = new HighLevelModule(mysql);

user.execute("John");

let post: HighLevelModule = new HighLevelModule(mongodb);
post.execute("New Post");

/**
 * Advantages
 * Decoupling of Code
 * Ease of Modification and Extension
 * Improve Testability
 */
