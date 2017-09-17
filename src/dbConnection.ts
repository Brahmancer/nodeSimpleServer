/**
* File: dbConnection.ts
* Author: dmiller4991@gmail.com
*
* Description:
*       A class that will represent all connections to the MongoDB
*       This will essentially open, do a series of transactions, then close.
*
*/

import { MongoClient } from "mongodb";

class DBConnection
{
    private readonly COLLECTIONS = ["People"];
    private url : string;
    private useCollIndex : number;

    constructor(metaData, collIndex = 0)
    {
        this.url = metaData.getUrl();
        this.useCollIndex = collIndex;
    }

    addItemToDB(item, callback)
    {
        MongoClient.connect(this.url, (err, db) => {
            if (!err)
            {
                db.collection(this.COLLECTIONS[this.useCollIndex])
                    .insertOne(item, (error, result) => {
                        if (!error)
                        {
                            // Success. Callback w/o err
                            callback();
                        }
                        else
                        {
                            // we had a failure in inserting the object. Callback w/err
                            callback(error);
                        }
                    });
            }
            else
            {
                // we had a failure in connecting. Callback w/err
                callback(err)
            }
        });
    }
}

// Export the Class so it can be used by other files.
export = DBConnection;
