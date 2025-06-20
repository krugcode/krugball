import { Database } from "bun:sqlite"


const config = { create: true, strict: true };
const db = new Database("matchDB.sqlite", config);

// closes after `using` completes
export function StartDB(): string {
  let response: string;
  {
    using db = new Database("mydb.sqlite");
    using query = db.query("select 'Hello world' as message;");
    //@ts-ignore
    response = query.get(); // => { message: "Hello world" }

  }
  return response
}

