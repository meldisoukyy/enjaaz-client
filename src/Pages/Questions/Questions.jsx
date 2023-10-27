import React from 'react'
import CommonHead from '../../Components/CommonHead/CommonHead'
import CommonQ from '../../Components/CommonQ/CommonQ'
import { useMyContext } from '../../context/MyContext';
import { Helmet, HelmetAr } from '../../Apis/Apis';

const Questions = () => {
    const { lang, setlang, t, i18n } = useMyContext();
    lang==='ar'?HelmetAr('الاسئلة الشائعة'):
    Helmet('Common Questions')

    return (
        <div>
            <CommonHead title={t('cq.h1')} path={t('cq.path')} />
            <CommonQ full/>

        </div>
    )
}

export default Questions