import React from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  marginContent: {
    marginTop: "2rem",
  },
}));

const Content = () => {
  const classes = useStyle();

  return (
    <Grid container spacing={2} className={classes.marginContent}>
      <Grid item xs={12} sm={6} lg={4}>
        <CoffeCard
          title={"Play Station 4"}
          subtitle={"$350"}
          imgSrc="https://images-na.ssl-images-amazon.com/images/I/715RBdgZtHL._SX522_.jpg"
          description={
            " Includes a new slim 1TB PlayStation  4 system, a matching DualShock 4 Wireless Controller.Play online with your friends, save games online and more with PlayStation Plus membership (sold separately).All the greatest. "
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <CoffeCard
          title={"Headphone"}
          subtitle={"$40"}
          imgSrc="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SX679_.jpg"
          description={
            "Support PlayStation 4, New Xbox One, PC, Nintendo 3DS, Laptop, PSP, Tablet, iPad, Computer, Mobile Phone. Please note you need an extra Microsoft Adapter (Not Included) when connect with an old version Xbox One controller."
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <CoffeCard
          title={"Lenovo Flex 5"}
          subtitle={"$600"}
          description={
            "Thin, light, and stylish – This 2-in-1 laptop weighs just 3.64 pounds and is only 0.82 thick. It's soft and comfortable to the touch, with a durable paint that creates a better user experience. "
          }
          imgSrc="https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SX679_.jpg"
        />
      </Grid>
    </Grid>
  );
};

export default Content;
