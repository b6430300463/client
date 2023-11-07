import {StyleSheet} from 'react-native'
const regStyle = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#023047'
  },
  inputContainer : {
    flex:4,
    backgroundColor:'#219ebc',
    paddingVertical:20,
    paddingHorizontal:20,
    marginHorizontal:20,
  },
  inputBox:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#bde0fe',
    paddingLeft:20,
    borderWidth:1,
    borderColor:'#023047',
    borderRadius:40,
    paddingVertical:10,
    marginVertical:5
  },
  inputBoxLogin:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#bde0fe',
    paddingLeft:20,
    borderWidth:1,
    borderColor:'#023047',
    borderRadius:40,
    paddingVertical:15,
    marginVertical:10
  },
  signUpBTN:{
    borderWidth:2,
    borderColor:'#023047',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    paddingVertical:10,
    backgroundColor:'#0077b6',
    marginVertical:10,
    width:'80%'
  }
})

export default regStyle