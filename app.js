//
// Data Sync Playground
// Andrey Butov
// https://github.com/andreybutov/data-sync-playground
//

// ----------------------------------------------------------------------------

//
// These are your initial data sets. One for each of the clients, and one
// for the server.
//

const initialDataClient1 = {
	"Dune" : {
		"Author" : "Frank Herbert",
		"Publication Year" : "1965"
	},
	"Neuromancer" : {
		"Author" : "William Gibson",
		"Publication Year" : "1984"
	}
};

const initialDataClient2 = {
	"The Martian" : {
		"Author" : "Andy Weir",
		"Publication Year" : "2011"
	},
	"The Three-Body Problem" : {
		"Author" : "Liu Cixin",
		"Publication Year" : "2008"
	}
}

const initialDataServer = {
	// No data initially.
}


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
	log("Performing data sync ...");

	// For example, here we're just merging the server state and client state.
	// But you'll implement something smarter. :)
	
	return { ...serverState, ...incomingClientState };
}





// ----------------------------------------------------------------------------
// INTERNAL
// ----------------------------------------------------------------------------

const logWindow = document.getElementById("logWindow");

const clientOptions = {
	mode: 'code',
	modes: ['code', 'tree'],
	enableTransform: false,
	enableSort: false,
	search: false
}

const serverOptions = {
	'mode': 'view', // read-only
	search: false,
	enableTransform: false,
	enableSort: false,
}

const editorClient1 = new JSONEditor(document.getElementById("json-editor-client-1"), clientOptions);
const editorClient2 = new JSONEditor(document.getElementById("json-editor-client-2"), clientOptions);
const editorServer = new JSONEditor(document.getElementById("json-editor-server"), serverOptions);

document.getElementById("syncButtonClient1").onclick = () => onSyncBtnClicked(editorClient1);
document.getElementById("syncButtonClient2").onclick = () => onSyncBtnClicked(editorClient2);
document.getElementById("resetButton").onclick = reset;

reset();



function log(s) {
	let p = document.createElement("p");
	p.append(s);
	logWindow.prepend(p);
}



function reset() {
	editorClient1.set(initialDataClient1);
	editorClient2.set(initialDataClient2);
	editorServer.set(initialDataServer);
	logWindow.innerHTML = '';
	log("Welcome to the data sync playground ...");
}



function onSyncBtnClicked(clientEditor) {
	try {
		let clientJSON = clientEditor.get();
		let serverJSON = editorServer.get();
		let newJSON = performDataSync(clientJSON, serverJSON);
		clientEditor.set(newJSON);
		editorServer.set(newJSON);
	} catch(e) {
		log("Could not sync data. Invalid JSON? " + e);
	}
}