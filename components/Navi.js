import Axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default class Navi extends Component {
  state = {
    nine: []
  };

  async componentDidMount() {
    const res = await Axios.get("https://restcountries.eu/rest/v2/name/eesti");
    await this.setState({
      nine: res.data,
    });
  }

  Naveg = () => {
    const mmm = this.state.nine.map((u) => u.name);
    return (
      <ScrollView
        horizontal={true}
        style={{
          flexDirection: "row",
          borderColor: "black",
          backgroundColor: "#f8f8ff",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Bue", mmm);
          }}
          style={{
            flexDirection: "row",
            borderColor: "#e6e6fa",
            borderWidth: 2,
            borderRadius: 20,
            height: 60,
            width: 130,
            padding: 5,
            margin: 5,
            
          }}
        >
          <Image
            source={{
              uri:
                "https://www.dhresource.com/0x0/f2/albu/g6/M00/57/41/rBVaR1vm7b6AGwOGAARAE37rAvc025.jpg",
            }}
            style={{
              resizeMode: "contain",
              height: 50,
              width: 50,
              borderRadius: 20,
            }}
          />
          <Text style={{ top: 20, left: 20 }}>Buelve</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Bue");
          }}
          style={{
            flexDirection: "row",
            borderColor: "#f5f5dc",
            borderWidth: 2,
            borderRadius: 20,
            height: 60,
            width: 130,
            padding: 5,
            margin: 5,
          }}
        >
          <Image
            source={{
              uri:
                "https://www.dhresource.com/0x0/f2/albu/g6/M00/57/41/rBVaR1vm7b6AGwOGAARAE37rAvc025.jpg",
            }}
            style={{
              resizeMode: "contain",
              height: 50,
              width: 50,
              borderRadius: 20,
            }}
          />
          <Text style={{ top: 20, left: 20 }}>Buelve</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Bue");
          }}
          style={{
            flexDirection: "row",
            borderColor: "#f5f5dc",
            borderWidth: 2,
            borderRadius: 20,
            height: 60,
            width: 130,
            padding: 5,
            margin: 5,
          }}
        >
          <Image
            source={{
              uri:
                "https://www.dhresource.com/0x0/f2/albu/g6/M00/57/41/rBVaR1vm7b6AGwOGAARAE37rAvc025.jpg",
            }}
            style={{
              resizeMode: "contain",
              height: 50,
              width: 50,
              borderRadius: 20,
            }}
          />
          <Text style={{ top: 20, left: 20 }}>Buelve</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Bue");
          }}
          style={{
            flexDirection: "row",
            borderColor: "#f5f5dc",
            borderWidth: 2,
            borderRadius: 20,
            height: 60,
            width: 130,
            padding: 5,
            margin: 5,
          }}
        >
          <Image
            source={{
              uri:
                "https://www.dhresource.com/0x0/f2/albu/g6/M00/57/41/rBVaR1vm7b6AGwOGAARAE37rAvc025.jpg",
            }}
            style={{
              resizeMode: "contain",
              height: 50,
              width: 50,
              borderRadius: 20,
            }}
          />
          <Text style={{ top: 20, left: 20 }}>Buelve</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Bue");
          }}
          style={{
            flexDirection: "row",
            borderColor: "#f5f5dc",
            borderWidth: 2,
            borderRadius: 20,
            height: 60,
            width: 130,
            padding: 5,
            margin: 5,
          }}
        >
          <Image
            source={{
              uri:
                "https://www.dhresource.com/0x0/f2/albu/g6/M00/57/41/rBVaR1vm7b6AGwOGAARAE37rAvc025.jpg",
            }}
            style={{
              resizeMode: "contain",
              height: 50,
              width: 50,
              borderRadius: 20,
            }}
          />
          <Text style={{ top: 20, left: 20 }}>Buelve</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Bue");
          }}
          style={{
            flexDirection: "row",
            borderColor: "#f5f5dc",
            borderWidth: 2,
            borderRadius: 20,
            height: 60,
            width: 130,
            padding: 5,
            margin: 5,
          }}
        >
          <Image
            source={{
              uri:
                "https://www.dhresource.com/0x0/f2/albu/g6/M00/57/41/rBVaR1vm7b6AGwOGAARAE37rAvc025.jpg",
            }}
            style={{
              resizeMode: "contain",
              height: 50,
              width: 50,
              borderRadius: 20,
            }}
          />
          <Text style={{ top: 20, left: 20 }}>Buelve</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  render() { 
    return (
      <SafeAreaView style={{ backgroundColor: "#f8f8ff"}}>
        <StatusBar style="auto" />
       
        <this.Naveg />
      <View style={{padding:1,width:'auto',backgroundColor:'#dcdcdc'}}  />
        
        <FlatList
        data={this.state.nine}
        keyExtractor={item => item.name }
        renderItem={({item}) => (
          <TouchableOpacity >
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
            <Text> {item.name} </Text>
        
            <Button
            title='envia'
            onPress={()=> this.props.navigation.navigate('Bue',[item.name])}
            />
          </TouchableOpacity>
        ) }
        />
       
        
      </SafeAreaView>
    );
  }
}
