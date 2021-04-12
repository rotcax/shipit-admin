import React from 'react'
import DestinyForm from '../DestinyForm'
import SizesForm from '../SizesForm'
import SellerForm from '../SellerForm'
import CourierForm from '../CourierForm'
import InsuranceForm from '../InsuranceForm'
import ShipmentResume from '../ShipmentResume'
import {
  setDestinyValues,
  setSellerValues,
  setSizesValues,
  setCourierValues,
  setInsuranceValues,
  clearShipmentForm
} from '@store/actions'

export const steps = [
  {
    title: 'Destino',
    content: <DestinyForm />,
  },
  {
    title: 'Medidas',
    content: <SizesForm />,
  },
  {
    title: 'Vendedor',
    content: <SellerForm />,
  },
  {
    title: 'Courier',
    content: <CourierForm />,
  },
  {
    title: 'Seguro',
    content: <InsuranceForm />,
  },
  {
    title: 'Finalizar',
    content: <ShipmentResume />,
  }
]

export const currentAction = (step: number) => {
  switch(step) {
    case 0:
      return setDestinyValues

    case 1:
      return setSizesValues

    case 2:
      return setSellerValues

    case 3:
      return setCourierValues

    case 4:
      return setInsuranceValues

    default:
      return clearShipmentForm
  }
}
