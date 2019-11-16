import React, { useState } from 'react'
import Collapse from "../../Collapse/Collapse";
import ApplicationItem from "../../CollapseItems/ApplicationItem/ApplicationItem";
import EmptyItem from "../../CollapseItems/EmptyItem/EmptyItem";
import Form from 'react-bootstrap/Form';



const courses = [
    { name: 'UE blablabla'},
    { name: 'UE blablabla'},
    { name: 'UE blablabla'},
]


class Marks extends React.Component {


    render () {
        return (
            <div className='applicationItem'>
                {
                    courses.length > 0
                        ? courses.map((cours, i) =>
                            <> <Collapse title={cours.name} key={i}>
                                {
                                    <EmptyItem/>
                                }
                            </Collapse>
                                <br/>
                            </>
                        )
                        : <EmptyItem/>
                }
            </div>
        )
    }
}

export default Marks
