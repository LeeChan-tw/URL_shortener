2020-12-07T07:54:07.883534+00:00 heroku[web.1]: Process exited with status 143
2020-12-07T09:09:36.912420+00:00 heroku[web.1]: Unidling
2020-12-07T09:09:36.918611+00:00 heroku[web.1]: State changed from down to starting
2020-12-07T09:09:40.393768+00:00 heroku[web.1]: Starting process with command `npm start`
2020-12-07T09:09:44.648167+00:00 app[web.1]:
2020-12-07T09:09:44.648198+00:00 app[web.1]: > URL_shortener@1.0.0 start /app
2020-12-07T09:09:44.648198+00:00 app[web.1]: > node app.js
2020-12-07T09:09:44.648199+00:00 app[web.1]:
2020-12-07T09:09:45.952711+00:00 app[web.1]: App is running on http://localhost:46101
2020-12-07T09:09:46.229834+00:00 heroku[web.1]: State changed from starting to up
2020-12-07T09:09:47.733882+00:00 app[web.1]: mongodb error!
2020-12-07T09:09:47.740668+00:00 app[web.1]: (node:23) UnhandledPromiseRejectionWarning: MongoError: bad auth : Authentication failed.
2020-12-07T09:09:47.740669+00:00 app[web.1]: at MessageStream.messageHandler (/app/node_modules/mongodb/lib/cmap/connection.js:268:20)
2020-12-07T09:09:47.740670+00:00 app[web.1]: at MessageStream.emit (events.js:314:20)
2020-12-07T09:09:47.740670+00:00 app[web.1]: at processIncomingData (/app/node_modules/mongodb/lib/cmap/message_stream.js:144:12)
2020-12-07T09:09:47.740671+00:00 app[web.1]: at MessageStream.\_write (/app/node_modules/mongodb/lib/cmap/message_stream.js:42:5)
2020-12-07T09:09:47.740671+00:00 app[web.1]: at doWrite (\_stream_writable.js:403:12)
2020-12-07T09:09:47.740672+00:00 app[web.1]: at writeOrBuffer (\_stream_writable.js:387:5)
2020-12-07T09:09:47.740673+00:00 app[web.1]: at MessageStream.Writable.write (\_stream_writable.js:318:11)
2020-12-07T09:09:47.740673+00:00 app[web.1]: at TLSSocket.ondata (\_stream_readable.js:718:22)
2020-12-07T09:09:47.740674+00:00 app[web.1]: at TLSSocket.emit (events.js:314:20)
2020-12-07T09:09:47.740674+00:00 app[web.1]: at addChunk (\_stream_readable.js:297:12)
2020-12-07T09:09:47.740675+00:00 app[web.1]: at readableAddChunk (\_stream_readable.js:272:9)
2020-12-07T09:09:47.740675+00:00 app[web.1]: at TLSSocket.Readable.push (\_stream_readable.js:213:10)
2020-12-07T09:09:47.740676+00:00 app[web.1]: at TLSWrap.onStreamRead (internal/stream_base_commons.js:188:23)
2020-12-07T09:09:47.746958+00:00 app[web.1]: (node:23) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
2020-12-07T09:09:47.747135+00:00 app[web.1]: (node:23) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
2020-12-07T09:10:18.982224+00:00 heroku[router]: at=error code=H12 desc="Request timeout" method=GET path="/favicon.ico" host=short88.herokuapp.com request_id=b82105ac-bb14-491e-8cec-43fc97556326 fwd="60.250.228.117" dyno=web.1 connect=0ms service=30000ms status=503 bytes=0 protocol=https
2020-12-07T09:41:38.569854+00:00 heroku[web.1]: Idling
2020-12-07T09:41:38.572562+00:00 heroku[web.1]: State changed from up to down
2020-12-07T09:41:43.418219+00:00 heroku[web.1]: Stopping all processes with SIGTERM
2020-12-07T09:41:43.591259+00:00 heroku[web.1]: Process exited with status 143
2020-12-07T15:18:20.000000+00:00 app[api]: Build started by user lee79102@hotmail.com
2020-12-07T15:18:38.615852+00:00 app[api]: Deploy 15e0e74b by user lee79102@hotmail.com
2020-12-07T15:18:38.615852+00:00 app[api]: Release v9 created by user lee79102@hotmail.com
2020-12-07T15:18:38.957460+00:00 heroku[web.1]: State changed from down to starting
2020-12-07T15:18:39.000000+00:00 app[api]: Build succeeded
2020-12-07T15:18:41.230039+00:00 heroku[web.1]: Starting process with command `npm start`
2020-12-07T15:18:45.527981+00:00 app[web.1]:
2020-12-07T15:18:45.528004+00:00 app[web.1]: > URL_shortener@1.0.0 start /app
2020-12-07T15:18:45.528004+00:00 app[web.1]: > node app.js
2020-12-07T15:18:45.528005+00:00 app[web.1]:
2020-12-07T15:18:46.153097+00:00 app[web.1]: App is running on http://localhost:22457
2020-12-07T15:18:46.578992+00:00 heroku[web.1]: State changed from starting to up
2020-12-07T15:18:47.759867+00:00 app[web.1]: mongodb error!
2020-12-07T15:18:47.761125+00:00 app[web.1]: (node:23) UnhandledPromiseRejectionWarning: MongoError: bad auth : Authentication failed.
2020-12-07T15:18:47.761126+00:00 app[web.1]: at MessageStream.messageHandler (/app/node_modules/mongodb/lib/cmap/connection.js:268:20)
2020-12-07T15:18:47.761127+00:00 app[web.1]: at MessageStream.emit (events.js:314:20)
2020-12-07T15:18:47.761127+00:00 app[web.1]: at processIncomingData (/app/node_modules/mongodb/lib/cmap/message_stream.js:144:12)
2020-12-07T15:18:47.761128+00:00 app[web.1]: at MessageStream.\_write (/app/node_modules/mongodb/lib/cmap/message_stream.js:42:5)
2020-12-07T15:18:47.761128+00:00 app[web.1]: at doWrite (\_stream_writable.js:403:12)
2020-12-07T15:18:47.761129+00:00 app[web.1]: at writeOrBuffer (\_stream_writable.js:387:5)
2020-12-07T15:18:47.761129+00:00 app[web.1]: at MessageStream.Writable.write (\_stream_writable.js:318:11)
2020-12-07T15:18:47.761130+00:00 app[web.1]: at TLSSocket.ondata (\_stream_readable.js:718:22)
2020-12-07T15:18:47.761131+00:00 app[web.1]: at TLSSocket.emit (events.js:314:20)
2020-12-07T15:18:47.761131+00:00 app[web.1]: at addChunk (\_stream_readable.js:297:12)
2020-12-07T15:18:47.761131+00:00 app[web.1]: at readableAddChunk (\_stream_readable.js:272:9)
2020-12-07T15:18:47.761132+00:00 app[web.1]: at TLSSocket.Readable.push (\_stream_readable.js:213:10)
2020-12-07T15:18:47.761132+00:00 app[web.1]: at TLSWrap.onStreamRead (internal/stream_base_commons.js:188:23)
2020-12-07T15:18:47.761231+00:00 app[web.1]: (node:23) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
2020-12-07T15:18:47.761315+00:00 app[web.1]: (node:23) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
2020-12-07T15:24:07.348975+00:00 heroku[router]: at=info method=GET path="/" host=short88.herokuapp.com request_id=dbd91d1d-6d8d-4e60-88c8-d8401f720b22 fwd="219.70.236.119" dyno=web.1 connect=0ms service=39ms status=200 bytes=2806 protocol=https
2020-12-07T15:24:07.693591+00:00 heroku[router]: at=info method=GET path="/images/change_noback.png" host=short88.herokuapp.com request_id=ca0d5d34-7493-4ca6-806b-d5d8024d2fce fwd="219.70.236.119" dyno=web.1 connect=0ms service=14ms status=200 bytes=248568 protocol=https
2020-12-07T15:24:38.851069+00:00 heroku[router]: at=error code=H12 desc="Request timeout" method=GET path="/favicon.ico" host=short88.herokuapp.com request_id=f7c9180f-59ac-451c-a553-3b1fcc402f6d fwd="219.70.236.119" dyno=web.1 connect=0ms service=30000ms status=503 bytes=0 protocol=https
2020-12-07T15:24:43.675240+00:00 heroku[router]: at=error code=H12 desc="Request timeout" method=POST path="/" host=short88.herokuapp.com request_id=f6d888ce-51be-4d01-9ea3-ce2003cc0344 fwd="219.70.236.119" dyno=web.1 connect=0ms service=30001ms status=503 bytes=0 protocol=https
2020-12-07T15:25:14.255732+00:00 heroku[router]: at=error code=H12 desc="Request timeout" method=GET path="/favicon.ico" host=short88.herokuapp.com request_id=794bc299-ec70-4db9-aa64-10173789b8fa fwd="219.70.236.119" dyno=web.1 connect=1ms service=30000ms status=503 bytes=0 protocol=https
2020-12-07T15:26:01.545627+00:00 heroku[router]: at=error code=H12 desc="Request timeout" method=GET path="/favicon.ico" host=short88.herokuapp.com request_id=ccef2d63-85bc-4238-9375-07e6593978f2 fwd="219.70.236.119" dyno=web.1 connect=0ms service=30000ms status=503 bytes=0 protocol=https
2020-12-07T15:57:31.959836+00:00 heroku[web.1]: Idling
2020-12-07T15:57:31.962036+00:00 heroku[web.1]: State changed from up to down
2020-12-07T15:57:33.026529+00:00 heroku[web.1]: Stopping all processes with SIGTERM
2020-12-07T15:57:33.129836+00:00 heroku[web.1]: Process exited with status 143
2020-12-07T15:57:39.124943+00:00 heroku[web.1]: Unidling
2020-12-07T15:57:39.127118+00:00 heroku[web.1]: State changed from down to starting
2020-12-07T15:57:43.980688+00:00 heroku[web.1]: Starting process with command `npm start`
2020-12-07T15:57:48.843990+00:00 app[web.1]:
2020-12-07T15:57:48.844065+00:00 app[web.1]: > URL_shortener@1.0.0 start /app
2020-12-07T15:57:48.844066+00:00 app[web.1]: > node app.js
2020-12-07T15:57:48.844067+00:00 app[web.1]:
2020-12-07T15:57:50.422955+00:00 app[web.1]: App is running on http://localhost:29391
2020-12-07T15:57:50.707914+00:00 heroku[web.1]: State changed from starting to up
2020-12-07T15:57:52.292443+00:00 app[web.1]: mongodb error!
2020-12-07T15:57:52.294879+00:00 app[web.1]: (node:23) UnhandledPromiseRejectionWarning: MongoError: bad auth : Authentication failed.
2020-12-07T15:57:52.294880+00:00 app[web.1]: at MessageStream.messageHandler (/app/node_modules/mongodb/lib/cmap/connection.js:268:20)
2020-12-07T15:57:52.294881+00:00 app[web.1]: at MessageStream.emit (events.js:314:20)
2020-12-07T15:57:52.294882+00:00 app[web.1]: at processIncomingData (/app/node_modules/mongodb/lib/cmap/message_stream.js:144:12)
2020-12-07T15:57:52.294882+00:00 app[web.1]: at MessageStream.\_write (/app/node_modules/mongodb/lib/cmap/message_stream.js:42:5)
2020-12-07T15:57:52.294883+00:00 app[web.1]: at doWrite (\_stream_writable.js:403:12)
2020-12-07T15:57:52.294885+00:00 app[web.1]: at writeOrBuffer (\_stream_writable.js:387:5)
2020-12-07T15:57:52.294886+00:00 app[web.1]: at MessageStream.Writable.write (\_stream_writable.js:318:11)
2020-12-07T15:57:52.294886+00:00 app[web.1]: at TLSSocket.ondata (\_stream_readable.js:718:22)
2020-12-07T15:57:52.294887+00:00 app[web.1]: at TLSSocket.emit (events.js:314:20)
2020-12-07T15:57:52.294887+00:00 app[web.1]: at addChunk (\_stream_readable.js:297:12)
2020-12-07T15:57:52.294888+00:00 app[web.1]: at readableAddChunk (\_stream_readable.js:272:9)
2020-12-07T15:57:52.294888+00:00 app[web.1]: at TLSSocket.Readable.push (\_stream_readable.js:213:10)
2020-12-07T15:57:52.294889+00:00 app[web.1]: at TLSWrap.onStreamRead (internal/stream_base_commons.js:188:23)
2020-12-07T15:57:52.295005+00:00 app[web.1]: (node:23) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
2020-12-07T15:57:52.295114+00:00 app[web.1]: (node:23) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
2020-12-07T15:57:53.374306+00:00 heroku[router]: at=info method=GET path="/" host=short88.herokuapp.com request_id=a9bab043-b342-4533-9299-75caed2eecf6 fwd="219.70.236.119" dyno=web.1 connect=1ms service=166ms status=304 bytes=151 protocol=https
2020-12-07T15:57:53.812457+00:00 heroku[router]: at=info method=GET path="/images/change_noback.png" host=short88.herokuapp.com request_id=1c9e0c7b-d7c5-4091-bc01-3cc2f163867a fwd="219.70.236.119" dyno=web.1 connect=0ms service=95ms status=200 bytes=248568 protocol=https
2020-12-07T15:58:40.848686+00:00 heroku[router]: at=error code=H12 desc="Request timeout" method=POST path="/" host=short88.herokuapp.com request_id=42322c3c-23bd-489a-959f-7328e8f05cd8 fwd="219.70.236.119" dyno=web.1 connect=6ms service=30000ms status=503 bytes=0 protocol=https
