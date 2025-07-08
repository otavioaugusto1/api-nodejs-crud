import "dotenv/config"
import postgres from "postgres"

const {PGHOST, PGDATABASE, PGUSER,PGPASSWORD, ENDPOINT_ID} = proccess.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const sql = postgres(URL, {ssl: "reguire"});
