import Link from 'next/link'
import Header from '../components/Header'
import SignupForm from '../components/SignupForm.js'
import React from 'react'
import Layout from '../components/MyLayout.js'
import { Button } from 'reactstrap'

const Index = () => (
    <Layout>
      <h1>Welcome to MakersBnB</h1>
      <CardColumns>
        <Card>
          <CardBody>
            <CardTitle></CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText></CardText>
            <CardText></CardText>
            <Button></Button>
          </CardBody>
        </Card>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>Want to rent your own space?</CardTitle>
          <CardText>Sign up now to get started.</CardText>
          <Button>Sign up</Button>
        </Card>
        <Card body inverse color="primary">
          <CardTitle>Become a host</CardTitle>
          <CardText>Rent your space and disrupt your local rental market.</CardText>
          <Button color="secondary">Oh hell yeah...</Button>
        </Card>
      </CardColumns>
    </Layout>
)

export default Index
