import React from 'react';
import './index.css';

const Flex = () => {
    return (
        <div className="flex-wrap">
            <div className="flex-header">header</div>
            <div className="flex-content">
                <div className="text-overflow">
                    hihiiuuououojhihiiuuououojhihiiuuououojhihiiuuououojhihiiuuououojhihiiuuououojhihiiuuououojhihiiuuououojhihiiuuououojhihiiuuououojhihiiuuououojhihiiuuououoj/
                    hihiiuuououojhihiiuuououojhihiiuuououoj
                    hihiiuuououojhihiiuuououojhihiiuuououoj
                </div>
                <div className="text-overflow">hihiijijkjkjkj</div>
            </div>
            <div className="flex-actions">
                actions
                <div className="flex-actions-content">
                    <div className="flex-actions-item">item1</div>
                    <div className="flex-actions-item">item2</div>
                </div>
            </div>
        </div> 
    )
}

export default Flex;