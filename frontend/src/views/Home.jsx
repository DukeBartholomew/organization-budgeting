import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Card, Image, Text, SimpleGrid, Container, Table } from '@mantine/core';
import { DisplayOrgs } from '../components/DisplayOrgs';
import axios from 'axios';
import { ButtonCreateOrg } from '../components/ButtonCreateOrg';
import { NavbarMinimal } from '../components/NavbarMinimal';



const Home = () => {

    const url = "http://localhost:8000";

    const getOrganizations = () => {
        let allOrgs = [];
        axios
          .get(url + "/organizations")
          .then((res) => {
            // alert(JSON.stringify(res.data));
            allOrgs = res.data;
            
            setOrgs(allOrgs);
          })
          .catch((err) => {
            console.log(err);
          });

          console.log(allOrgs.length)
      };


    const [orgs, setOrgs] = useState('');

    useEffect(() => {
        getOrganizations();
    }, []);

  return <>
    <NavbarMinimal />
    <Navbar />
    <section style={{float: 'right', width: '80%', marginRight: '50px'}}>
      <Container bg="white">
        <Table horizontalSpacing="xl" verticalSpacing="xs" fontSize="md" striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th>Organization</th>
              <th>Name</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            {/* insert route to link all the orgs <br/> */}
          </tbody>
        </Table>
      </Container>
    <DisplayOrgs orgs={orgs}/>
    <ButtonCreateOrg/>
    </section>
    
    
    {/* <body>
      <Container py="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <Card
            id='cardFormat'
            shadow="sm"
            padding="xl"
            component="a"
            href=""
            target="_blank"
          >
            <Card.Section>
              <Image
                src="https://media.istockphoto.com/id/1263445363/vector/thumbs-up-and-thumb-down-icon-set-thumb-up-and-thumb-down-line-icons-flat-style-stock-vector.jpg?s=612x612&w=0&k=20&c=1691pznKcwlwUX10heBfh0Kyad0K1olWY6bzvHja91A="
                height={180}
                alt="No way!"
              />
            </Card.Section>

            <Text weight={500} size="lg" mt="md">
              Overview
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              Display the value of current org
            </Text>
          </Card>
          <Card
            id='cardFormat'
            shadow="sm"
            padding="xl"
            component="a"
            href="#"
          >
            <Card.Section>
              <Image
                src="https://media1.thehungryjpeg.com/thumbs2/ori_3663640_idxjg24mdrw501bh8u2ax4z4f2qjeq43y7vb672o_growing-cash-graph-pile-of-cash-money-value-red-rising-graph-arrow-a.jpg"
                height={180}
                alt="No way!"
              />
            </Card.Section>

            <Text weight={500} size="lg" mt="md">
              Your Budget
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              Please click anywhere on this card to view your budget expences
            </Text>
          </Card>
          <Card
            id='cardFormat'
            shadow="sm"
            padding="xl"
            component="a"
            href="#"
            target="_blank"
          >
            <Card.Section>
              <Image
                src="https://www.chargebackgurus.com/hs-fs/hubfs/cash%20back%20debit%20card%20transactions.png?width=2336&name=cash%20back%20debit%20card%20transactions.png"
                height={180}
                alt="No way!"
              />
            </Card.Section>

            <Text weight={500} size="lg" mt="md">
              Add Expeneces/Income
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              Please click anywhere on this card to add your expences and income to your budget
            </Text>
          </Card>
          <Card
            id='cardFormat'
            shadow="sm"
            padding="xl"
            component="a"
            href="#"
            target="_blank"
          >
            <Card.Section>
              <Image
                src="https://e7.pngegg.com/pngimages/953/222/png-clipart-computer-icons-avatar-business-user-profile-avatar-heroes-logo.png"
                height={180}
                alt="No way!"
              />
            </Card.Section>

            <Text weight={500} size="lg" mt="md">
              View Your organization
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              Please click anywhere on this card to view your organiztion or edit your setting
            </Text>
          </Card>

        </SimpleGrid>
      </Container>
    </body> */}

  </>
}

export default Home