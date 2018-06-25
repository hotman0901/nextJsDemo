import React from 'react'

import dynamic from 'next/dynamic'

const DynamicComp = dynamic(import('../components/Header/header'));

export const DynamicImport = (props) => {
    return(
        <div>       
            <DynamicComp />
        </div>
    )
}

export default DynamicImport