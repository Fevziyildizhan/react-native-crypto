import { StyleSheet} from 'react-native'

 export const globalStyles =  StyleSheet.create({
        container: {
          
          flex: 1,
          backgroundColor: '#fff',
          
          justifyContent: 'center',
        },
      
        img : {
          top : 75,
          marginRight: 50,
          
          height : 60,
          width : 60 ,
          borderRadius : 300
        },
       
       
        text : {
          top : -30,
          marginTop : 60,
          marginLeft : 80,
          fontWeight :  'bold'
        },
      
        imgUrl : {
          marginTop : 40,
          height : 350,
          width : 350,
          marginBottom : 40
        },
       
        imgHori : {
      
          flex : 15,
          height : 20,
          width : 20 ,
          borderRadius : 300,
          marginRight: 10
        },
      
      
        symbol : {
          marginLeft : 80
       
        },
});
      
