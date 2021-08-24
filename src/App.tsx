import React from 'react'
import { Switch } from 'react-router-dom'
import { routes } from './lib/auth/routes'
import FrontendAuth from './lib/auth/FrontendAuth'

function App() {
    return (
        <>
            <Switch>
                <FrontendAuth routes={routes} />
            </Switch>
        </>
    )
}

export default App
