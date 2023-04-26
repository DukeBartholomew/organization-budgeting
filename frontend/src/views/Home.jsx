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

    // const th = (
    //   <tr>
    //           <th>Organization Name</th>
    //           <th>Budget</th>
    //   </tr>
    // )

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
          <th>Organization Name</th>
              <th>Budget</th>
          </thead>
          <DisplayOrgs orgs={orgs}/>
        </Table>
      </Container>
      {}
      <br />
      <br />
      <ButtonCreateOrg/>
    </section>
    

    
    {}

  </>
}

export default Home