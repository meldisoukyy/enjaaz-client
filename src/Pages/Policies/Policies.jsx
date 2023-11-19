import React from 'react'
import './Policies.scss'
import CommonHead from '../../Components/CommonHead/CommonHead'
import { t } from 'i18next'
const Policies = () => {
    return (
        <div >
            <CommonHead title={t('footer.ul10')} path={t('aboutus.path')} />
            <div className='Policies'>
                <div className="container">
                    <h1 className="section-title3">{t('footer.ul10')}</h1>
                    
                </div>
            </div>

        </div>
    )
}

export default Policies