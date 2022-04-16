import React from 'react'
import { FiDownload } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
const cv = "https://docs.google.com/document/d/1JzRLnIAy7dcMivaH_nbSP-8mAITZPfb-/edit?usp=sharing&ouid=108754402425116319517&rtpof=true&sd=true";


const CV = () => {
  const { t } = useTranslation(["header"]);
  
  return (
    <div className="cv">
        <a href={cv} download target='_blank' rel="noopener noreferrer" className='btn'>{t("cv")} <FiDownload /></a>
        <a href="#contact" className='btn btn-primary'>{t("contact")}</a>
    </div>
  )
}

export default CV