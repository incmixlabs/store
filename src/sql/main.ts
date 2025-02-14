import { createRxDatabase } from "rxdb";
import { getRxStorageSharedWorker } from "rxdb-premium/plugins/storage-worker";

export const database = await createRxDatabase({
  name: "incmix-db",
  multiInstance: false,
  storage: getRxStorageSharedWorker({
    /**
     * Contains any value that can be used as parameter
     * to the SharedWorker constructor of thread.js
     * Most likely you want to put the path to the shared-worker.js file in here.
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker?retiredLocale=de
     */

    workerInput: () => new Worker(new URL("./worker.ts", import.meta.url)),
    /**
     * (Optional) options
     * for the worker.
     */
    workerOptions: {
      type: "module",
      credentials: "include",
    },
  }),
});
