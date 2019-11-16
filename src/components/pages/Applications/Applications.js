import React, { useState } from 'react'
import Collapse from "../../Collapse/Collapse";
import ApplicationItem from "../../CollapseItems/ApplicationItem/ApplicationItem";
import EmptyItem from "../../CollapseItems/EmptyItem/EmptyItem";
import Form from 'react-bootstrap/Form';



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
                <Collapse title='Toutes les applications'>
                    <div>
                        {
                            apps.length > 0
                                ? <div>
                                    <Form.Control
                                        type="text"
                                        placeholder="Rechercher"
                                        //onChange={e => setSearch(e.target.value.toLowerCase())}
                                    />
                                </div>
                                : null
                        }
                        {
                            // eslint-disable-next-line no-undef
                            apps.filter(app => app.name.toLowerCase().includes("search")).map((app, i) => // TODO
                                <div key={i}>
                                    <div />
                                    <div>
                                        <div >{app.name}</div>
                                        <div >{app.url}</div>
                                    </div>
                                </div>,
                            )
                        }
                    </div>
                    {
                        apps.length > 0
                            ? apps.map((app, i) =>
                                <ApplicationItem name={app.name} status={app.url} key={i}/>,
                            )
                            : <EmptyItem/>
                    }
                </Collapse>
            </div>
        )
    }
}

export default Applications
