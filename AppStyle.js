import { StyleSheet} from 'react-native'


 export const globalStyles =  StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#19224d",
          justifyContent: 'center',
          display : "flex",
          color :  '#19224d'
        },
      
        img : {
          top : 35,
          marginRight: 280,
          
          height : 30,
          width : 30 ,
          borderRadius : 300
        },
      
        text1 : {
          top : -30,
          marginTop : 60,
          marginLeft : 80,
          fontWeight :  'bold'
          
        },
      
        name : {
         top : 10,
         marginRight : 65,
          width : 150,
          color : "#fff"
        },

         coin :{
         display : "flex",
         alignItems : "center",
         //paddingRight : 24,
        // minWidth : 300,
         borderWidth : 1,
         borderRadius :15 ,
         backgroundColor : '#19224d',
         color : '#19224d',
         marginLeft : 15,
         marginRight : 15,
         marginBottom : 25,
        
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
      
        ıcon : {
        top : 5,
        color : "#ff8c00"
 
        },

        title : {
         color : "#ff8c00",
         marginLeft : 90,
         top : 40,
         fontSize : 30
        },

        ıcon2 : {
          color : "#ff8c00",
          marginLeft : 310,
          bottom : 30
        },
        symbol : {
          top : -9,
          marginLeft : 15,
          textTransform : 'uppercase',
          color : '#fff'
        },

        totalPrice : {
          bottom : 28,
          marginLeft : 145,
          color : '#fff'
        },

        coins : {
          bottom : 47,
          marginLeft : 275,
          color : '#fff'
        },

        search : {
          height: 40,
          margin: 12,
          borderWidth: 1,
          borderRadius : 15,
          backgroundColor : "#fff",
          color : "#000"
        },

        button : {
         position : "relative",
          paddingLeft : 80,
          paddingRight : 80,
          paddingBottom : 25,
          paddingTop : 25,
          marginTop : 300,
          borderWidth : 2,
          color : "#fff",
          backgroundColor :  "#fff"
        },

        wrapper: {},
        slide1: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#19224d'
        },
        slide2: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#19224d'
        },
        slide3: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#19224d'
        },
        text: {
          color: '#fff',
          fontSize: 30,
          fontWeight: 'bold'
        }
      }
      
)
      
