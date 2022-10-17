import React from 'react';

type Props = {
    mainText: string
}

const MainText: React.FC<Props> = ({ mainText }) => (
        <div className='main_text'>
            {mainText}
        </div>
    )

export default MainText