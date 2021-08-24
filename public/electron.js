const { app, BrowserWindow,ipcMain,Notification } = require('electron')
const nativeImage = require('electron').nativeImage
const isDev = process.env.NODE_ENV !== 'development'

const image = nativeImage.createFromPath('/Users/lqd/WebstormProjects/u-play-ts/public/static/images/icon.png')
app.dock.setIcon(image)

app.on('ready', () => {
	const mainWindow = new BrowserWindow({
		width: 1200,
		height: 800,
		titleBarStyle:'default',
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true,
			preload: __dirname + '/preload.js'

		}
	})
	!isDev ? mainWindow.loadURL(`file://${__dirname}\\index.html`) : mainWindow.loadURL(`http://localhost:3000`)
})

ipcMain.on('pong', (event, arg) => {
	console.log('---',arg) // prints "ping"
	event.reply('asynchronous-reply', 'pong')
})

ipcMain.on('ping', (event, arg) => {
	console.log('--1-',arg) // prints "ping"
	showNotification()
	event.reply('pong','pong')
})
const NOTIFICATION_TITLE = '来消息啦~'
const NOTIFICATION_BODY = 'Notification from the Main process'

function showNotification () {
	new Notification({
		title: NOTIFICATION_TITLE,
		icon:image,
		body: NOTIFICATION_BODY }).show()
}

