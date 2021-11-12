//
// Data Sync Playground
// Andrey Butov
// https://github.com/andreybutov/data-sync-playground
//

// ----------------------------------------------------------------------------

//
// This is your data sync function. Imagine it runs on your "server". 
//
// incomingClientState is JSON data containing the complete state sent
// by a "client", to your "server", in a sync attempt.
//
// serverState is JSON data containing the complete state on the "server".
//
// Implement your sync algorithm and return the new state as JSON. The returned 
// JSON will be set as the new state on the "server", and sent back as the new 
// state to the "client".
//

function performDataSync(incomingClientState, serverState) {
	console.log("performDataSync called");
	return serverState;
}





// ----------------------------------------------------------------------------
// INTERNAL
// ----------------------------------------------------------------------------

const editorClient1 = new JSONEditor(document.getElementById("json-editor-client-1"), {});
const editorClient2 = new JSONEditor(document.getElementById("json-editor-client-2"), {});
const editorServer = new JSONEditor(document.getElementById("json-editor-server"), {});

editorClient1.set({
	"Key-A1" : "Value-A1",
	"Key-A2" : "Value-A2"
});

editorClient2.set({
	"Key-B1" : "Value-B1",
	"Key-B2" : "Value-B2"
});

editorServer.set({

});

// const updatedJSON = editorServer.get();

// performDataSync();
