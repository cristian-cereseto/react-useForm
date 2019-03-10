import React from 'react'
import { TextField, Button } from '@material-ui/core'
import Flexbox from 'flexbox-react'
import { useForm } from '../../../form'
import { validatePhone } from '../helpers/validatePhone'
import { normalizePhone } from '../helpers/normalizePhone'

const FieldNormalize = () => {
  const form = useForm({
    fields: [
      { name: 'fullName', label: 'Full Name' },
      { name: 'nickname', label: 'Nickname', optional: true },
      { name: 'phone', label: 'Phone', validate: validatePhone, normalize: normalizePhone },
    ],
  })

  return (
    <form.Form>
      <Flexbox flexDirection='column'>
        <TextField {...form.fullName} />
        <TextField {...form.nickname} />
        <TextField {...form.phone} />
      </Flexbox>
      <Button type='sumit' onClick={form.submit}>Submit</Button>
    </form.Form>
  )
}

export { FieldNormalize }