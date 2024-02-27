import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import { Tailwind } from "@react-email/tailwind";
  import * as React from "react";
  

  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  

  
  export const EmailTemplate = ({
    response,

    
    
    

  }) => {
    const PropDefaults = {
      info: [
        {
          id: 1,
          Description: (
            <li className="mb-20" key={1}>
              <strong>Appointment Date :</strong>{" "}
              {response.data.Date}
            </li>
          ),
        },
        {
          id: 2,
          Description: (
            <li className="mb-20" key={2}>
              <strong>Appointment Time :</strong> 
              {response.data.Time}
            </li>
          ),
        },
        
      ],
      links: ["Visit the forums", "Read the docs", "Contact an expert"],
    };

    const info = PropDefaults.info
    const links = PropDefaults.links

    console.log(response)
    return (
      <Html>
        <Head />
        <Preview>DocBooking Welcome</Preview>
        <Tailwind
          config={{
            theme: {
              extend: {
                colors: {
                  brand: "#219874",
                  offwhite: "#fafbfb",
                },
                spacing: {
                  0: "0px",
                  20: "20px",
                  45: "45px",
                },
              },
            },
          }}
        >
          <Body className="bg-offwhite text-base font-sans ">
            <Img
              src={`${baseUrl}/LOGO.svg`}
              width="184"
              height="75"
              alt="DocBook"
              className="mx-auto my-20"
            />
            <Container className="bg-white p-45">
              <Heading className="text-center my-0 leading-8">
                Welcome  <span className="text-primary"> {response.data.UserName} </span> 
              </Heading>
  
              <Section>
                <Row>
                  <Text className="text-base">
                    Congratulations! You're Appointment is successfully sent.
                  </Text>
  
                  <Text className="text-base">Here's your Appointment informations :</Text>
                </Row>
              </Section>
  
              <ul>{info?.map(({ Description }) => Description)}</ul>

              <Section className="text-center">
                <Button className="bg-brand text-white rounded-lg py-3 px-[18px]">
                  Go to your dashboard
                </Button>
              </Section>
  
              <Section className="mt-45">
                <Row>
                  {links?.map((link) => (
                    <Column key={link}>
                      <Link className="text-green-800 underline font-bold">
                        {link}
                      </Link>{" "}
                      <span className="text-green-800">→</span>
                    </Column>
                  ))}
                </Row>
              </Section>
            </Container>
  
            <Container className="mt-20">
              <Section>
                <Row>
                  <Column className="text-right px-20">
                    <Link>Unsubscribe</Link>
                  </Column>
                  <Column className="text-left">
                    <Link>Manage Preferences</Link>
                  </Column>
                </Row>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default EmailTemplate;
  
