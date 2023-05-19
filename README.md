# Brilliant Book Search Engine
![Brilliant-Book-Search-Engine-Picture](https://github.com/jamesxiong45/Brilliant-Book-Search-Engine/blob/master/Screen%20Capture.JPG)


## Description

The goal for this project was to add code into an existing directory to create a functioning react app that utilizes a book search API. 
This app is used search for books and save books that you potentially want to view later!

## Troubles

I had my app working fine and I was able to look up books and store them after logging in, but after running a few `npm run develop` commands, I started to get the error:

`
[0]     err = new ServerSelectionError();
[0]           ^
[0]
[0] MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
[0]     at _handleConnectionErrors (C:\Users\james\bootcamp\repos\Brilliant-Book-Search-Engine\server\node_modules\mongoose\lib\connection.js:792:11)        
[0]     at NativeConnection.openUri (C:\Users\james\bootcamp\repos\Brilliant-Book-Search-Engine\server\node_modules\mongoose\lib\connection.js:767:11) {     
[0]   reason: TopologyDescription {
[0]     type: 'Unknown',
[0]     servers: Map(1) {
[0]       'localhost:27017' => ServerDescription {
[0]         address: 'localhost:27017',
[0]         type: 'Unknown',
[0]         hosts: [],
[0]         passives: [],
[0]         arbiters: [],
[0]         tags: {},
[0]         minWireVersion: 0,
[0]         maxWireVersion: 0,
[0]         roundTripTime: -1,
[0]         lastUpdateTime: 42743665,
[0]         lastWriteDate: 0,
[0]         error: MongoNetworkError: connect ECONNREFUSED ::1:27017
[0]             at connectionFailureError (C:\Users\james\bootcamp\repos\Brilliant-Book-Search-Engine\server\node_modules\mongodb\lib\cmap\connect.js:370:20)[0]             at Socket.<anonymous> (C:\Users\james\bootcamp\repos\Brilliant-Book-Search-Engine\server\node_modules\mongodb\lib\cmap\connect.js:293:22)    
[0]             at Object.onceWrapper (node:events:627:26)
[0]             at Socket.emit (node:events:512:28)
[0]             at emitErrorNT (node:internal/streams/destroy:151:8)
[0]             at emitErrorCloseNT (node:internal/streams/destroy:116:3)
[0]             at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
[0]           cause: Error: connect ECONNREFUSED ::1:27017
[0]               at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1494:16) {
[0]             errno: -4078,
[0]             code: 'ECONNREFUSED',
[0]             syscall: 'connect',
[0]             address: '::1',
[0]             port: 27017
[0]           },
[0]           [Symbol(errorLabels)]: Set(1) { 'ResetPool' }
[0]         },
[0]         topologyVersion: null,
[0]         setName: null,
[0]         setVersion: null,
[0]         electionId: null,
[0]         logicalSessionTimeoutMinutes: null,
[0]         primary: null,
[0]         me: null,
[0]         '$clusterTime': null
[0]       }
[0]     },
[0]     stale: false,
[0]     compatible: true,
[0]     heartbeatFrequencyMS: 10000,
[0]     localThresholdMS: 15,
[0]     setName: null,
[0]     maxElectionId: null,
[0]     maxSetVersion: null,
[0]     commonWireVersion: 0,
[0]     logicalSessionTimeoutMinutes: null
[0]   },
[0]   code: undefined
[0] }
[0]
[0] Node.js v19.6.0
[0] [nodemon] app crashed - waiting for file changes before starting...
`

I'm thinking that it must be an issue when connecting to MongoDB.

## GitHub Repo
https://github.com/jamesxiong45/Brilliant-Book-Search-Engine
