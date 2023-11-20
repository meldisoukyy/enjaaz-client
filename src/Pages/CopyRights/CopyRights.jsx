import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { useMyContext } from '../../context/MyContext';

const CopyRights = () => {
    const { lang, setlang, t, i18n } = useMyContext();

    return (
        <>
            <CommonHead title={t('footer.ul11')} path={t('aboutus.path')} />
            <div className='Policies'>
                <div className="container">
                    <h1 className="section-title3">{t('footer.ul11')}</h1>
                    <div className="part">
                        <h4 className='mt-5 text-center'>نملك كافة حقوق الملكية الفكرية لموقعنا، وجميع المواد المنشورة فيه تخضع لحماية قوانين حقوق الطبع والنشر والمعاهدات العالمية، وجميع هذه الحقوق محفوظة.</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CopyRights