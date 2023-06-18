import { Grid, GridItem, Skeleton, Center } from "@chakra-ui/react";
import React from "react";

function Loading() {
  return (
    <Center>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {Array.from({ length: 20 }).map((_, index) => (
          <GridItem key={index}>
            <Skeleton height="400px" width="300px" borderRadius={"30px"} />
            {/* <Skeleton mt={2} height="20px" width="80%" />
          <Skeleton mt={2} height="20px" width="60%" />
          <Skeleton mt={2} height="20px" width="70%" /> */}
          </GridItem>
        ))}
      </Grid>
    </Center>
  );
}

export default Loading;
