import React from 'react';
import ColItemComp from '../Collection-items/ColItemComp';
import './PreviewCompStyles.scss'

function PreviewCollComp({title, items}) {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item,idx)=>idx<4).map(({id,...itemProps})=>(
                        <ColItemComp key={id} {...itemProps}></ColItemComp>
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollComp
