import React from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView,Switch} from 'react-native';
import Ant from 'react-native-vector-icons/AntDesign';
const myIcon = <Ant name="right" size={30} color="#CCCCFF" />;

class TaskOne  extends React.Component {
    static navigationOptions = {
        header: null,
        };
     constructor(props){
         super(props);
         this.state ={
             value:null,
             switchValue:true,
              options : [
                {
                    key: 'pay',
                    text: 'From the restaurant',
                },
                {
                    key: 'performance',
                    text: 'To my address',
                },
              
            ]
         }
        

     }
        
    render(){
        const radio = this.state.options.map((val,key)=>{
            return(
                <View key={key} style={styles.buttonContainer}>
                    <Text style={styles.Text} > {val.text} </Text>
                    <TouchableOpacity style={styles.circle}
                    onPress={() => this.setState({ value: key })} 
                    >
                   {this.state.value === key && (<View style={styles.checkedCircle} />) }
                    </TouchableOpacity>
                </View>
            );
        })
        return(
            <ScrollView style={{backgroundColor:"#fbfbfb"}}>
            <View>
                <View style={{padding:25,paddingBottom:0,backgroundColor:"#fbfbfb"}}>
                    <Text style={{color:"#8a8a8a",fontSize:20,paddingLeft:2}}>Delivery</Text>
                    {radio}
                </View>
                <View style={{padding:10,paddingTop:3,justifyContent:"space-between",backgroundColor:"#fbfbfb",height:530,}}>
                <View style={{backgroundColor:"white",padding:10,borderColor:"#e8e3e3",borderWidth:1,borderRadius:10}}>
                     <View style={styles.SectionStyle}>
        
                    <Text style={{color:'#dadada',fontSize:18}}>Delivery Address</Text>
                    <Text style={{color:"#c14256"}}> Choose your address</Text>
                    <Text style={styles.ImageStyle}>{myIcon}</Text>
                    </View> 
                   </View>

                  

                     <View style={{backgroundColor:"white",padding:10,borderColor:"#e8e3e3",borderWidth:1,borderRadius:10}}>
                     <View style={styles.SectionStyle}>
        
                     <Text style={{fontSize:18}}>Items</Text>
                    
                     <Text>                                                                 </Text>
                    <Text style={styles.ImageStyle}>{myIcon}</Text>
                    </View> 
                   </View>
                   
                   <View style={{backgroundColor:"white",padding:10,borderColor:"#e8e3e3",borderWidth:1,borderRadius:10}}>
                     <View style={styles.SectionStyle}>
        
                     <Text style={{fontSize:18}}>Payment</Text>
                    
                     <Text>                                                     </Text>
                    <Text  style={{color:'#dadada',fontSize:18}}>Cash on delivery</Text>
                    </View> 
                   </View>

                    <View style={{backgroundColor:"white",padding:10,borderColor:"#e8e3e3",borderWidth:1,borderRadius:10}}>
                     <View style={styles.SectionStyle}>
                      <Text  style={{fontSize:18}}>Promo code</Text>
                      <Text>        </Text>
                     <TextInput    placeholderTextColor='grey' placeholder = "your code here" 
        style = { styles.textInput } />
                    
                    </View> 
                   </View>

                    <View style={{backgroundColor:"white",padding:10,borderColor:"#e8e3e3",borderWidth:1,borderRadius:10}}>
                     <View style={styles.SectionStyle}>
                     <Text  style={{fontSize:18}}>Use points</Text>
                     <Text>           </Text>
                     <Text style={{color:"#dadada"}}>yes</Text>
                     <Text>             </Text>
                    <Switch style={{color:"red"}}value={this.state.switchValue} onValueChange={()=> this.setState({switchValue:true})}/>
                    </View> 
                   </View>

                </View>
                <View style={{justifyContent:"space-between",backgroundColor:"#fbfbfb",padding:10,height:160}}>
                    <View>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:18,color:"grey"}}>Sub-Total</Text>
                        <Text style={{color:"#a4a4a4"}}>72 egp</Text>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}} >
                        <Text style={{fontSize:18,color:"grey"}}>Tax</Text>
                        <Text style={{color:"#a4a4a4"}}>7.20 egp</Text>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:18,color:"grey"}}>Delivery Fee</Text>
                        <Text style={{color:"#a4a4a4"}}>15 egp</Text>
                        </View>
                       <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                       <Text style={{fontSize:18,color:"grey"}}>Total Discount due to point</Text>
                       <Text style={{color:"#a4a4a4"}}>-12 egp</Text>
                       </View>
                    
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>

                    <Text style={{fontSize:18,color:"#c14256"}}>Total</Text>
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{color:"#c14256",fontSize:18}}>82 </Text>
                    <Text style={{color:"#a4a4a4"}}>Egp</Text>
                    </View>
                    
                    </View>
                   
                  
                   
                  
                    
                </View>

                <View style={{alignItems:"center"}}>
                <TouchableOpacity style={{backgroundColor:"#fd3e43",alignItems:"center",width:300,borderRadius:10}}>
                        <Text style={{color:"white",fontSize:18,padding:15}} >Place your order</Text>
                    </TouchableOpacity>
                



                    </View>                
            </View>
            </ScrollView>
        )
     
    }
  
}
export default TaskOne;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#c14256',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#fd3e43',
    },
    Text:{
        textAlign:"center",
        color:"#ababab",
        fontSize:18
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        padding:10
         },
      
      ImageStyle: {
       
        height: 35,
        width: 35,
       alignItems: 'center',
        
      },
      textInput:
    {
    
       paddingLeft:60,
       paddingRight:60,
       paddingBottom:5,
       paddingTop:5,
       borderColor:"grey",
       borderWidth:1,
       borderRadius:10
        },

})