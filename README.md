# data-sync-playground
This "playground" app allows you to quickly test data-sync results when implementing a custom data-sync algorithm.

The application allows you to enter JSON data stored on two "clients", and on the "server", and simulate a data sync. 

The sync operation will apply your custom data-sync algorithm, and reflect the new state back on the client and the server.

![Data Sync Playground](/screenshot.png)

## USAGE

Open **index.html** in a browser.

## IMPLEMENTING THE SYNC ALGORITHM

Edit **app.js**.

At the top, you can specify the initial data for each of the "clients", and for the "server".

Below that, you will find the function **performDataSync**. This is the function where you can experiment with your sync algorithm.

This function takes the incoming JSON data from a "client", and the current JSON state of the "server". The function should implement a sync algorithm of your choosing, and return back the new state as JSON. The new state will be reflected in both the calling "client" and on the server.

The default "sync" implementation simply merges the client JSON data with the current server JSON data.
