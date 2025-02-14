// shared-worker.ts

import { exposeWorkerRxStorage } from "rxdb-premium/plugins/storage-worker";
import { getRxStorageSQLite, getSQLiteBasicsWasm } from "rxdb-premium/plugins/storage-sqlite";
import SQLiteESMFactory from "wa-sqlite/dist/wa-sqlite-async.mjs";
import SQLite from "wa-sqlite";

const sqliteModule = await SQLiteESMFactory();
const sqlite3 = SQLite.Factory(sqliteModule);

export const storage = getRxStorageSQLite({ sqliteBasics: getSQLiteBasicsWasm(sqlite3) });

exposeWorkerRxStorage({
  /**
   * You can wrap any implementation of the RxStorage interface
   * into a worker.
   * Here we use the SQLite RxStorage.
   */

  storage,
});
