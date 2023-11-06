"use client";

import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcAndroidOs, FcReading } from "react-icons/fc";
import { MdOutlineDeveloperMode } from "react-icons/md";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function FeatureSection() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAndroidOs} w={10} h={10} />}
          title={"AI Development"}
          text={
            "Customized AI solutions designed to meet your unique business needs. We turn your AI ideas into reality."
          }
        />
        <Feature
          icon={<Icon as={FcReading} w={10} h={10} />}
          title={"Machine Learning Mastery"}
          text={
            "Our team of experts excels in machine learning, creating secure and efficient solutions that deliver results for your business."
          }
        />
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"AI Consulting"}
          text={
            "Navigate the dynamic AI landscape with our expert guidance. We help you make informed decisions and stay ahead in the field."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
