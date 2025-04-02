# �� Node Libreria 2

Un'applicazione Node.js che gestisce una collezione di libri, permettendo operazioni CRUD (Create, Read, Update, Delete) attraverso un'architettura modulare con controller, middleware e router.

## ��️ Tecnologie Utilizzate

- �� **Node.js**: Ambiente di runtime JavaScript per l'esecuzione del codice server-side.
- �� **Express**: Framework web per Node.js che semplifica la creazione di applicazioni web e API.

## �� Struttura del Progetto

- **`controllers/`**: Contiene i file che gestiscono la logica delle operazioni sui libri.
- **`data/`**: Include i dati relativi ai libri.
- **`middlewares/`**: Contiene middleware personalizzati per la gestione delle richieste.
- **`routers/`**: Definisce le rotte dell'applicazione e collega i controller alle rotte corrispondenti.
- **`app.js`**: File principale che configura l'applicazione Express e registra i middleware e le rotte.
- **`package.json`**: File che gestisce le dipendenze e le informazioni sul progetto.

## �� Installazione e Avvio

1. **Installa le dipendenze**:

   ```bash
   npm install
   ```

2. **Avvia l'applicazione**:

   ```bash
   npm run start
   ```

   ```bash
   npm run dev
   ```

   L'applicazione sarà in esecuzione su `http://localhost:3000`.

## �� Utilizzo delle API

- **`GET /books`**: Restituisce la lista di tutti i libri.
- **`GET /books/:id`**: Restituisce il libro con l'ID specificato.
- **`POST /books`**: Crea un nuovo libro.
- **`PUT /books/:id`**: Aggiorna il libro con l'ID specificato.
- **`DELETE /books/:id`**: Elimina il libro con l'ID specificato.

Per testare questi endpoint, puoi utilizzare strumenti come Postman o cURL.

## �� Contributi

- [@Mattia Zecchinato](https://www.github.com/MattiaZecchinato)
- [@Willy Marino](https://github.com/willymariino)
- [@Enrico Ciccolini](https://github.com/EnricoCiccolini)
- [@Pierdomenico Pacilio](https://github.com/PierdomenicoPacilio)