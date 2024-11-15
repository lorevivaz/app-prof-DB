import * as SQLite from 'expo-sqlite';


export default class DBcontroller {

    // qui creo il costruttore per inizializzare il database
   constructor() {
    this.db = null ;
   }

// qui creo la funzione per aprire il database con il metodo openDatabaseSync
// execAsync esegue una query SQL di tipo DDL (Data Definition Language) come CREATE TABLE
async openDB() {
       this.db =  await SQLite.openDatabaseSync('usersBD');
       const query = "CREATE TABLE IF NOT EXISTS Users (ID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT );";
       await this.db.execAsync(query);    
   
      }
// metodo asincrono per salvare un utente nel database
// runAsync che esegue una query SQL di tipo DML (Data Manipulation Language) come INSERT INTO
async saveUser(name) {
    const query = "INSERT INTO Users (name) VALUES (?);";
    await this.db.runAsync(query, name);
}

// metodo asincrono per ottenere il primo utente dal database con getFirstAsync 
// getFirstAsync che esegue una query SQL di tipo DQL (Data Query Language) come SELECT

async getFirstUser() {
    const query = "SELECT * FROM Users ;";
    const result = await this.db.getFirstAsync(query);
    return result;
}

// metodo asincrono per ottenere tutti gli utenti dal database con getAllAsync
// getAllAsync che esegue una query SQL di tipo DQL (Data Query Language) come SELECT

async getAllUsers() {
    const query = "SELECT * FROM Users ;";
    const result = await this.db.getAllAsync(query);
    return result;
}


}

    