import React from 'react'
import { FiDownload } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
const cv = "https://drive.google.com/drive/folders/1Jjtmv2XNjMguUCpjJJ94yt6Hgwh0aoh_?usp=sharing";


const CV = () => {
  const { t } = useTranslation(["header"]);
  
  return (
    <div className="cv">
        <a href={cv} download target='_blank' rel="noopener noreferrer" className='btn'>{t("header:cv")} <FiDownload /></a>
        <a href="#contact" className='btn btn-primary'>{t("header:contact")}</a>
    </div>
  )
}

export default CV;