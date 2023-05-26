// --------------- LIBRARIES ---------------
import {appSchema, tableSchema} from '@nozbe/watermelondb';

// --------------- TABLE SCHEMA ---------------
export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'categories',
      columns: [{name: 'name', type: 'string'}],
    }),
  ],
});
