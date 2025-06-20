import { Database } from "bun:sqlite"

const db = new Database("matchDB.sqlite", { create: true, strict: true });

// closes after `using` completes
// import { Database } from "bun:sqlite";
//
// {
//   using db = new Database("mydb.sqlite");
//   using query = db.query("select 'Hello world' as message;");
//   console.log(query.get()); // => { message: "Hello world" }
// }
