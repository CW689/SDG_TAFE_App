import React from "react";
import {TouchableOpacity,Text,View,Image,TextInput}from 'react-native'
import Checkbox from 'expo-checkbox';


const Login = ({navigation}) => {
    const [checked, setChecked] = React.useState(false);
    return(
        <View>
            <Image source={require('../img/background2.png')}
                style={{width:"100%",height:"100%"}}
            />
            <Text
                style={{
                    fontSize:60,
                    fontWeight:"900",
                    color:'white',
                    alignSelf:'center',
                    position:'absolute',
                    top: 200,
                }}
            >
                Welcome</Text>
            <Text
                style={{
                fontSize:20,
                fontWeight:"600",
                color:'white',
                alignSelf:'center',
                position:'absolute',
                top: 270,
                }}
            >
             Lets sign you in</Text>

             <View style={{
                backgroundColor:"white",
                alignSelf:'center',
                borderRadius:15,
                position:'absolute',
                top: 400,
             }}>
                 <TextInput
                    style={{
                        height: 40,
                        width:300,
                        padding:10,
                        color:'#00716F',
                    }}
                    placeholder="email/username"
                />
             </View>
            
             <View style={{
                backgroundColor:"white",
                alignSelf:'center',
                borderRadius:15,
                position:'absolute',
                top: 460,
             }}>
                 <TextInput
                    style={{
                        height: 40,
                        width:300,
                        padding:10,
                        color:'#00716F',
                    }}
                    placeholder="Password"
                />
             </View>
            <View 
                style={{
                    top:510,
                    left:40,
                    position:'absolute',
                    flexDirection:'row'
                }}>
                <Checkbox
                    value={checked}
                    onValueChange={setChecked}
                    style={{
                        width:13,
                        height:13,
                        margin:3
                        
                    }}
                />
                <Text style={{color:'white',fontSize:13}}>Remember Me</Text>
                
            </View>
            <View style={{
                    top: 510,
                    right:40,
                    color:'white',
                    position:'absolute'
                }}>
                <Text 
                style={{color:'white',fontSize:13}}
                onPress={ () => navigation.navigate('Main') }
                >Forgot password?</Text>
            </View>
           
            
 

            <TouchableOpacity 
            onPress={ () => navigation.navigate('Main') }
            style={{
                paddingHorizontal:120,
                paddingVertical:10,
                alignSelf:'center',
                backgroundColor:"#00716F",
                borderRadius:15,
                position:'absolute',
                bottom: 150,
            }}>
                <Text 
                onPress={ () => navigation.navigate('Main') }
                style={{color:"white",fontSize:20}}>
                    Login
                </Text>
            </TouchableOpacity>

            <Text
                onPress={ () => navigation.navigate('Register') }
                style={{
                    fontSize:20,
                    fontWeight:"300",
                    color:'white',
                    alignSelf:'center',
                    position:'absolute',
                    bottom: 100,
                }}
                onPress={ () => navigation.navigate('Register') }
            >
                Don't have an account? Sign up</Text>

        </View>
    )
}



export default Login