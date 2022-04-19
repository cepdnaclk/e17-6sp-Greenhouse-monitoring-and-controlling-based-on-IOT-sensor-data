import React, { lazy } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CDropdown,
  CDropdownItem,
  CDropdownToggle,
  CDropdownMenu,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
} from '@coreui/react'

import diseases from 'src/assets/images/reports/charts.png'
import harvest from 'src/assets/images/reports/corre.jpg'
import growth from 'src/assets/images/reports/graph2.jpg'


const index = () => {
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }


    return (
        <>
        <CCard className="mb-4">
        <CCardBody>
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} >
        <CCol>
            <CCard style={{ height: '20rem', width: '20rem', alignItems:'center' }}>
                <CCardImage orientation="top" src={diseases} style={{ height: '15rem', width: '20rem' }}/>
                  <CCardBody>
                    <h5>Corelations</h5>
                    <CButton href="#" color="success" size="sm" style={{ alignSelf: "left" }}>Summary</CButton>
                    <CButton href="#" size="sm" >Detailed</CButton>
                  </CCardBody>
            </CCard>
        </CCol>

        <CCol>
            <CCard style={{ height: '20rem', width: '20rem', alignItems:'center' }}>
                <CCardImage orientation="top" src={growth} style={{ height: '15rem', width: '20rem' }}/>
                <CCardBody>
                  <h5>Predictions</h5>
                  <CButton href="#" color="success" size="sm">Summary</CButton>
                  <CButton href="#" size="sm">Detailed</CButton>
                </CCardBody>
            </CCard>        
        </CCol>

        </CRow>
        </CCardBody> 
        </CCard>

        <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableBody>
                    <CTableRow>
                      <CTableDataCell>
                        <h5>Corelation between temperature and humidity</h5>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <CButton href="#" color="success">Download</CButton>
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableDataCell>
                        <h5>Greenhouse control based on sensor data</h5>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <CButton href="#" color="success">Download</CButton>
                      </CTableDataCell>
                      
                    </CTableRow>

                    <CTableRow>
                      <CTableDataCell>
                        <h5>Greenhouse control based on sensor data</h5>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <CButton href="#" color="success">Download</CButton>
                      </CTableDataCell>
                      
                    </CTableRow>

                </CTableBody>
        </CTable>
        </>
      )
    }
    export default index