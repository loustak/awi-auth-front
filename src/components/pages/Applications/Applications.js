import React from 'react'
import Collapse from "../../Collapse/Collapse";
import ApplicationItem from "../../CollapseItems/ApplicationItem/ApplicationItem";
import EmptyItem from "../../CollapseItems/EmptyItem/EmptyItem";

const apps = [
    { name: 'App1', url: 'url' },
    { name: 'App2', url: 'url' },
    { name: 'App3', url: 'url' },
]

class Applications extends React.Component {
    render () {
        return (
            <div className='applicationItem'>
                <Collapse title='Récemment ouvertes'>
                    {
                        apps.length > 0
                            ? apps.map((app, i) =>
                                <ApplicationItem name={app.name} status={app.url} key={i}/>,
                            )
                            : <EmptyItem/>
                    }
                </Collapse>
                <br/>

            </div>
        )
    }
}

export default Applications
