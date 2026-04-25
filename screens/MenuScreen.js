import React from 'react';
import { StyleSheet, Text, View , Button , TouchableOpacity} from 'react-native';

const MenuScreen = (props) => {

    return(
        <View>
            
            <Text style={style.text} >welcome to menu screen</Text>
            <Button
                title="Go to list screen"
                onPress={() => {props.navigation.navigate("List")}}
            ></Button>

            <TouchableOpacity
            onPress={() => props.navigation.navigate("Exercise")}

            >
                <Text style={style.touch}>Go to student</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({

    text:{
        textAlign:'center',
        fontSize: 20,
        marginVertical: 20
    },

    touch:{
        textAlign:'center',
        margin:20,
        padding:20,
        textSize:20,
        fontWeight: "bold",
        backgroundColor: "#ff9f9f",
        

    }

});


export default MenuScreen;