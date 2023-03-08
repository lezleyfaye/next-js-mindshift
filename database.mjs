// import config uses login info to connect to database
import { config } from 'dotenv-safe';
import postgres from 'postgres';

// calls environment variables into this file
config();

// connecting to database but info not secret, need to make .env file - never committed or pushed to github, add to git ignore
const sql = postgres();

// in hyper, node database.mjs - will show the table data
// console.log(
//   await sql`
//     SELECT * FROM ......table name....`,
// );

// this stops node from running after the console log - retrieves info then puts me back in my project folder
// await sql.end();
