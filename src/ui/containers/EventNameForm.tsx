import React from "react";
import Box from "../components/Box";
import Flex from "../components/Flex";
import Label from "../components/Label";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Text from "../components/Text";

interface Props {}

const EventNameForm: React.FC<Props> = () => {
  return (
    <Box>
      <Text css={{ fontSize: 20, fontWeight: 450, marginBottom: 32 }}>
        Create Event
      </Text>
      <Flex css={{ flexDirection: "column" }}>
        <Box>
          <Label htmlFor="eventName">Event Name</Label>
          <Input placeholder="26th Birthday" id="eventName" />
        </Box>
        <Box>
          <Label htmlFor="description">Description</Label>
          <Textarea placeholder="I'm throwing a birthday party..." id="description" />
        </Box>
      </Flex>
    </Box>
  );
};

export default EventNameForm;
