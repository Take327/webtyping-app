import React from 'react';

type Props = {
    kanaText: string
}

const KanaText: React.FC<Props> = ({ kanaText }) => (
        <div className='kana_text'>
            {kanaText}
        </div>
    )

export default KanaText;
