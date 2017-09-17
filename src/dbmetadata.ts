/**
* File: dbmetadata.ts
* Author: dmiller4991@gmail.com
*
* Description:
*       A class that holds all the Meta Data relevant to the MongoDB
*
*/


class DBMetaData
{
    username : string;
    password : string;
    address : string;

    constructor(private name:string, private pass: string)
    {
        this.username = name;
        this.password = pass;
    }

    setUsername(name: string)
    {
        this.username = name;
    }

    setPassword(pass: string)
    {
        this.password = pass;
    }

    getUsername()
    {
        return this.username;
    }

    getPassword()
    {
        return this.password;
    }

    setUrl(url: string)
    {
        this.address = url
    }

    getUrl()
    {
        return this.address;
    }

}

// Export the Class so it can be used by other files.
export = DBMetaData;
