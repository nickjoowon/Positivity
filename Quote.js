import React from "react"
import {Text, View, Button, Linking } from "react-native" 
import {CalvHob} from "./CalvHob"

export function Quote(props) {
  // const title = props.title;
  // const words = props.words;
  // const image = props.image;
  let title="A Quote to Inspire"
  let quote="";

  function getAPI() {
    fetch("http://quotes.rest/qod")
    .then((j) => {
      return j.json()
    })
    .then((res) => {
      // this.setState({
      //   qotd: res["qotd"],
      // });
      quote = res["quote"]
    });
  }

  return (
    <>
    <View style={{ alignItems: "center" }}>

      {getAPI()}
      <Text style={{ paddingTop: 10, fontSize: 24, fontWeight: "bold" }}>
        {title}
      </Text>
      <Text style={{ paddingTop: 10, fontSize: 15, fontStyle: "italic" }}>{quote}</Text>
      <Button
      title={"Next Page"}
      onPress={() => {props.navigation.navigate("CalvHob");
      console.log(1)
      }}
      ></Button>
      <Button
      title={"Go Back"}
      onPress={() => {props.navigation.goBack()
      }}
      ></Button>
      <View
      style={{ height:1, backgroundColor: "#CCC", marginTop: 24, marginBottom: 24,}}
      ></View>
      
    </View>
    </>
  );
}