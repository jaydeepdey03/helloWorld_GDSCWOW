import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form, Formik } from 'formik'
import { Box, Button, Center, FormControl, FormLabel, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import ToggleTheme from './components/ToggleTheme'

function App() {
  const [formData, setFormData] = useState({
    sex: '',
    highestQualification: '',
    rural: '',
    disabilityStatus: '',
    isWaterFilter: '',
    chew: '',
    smoke: '',
    alchohol: '',
    treatmentSource: ''
  });
  const [response, setResponse] = useState(28)
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Send data to backend or perform other actions
    try {
      const response = await axios.post('http://localhost:5000/predict',

        {
          "a": parseInt(formData.sex),
          "b": parseInt(formData.highestQualification),
          "c": parseInt(formData.rural),
          "d": parseInt(formData.disabilityStatus),
          "e": parseInt(formData.isWaterFilter),
          "f": parseInt(formData.chew),
          "g": parseInt(formData.smoke),
          "h": parseInt(formData.alchohol),
          "i": parseInt(formData.treatmentSource),
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(response.data)
      setResponse(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }


  return (
    <VStack spacing={"20"} minH={"100vh"} width={""}>
      <Heading>Mortality Prediction App</Heading>
      <VStack spacing={"4"} minH={"100vh"} minW={"50vw"}>

      <ToggleTheme />
        <FormControl>
          <FormLabel>Sex</FormLabel>
          <NumberInput>
            <NumberInputField placeholder="Sex"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Highest Qualification</FormLabel>
          <NumberInput>
            <NumberInputField placeholder="Highest Qualification"
              name="highestQualification"
              value={formData.highestQualification}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Rural</FormLabel>
          <NumberInput>
            <NumberInputField placeholder="Rural"
              name="rural"
              value={formData.rural}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Disability Status</FormLabel>
          <NumberInput>
            <NumberInputField placeholder="Disablity Status"
              name="disabilityStatus"
              value={formData.disabilityStatus}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Is Water Filter</FormLabel>
          <NumberInput>
            <NumberInputField placeholder="Is Water Filter"
              name="isWaterFilter"
              value={formData.isWaterFilter}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Chew</FormLabel>
          <NumberInput>
            <NumberInputField placeholder="Chew"
              name="chew"
              value={formData.chew}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Smoke</FormLabel>
          <NumberInput>
            <NumberInputField placeholder="Smoke"
              name="smoke"
              value={formData.smoke}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Alchohol</FormLabel>
          <NumberInput>
            <NumberInputField placeholder="Alchohol"
              name="alchohol"
              value={formData.alchohol}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Treatment Source</FormLabel>
          <NumberInput>
            <NumberInputField placeholder="Treatment Source"
              name="treatmentSource"
              value={formData.treatmentSource}
              onChange={handleChange}
            />
          </NumberInput>
        </FormControl>

        <Button colorScheme='teal' onClick={handleSubmit} width={"full"}>Submit</Button>
      </VStack>
      <Box>
        <Text>Prediction: {Math.round(response)}</Text>

      </Box>
    </VStack >
  )
}

export default App
