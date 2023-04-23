import React from 'react'
import Split from 'react-split'
import CodeEditor from '../components/CodeEditor'
import Toolbar from '../components/Toolbar'
// import { Toolbar } from '@mui/material';
function CodingTest() {
    return (
        <Split
            className="splith"
        >
            <div>Questions</div>

            <Split
                className="split"
                direction="vertical"
                minSize={0}
            >

                <div>
                    <Toolbar/>
                    <CodeEditor/>
                    </div>
                <div>Result     </div>
            </Split>
        </Split>
    )
}

export default CodingTest